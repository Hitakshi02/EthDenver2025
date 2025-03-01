from fastapi import FastAPI
import tweepy
import requests
from typing import List
import subprocess
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import logging
from web3 import Web3


# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Absolute path to `pricefeed.js`
SCRIPT_PATH = os.path.abspath("scripts/pricefeed.js")

# Twitter API keys (Replace with actual keys)
TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAABCKzgEAAAAAQxdL6wTLyjBxJta2CfMelqWvX%2Bk%3DCGr0eXWd36V6b9Xq7F58o74ejBp1shHt8Hh57MPvgD3Wg1ohyR"

# # Stock price API (Replace with actual stock API)
# STOCK_API_URL = "https://api.example.com/stock-price"

# Twitter authentication
client = tweepy.Client(bearer_token=TWITTER_BEARER_TOKEN)

# Dummy storage for registered users and preferences
user_data = {}

class UserPreferences(BaseModel):
    user_address: str
    keywords: List[str]
    influencers: List[str]

@app.post("/register_user/")
def register_user(data: UserPreferences):
    """Register a user with their preferred keywords and influencers."""
    user_data[data.user_address] = {"keywords": data.keywords, "influencers": data.influencers}
    return {"message": "User registered successfully!", "data": user_data[data.user_address]}

@app.get("/check_tweets/")
def check_tweets():
    """Check recent tweets from influencers and analyze stock impact."""
    notifications = []

    for user, data in user_data.items():
        influencers = data["influencers"]
        keywords = data["keywords"]

        for influencer in influencers:
            tweets = client.search_recent_tweets(query=f"from:{influencer}", max_results=5)
            
            if tweets.data:
                for tweet in tweets.data:
                    if any(word.lower() in tweet.text.lower() for word in keywords):
                        stock_price = get_stock_price()
                        decision = analyze_sentiment(tweet.text, stock_price)
                        send_notification(user, decision)
                        notifications.append({"user": user, "tweet": tweet.text, "decision": decision})

    return {"message": "Checked tweets and sent notifications", "notifications": notifications}

def get_crypto_price():
    # Run the fetchPrice.js script and capture the output
    result = subprocess.run(['node', 'scripts/pricefeed.js'], capture_output=True, text=True)


    # Debugging: print stdout and stderr for clarity
    logger.info("Subprocess stdout: %s", result.stdout)  # Expected price output
    logger.error("Subprocess stderr: %s", result.stderr)  # Any errors
    
    # Get the output from stdout (the price) and clean it up
    price = result.stdout.strip()  # Strip any unwanted whitespace around the price
    if not price:
        raise ValueError("No price data received from the price feed script.")
    return price
    # return price

# Set up Web3 connection (replace with your provider or local node URL)
infura_url = os.getenv("INFURA_URL")
web3 = Web3(Web3.HTTPProvider(infura_url))

# Smart contract ABI and address (replace with your actual deployed contract address)
contract_address = os.getenv("CONTRACT_ADDRESS")
with open('CryptoAlertABI.json') as f:  # Load the ABI from a JSON file
    abi = json.load(f)

contract = web3.eth.contract(address=contract_address, abi=abi)

class UserPreferences(BaseModel):
    keywords: list[str]
    influencers: list[str]

@app.post("/register_preferences/")
async def register_preferences(user: UserPreferences):
    # Get the wallet address (you can get this from the frontend or a Metamask wallet)
    # For demo, we assume the wallet address is provided (use the actual wallet address from frontend)
    wallet_address = "0xYourWalletAddress"  

    # Interact with smart contract to set user preferences
    private_key = os.getenv("PRIVATE_KEY")  # Ensure the private key is securely stored in .env
    account = web3.eth.account.privateKeyToAccount(private_key)
    nonce = web3.eth.getTransactionCount(account.address)

    # Build the transaction to call the setPreferences function
    txn = contract.functions.setPreferences(
        user.keywords, user.influencers
    ).buildTransaction({
        'chainId': 3,  # Ropsten Testnet (use your network ID)
        'gas': 2000000,
        'gasPrice': web3.toWei('20', 'gwei'),
        'nonce': nonce,
    })

    # Sign and send the transaction
    signed_txn = web3.eth.account.signTransaction(txn, private_key)
    txn_hash = web3.eth.sendRawTransaction(signed_txn.rawTransaction)

    return {"message": "Preferences updated in smart contract!", "txn_hash": txn_hash.hex()}

@app.get("/get_preferences/{user_address}")
async def get_preferences(user_address: str):
    # Retrieve user preferences from the smart contract
    keywords, influencers = contract.functions.getPreferences(user_address).call()
    return {"keywords": keywords, "influencers": influencers}


@app.get("/get_stock_price/") 
def get_stock_price():
    # Get price from the Chainlink Price Feed (via JS)
     price = get_crypto_price()
     return{"price" : price}
    

def analyze_sentiment(tweet: str, stock_price: float):
    """Basic sentiment analysis to determine buy/sell/hold decision."""
    if "bullish" in tweet or stock_price > 100:
        return "BUY"
    elif "bearish" in tweet or stock_price < 50:
        return "SELL"
    else:
        return "HOLD"

def send_notification(user: str, decision: str):
    """Send notification to the user (to be integrated with XMTP/Push Protocol)."""
    print(f"🔔 Sent notification to {user}: {decision}")

@app.post("/simulate_tweet/")
async def simulate_tweet(tweet: dict):
    # Get the list of keywords from the smart contract
    keywords, influencers = contract.functions.getPreferences(tweet['user']).call()

    # Check if the tweet contains any of the user's keywords
    for keyword in keywords:
        if keyword.lower() in tweet['text'].lower():
            # Send alert (can be a print or email/notification in real use)
            return {"message": f"Alert! Tweet matched keyword: {keyword}"}
    
    return {"message": "No match found for keywords"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

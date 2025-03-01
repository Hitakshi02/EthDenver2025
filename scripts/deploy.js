async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const CryptoAlert = await ethers.getContractFactory("CryptoAlert");
    const contract = await CryptoAlert.deploy();
    console.log("CryptoAlert contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
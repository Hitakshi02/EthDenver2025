// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CryptoAlert {
    struct UserPreferences {
        address user;
        string[] keywords;
        string[] influencers;
    }

    mapping(address => UserPreferences) public preferences;

    event PreferencesUpdated(address indexed user, string[] keywords, string[] influencers);

    function setPreferences(string[] memory _keywords, string[] memory _influencers) public {
        preferences[msg.sender] = UserPreferences(msg.sender, _keywords, _influencers);
        emit PreferencesUpdated(msg.sender, _keywords, _influencers);
    }

    function getPreferences(address _user) public view returns (string[] memory, string[] memory) {
        return (preferences[_user].keywords, preferences[_user].influencers);
    }
}

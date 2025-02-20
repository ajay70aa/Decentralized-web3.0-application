// https://eth-sepolia.g.alchemy.com/v2/JBymgS7ruH9nsCnivHBKNHF51JJ5PpIk

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/JBymgS7ruH9nsCnivHBKNHF51JJ5PpIk',
      accounts: ['ee78543a06a4ead9ce0c1a86f8ca125f230723241813ba01853b01f23f3bae3f']
    }
  }
};

// https://eth-goerli.alchemyapi.io/v2/gOgu0CVyuS9dnvE3EYPuCvkxExyeG-LS

require("@nomiclabs/hardhat-waffle");

module.export = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/gOgu0CVyuS9dnvE3EYPuCvkxExyeG-LS",
      accounts: [
        "195ceebc6fed12bc8f83259264821b2be59ab20e55db44e13bf4fd76b9ae8b0c",
      ],
    },
  },
};

import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  networks: {
    sepolia: {
      url: `${process.env.ALCHEMY_BASE_URL}${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY!],
    },
  },
};

export default config;

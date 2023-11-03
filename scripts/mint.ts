import "dotenv/config";
import { ethers } from "hardhat";

import { abi } from "../artifacts/contracts/CheeseTouch.sol/CheeseTouch.json";

const provider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_KEY);
const signer = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY!, provider);

const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS!,
  abi,
  signer
);

const mintNFT = async () => {
  const txn = await contract.mintNFT(signer.address, process.env.TOKEN_URI);
  await txn.wait();
  console.log(
    `NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${txn.hash}`
  );
};

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

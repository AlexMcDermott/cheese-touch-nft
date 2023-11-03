import { ethers } from "hardhat";

const main = async () => {
  const tokenName = "Cheese Touch";
  const tokenSymbol = "CHT";

  const contract = await ethers.deployContract("CheeseTouch", [
    tokenName,
    tokenSymbol,
  ]);

  await contract.waitForDeployment();
  console.log(contract.target);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

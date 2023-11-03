import { expect } from "chai";
import { ethers } from "hardhat";
import { CheeseTouch } from "../typechain-types";
import "dotenv/config";

describe("CheeseTouch", () => {
  let contract: CheeseTouch;

  beforeEach(async () => {
    contract = await ethers.deployContract("CheeseTouch", [
      "Cheese Touch",
      "CHT",
    ]);

    await contract.waitForDeployment();
  });

  it("NFT Mint", async () => {
    const [owner] = await ethers.getSigners();
    const res = await contract.mint(owner, process.env.TOKEN_URI!);
    await res.wait();

    const balance = await contract.balanceOf(owner);
    expect(balance).to.equal(1);
  });
});

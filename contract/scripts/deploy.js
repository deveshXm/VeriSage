const { ethers } = require("hardhat");

async function main() {
  const verisage = await ethers.deployContract("VeriSage");
  
  await verisage.deployed();

  console.log(`verisage Contract was deployed to ${verisage.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

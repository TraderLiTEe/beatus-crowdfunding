const { ethers } = require("hardhat");

async function main() {
const contract = await ethers.getContractAt("CrowdFactory",
//add the contract address that you just deployed in the last step
"0x840EABA3c096B0d313C1E4A5481F658772889442") //line 6

await contract.createProject(
"first title", 
ethers.utils.parseUnits("0.1", 18), 
"description", 
//insert your wallet's public key
"0x6d646c0169c40Da86fE215d5eB43f75102fD2F65") //line 13
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

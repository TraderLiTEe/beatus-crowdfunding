const { run, ethers } = require("hardhat");

async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0x28791Ed65198Ee506bfF43DBf16D983795724D23"; //line5
  const args = [
    "first title", ethers.utils.parseUnits("0.1", 18), "description",
//Insert you wallet's public address here
"0x6d646c0169c40Da86fE215d5eB43f75102fD2F65",  //line 9

  ];

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

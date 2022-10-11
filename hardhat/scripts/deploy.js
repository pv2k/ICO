const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const crytpoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const crytpoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployedCryptoDevsTokenContract = await crytpoDevsTokenContract.deploy(
    crytpoDevsNFTContract
  );

  console.log(
    "Crypto Devs Token Contract Deployed Address: ",
    deployedCryptoDevsTokenContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

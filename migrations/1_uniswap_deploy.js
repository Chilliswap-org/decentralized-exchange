const uniFactory = artifacts.require("ChilliSwapFactory");
const router = artifacts.require("ChilliSwapRouter02");
// const weth = artifacts.require("WETH9");

const weth = "0xd0a1e359811322d97991e03f863a0c30c2cf029c"
const admin = "0x9ed0950C3326ec34b2080Eb9D0726E94F46Ce9ea"

module.exports = async (deployer, network, accounts) => {
  const factory = await deployer.deploy(uniFactory, admin);
  await deployer.deploy(router, uniFactory.address, weth);
  // const factoryContract = await uniFactory.deployed()
  // const getInitCode = await factoryContract.INIT_CODE_PAIR_HASH()
  // console.log('initCode', getInitCode)
};

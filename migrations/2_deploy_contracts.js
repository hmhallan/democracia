var ConvertLib = artifacts.require("./ConvertLib.sol");
var Democracia = artifacts.require("./Democracia.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(Democracia);
};

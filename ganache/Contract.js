import web3 from "./Web3";

const authContract = require("./build/AuthContract.json");
const mainContract = require("./build/MainContract.json");
const postContract = require("./build/PostNewsContract.json");

const deployedAuth = "0xE502a92c6a05c0E47ab2Fd689A1F78D5610a22F2";
const deployedMain = "0x6F447B6153809f57E83ce5C40CdFECC12D377e32";
const deployedPost = "0x62ec35BA436351e025aF53e12DB81198155F07Ed";

const authWeb3Contract = new web3.eth.Contract(authContract.abi, deployedAuth);
const mainWeb3Contract = new web3.eth.Contract(mainContract.abi, deployedMain);
const postWeb3Contract = new web3.eth.Contract(postContract.abi, deployedPost);

export { mainWeb3Contract, postWeb3Contract, authWeb3Contract, deployedMain };
 
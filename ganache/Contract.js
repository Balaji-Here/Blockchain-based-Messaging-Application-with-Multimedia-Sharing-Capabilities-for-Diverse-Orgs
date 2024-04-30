import web3 from "./Web3";

const authContract = require("./build/AuthContract.json");
const mainContract = require("./build/MainContract.json");
const postContract = require("./build/PostNewsContract.json");

const deployedAuth = "0x2F9f28dB8933844319B788b01858f97d72dE75e9";
const deployedMain = "0x8A434584F9E46d1B4063125eBf74bEbfF1547060";
const deployedPost = "0x30937D0E4A56787302789C5BC7f6A2Ce9632459E";

const authWeb3Contract = new web3.eth.Contract(authContract.abi, deployedAuth);
const mainWeb3Contract = new web3.eth.Contract(mainContract.abi, deployedMain);
const postWeb3Contract = new web3.eth.Contract(postContract.abi, deployedPost);

export { mainWeb3Contract, postWeb3Contract, authWeb3Contract, deployedMain };
 
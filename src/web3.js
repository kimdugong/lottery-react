import Web3 from 'web3';

//metamask의 privider에 hijecking
const web3 = new Web3(window.web3.currentProvider);

export default web3;

const config = require('./config.json');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.infuraNode));

function _getTimestampForId(id, regio) {
    let abi = config.contractABI;
    let contractAddress = config.contractAddress;
    let contractInstance = new web3.eth.Contract(abi, contractAddress);

    return new Promise((resolve, reject) => {
        contractInstance.methods.tickets(id, regio).call((error, value) => {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }
        });
    });
}

module.exports = {
    getTimestampForId: (id, regio) => {
        return _getTimestampForId(id, regio);
    }
};
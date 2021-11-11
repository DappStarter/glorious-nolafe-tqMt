require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember social hockey arctic off gasp'; 
let testAccounts = [
"0x2c12f2a221d3d4daba34679af8eacbd34edd33a32dc458e03056e7ade30bddec",
"0x2014146685c4c2669cc265561d1e0bdd7067fcabf3c83538f21ee90c26bd59dd",
"0xf07278af16b7857886110e9871d77914b8b3749b23f2a156f2f1a9551ca53edf",
"0x8b3045a986c73c105bd379ab9468ea6b1fcf9ff6f14dd027be4f64c6bd554d98",
"0xfc9178f0ec40b6e794521b0a08bed47e7c5eaf8a918d363a0eda9ab1099f7600",
"0x7cc42d0b277392e6fb2d8bac90a0b32ae4cf1920e4232e8fc1b90def818f7a7e",
"0x5d99da3e57f5cd2707ae70a87f12424d03bfb0ccfcd284a4205afb76a1484a0e",
"0xbf53742bb8a6b4fef25d5b6ab058e8fd3508c868e201741b3bc133d280b1c80b",
"0x42f9f2264885b4e367cce01a8d77ba3b943e25831ad3c34dceebce0046c0f696",
"0x59b7a74d48653e5c151386fc147b0e9463dfebcf72d2456f8e613d08757618bc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


# Lottery-App
A simple ethereum based dApp in which players enter the lottery Contract by putting some amount of ethers into the Contract and further the manager of the Contract picks a random winner from all the participating players to whom all the ethers into the Contract are transfered. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To install dependencies :

### `npm install`

### To run the application :

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### To test the contract functionalities locally using ganache local ethereum network:

### `npm run test`

### Note :
The contract is deployed on Rinkeby test network at address '0x53c6CfAcfB30272ADBD7DC3292D0F53aB03f70AC' with the help of infura node api. 

If you want to deploy the contract on your own. Checkout `deploy.js` file in the `lottery` directory, do the neccessary changes as suggested over there. Thereafter run the `deploy.js` file and replace the values of `ABI` and `account-address` in `lottery.js` file in `src` directory with values of the same printed on console.


# Cheese Touch NFT

Inspired by the children's book Diary of a Wimpy Kid, the point of this NFT is not to have it. The idea is that only a single instance of the NFT will exist at any given time and will transferred between friends and co-workers like the game hot potato. The smart contract will track the total time each participant has held the token and I plan to make a website to interact with it to display this information as a leaderboard.

## Attack Plan

- [x] Setup a repo with Hardhat
- [x] Write a basic NFT smart contract
- [x] Deploy to the Sepolia testnet
- [ ] Setup unit testing to develop the contract locally
- [ ] Make the contract upgradable
- [ ] Implement token hold time tracking
- [ ] Make a contract call from a web app
- [ ] Create a leaderboard to display tracked time

### Nice to Haves

- [ ] Make the contract upgradeable
- [ ] Use the [NFT Storage API](https://nft.storage/docs/client/js/) to automatically upload NFT assets and acquire IPFS addresses at build time

## How to Run

```shell

```

## Issues

This is my first time creating an NFT smart contract and is my first proper Web3 project in general. As such I'm not very familiar with the tooling and am still trying to figure it all out.

- There is an issue with typing in the deployment script where the deployed contract is not typed to contain a target property even though one is present if ignored by TypeScript. I think this issue could relate to Hardhat and its toolbox.

// SPDX-License-Identifier: ISC
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CheeseTouch is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor(
        string memory tokenName,
        string memory tokenSymbol
    ) ERC721(tokenName, tokenSymbol) Ownable(msg.sender) {}

    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = ++_nextTokenId;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}

const express = require('express');
const {
    httpGetAllAuctionFalse,
    httpGetAllAuctionTrue,
    httpGetAuctionById,
    httpGetAuctionByUserId,
    httpAddNewAuction,
    httpApproveAuctionById,
    httpDeleteAuctionById,
} = require('./auctions.controller');

const auctionsRouter = express.Router();


auctionsRouter.get('/', httpGetAllAuctionTrue);
auctionsRouter.get('/auctionFalse', httpGetAllAuctionFalse);
auctionsRouter.get('/:id', httpGetAuctionById);
auctionsRouter.get('/yourAuction/:id', httpGetAuctionByUserId);
auctionsRouter.post('/', httpAddNewAuction);
auctionsRouter.patch('/:id', httpApproveAuctionById);
auctionsRouter.delete('/:id', httpDeleteAuctionById);

module.exports = auctionsRouter;
require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

router.get('/', async (req, res) => {
    const addresses = await loadAddressesCollection();
    res.send(await addresses.find({"name": 'ACKERMANN Fern.'}).toArray());
});

async function loadAddressesCollection() {
    const client = await mongodb.MongoClient.connect(`mongodb+srv://laurent:${process.env.MONGODB_PWD}@cluster0.nagvipd.mongodb.net/?retryWrites=true&w=majority`)
    return client.db('addresses').collection('addresses');
}

module.exports = router;
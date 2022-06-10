require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

router.get('/', async (req, res) => {
    const addresses = await loadAddressesCollection();
    res.send(await addresses.find({}).toArray());
});

router.get('/:family_name', async (req, res) => {
    const addresses = await loadAddressesCollection();
res.send(await addresses.find({ "family_name": { $regex: ".*" + req.params.family_name + ".*", $options: "i" } }).toArray());
});

async function loadAddressesCollection() {
    const client = await mongodb.MongoClient.connect(`mongodb+srv://laurent:${process.env.MONGODB_PWD}@cluster0.nagvipd.mongodb.net/?retryWrites=true&w=majority`)
    return client.db('addresses').collection('addresses');
}

module.exports = router;
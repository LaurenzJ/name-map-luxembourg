const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the Express app
const app = express();

app.use(bodyParser.json());
app.use(cors());

const addresses = require('./routes/api/addresses');

app.use('/api/addresses', addresses);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



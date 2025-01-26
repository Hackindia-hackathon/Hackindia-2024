const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser

let healthRecords = []; // In-memory storage for demo purposes

app.post('/api/health', (req, res) => {
    const { data, account } = req.body;
    healthRecords.push({ account, ...data });
    res.status(200).send('Data saved');
});

app.get('/api/health/:account', (req, res) => {
    const account = req.params.account;
    const records = healthRecords.filter(record => record.account === account);
    res.json(records);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Use backticks for template literal
});

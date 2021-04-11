const express = require('express');
const path = require('path');
const app = express();

app.get('/api', (req, res) => {
    res.send('API Home Page');
});
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

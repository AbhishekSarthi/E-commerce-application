const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.listen(5000, console.log('Server running on port 5000'));
}

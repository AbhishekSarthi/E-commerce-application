const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const postRoute = require('./routes/post');
const authRoutes = require('./auth/auth');
app.use(express.json());

app.use('/api/post', postRoute);

app.get('/api', (req, res) => {
    res.send('API Home Page');
});

app.use('/auth', authRoutes);
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build'));
// });

mongoose.connect(
    'mongodb+srv://t-hub:vsqqlsaT7d1yTFXg@cluster0.hqba7.mongodb.net/t-hub?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB')
);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

'use strict';

const express = require('express');
const app = express();
const path  = require('path');

const PORT = process.env.PORT || 8000;

app.listen(PORT);
if (process.env.NODE_ENV === 'production') app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
'use strict';

const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
if (process.env.NODE_ENV === 'production') app.use(express.static('public'));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
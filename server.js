const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// static fayllarni 'public' papkadan o'qiydi
app.use(express.static(path.join(__dirname, 'public')));

// rootga murojaat bo'lsa — index.html ni jo'natadi
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
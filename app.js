const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.header('accept-language');
    const software = req.header('user-agent');
    res.json({ ipaddress,
         language,
        software })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});
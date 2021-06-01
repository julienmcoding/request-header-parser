const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const response = {};

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.header["accept-language"];
    const software = req.header('user-agent');
    console.log(JSON.stringify(req.headers));
    console.log(ip);
    console.log(language);
    console.log(software);
    res.json({ ipaddress: ip, language: language, software: software })
    /*if(input.includes('-')) {
        response['unix'] = new Date(input).getTime();
        response['utc'] = new Date(input).toUTCString();
    } else {
        response['unix'] = new Date(parseInt(input)).getTime();
        response['unix'] = new Date(parseInt(input)).toUTCString();
    };
    res.json(response);
    if (!response['unix'] || !response['unix']) {
        res.json({ error : "Invalid Date" });
    }*/
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});
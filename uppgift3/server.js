const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const port = 8000;

app.use(express.static('public'));

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "layout"}));
app.set('view engine', 'hbs');

app.get('/my-movies', (req, res) => {
    const fs = require('fs');
    fs.readFile('movies.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Server Error');
            return;
        }

        const movies = data.split('\n').filter(Boolean);
        res.render('movies', { movies });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import express from 'express';
import { engine } from 'express-handlebars';

import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 3000;
const app = express();

//replicate the funcionality
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources//views'));
console.log(path.join(__dirname, 'resources//views'))

app.get("/", (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`);
})


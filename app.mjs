import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routeMessages from './routes/messages.mjs';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`found server listen port: ${port}`)
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routeMessages);
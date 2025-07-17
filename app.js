import express from 'express';
import router from './routes/router.js';

const app = express();

app.use(express.json());

app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello, Supabase and MongoDB!');
});

export default app;
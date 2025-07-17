import 'dotenv/config';
import app from './app.js';
import { connectToMongoDB } from './lib/mongoClient.js'

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectToMongoDB();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
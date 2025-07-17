import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const mongoClient = new MongoClient(uri);

export async function connectToMongoDB() {
    try {
        await mongoClient.connect();
        console.log('Connected to MongoDB');
    } catch(error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}

export default mongoClient;
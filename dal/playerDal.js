import { mongoClient } from '../lib/mongoClient.js';
import { ObjectId } from 'mongodb';

export async function createPlayer(playerData) {
    const db = mongoClient.db("myDB");
    const collection = db.collection('players');
    const result = await collection.insertOne(playerData);
    return result.insertedId;
}

export async function deletePlayer(playerId) {
    const db = mongoClient.db("myDB");
    const collection = db.collection('players');
    const result = await collection.deleteOne({ _id: new ObjectId(String(playerId)) });
    return result.deletedCount === 1;
}
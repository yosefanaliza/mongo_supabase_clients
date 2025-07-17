import { mongoClient } from '../lib/mongo.js';
import { ObjectId } from 'mongodb';

export async function createPlayer(playerData) {
    const db = mongoClient.db();
    const collection = db.collection('players');
    const result = await collection.insertOne(playerData);
    return result.insertedId;
}

export async function deletePlayer(playerId) {
    const db = mongoClient.db();
    const collection = db.collection('players');
    const result = await collection.deleteOne({ _id: new ObjectId(playerId) });
    return result.deletedCount === 1;
}
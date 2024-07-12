// delete-collection.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/';
const collectionName = 'tests';

async function deleteCollection() {
  const client = await MongoClient.connect(url);
  const db = client.db('test');

  try {
    // Xóa collection
    await db.dropCollection(collectionName);
    console.log(`Collection '${collectionName}' has been deleted.`);
  } catch (err) {
    console.error('Error deleting collection:', err);
  } finally {
    await client.close();
  }
}

deleteCollection();

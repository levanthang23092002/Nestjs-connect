// create-collection.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/';
const collectionName = 'tests';

async function createCollection() {
  const client = await MongoClient.connect(url);
  const db = client.db('test');

  try {
    // Tạo collection mới
    await db.createCollection(collectionName, {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'email'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            email: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
          },
        },
      },
    });
    console.log(`Collection '${collectionName}' has been created.`);
  } catch (err) {
    console.error('Error creating collection:', err);
  } finally {
    await client.close();
  }
}

createCollection();

"use strict";

// create-collection.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://127.0.0.1:27017/';
var collectionName = 'tests';

function createCollection() {
  var client, db;
  return regeneratorRuntime.async(function createCollection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(MongoClient.connect(url));

        case 2:
          client = _context.sent;
          db = client.db('test');
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(db.createCollection(collectionName, {
            validator: {
              $jsonSchema: {
                bsonType: 'object',
                required: ['name', 'email'],
                properties: {
                  name: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                  },
                  email: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                  }
                }
              }
            }
          }));

        case 7:
          console.log("Collection '".concat(collectionName, "' has been created."));
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](4);
          console.error('Error creating collection:', _context.t0);

        case 13:
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(client.close());

        case 16:
          return _context.finish(13);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 10, 13, 17]]);
}

createCollection();
"use strict";

// delete-collection.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://127.0.0.1:27017/';
var collectionName = 'tests';

function deleteCollection() {
  var client, db;
  return regeneratorRuntime.async(function deleteCollection$(_context) {
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
          return regeneratorRuntime.awrap(db.dropCollection(collectionName));

        case 7:
          console.log("Collection '".concat(collectionName, "' has been deleted."));
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](4);
          console.error('Error deleting collection:', _context.t0);

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

deleteCollection();
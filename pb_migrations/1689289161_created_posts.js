migrate((db) => {
  const collection = new Collection({
    "id": "yy8zjjcbqupuzbz",
    "created": "2023-07-13 22:59:21.814Z",
    "updated": "2023-07-13 22:59:21.814Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2bevori8",
        "name": "Name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz");

  return dao.deleteCollection(collection);
})

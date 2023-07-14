migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "yy8zjjcbqupuzbz",
    "created": "2023-07-13 22:59:21.814Z",
    "updated": "2023-07-13 23:58:33.179Z",
    "name": "notes",
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
      },
      {
        "system": false,
        "id": "lvobhzse",
        "name": "Title",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

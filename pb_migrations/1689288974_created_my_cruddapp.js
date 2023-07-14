migrate((db) => {
  const collection = new Collection({
    "id": "5nscxefk8o8ods5",
    "created": "2023-07-13 22:56:14.427Z",
    "updated": "2023-07-13 22:56:14.427Z",
    "name": "my_cruddapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "djpf2lzf",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 12,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gyi57mne",
        "name": "field1",
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
  const collection = dao.findCollectionByNameOrId("5nscxefk8o8ods5");

  return dao.deleteCollection(collection);
})

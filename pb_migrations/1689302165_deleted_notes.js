migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hda8cq2i8ozgsxt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hda8cq2i8ozgsxt",
    "created": "2023-07-14 00:01:32.948Z",
    "updated": "2023-07-14 02:01:07.012Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ljm3ztct",
        "name": "title",
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
        "id": "vfpryojr",
        "name": "content",
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

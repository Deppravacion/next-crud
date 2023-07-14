migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz")

  // remove
  collection.schema.removeField("lvobhzse")

  return dao.saveCollection(collection)
})

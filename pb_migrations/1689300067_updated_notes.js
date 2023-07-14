migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hda8cq2i8ozgsxt")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hda8cq2i8ozgsxt")

  // remove
  collection.schema.removeField("vfpryojr")

  return dao.saveCollection(collection)
})

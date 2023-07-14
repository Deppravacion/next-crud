migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yy8zjjcbqupuzbz")

  collection.name = "posts"

  return dao.saveCollection(collection)
})

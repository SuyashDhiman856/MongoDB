db.movies.deleteMany({})

db.movies.deleteMany( { title: "Titanic" } )

db.movies.deleteOne( { cast: "Brad Pitt" } )

db.collection.remove()
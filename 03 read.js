db.movies.find(); // Fetch all documents
db.movies.find({}); // Fetch all documents
db.movies.find(
    {year: 2018}
) // Fetch particular document

db.movies.find( { genres: { $in: [ "Drama", "History" ] } } ) // Drama or History

db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } ) // AND Operation

db.movies.find( {
     $or: [ { "awards.wins": { $gte: 5 } }, { genres: "Drama" } ] // OR Operation
} )

db.movies.findOne( { genres: { $in: [ "Drama", "History" ] } } ) // Find Only One
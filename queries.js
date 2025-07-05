// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year (e.g., after 2000)
db.books.find({ published_year: { $gt: 2000 } })

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book (e.g., '1984')
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
)

// 5. Delete a book by its title (e.g., 'Moby Dick')
db.books.deleteOne({ title: "Moby Dick" })

// 6. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7. Use projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 8. Sort books by price in ascending order
db.books.find().sort({ price: 1 })

// 9. Sort books by price in descending order
db.books.find().sort({ price: -1 })

// 10. Use limit and skip to implement pagination (Page 1 - first 5 books)
db.books.find().limit(5)

// 11. Pagination - Page 2 (skip first 5 books, then show next 5)
db.books.find().skip(5).limit(5)

// 12. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
])

// 13. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { total_books: -1 }
  },
  {
    $limit: 1
  }
])

// 14. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, 4] },
          "s"
        ]
      },
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// 15. Create an index on the title field
db.books.createIndex({ title: 1 })

// 16. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 17. Use explain() to check index performance for a title search
db.books.find({ title: "1984" }).explain("executionStats")

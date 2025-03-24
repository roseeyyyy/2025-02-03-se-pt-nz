const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}

function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
}  

function getTitles(authorInitial) {
    return books
      .filter(book => book.author.charAt(0).toLowerCase() === authorInitial.toLowerCase())
      .map(book => book.title);
}


console.log(getBookTitle(3))
console.log(getBookTitle(6))
console.log(getOldBooks())
console.log(addGenre())
console.log(getTitles('F'))
console.log(getTitles('J'))
console.log(getTitles('H'))

  
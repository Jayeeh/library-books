// Define the first book object with its properties and methods
const book1 = {
    title: "Pride and Prejudice", // Title of the book
    author: "Jane Austen", // Author of the book
    pages: 432, // Number of pages in the book
    avgTime: "7 Hours", // Average time to read the book
    copies: 3, // Number of copies available
    // Method to check out a book, decreases the number of copies
    checkOut: function() {
      this.copies--;
    },
    // Method to check in a book, increases the number of copies
    checkIn: function() {
      this.copies++;
    }  
};

// Define the second book object with its properties and methods
const book2 = {
    title: "The Old Man and the Sea", // Title of the book
    author: "Ernest Hemingway", // Author of the book
    pages: 127, // Number of pages in the book
    avgTime: "3 Hours", // Average time to read the book
    copies: 2, // Number of copies available
    // Method to check out a book, decreases the number of copies
    checkOut: function() {
      this.copies--;
    },
    // Method to check in a book, increases the number of copies
    checkIn: function() {
      this.copies++;
    }  
};

// Log details about the second book to the console
console.log(book2.title + " by " + book2.author); // Log the title and author
console.log(`${book2.pages}: ${book2.avgTime}`); // Log the pages and average reading time
console.log(`${book2.copies} copies available`); // Log the number of copies available

// Check out a copy of the second book and log the updated number of copies
book2.checkOut();
console.log(book2.copies); // Log the updated number of copies after checkout

// Check in a copy of the second book and log the updated number of copies
book2.checkIn();
console.log(book2.copies); // Log the updated number of copies after check-in

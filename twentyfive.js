let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

library.forEach((book) => {
  const message = book.readingStatus
    ? `Already read '${book.title}' by ${book.author}.`
    : `You still need to read '${book.title}' by ${book.author}.`;

  console.log(message);
});

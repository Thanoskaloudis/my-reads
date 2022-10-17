import React, { useEffect, useState } from 'react';
import * as BooksAPI from "./utils/BooksAPI";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
    console.log(books)
  }, [books]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Reads</h2>
      </header>
      {books.map((book: any) => 
        <div>
          <img src={book.imageLinks.thumbnail}/>
        </div>
      )}
    </div>
  );
}

export default App;

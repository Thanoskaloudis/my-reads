import React, { useEffect, useState } from 'react';
import * as BooksAPI from "./utils/BooksAPI";
import './App.scss';
import { Bookself } from './components/Bookself/Bookself';
import { IBook } from './components/Book/Book.model';
import { BookselfType } from './components/Bookself/Bookself.model';

function App() {
  const [books, setBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      updateCurrentBooks(res);
    };

    getBooks();
  }, []);

  const updateCurrentBooks = (books: IBook[]) => {
    setCurrentBooks(books.filter((book) => book.shelf === BookselfType.CurrentlyReading));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Reads</h2>
      </header>
      <Bookself title={"Currently Reading"} books={currentBooks}/>
    </div>
  );
}

export default App;

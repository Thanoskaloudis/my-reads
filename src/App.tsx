import React, { useEffect, useState } from 'react';
import * as BooksAPI from "./utils/BooksAPI";
import './App.scss';
import { Bookshelf } from './components/Bookshelf/Bookshelf';
import { IBook } from './components/Book/Book.model';
import { BookshelfType } from './components/Bookshelf/Bookshelf.model';

function App() {
  const [books, setBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState<IBook[]>([]);
  const [wantToReadBooks, setWantToReadBooks] = useState<IBook[]>([]);
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      updateCurrentBooks(res);
      updateWantToReadBooks(res);
      updateReadBooks(res);
    };

    getBooks();
  }, []);

  const updateCurrentBooks = (books: IBook[]) => {
    setCurrentBooks(books.filter((book) => book.shelf === BookshelfType.CurrentlyReading));
  }

  const updateWantToReadBooks = (books: IBook[]) => {
    setWantToReadBooks(books.filter((book) => book.shelf === BookshelfType.WantToRead));
  }

  const updateReadBooks = (books: IBook[]) => {
    setReadBooks(books.filter((book) => book.shelf === BookshelfType.Read));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Reads</h2>
      </header>
      <Bookshelf title={"Currently Reading"} books={currentBooks}/>
      <Bookshelf title={"Want To Read"} books={wantToReadBooks}/>
      <Bookshelf title={"Read"} books={readBooks}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import * as BooksAPI from "./utils/BooksAPI";
import './App.scss';
import { Bookshelf } from './components/Bookshelf/Bookshelf';
import { IBook } from './components/Book/Book.model';
import { BookshelfType } from './components/Bookshelf/Bookshelf.model';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { SearchBooks } from './components/SearchBooks/SearchBooks';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
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
  }, [books]);

  const updateCurrentBooks = (books: IBook[]) => {
    setCurrentBooks(books.filter((book) => book.shelf === BookshelfType.CurrentlyReading));
  }

  const updateWantToReadBooks = (books: IBook[]) => {
    setWantToReadBooks(books.filter((book) => book.shelf === BookshelfType.WantToRead));
  }

  const updateReadBooks = (books: IBook[]) => {
    setReadBooks(books.filter((book) => book.shelf === BookshelfType.Read));
  }

  const updateShelf = async (book: IBook, shelf: string)=> {
    const res = await BooksAPI.update(book, shelf);
    setBooks(res);
  }
  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
          <div>
            <header className="App-header">
              <h2>My Reads</h2>
            </header>
            <Bookshelf title={"Currently Reading"} books={currentBooks} handleUpdateShelf={updateShelf}/>
            <Bookshelf title={"Want To Read"} books={wantToReadBooks} handleUpdateShelf={updateShelf}/>
            <Bookshelf title={"Read"} books={readBooks} handleUpdateShelf={updateShelf}/>
            <div className="search">
                  <Link className="search--click" to="/search">Add a book</Link>
            </div>
          </div>
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks handleUpdateShelf={updateShelf}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

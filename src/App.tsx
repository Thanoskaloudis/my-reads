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
  const [searchedBooks, setSearchedBooks] = useState<IBook[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  const [books, setBooks] = useState<IBook[]>([]);
  const [mergedBooks, setMergedBooks] = useState<IBook[]>([]);
  const [currentBooks, setCurrentBooks] = useState<IBook[]>([]);
  const [wantToReadBooks, setWantToReadBooks] = useState<IBook[]>([]);
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await BooksAPI.getAll();
        setBooks(res);
        updateCurrentBooks(res);
        updateWantToReadBooks(res);
        updateReadBooks(res);
      } catch(error) {
        console.log('Fetch error: ', error);
      }
    };

    getBooks();
  }, [books]);

  useEffect(() => {
    if(searchedBooks && !errorMessage.length){
      const combinedBooksShelf: any = searchedBooks.map((searchedBook) => {
        if (books.filter(book => book.id === searchedBook.id).length) {
          return books.find(book => book.id === searchedBook.id);
        } else {
          return searchedBook;
        }
      });
  
      setMergedBooks(combinedBooksShelf);
    }
  }, [searchedBooks]);

  const updateCurrentBooks = (books: IBook[]) => {
    setCurrentBooks(books.filter((book) => book.shelf === BookshelfType.CurrentlyReading));
  }

  const updateWantToReadBooks = (books: IBook[]) => {
    setWantToReadBooks(books.filter((book) => book.shelf === BookshelfType.WantToRead));
  }

  const updateReadBooks = (books: IBook[]) => {
    setReadBooks(books.filter((book) => book.shelf === BookshelfType.Read));
  }

  const updateQuery = async (query: string) => {
    if(!query.length) {
      setIsErrorMessageVisible(false);
      setMergedBooks([]);
    } else {
      BooksAPI.search(query, 20).then(res => {
        setSearchedBooks(res);
        setErrorMessage("");
        if(res === undefined || (res as any).error) {
          setErrorMessage("No Results Found");
          setIsErrorMessageVisible(true);
        }
      }, error => {
        new Error(error)
      })
    }
  };

  const updateShelf = async (book: IBook, shelf: string)=> {
    try {
    const res = await BooksAPI.update(book, shelf);
    setBooks(res);
    }catch (error) {
      console.log('Fetch error: ', error);
    }
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
            <SearchBooks
             books={mergedBooks}
             errorMessage={errorMessage}
             updateQuery={updateQuery}
             handleUpdateShelf={updateShelf}
             isErrorMessageVisible={isErrorMessageVisible}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

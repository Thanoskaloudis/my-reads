import React, { useState } from 'react';
import { IBook } from '../Book/Book.model';
import * as BooksAPI from "../../utils/BooksAPI";
import './SearchBooks.scss';
import { Book } from '../Book/Book';
import { Link } from 'react-router-dom';
import { ISearchBook } from './SearchBook.model';

export const SearchBooks = (props: ISearchBook) => {
  const [searchedBooks, setSearchedBooks] = useState<IBook[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  const updateQuery = async (query: string) => {
    BooksAPI.search(query, 20).then(res => {
      setSearchedBooks(res);
      setErrorMessage("");
      if(res === undefined || (res as any).error) {
        setErrorMessage("No Results Found");
        setIsErrorMessageVisible(true);
      }

      if(!query.length) {
        setIsErrorMessageVisible(false);
      }
    })
  };

  const changeShelfCallback = (book: IBook, shelf: string) =>{
    props.handleUpdateShelf(book, shelf);
  } 

  return (
    <div className="search-books">
    <div className="search-books--bar">
    <Link className="search-books--close" to="/">Close</Link>
      <div className="search-books--input__wrapper">
        <input type="text" onChange={(event) => updateQuery(event.target.value)}
         placeholder="Search by title, author, or ISBN"/>
      </div>
    </div>
    <div className="search-books--results">
      { (!errorMessage.length && searchedBooks.length) ?
       searchedBooks.map((book) => (
        <div key={book.id}>
            <Book book={book} handleUpdateShelf={changeShelfCallback}/>
        </div>
        )) :
        <span> {isErrorMessageVisible && errorMessage} </span>
      }
    </div>
  </div>
  )
}

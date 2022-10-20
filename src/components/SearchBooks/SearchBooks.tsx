import React from 'react';
import { IBook } from '../Book/Book.model';
import './SearchBooks.scss';
import { Book } from '../Book/Book';
import { Link } from 'react-router-dom';
import { ISearchBook } from './SearchBook.model';

export const SearchBooks = (props: ISearchBook) => {

  const changeShelfCallback = (book: IBook, shelf: string) =>{
    props.handleUpdateShelf(book, shelf);
  } 

  const handleQuery = (e: string) => {
    props.updateQuery(e);
  }

  return (
    <div className="search-books">
    <div className="search-books--bar">
    <Link className="search-books--close" to="/">Close</Link>
      <div className="search-books--input__wrapper">
        <input type="text" onChange={(event) => handleQuery(event.target.value)}
         placeholder="Search by title, author, or ISBN"/>
      </div>
    </div>
    <div className="search-books--results">
      { (!props.errorMessage.length  && props.books.length) ?
       props.books.map((book) => (
        <div key={book.id}>
            <Book book={book} handleUpdateShelf={changeShelfCallback}/>
        </div>
        )) :
        <span> {props.isErrorMessageVisible && props.errorMessage} </span>
      }
    </div>
  </div>
  )
}

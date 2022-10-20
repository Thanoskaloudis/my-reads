import React from 'react';
import { Book } from '../Book/Book';
import { IBook } from '../Book/Book.model';
import { IBookshelf } from './Bookshelf.model';
import './Bookshelf.scss';

export const Bookshelf = (props: IBookshelf) => {

  const changeShelfCallback = (book: IBook, shelf: string) =>{
    props.handleUpdateShelf(book, shelf);
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf--tittle">{props.title}</h2>
      <div className="bookshelf--books">
        {props.books.map((book) => (
          <div key={book.id}>
            <Book book={book} handleUpdateShelf={changeShelfCallback}/>
          </div>
        ))}
      </div>
    </div>
  );
};

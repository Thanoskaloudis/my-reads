import React from 'react';
import { IBookshelf } from './Bookshelf.model';
import './Bookshelf.scss';

export const Bookshelf = (props: IBookshelf) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf--tittle">{props.title}</h2>
      <div className="bookshelf--books">
        {props.books.map((book) => (
          <div className="book" key={book.id}>
            <img
              src={book.imageLinks.thumbnail}
              alt=""
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

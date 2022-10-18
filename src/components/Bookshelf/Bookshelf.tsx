import React from 'react';
import { Book } from '../Book/Book';
import { BookChanger } from '../BookChanger/BookChanger';
import { IBookshelf } from './Bookshelf.model';
import './Bookshelf.scss';

export const Bookshelf = (props: IBookshelf) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf--tittle">{props.title}</h2>
      <div className="bookshelf--books">
        {props.books.map((book) => (
          <div key={book.id}>
            <Book {...book}/>
            <BookChanger />
          </div>
        ))}
      </div>
    </div>
  );
};

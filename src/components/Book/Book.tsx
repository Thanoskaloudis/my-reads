import React from 'react';  
import { BookChanger } from '../BookChanger/BookChanger';
import { IBook, IBookComponent } from './Book.model';
import './Book.scss';

export const Book = (props: IBookComponent) => {

  const changeCallback = (book: IBook, shelf: string) => {
    props.handleUpdateShelf(book, shelf);
  }

  return (
    <div className="book">
      { props.book.imageLinks &&
        <img className="book--cover" src={props.book.imageLinks.thumbnail} alt=""></img>}
      <h3 className="book--title">{props.book.title}</h3>
      {props.book.authors && props.book.authors.map(author => (
        <span className="book--author" key={author}>{author}</span>
      ))
      }
      <BookChanger book={props.book} handleUpdateShelf={changeCallback}/>
    </div>
  )
}

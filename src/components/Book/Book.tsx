import React from 'react';  
import { IBook } from './Book.model';
import './Book.scss';

export const Book = (props: IBook) => {
  return (
    <div className="book">
      <img className="book--cover" src={props.imageLinks.thumbnail} alt=""></img>
      <h3 className="book--title">{props.title}</h3>
      {props.authors.map(author => (
        <span className="book--author" key={author}>{author}</span>
      ))
      }
    </div>
  )
}

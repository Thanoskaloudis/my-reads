import React from 'react';
import { IBookChanger } from './BookChanger.model';
import './BookChanger.scss';

export const BookChanger = (props: IBookChanger) => {

  const handleBookChanger = (e: string)=> {
    props.handleUpdateShelf(props.book, e);
  }

  return (
    <div className="changer">
      <select className="changer--select" value={props.book.shelf ? props.book.shelf : "none"}
       onChange={(e) => handleBookChanger(e.target.value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

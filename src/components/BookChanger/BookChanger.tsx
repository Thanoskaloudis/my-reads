import React from 'react';
import './BookChanger.scss';

export const BookChanger = () => {
  return (
    <div className="changer">
      <select className="changer--select">
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

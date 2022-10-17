import React from 'react'
import { IBookself } from './Bookself.model'

export const Bookself = (props: IBookself) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf--tittle">{ props.title }</h2>
      {
        props.books.map(book => (
          <div>
            <img src={book.imageLinks.thumbnail} alt=""></img>
          </div>
        ))
      }
    </div>
  )
}

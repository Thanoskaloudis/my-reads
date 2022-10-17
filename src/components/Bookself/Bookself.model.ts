import { IBook } from "../Book/Book.model";

export interface IBookself {
  title: string
  books: IBook[]
}

export enum BookselfType {
  CurrentlyReading = "currentlyReading",
  WantToRead = "wantToRead",
  Read = "read"
}
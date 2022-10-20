import { IBook } from "../Book/Book.model";

export interface IBookshelf {
  title: string
  books: IBook[],
  handleUpdateShelf: any
}

export enum BookshelfType {
  CurrentlyReading = "currentlyReading",
  WantToRead = "wantToRead",
  Read = "read"
}
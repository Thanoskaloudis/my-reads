import { IBook } from "../Book/Book.model";

export interface IBookChanger {
  book: IBook,
  handleUpdateShelf: any
}
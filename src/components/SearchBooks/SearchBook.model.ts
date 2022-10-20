import { IBook } from "../Book/Book.model";

export interface ISearchBook {
  books: IBook[]
  errorMessage: string
  isErrorMessageVisible: boolean
  handleUpdateShelf: any
  updateQuery: any
}
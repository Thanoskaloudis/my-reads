export interface IBook {
  title: string,
  subtitle: string,
  authors: [string],
  publisher:string,
  publishedDate: string,
  description: string,
  industryIdentifiers: object,
  readingModes: object,
  pageCount: number,
  printType: string,
  categories: [string],
  averageRating: number,
  ratingsCount: number,
  maturityRating: string,
  allowAnonLogging: boolean,
  contentVersion: string,
  panelizationSummary: object,
  imageLinks: {
      smallThumbnail: string,
      thumbnail: string
  },
  language: string,
  previewLink: string,
  infoLink: string,
  canonicalVolumeLink: string,
  id: string,
  shelf: string
}
export interface IBook {
  ISBN: string
  title: string
  authors: string[]
  description: string
  imageURL: string
  currentPage: number = 0
  pageCount: number
  publishedDate: Date
}

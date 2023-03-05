export interface IBook {
  ISBN: string
  title: string
  authors: string[] | null
  description: string | null
  imageURL: string | null
  currentPage: number
  pageCount: number
  publishedDate: Date | null
}

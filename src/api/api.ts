import { IBook } from '../@types/book'

const baseURL = 'https://www.googleapis.com/books/v1/'

export const bookSearch = async (query: string): Promise<IBook[]> => {
  const URL = baseURL + `volumes?q=${query}`
  const data = await fetch(URL).then((res) => res.json())

  if (!data['items']) return []

  let books: IBook[] = []
  data['items'].forEach((item: any) => {
    const identifiers = item['volumeInfo']['industryIdentifiers'] ?? []
    let ISBN = null
    identifiers.forEach((identifier: any) => {
      if (
        identifier['type'] === 'ISBN_10' ||
        identifier['type'] === 'ISBN_13'
      ) {
        ISBN = identifier['identifier']
      }
    })

    const pageCount = item['volumeInfo']['pageCount'] || null

    if (ISBN && pageCount) {
      books.push({
        ISBN,
        title: item['volumeInfo']['title'] || null,
        authors: item['volumeInfo']['authors'] || null,
        description: item['volumeInfo']['description'] || null,
        imageURL: item['volumeInfo']['imageLinks']['thumbnail'] || null,
        currentPage: 0,
        pageCount,
        publishedDate:
          new Date(Date.parse(item['volumeInfo']['publishedDate'])) || null,
      })
    }
  })

  return books as IBook[]
}

import { IBook } from '../@types/book'

const baseURL = 'https://www.googleapis.com/books/v1/'

export const performSearch = async (query: string): Promise<IBook[]> => {
  if (query.length === 0) return [] as IBook[]

  const URL = baseURL + `volumes?q=${query}`
  const data = await fetch(URL).then((res) => res.json())
  const items = data['items']

  if (!items) return []

  const getISBN = (identifiers: []): string | null => {
    let ISBN: string | null = null
    identifiers.forEach((identifier: any) => {
      if (
        identifier['type'] === 'ISBN_10' ||
        identifier['type'] === 'ISBN_13'
      ) {
        ISBN = identifier['identifier']
      }
    })
    return ISBN
  }

  const getImageURL = (info: any): string | null => {
    const imageURLs = info['imageLinks']
    return imageURLs ? imageURLs['thumbnail'] || null : null
  }

  const getDate = (info: any): Date | null => {
    const publishedDate: number | null =
      Date.parse(info['publishedDate']) || null
    return publishedDate ? new Date(publishedDate) : null
  }

  let books: IBook[] = []
  items.forEach((item: any) => {
    const info = item['volumeInfo']

    if (info) {
      const ISBN = getISBN(info['industryIdentifiers'] || [])

      const title: string | null = info['title'] || null
      const pageCount: number | null = info['pageCount'] || null

      if (ISBN && title && pageCount) {
        const imageURL = getImageURL(info)
        const publishedDate = getDate(info)

        books.push({
          ISBN,
          title,
          authors: info['authors'] || null,
          description: info['description'] || null,
          imageURL,
          currentPage: 0,
          pageCount,
          publishedDate,
        })
      }
    }
  })

  return books as IBook[]
}

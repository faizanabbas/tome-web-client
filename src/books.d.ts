interface IVolume {
  id: string
  volumeInfo: {
    authors?: string[]
    imageLinks?: { thumbnail: string }
    previewLink: string
    publishedDate?: string
    title: string
  }
}

export { IVolume }

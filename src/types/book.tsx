export interface Book {
  id: string;
  volumeInfo: {
    authors: string;
    imageLinks: {
      thumbnail: string;
    };
    description?: string;
    publishedDate: string;
    title: string;
  };
}

export interface SingleBookProps {
  cover: string;
  title: string;
  authors: string;
  description?: string;
  publishedDate?: string;
  obj?: {};
}

export interface BookDetai {
  cover: string;
  title: string;
  authors: string;
  obj: {
    volumeInfo: {
      description: string;
    };
  };
}

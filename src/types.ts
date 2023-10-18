export type ID = string | number;

export type Column = {
  id: ID;
  title: string;
};

export type Book = {
  id: ID;
  columnID: ID;
  title: string;
  author: string;
  published: number;
};

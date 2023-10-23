import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [books, setBooks] = useState([]);

  function createNewColumn() {
    const columnToAdd = {
      id: generateID(),
      title: `column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
    console.log(columns);
  }

  function deleteColumn(id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function updateColumn(id, title) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  }

  function createBook(columnId) {
    console.log(books.map((book) => book.title));
    const newBook = {
      id: generateID(),
      columnId,
      title: `Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
      published: `${books.length + 1}`,
    };

    setBooks([...books, newBook]);
  }

  function deleteBook(id) {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  }

  function updateBook(id, title) {
    const newBooks = books.map((book) => {
      if (book.id !== id) return book;
      return { ...book, title };
    });

    setBooks(newBooks);
  }

  return (
    <div
      className="
            m-auto
            flex
            min-h-screen
            w-full
            items-center
            overflow-x-auto
            overflow-y-hidden
            px-[40px]
        "
    >
      <div className="m-auto flex gap-2">
        <div className="flex gap-2">
          {columns.map((col) => (
            <div>
              <ColumnContainer
                key={col.id}
                column={col}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createBook={createBook}
                books={books.filter((book) => book.columnId === col.id)}
                deleteBook={deleteBook}
                updateBook={updateBook}
              />
            </div>
          ))}
        </div>
        <button
          onClick={createNewColumn}
          className="
                h-[60px]
                w-[350px]
                min-w-[350px]
                cursor-pointer
                rounded-lg
                bg-buttonBackgroundColor
                border-2
                border-columnBackgroundColor
                p-4
                ring-rose-500
                hover:ring-2
                flex
                gap-2
                "
        >
          <PlusIcon></PlusIcon>add column
        </button>
      </div>
    </div>
  );
};

function generateID() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;

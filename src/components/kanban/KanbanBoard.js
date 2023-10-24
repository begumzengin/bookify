import React, { useState, useMemo } from "react";
import PlusIcon from "../../icons/PlusIcon";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import BookCard from "./BookCard";

const KanbanBoard = () => {
  const defaultCols = [
    {
      id: "toread",
      title: "books to read",
    },
    {
      id: "reading",
      title: "currently reading",
    },
    {
      id: "done",
      title: "books completed",
    },
  ];

  const [columns, setColumns] = useState(defaultCols);
  const [books, setBooks] = useState([]);

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [activeColumn, setActiveColumn] = useState(null);
  const [activeBook, setActiveBook] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

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

  function onDragStart(event) {
    if (event.active.data.current.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current.type === "Book") {
      setActiveBook(event.active.data.current.book);
      return;
    }
  }

  function onDragEnd(event) {
    setActiveColumn(null);
    setActiveBook(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current.type === "Column";
    if (!isActiveAColumn) return;

    console.log("drag end");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveABook = active.data.current.type === "Book";
    const isOverABook = over.data.current.type === "Book";

    if (!isActiveABook) return;

    //dropping a book over another book
    if (isActiveABook && isOverABook) {
      setBooks((books) => {
        const activeIndex = books.findIndex((b) => b.id === activeId);
        const overIndex = books.findIndex((b) => b.id === overId);

        if (books[activeIndex].columnId !== books[overIndex].columnId) {
          books[activeIndex].columnId = books[overIndex].columnId;
          return arrayMove(books, activeIndex, overIndex - 1);
        }

        return arrayMove(books, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current.type === "Column";

    //dropping a book over a column
    if (isActiveABook && isOverAColumn) {
      setBooks((books) => {
        const activeIndex = books.findIndex((b) => b.id === activeId);

        books[activeIndex].columnId = overId;
        console.log("dropping book over column", { activeIndex });
        return arrayMove(books, activeIndex, activeIndex);
      });
    }
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
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-2">
          <div className="flex gap-2">
            <SortableContext items={columnsId}>
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
            </SortableContext>
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
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createBook={createBook}
                deleteBook={deleteBook}
                updateBook={updateBook}
                books={books.filter(
                  (book) => book.columnId === activeColumn.id
                )}
              />
            )}
            {activeBook && (
              <BookCard
                book={activeBook}
                deleteBook={deleteBook}
                updateBook={updateBook}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

function generateID() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;

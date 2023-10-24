import React, { useMemo, useState } from "react";
import TrashIcon from "../../icons/TrashIcon";
import PenIcon from "../../icons/PenIcon";
import PlusIcon from "../../icons/PlusIcon";
import BookCard from "./BookCard";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ColumnContainer(props) {
  const {
    column,
    deleteColumn,
    updateColumn,
    createBook,
    books,
    deleteBook,
    updateBook,
  } = props;

  const [editMode, setEditMode] = useState(false);

  const booksIds = useMemo(() => {
    return books.map((book) => book.id);
  }, [books]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        bg-columnBackgroundColor
        opacity-40
        border-2
        border-pinkerBackgroundColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
        "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
    bg-columnBackgroundColor
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
  "
    >
      {/*column title*/}
      <div
        {...attributes}
        {...listeners}
        className="
        bg-backgroundColor
          text-md
          h-[60px]
          cursor-grab
          rounded-md
          rounded-b-none
          p-3
          font-bold
          border-columnBackgroundColor
          border-4
          flex
          items-center
          justify-between
      "
      >
        <div className="flex gap-2">
          <div
            className="
          flex 
          justify-center 
          items-center 
          bg-columnBackgroundColor 
          px-2 
          py-1 
          text-sm 
          rounded-full"
          >
            {books.length}
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-columnBackgroundColor focus:border-rose-500 border-rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            setEditMode(true);
          }}
          className="
            stroke-pinkerBackgroundColor
            hover:stroke-white
            hover:bg-pinkerBackgroundColor
              rounded
              px-1
              py-2
            "
        >
          <PenIcon />
        </button>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
          stroke-pinkerBackgroundColor
            hover:stroke-white
            hover:bg-pinkerBackgroundColor
              rounded
              px-1
              py-2
            "
        >
          <TrashIcon />
        </button>
      </div>

      {/*column task container*/}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={booksIds}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              updateBook={updateBook}
            />
          ))}
        </SortableContext>
      </div>

      {/*column footer*/}
      <button
        onClick={() => {
          createBook(column.id);
        }}
        className="
          flex 
          gap-2 
          items-center 
          border-pinkerBackgroundColor 
          border-2 
          rounded-md 
          p-4 
          border-x-columnBackgroundColor 
          hover:bg-backgroundColor 
          hover:text-pinkerBackgroundColor 
          active:bg-buttonBackgroundColor"
      >
        <PlusIcon />
        add book
      </button>
    </div>
  );
}

export default ColumnContainer;

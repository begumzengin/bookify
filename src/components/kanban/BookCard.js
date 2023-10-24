import React, { useState } from "react";
import TrashIcon from "../../icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function BookCard({ book, deleteBook, updateBook }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: book.id,
    data: {
      type: "Book",
      book,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
          opacity-30
          bg-backgroundColor
          p-2.5
          h-[100px]
          items-center
          flex
          text-left
          rounded-xl
          border-2
          border-pinkerBackgroundColor
          cursor-grab
          relative
        "
      ></div>
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="
        bg-backgroundColor 
        p-2.5 
        h-[100px] 
        min-h-[100px] 
        items-center 
        flex 
        text-left 
        rounded-xl 
        hover:ring-2 
        hover:ring-inset 
        hover:ring-pinkerBackgroundColor 
        cursor-grab
        relative"
      >
        <textarea
          className="
          h-[90%]
          w-full
          resize-none
          border-none
          rounded
          bg-transparent
          focus:outline-none
        "
          value={book.title}
          autoFocus
          placeholder="book title here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter") toggleEditMode();
            //if you want to enable writing in multiple lines
            //by pressing enter: e.key === "Enter" && e.shiftKey
          }}
          onChange={(e) => updateBook(book.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      className="
        bg-backgroundColor 
        p-2.5 
        h-[100px] 
        min-h-[100px] 
        items-center 
        flex 
        text-left 
        rounded-xl 
        hover:ring-2 
        hover:ring-inset 
        hover:ring-pinkerBackgroundColor 
        cursor-grab
        relative"
    >
      {book.title}
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteBook(book.id);
          }}
          className="
        stroke-backgroundColor 
        absolute 
        right-4 
        bg-pinkerBackgroundColor 
        p-2 
        rounded 
        opacity-60 
        hover:opacity-100"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default BookCard;

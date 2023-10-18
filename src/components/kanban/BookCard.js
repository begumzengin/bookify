import React, { useState } from "react";
import TrashIcon from "../../icons/TrashIcon";

function BookCard({ book, deleteBook }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div
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

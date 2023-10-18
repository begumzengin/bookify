import React from "react";

function BookCard({ book }) {
  return (
    <div
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
        cursor-grab"
    >
      {book.title}
    </div>
  );
}

export default BookCard;

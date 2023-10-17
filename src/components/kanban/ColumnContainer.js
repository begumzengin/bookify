import React from "react";
import TrashIcon from "../../icons/TrashIcon";

function ColumnContainer(props) {
  const { column, deleteColumn } = props;
  return (
    <div
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
            0
          </div>
          {column.title}
        </div>
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
      <div className="flex flex-grow">content</div>

      {/*column footer*/}
      <div>footer</div>
    </div>
  );
}

export default ColumnContainer;

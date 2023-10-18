import React, { useState } from "react";
import TrashIcon from "../../icons/TrashIcon";
import PenIcon from "../../icons/PenIcon";

function ColumnContainer(props) {
  const { column, deleteColumn, updateColumn } = props;
  const [editMode, setEditMode] = useState(false);

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
      <div className="flex flex-grow">content</div>

      {/*column footer*/}
      <div>footer</div>
    </div>
  );
}

export default ColumnContainer;

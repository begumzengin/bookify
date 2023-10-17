import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);

  function createNewColumn() {
    const columnToAdd = {
      id: generateID(),
      title: `column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
    console.log(columns);
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
            <div key={col.id}>{col.title}</div>
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

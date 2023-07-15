import ListIcon from "@/asstes/icon/ListIcon";
import {
  ItemRenderProps,
  SortableItemProps,
  SortableList,
} from "@thaddeusjiang/react-sortable-list";
import React, { useEffect, useState } from "react";

interface props {
  activeCard?: string;
  setActiveCard?: (value: string) => void;
}

const DragDrop = ({activeCard, setActiveCard}: props) => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: "1", name: "Organizer" },
    { id: "2", name: "Speakers" },
    { id: "3", name: "Schedule" },
    { id: "4", name: "Sponsors" },
  ]);

  const handleMouseEnter = (value: string) => {
    if (setActiveCard) {
      setActiveCard(value)  
    }
    
  }

  return (
    <div>
    <SortableList
      items={items}
      setItems={setItems}
      itemRender={({ item }: ItemRenderProps) => (
        <button onMouseEnter={() => handleMouseEnter(item.id)} >
          <div
          className={`min-w-[365px] w-full h-[72px] border mb-[32px] rounded border-gray-200 ${
            activeCard === item.id ? "bg-[#FFC93E]" : "bg-white"
          } `}
        >
          <div className="p-4">
            <div className="flex items-center gap-24 " >
              <div className="bg-white p-2 rounded">
                <ListIcon />
              </div>
              <p className="text-[20px] font-bold">{item.name}</p>
            </div>
          </div>
        </div>
        </button>
      )}
    />
 </div>
  );
};

export default DragDrop;

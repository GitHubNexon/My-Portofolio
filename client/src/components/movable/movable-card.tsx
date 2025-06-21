"use client";

import React from "react";
import { FaGripVertical } from "react-icons/fa";

interface MovableCardProps {
  children: React.ReactNode;
  draggable?: boolean;
  onDragStart?: React.DragEventHandler<HTMLDivElement>;
  onDragEnd?: React.DragEventHandler<HTMLDivElement>;
}

const MovableCard = ({
  children,
  draggable = false,
  onDragStart,
  onDragEnd,
}: MovableCardProps) => {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="flex items-center space-x-3 p-3 bg-[var(--background)] rounded shadow select-none
                 hover:shadow-md transition-shadow duration-150 "
    >
      <FaGripVertical className="text-gray-400" />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MovableCard;

"use client";
import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MovableTabs from "./movable-tabs";
import MovableSkeleton from "./movable-skeleton";

interface CardType {
  id: string;
  content: React.ReactNode;
}

interface Props {
  tabs?: string[];
  cardsData?: CardType[][] | CardType[];
  onRender?: boolean;
  onEmpty?: string;
}

function SortableCard({ id, content }: CardType) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-[var(--background)] rounded shadow p-4 cursor-move border-2"
    >
      {content}
    </div>
  );
}

export default function MovableArea({
  tabs = [],
  cardsData = [],
  onRender = false,
  onEmpty = "No Cards",
}: Props) {
  const [activeTab, setActiveTab] = React.useState(0);
  const [cards, setCards] = React.useState<CardType[]>([]);

  const sensors = useSensors(useSensor(PointerSensor));

  React.useEffect(() => {
    if (tabs.length) {
      const arr = cardsData as CardType[][];
      setCards(arr[activeTab] || []);
    } else {
      setCards(cardsData as CardType[]);
    }
  }, [tabs, activeTab, cardsData]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((c) => c.id === active.id);
      const newIndex = cards.findIndex((c) => c.id === over?.id);
      setCards((cards) => arrayMove(cards, oldIndex, newIndex));
    }
  };

  return (
    <div className="w-full">
      {!!tabs.length && (
        <MovableTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {onRender ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <MovableSkeleton key={i} />
            ))}
        </div>
      ) : cards.length === 0 ? (
        <p className="text-center text-gray-500">{onEmpty}</p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={cards.map((c) => c.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cards.map((card) => (
                <SortableCard key={card.id} {...card} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}

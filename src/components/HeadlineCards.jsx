import React from "react";
import ThumbnailCard from "./shared/ThumbnailCard";

const CARDS_LIST = [
  {
    id: "c1",
    title: "Sun's Out, BOGO's Out",
    subTitle: "Through 8/26",
    imageUrl:
      "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "c2",
    title: "New Restaurants",
    subTitle: "Added Daily",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "c3",
    title: "We Deliver Desserts Too",
    subTitle: "Tasty Treats",
    imageUrl:
      "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {CARDS_LIST.map((card) => (
        <ThumbnailCard
          key={card.id}
          title={card.title}
          subTitle={card.subTitle}
          img={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default HeadlineCards;

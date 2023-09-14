import React from "react";

const ThumbnailCard = (props) => {
  const { title, subTitle, img } = props;
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{subTitle}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-gray-200 hover:border-gray-200 duration-200 ease-in-out">
          Order Now
        </button>
      </div>
      <img
        src={img}
        alt="Food thumbnail"
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default ThumbnailCard;

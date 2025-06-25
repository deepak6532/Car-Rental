
import React from 'react';

const feedbackData = [
  {
    name: "Deepak",
    image: "https://picsum.photos/200",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Mahak",
    image: "https://fastly.picsum.photos/id/335/200/200.jpg?hmac=CS4kiSEelfhSQQtW7j6SFUV2ZlTmUV1vaX2iZKnbx7c",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Yash",
    image: "https://fastly.picsum.photos/id/953/200/200.jpg?hmac=S5zbAl9YqUc02Oezl6cR8gcLfF3pwkQ5_AcG8JXjeC0",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Userfeedback = () => {
  return (
    <div className="w-full overflow-x-hidden box-border bg-white  p-6 sm:pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 pb-12 text-center">
          <p className="text-3xl font-semibold sm:text-4xl font-serif">
            What Our Clients Say About Us
          </p>
          <p className="max-w-2xl mx-auto px-4 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 ">
          {feedbackData.map((data) => (
            <div
              key={data.name}
              className="text-center group space-y-4 p-6 bg-slate-100 hover:bg-gray-200 rounded-lg sm:py-12 transition-all duration-300 hover:scale-104"
            >
              <div className="flex justify-center">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-sm">{data.description}</p>
              <p className="font-semibold text-center">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userfeedback;






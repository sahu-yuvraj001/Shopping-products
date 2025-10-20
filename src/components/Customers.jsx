import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Customers() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  const testimonials = [...Array(4)].map((_, index) => ({
    name: "John Smith",
    title: "Senior HR Manager at Zendesk",
    text: `“Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts”`,
    id: index
  }));

  return (
    <div className="flex flex-col items-center bg-gray-50 mt-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-8">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="w-full max-w-4xl lg:w-6xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          showDots={true}
          arrows={true}
          customLeftArrow={
            <button className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-gray-200 text-black hover:bg-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              ‹
            </button>
          }
          customRightArrow={
            <button className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-gray-200 text-black hover:bg-black hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              ›
            </button>
          }
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="m-10 bg-gray-200 shadow-md p-6 max-w-xl mx-auto text-center rounded-tl-[70px] rounded-br-[70px]"
            >
              <p className="text-lg italic text-gray-700">{item.text}</p>
              <div className="mt-4 font-bold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-500">{item.title}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Customers;

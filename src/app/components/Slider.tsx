"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import assets from "../assets/assets";
import Image from "next/image";

const testimonials = [
  {
    name: "Anisha Li",
    image: assets.avatarAnisha,
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    image: assets.avatarAli,
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    image: assets.avatarRichered,
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    name: "Shanai Gough",
    image: assets.avatarShana,
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export default function TestimonialsSlider() {
  return (
    <div className="w-full px-4 mx-auto pb-20 md:pb-40">
      <h4 className="text-center text-DarkBlue text-3xl md:text-4xl font-semibold mb-16 md:mb-28">
        What they've said
      </h4>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-12 relative">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-VeryLightGray text-center relative rounded-lg shadow-md">
            <div className="relative mx-auto mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto w-16 h-16 -top-14 rounded-full mb-4 absolute z-40 left-[50%] -translate-x-[50%]"
              />
            </div>
            <h3 className="text-lg font-semibold mt-10">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm italic mb-5">
              {testimonial.text}
            </p>
          </SwiperSlide>
        ))}

        {/* Hide pagination dots on larger screens */}
        <style jsx global>{`
          @media (min-width: 768px) {
            .swiper-pagination {
              display: none !important;
            }
          }
        `}</style>
      </Swiper>

      <div className="text-center">
        <button className="px-5 py-3 shadow-2xl text-sm shadow-BrightRed text-white bg-BrightRed rounded-3xl hover:opacity-80">
          Get Started
        </button>
      </div>
    </div>
  );
}

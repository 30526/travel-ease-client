import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./reviewStyle.css";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander Mike",
    role: "Project Manager",
    image: "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
    rating: 5,
    review:
      "Renting a car from Travel Ease was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
  {
    id: 2,
    name: "Alis White Snow",
    role: "Premium Member",
    image: "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
    rating: 4,
    review:
      "The fleet is exceptional. I rented the BMW for a weekend getaway and the process was seamless. The customer support team is truly world-class.",
  },
  {
    id: 3,
    name: "Floyd Miles Forger",
    role: "Business Traveler",
    image: "https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp",
    rating: 5,
    review:
      "Standard of service that you rarely see these days. Clean cars, transparent pricing, and a very user-friendly booking app. 10/10.",
  },
  {
    id: 4,
    name: "Courtney Henry Miller",
    role: "Marketing Coordinator",
    image: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
    rating: 5,
    review:
      "I love the variety of luxury cars available. Everything from booking to return was handled with extreme professionalism. Highly recommended.",
  },
];

const Review = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section - Matches your screenshot style */}
        <div className="relative mb-20 text-center">
          {/* 1. Background Watermark - Matching your FAQ "W" style */}

          <div className="relative z-10">
            {/* 2. Branded Subtitle */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-amber-500 text-xl font-black animate-pulse"
              >
                *
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ease: "circOut" }}
                className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs md:text-sm"
              >
                Client Voice
              </motion.p>
            </div>

            {/* 3. The Power Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] uppercase italic tracking-tighter"
            >
              What our <span className="text-amber-500">elite members</span>{" "}
              <br />
              <span className="relative">
                say about us
                {/* Decorative underline for emphasis */}
                <span className="absolute bottom-0 left-0 w-full h-4 bg-amber-500/20  -rotate-1"></span>
              </span>
            </motion.h2>
          </div>
        </div>
        {/* Swiper Container */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next-custom",
            prevEl: ".swiper-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-1 bg-transparent"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {/* card */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] text-left flex flex-col h-full hover:border-amber-500/30 transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < testimonial.rating ? "#f59e0b" : "none"}
                      className={
                        i < testimonial.rating
                          ? "text-amber-500"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>

                {/* review text  */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  "{testimonial.review}"
                </p>
                <div className="h-[4px] bg-slate-50 w-full mb-8" />
                {/* avatar  */}
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="ring-amber-500 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                      <img src={testimonial.image} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base tracking-tight leading-none">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-xs font-semibold mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation btn  */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-prev-custom w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-90">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-next-custom w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-90">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;

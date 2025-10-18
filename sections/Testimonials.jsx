import React from 'react';
import '../src/Testimonials.css';

// --- Import Swiper React components ---
import { Swiper, SwiperSlide } from 'swiper/react';

// --- Import Swiper core and required modules ---
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- Import placeholder images (REPLACE THESE) ---
import client1 from '../src/assets/aryan.jpg';
import client2 from '../src/assets/aryan.jpg';
import client3 from '../src/assets/aryan.jpg';
import client4 from '../src/assets/aryan.jpg';
import client5 from '../src/assets/aryan.jpg';
import client6 from '../src/assets/aryan.jpg';
// You can also use an icon as a fallback
// import { FaUser } from 'react-icons/fa';

// --- 6 Professional, Human-style Reviews ---
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CEO, Innovate Solutions',
    review:
      "We hired Aryan for a full-stack project, and his work was exceptional. He seamlessly handled both our React frontend and the complex Laravel backend. He's a true professional and an excellent communicator.",
    image: client1,
  },
  {
    id: 2,
    name: 'Michael B.',
    title: 'Product Manager, TechFlow',
    review:
      "Aryan's expertise in PHP and Laravel was a game-changer for scaling our platform. He refactored our legacy code, optimized database queries, and built new features with incredible speed and quality. Highly recommended.",
    image: client2,
  },
  {
    id: 3,
    name: 'Emily White',
    title: 'Startup Founder',
    review:
      'Working with Aryan was a pleasure. He took our rough ideas and turned them into a stunning, high-performance Next.js application. His attention to detail in the UI and his problem-solving skills are top-notch.',
    image: client3,
  },
  {
    id: 4,
    name: 'David Lee',
    title: 'CTO, QuantumLeap',
    review:
      'I was impressed by Aryan from day one. He understands complex architecture and can communicate technical decisions clearly. He delivered our project on time, on budget, and exceeded all our expectations.',
    image: client4,
  },
  {
    id: 5,
    name: 'Jessica Martin',
    title: 'Marketing Director',
    review:
      'Aryan is not just a developer; he\'s a creative partner. He helped us build a new marketing site with a custom backend, and his input on user experience was invaluable. The final product is fast, beautiful, and secure.',
    image: client5,
  },
  {
    id: 6,
    name: 'Tom Harris',
    title: 'Engineering Lead',
    review:
      "It's rare to find a developer with such a strong grasp of both frontend (React) and backend (PHP/Laravel) technologies. Aryan is a reliable, skilled, and forward-thinking engineer. We'd hire him again in a heartbeat.",
    image: client6,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* --- Consistent Titles --- */}
        <h3 className="section-pretitle">Testimonials</h3>
        <h2 className="section-title">What My Clients Say</h2>

        <Swiper
          // --- Swiper Modules ---
          modules={[Autoplay, Pagination, Navigation]}
          
          // --- Swiper Settings ---
          slidesPerView={1} // Default for mobile
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          
          // --- Responsive Breakpoints ---
          breakpoints={{
            // when window width is >= 768px (tablets)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px (desktops)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-quote-icon">“</div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="client-info">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="client-image"
                  />
                  {/* <FaUser className="client-image-fallback" /> */}
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
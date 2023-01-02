import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assests/avtar1.jpg'
import AVTR2 from '../../assests/avtar2.jpg'
import AVTR3 from '../../assests/avtar3.jpg'
import AVTR4 from '../../assests/avtar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    id: 1,
    avtar: AVTR1,
    name: "Swastika Dash",
    review: 'He is a person who believe on his own work.If you have provided him any work then he take it as his personal and give you in time completed.Just hand over your work and definitly you will get the expected development work.',
  },
  {
    id: 2,
    avtar: AVTR2,
    name: "Sen Anderson",
    review: "I have provided 2 projects to him.I really get surprised when I saw his clean work and I am really happy with Satyabrata's time sincereness",
  },
  {
    id: 3,
    avtar: AVTR3,
    name: "John Bidden",
    review: 'Satyabrata I am really satisfied with your design and development.I highly appreciate you for the designs.I will definitly do my next work from you without searching anybody on freelancer I will give it to you.',
  },
  {
    id: 4,
    avtar: AVTR4,
    name: "Sheikh Abdul Rehman",
    review: 'Satyabrata, the amount that you have charged me is really affordable and less as compared to other developers.And I am really happy with your punctuality and skills.And my request is to kindly give me time when I have my another development work',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ id, avtar, name, review })=>{
            return(
              <SwiperSlide key={id} className="testimonial">
          <div className="client__avtar">
            <img src={avtar} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import TestimonialCard from './testimonial-card'

import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    { image: "https://lh3.googleusercontent.com/a/ACg8ocLZKp9VolZ-1fiBZQpptQRDwtszDMz6dYI5Z8W80zeIcPXtjQ=w36-h36-p-rp-mo-br100", name: "Bruno Soares", text: "Lugar excelente, ótimo atendimento." },
    { image: "https://lh3.googleusercontent.com/a-/ALV-UjU33Py-xrNNk9DQHshKpopxb0uRmSEsxHe-PUkXbpJArS4vCGk=w36-h36-p-rp-mo-br100", name: "Vinicius Gimenes", text: "Ambiente muito bom e excelentes profissionais!" },
    { image: "https://lh3.googleusercontent.com/a-/ALV-UjV7DltZSOZo6j_CYKS7R6hJBOQ1tj6BIQaNhilhdglKnA-dymYF=w36-h36-p-rp-mo-br100", name: "Giovane", text: "Excelentes profissionais, ambiente bem iluminado, alta resenha e qualidade do serviço." },
    { image: "https://lh3.googleusercontent.com/a-/ALV-UjWgmBC5eUCglVbBPknMevChwL3Fy_hvoWge7gSQTbaO-B4N5ha1=w36-h36-p-rp-mo-br100", name: "BlackZamasuBR", text: "Lugar mais brabo pra você cortar o cabelo de Pinhais, só barbeiro da hora, mó resenha" },
    { image: "https://lh3.googleusercontent.com/a/ACg8ocLQtbhk6mVL-6hbCE7xX1QeuGLYE-F9jNX2eHx1DjDZjppuyw=w36-h36-p-rp-mo-br100", name: "Mari Bi", text: "Local de energia ímpar. Atendimento impecável.Super indico 💪🏻." },
    {image: "https://lh3.googleusercontent.com/a-/ALV-UjUkSi7apSVix3cgIIfob22Blul-EvlQtFSRAATn9d6svo47Ah_jTA=w36-h36-p-rp-mo-br100", name: "Guilherme De Paula", text: "Melhor barbearia, ambiente top, climatizado e muita resenha com os feras. TMJ"}
]

export default function TestimonialSlider() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <TestimonialCard {...testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
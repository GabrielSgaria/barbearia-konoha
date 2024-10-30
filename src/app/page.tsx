"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Droplet, Sparkles, MapPin, Phone, Mail, Clock, ChevronRight, CornerUpRight } from "lucide-react"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import PhotoGallery from "@/components/photo-gallery"
import TestimonialSlider from "@/components/testimonial-slider"
import NavBar from '@/components/nav-bar'

export default function HomePage() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="min-h-screen bg-corte-banner text-white bg-cover bg-top overflow-x-hidden">
        <div className='bg-black/80 backdrop-blur-sm flex items-center min-h-screen relative '>
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between">
              <motion.div
                className="text-center md:text-left md:ml-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Barbearia Konoha</h1>
                {/* <p className="text-xl mb-2">Um lugar pra você!</p> */}
                <p className="text-xl mb-6"><span className='font-bold '>Barbearia por assinatura</span>, seu visual sempre em dia por um preço fixo!</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="https://linktr.ee/barbeariakonoha" target='_blank' className='flex items-center'>
                      <Phone className="w-4 h-4 mr-2" />
                      Contato
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white">
                    <Link href="https://linktr.ee/barbeariakonoha" className='flex items-center'>
                      <Scissors className="w-4 h-4 mr-2" />
                      Assinar Plano Ilimitado
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="mb-8 md:mb-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  quality={100}
                  priority
                  sizes="(min-width: 1080px) 50vw, 100vw"
                  fill
                  src="/images/icon-logo.png"
                  alt="Barbearia Konoha Logo"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Photo Slider Section */}
      <PhotoGallery />

      {/* About Section */}
      <motion.section
        className="py-16 overflow-x-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image width={1000} height={1000} quality={100} priority src="/images/store/6.jpg" alt="Barbearia Konoha" className="rounded-lg shadow-lg w-[550px] h-[450px] sm:w-[90%] object-cover" />
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Sobre a Barbearia Konoha</h2>
              <p className="text-muted-foreground mb-4">
                A Barbearia Konoha busca entregar uma experiência diferente aos clientes, prezamos por um atendimento de excelência, ambiente agradável e profissionais de alta performance, treinados e qualificados para realizar qualquer serviço disponível, aqui você é prioridade.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md">
                <Link href="https://www.instagram.com/barbearia.konoha/" target='_blank'>
                  Conheça Nossa História
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Instagram Embed Section */}
      <section className="py-16 bg-muted overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Siga-nos no Instagram</h2>
          <div className="flex flex-col gap-5 items-center md:flex-row justify-center md:gap-2 lg:gap-10">
            <iframe
              src="https://www.instagram.com/p/C-IY-OApBwv/embed"
              width="320"
              height="550"
              className='rounded-xl shadow-md'
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/CU3GdpBP3wP/embed"
              width="320"
              height="550"
              className='rounded-xl shadow-md'
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/CWvTxNZLQS_/embed"
              width="320"
              height="550"
              className='rounded-xl shadow-md'
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background overflow-x-hidden">
        <motion.section
          id="testimonials"
          className="py-16 bg-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">O Que Nossos Clientes Dizem</h2>
            <TestimonialSlider />
          </div>
        </motion.section>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-muted overflow-x-hidden" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossas Unidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Unidade Centro de Pinhais", address: "R. Vinte e Cinco de Agosto, 231 - loja 4 - Centro, Pinhais - PR.", phone: "(41) 99826-1769", link: "https://maps.app.goo.gl/YPs5m4UMeYznwxbr7" },
              { name: "Unidade Jardim Amélia", address: "R. Juscelino Kubitscheck, 285 - Jardim Amélia, Pinhais - PR.", phone: "(41) 99850-1051", link: "https://maps.app.goo.gl/wJpL1DkcY7iuxL5b6" },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">{location.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-start sm:items-center mb-2"><MapPin className="w-4 h-4 mr-2 mt-1 sm:mt-0" /> {location.address}</p>
                    <p className="flex items-center mb-2"><Phone className="w-4 h-4 mr-2" /> {location.phone}</p>
                    <Link className="flex items-center text-primary font-bold" href={location.link} target='_blank'><CornerUpRight className="w-4 h-4 mr-2" /> Obter Rota!</Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Corte", price: "R$ 89,90", features: ["Corte Ilimitado no mês.", "10% de desconto em produtos.", "10% de desconto em outros serviços."] },
              { title: "Barba", price: "R$ 99,90", features: ["Barba Ilimitadas no mês.", "10% de desconto em produtos", "10% de desconto em outros serviços."] },
              { title: "Corte e Barba", price: "R$ 159,90", features: ["Corte ilimitados no mês.", "Barba ilimitada no mês.", "10% de desconto em produtos", "10% de desconto em outros serviços."] },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">{plan.price}/mês</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">

                          <ChevronRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md " asChild>
                      <Link href="https://linktr.ee/barbeariakonoha" target="_blank" rel="noopener noreferrer">
                        Assinar Plano
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar Seu Visual?</h2>
          <p className="text-xl mb-8">Agende seu horário agora e experimente o melhor da Barbearia Konoha!</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-background text-foreground hover:bg-background/90 shadow-md" size="lg" asChild>
              <Link href="https://linktr.ee/barbeariakonoha" target="_blank" rel="noopener noreferrer">
                Agendar Horário
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-muted" id='contact'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Barbearia Konoha</h3>
              <p className="text-muted-foreground">Estilo e precisão para o seu visual desde 2010.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />(41) 99826-1769 - Centro.</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />(41) 99850-1051 - Vila Amélia.</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" />barbeariakonoha1@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Seg - Sex: 9:20 às 20:00</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Sáb: 9:20 às 17:20</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Dom: Fechado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link target='_blank' href="https://www.facebook.com/konoha.barbershop.oficial" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </Link>
                <Link target='_blank' href="https://www.instagram.com/barbearia.konoha/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p>&copy; 2024 Barbearia Konoha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServicesSection() {
  const serviceCategories = [
    {
      id: "cortes",
      name: "Cortes",
      icon: Scissors,
      services: ["Corte", "Corte Infantil", "Raspado", "Platinado"]
    },
    {
      id: "barba",
      name: "Barba",
      icon: Scissors,
      services: ["Barba", "Barba na Máquina", "Corte e Barba"]
    },
    {
      id: "tratamentos",
      name: "Tratamentos",
      icon: Droplet,
      services: ["Hidratação", "Selagem", "Limpeza de Pele"]
    },
    {
      id: "extras",
      name: "Extras",
      icon: Sparkles,
      services: ["Sobrancelha", "Depilação Nariz", "Cone Hindu"]
    }
  ]

  return (
    <motion.section
      className="py-16 bg-muted"
      id='services'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
        <Tabs defaultValue="cortes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center justify-center gap-2">
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2 text-primary">{service}</h3>
                        <p className="text-sm text-muted-foreground mb-4">Serviço profissional de alta qualidade.</p>
                        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md">
                          <Link href="https://linktr.ee/barbeariakonoha" target="_blank">
                            Agendar
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.section>
  )
}
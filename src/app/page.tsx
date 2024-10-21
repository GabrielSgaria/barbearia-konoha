"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Droplet, Sparkles, Star, MapPin, Phone, Mail, Clock, ChevronRight, Sun, Moon } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useTheme } from "next-themes"

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Barbearia Konoha</h1>
          <p className="text-xl mb-8">Estilo e precisão para o seu visual</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Agende Agora</Button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Photo Slider Section */}
      <PhotoSlider />

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="Barbearia Konoha" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Sobre a Barbearia Konoha</h2>
              <p className="text-muted-foreground mb-4">
                Fundada com a paixão pela arte da barbearia, a Barbearia Konoha traz o espírito dos ninjas para o mundo dos cortes masculinos. Nossa equipe de barbeiros altamente treinados está pronta para proporcionar uma experiência única de cuidado pessoal.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Naruto U.", text: "O melhor corte da vila! Sempre saio daqui pronto para ser Hokage." },
              { name: "Sasuke U.", text: "Atendimento impecável e ambiente acolhedor. Recomendo!" },
              { name: "Kakashi H.", text: "Profissionais habilidosos que sabem lidar até com os cabelos mais rebeldes." },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossas Unidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Unidade Centro", address: "Rua Principal, 123 - Centro", phone: "(11) 1234-5678" },
              { name: "Unidade Zona Sul", address: "Av. das Árvores, 456 - Jardim Botânico", phone: "(11) 9876-5432" },
            ].map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{location.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="flex items-center mb-2"><MapPin className="w-4 h-4 mr-2" /> {location.address}</p>
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {location.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Básico", price: "R$ 50", features: ["1 corte por mês", "10% de desconto em produtos"] },
              { title: "Ninja", price: "R$ 100", features: ["2 cortes por mês", "1 barba por mês", "20% de desconto em produtos"] },
              { title: "Hokage", price: "R$ 150", features: ["Cortes ilimitados", "Barbas ilimitadas", "30% de desconto em produtos"] },
            ].map((plan, index) => (
              <Card key={index}>
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href="https://cashbarber.com.br/barbeariakonoha" target="_blank" rel="noopener noreferrer">
                      Assinar Plano
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar Seu Visual?</h2>
          <p className="text-xl mb-8">Agende seu horário agora e experimente o melhor da Barbearia Konoha!</p>
          <Button className="bg-background text-foreground hover:bg-background/90" size="lg" asChild>
            <a href="https://cashbarber.com.br/barbeariakonoha" target="_blank" rel="noopener noreferrer">
              Agendar Horário
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Barbearia Konoha</h3>
              <p className="text-muted-foreground">Estilo e precisão para o seu visual desde 2010.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (11) 1234-5678</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contato@barbeariakonoha.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Seg - Sex: 9h às 20h</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Sáb: 9h às 18h</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Dom: Fechado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0  01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081  1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344  1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
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
    <section className="py-16 bg-muted">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-primary">{service}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Serviço profissional de alta qualidade.</p>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Agendar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function PhotoSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Galeria de Fotos</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                <img
                  src={`/placeholder.svg?height=400&width=600&text=Foto ${index}`}
                  alt={`Foto ${index}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
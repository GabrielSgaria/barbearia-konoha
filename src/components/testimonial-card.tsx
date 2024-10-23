import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

interface TestimonialProps {
  image: string
  name: string
  text: string
}

export default function TestimonialCard({ image, name, text }: TestimonialProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={image} alt={`Image ${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold">{name}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
      <CardFooter>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
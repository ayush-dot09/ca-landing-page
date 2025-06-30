import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  studentName: string
  testimonial: string
  rating: number
  studentImage?: string
  studentTitle?: string
  company?: string
}

const TestimonialCard = ({
  studentName,
  testimonial,
  rating,
  studentImage,
  studentTitle,
  company
}: TestimonialCardProps) => {
  return (
    <Card className="group hover-lift shadow-camonk hover:shadow-camonk-lg border-0 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <CardContent className="p-6 relative z-10">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-blue-600" />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                )}
              />
            ))}
            <span className="ml-2 text-sm font-bold text-gray-900">{rating}</span>
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 mb-6 leading-relaxed italic text-base relative">
          "{testimonial}"
        </blockquote>

        {/* Student Info */}
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
            {studentImage ? (
              <Image
                src={studentImage}
                alt={studentName}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-white text-sm font-semibold">
                  {studentName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{studentName}</h4>
            {studentTitle && (
              <p className="text-sm text-gray-600 font-medium">{studentTitle}</p>
            )}
            {company && (
              <p className="text-xs text-blue-600 font-semibold">{company}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard

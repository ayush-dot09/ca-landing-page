import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, MapPin, Award } from 'lucide-react'


interface MentorCardProps {
  name: string
  title: string
  image?: string
  company?: string
  rating?: number
  specialization?: string[]
}

const MentorCard = ({
  name,
  title,
  image,
  company,
  rating,
  specialization
}: MentorCardProps) => {
  return (
    <Card className="group hover-lift shadow-camonk hover:shadow-camonk-lg border-0 bg-white min-w-[300px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <CardContent className="p-6 relative z-10">
        {/* Mentor Image */}
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-white text-lg font-semibold">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{name}</h3>
            <p className="text-sm text-gray-600 font-medium">{title}</p>
            {company && (
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{company}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        {rating && (
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
              <span className="text-sm font-semibold text-gray-700">{rating}</span>
              <span className="text-xs text-gray-500 ml-1">(4.8)</span>
            </div>
            <div className="ml-auto flex items-center text-xs text-gray-500">
              <Award className="w-3 h-3 mr-1" />
              <span>Top Mentor</span>
            </div>
          </div>
        )}

        {/* Specialization */}
        {specialization && specialization.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specialization.slice(0, 2).map((spec, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200"
              >
                {spec}
              </span>
            ))}
            {specialization.length > 2 && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                +{specialization.length - 2} more
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default MentorCard

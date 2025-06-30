import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Users, Star } from 'lucide-react'
import { cn, formatNumber } from '@/lib/utils'

interface CourseCardProps {
  title: string
  category: string
  price: number
  originalPrice?: number
  trustedBy: number
  image?: string
  href: string
  isFree?: boolean
}

const CourseCard = ({
  title,
  category,
  price,
  originalPrice,
  trustedBy,
  image,
  href,
  isFree = false
}: CourseCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'interview prep':
        return 'bg-blue-600 text-white'
      case 'upskill':
        return 'bg-green-600 text-white'
      case 'masterclass':
        return 'bg-purple-600 text-white'
      case 'mentorship':
        return 'bg-orange-600 text-white'
      default:
        return 'bg-gray-600 text-white'
    }
  }

  return (
    <Card className="group overflow-hidden hover-lift shadow-camonk hover:shadow-camonk-lg border-0 bg-white">
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <span className="text-white text-lg font-semibold relative z-10">{category}</span>
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={cn(
            "text-xs font-semibold px-3 py-1 rounded-full shadow-lg",
            getCategoryColor(category)
          )}>
            {category}
          </span>
        </div>

        {/* Free Badge */}
        {isFree && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse-glow">
              FREE
            </span>
          </div>
        )}
      </div>

      {/* Course Content */}
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Trusted By */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-2 text-blue-500" />
          <span>Trusted by {formatNumber(trustedBy)}+</span>
        </div>
      </CardContent>

      {/* Pricing */}
      <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isFree ? (
            <span className="text-2xl font-bold text-green-600">₹Free</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-gray-900">₹{price.toLocaleString()}</span>
              {originalPrice && originalPrice > price && (
                <span className="text-lg text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
              )}
            </>
          )}
        </div>

        <Button asChild variant="camonk" size="sm" className="font-semibold">
          <Link href={href}>
            Learn more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CourseCard

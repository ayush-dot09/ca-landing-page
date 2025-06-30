import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  readTime?: number
  featuredImage?: string
  href: string
  publishedAt?: string
  author?: string
}

const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  featuredImage, 
  href, 
  publishedAt, 
  author 
}: BlogCardProps) => {
  return (
    <Link href={href} className="group">
      <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
        {/* Featured Image */}
        <div className="relative h-48 bg-gray-200">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-500 to-pink-600">
              <span className="text-white text-lg font-semibold">{category}</span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              {author && <span>{author}</span>}
              {publishedAt && (
                <>
                  <span>•</span>
                  <span>{publishedAt}</span>
                </>
              )}
            </div>
            {readTime && (
              <span>{readTime} min read</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard

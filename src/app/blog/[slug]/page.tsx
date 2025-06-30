'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts, type BlogPost } from '@/lib/payload'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getBlogPosts({ isPublished: true })
        const foundPost = posts.find(p => p.slug === slug)
        
        if (foundPost) {
          setPost(foundPost)
        } else {
          // Fallback for demo
          setPost({
            id: '1',
            title: 'Blog Post Not Found',
            slug: slug,
            excerpt: 'This blog post is not available yet.',
            content: 'This blog post is not available yet. Please check back later or browse our other articles.',
            author: 'CA Monk Team',
            category: 'general',
            tags: ['Blog'],
            isPublished: true,
            isFeatured: false,
            publishedAt: 'Recently',
            featuredImage: {
              url: '/blog-images/default.webp',
              alt: 'CA Monk Blog'
            }
          })
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        setPost({
          id: '1',
          title: 'Blog Post Not Found',
          slug: slug,
          excerpt: 'This blog post is not available yet.',
          content: 'This blog post is not available yet. Please check back later or browse our other articles.',
          author: 'CA Monk Team',
          category: 'general',
          tags: ['Blog'],
          isPublished: true,
          isFeatured: false,
          publishedAt: 'Recently',
          featuredImage: {
            url: '/blog-images/default.webp',
            alt: 'CA Monk Blog'
          }
        })
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          {/* Categories */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center text-gray-600 mb-6">
            <div className="flex items-center mr-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">CM</span>
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
            <span>{post.publishedAt}</span>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="text-gray-700 leading-relaxed">
            {typeof post.content === 'string' ? (
              <p>{post.content}</p>
            ) : (
              <div>
                <p>This is a detailed blog post about {post.title.toLowerCase()}.</p>
                <p>Content will be rendered here when integrated with Payload CMS rich text editor.</p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}

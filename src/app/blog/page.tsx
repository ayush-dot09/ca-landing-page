'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts, type BlogPost } from '@/lib/payload'

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Placement', slug: 'placement' },
  { name: 'Upskill', slug: 'upskill' },
  { name: 'CA Student', slug: 'ca-student' },
  { name: 'Mentorship', slug: 'mentorship' },
  { name: 'General', slug: 'general' }
]

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  // Fallback static data
  const fallbackPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Top CA Firms in Agra for Articleship',
      slug: 'top-ca-firms-in-agra-for-articleship',
      excerpt: 'Discover the top CA Firms in Agra. Gain hands-on experience in auditing and taxation to build a strong foundation for your CA career.',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '5 days ago',
      featuredImage: {
        url: '/blog-images/agra.webp',
        alt: 'CA Firms in Agra'
      }
    },
    {
      id: '2',
      title: 'Top 10 Essential Interview Questions for Internal Audit',
      slug: 'top-10-essential-interview-questions-for-internal-audit',
      excerpt: 'Top 10 interview questions for internal audit with expert tips to help you prepare and succeed in your next audit job interview.',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '3 weeks ago',
      featuredImage: {
        url: '/blog-images/internal-audit.webp',
        alt: 'Interview Questions for Internal Audit'
      }
    },
    {
      id: '3',
      title: 'A Guide to ICAI Women Placement Drive 2025',
      slug: 'a-guide-to-icai-women-placement-drive-2025',
      excerpt: 'Looking for remote work as a female Chartered Accountant? Explore the ICAI Women Placement Drive 2025 & Apply now!',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '2 months ago',
      featuredImage: {
        url: '/blog-images/women-placement.webp',
        alt: 'ICAI Women Placement Drive'
      }
    },
    {
      id: '4',
      title: 'Top CA Firms in Bhopal for Articleship',
      slug: 'top-ca-firms-in-bhopal-for-articleship',
      excerpt: 'Discover the top CA Firms in Bhopal. Gain hands-on experience in auditing and taxation to build a strong foundation for your CA career.',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '3 months ago',
      featuredImage: {
        url: '/blog-images/bhopal.webp',
        alt: 'CA Firms in Bhopal'
      }
    },
    {
      id: '5',
      title: 'Top CA Firms in Trivandrum for Articleship',
      slug: 'top-ca-firms-in-trivandrum-for-articleship',
      excerpt: 'Discover the top CA Firms in Trivandrum. Gain hands-on experience in auditing and taxation to build a strong foundation for your CA career.',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '3 months ago',
      featuredImage: {
        url: '/blog-images/trivandrum.webp',
        alt: 'CA Firms in Trivandrum'
      }
    },
    {
      id: '6',
      title: 'Top CA Firms in Kochi for Articleship',
      slug: 'top-ca-firms-in-kochi-for-articleship',
      excerpt: 'Discover the top CA Firms in Kochi. Gain hands-on experience in auditing and taxation to build a strong foundation for your CA career.',
      content: '',
      author: 'CA Monk Team',
      category: 'general',
      tags: ['Blog', 'CA Student', 'General'],
      isPublished: true,
      isFeatured: false,
      publishedAt: '3 months ago',
      featuredImage: {
        url: '/blog-images/kochi.webp',
        alt: 'CA Firms in Kochi'
      }
    }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts({ isPublished: true })
        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts)
          setFilteredPosts(fetchedPosts)
        } else {
          // Use fallback data if no posts from CMS
          setPosts(fallbackPosts)
          setFilteredPosts(fallbackPosts)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Use fallback data on error
        setPosts(fallbackPosts)
        setFilteredPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredPosts(filtered)
  }, [posts, activeCategory, searchQuery])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CA Monk Blog</h1>
          <p className="text-lg text-gray-600 mb-8">
            Read our latest blog posts on CA Placements, Mentorship, Upskilling and much more.
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeCategory === category.slug
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: BlogPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 bg-gray-200">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-white text-lg font-semibold">CA MONK</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.publishedAt}</span>
        </div>

        {/* Categories */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                {tag}{index < post.tags!.length - 1 && ', '}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-xs font-bold">CM</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{post.author}</span>
        </div>
      </div>
    </article>
  )
}

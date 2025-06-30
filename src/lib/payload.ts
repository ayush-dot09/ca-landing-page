// Payload CMS API utilities
const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price: number
  originalPrice?: number
  isFree: boolean
  isFeatured: boolean
  trustedBy?: number
  image?: {
    url: string
    alt: string
  }
  instructor?: string
  duration?: string
  level?: string
  tags?: string[]
  courseUrl?: string
  status: string
}

export interface Mentor {
  id: string
  name: string
  title: string
  bio?: string
  image?: {
    url: string
    alt: string
  }
  company?: string
  experience?: number
  specialization?: string[]
  linkedinUrl?: string
  rating?: number
  totalSessions?: number
  hourlyRate?: number
  isActive: boolean
  isFeatured: boolean
}

export interface Testimonial {
  id: string
  studentName: string
  studentImage?: {
    url: string
    alt: string
  }
  testimonial: string
  rating: number
  course?: Course
  studentTitle?: string
  company?: string
  isVerified: boolean
  isFeatured: boolean
  dateSubmitted: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage?: {
    url: string
    alt: string
  }
  author: string
  category: string
  tags?: string[]
  readTime?: number
  isPublished: boolean
  isFeatured: boolean
  publishedAt?: string
  metaTitle?: string
  metaDescription?: string
}

export interface Company {
  id: string
  name: string
  logo: {
    url: string
    alt: string
  }
  website?: string
  industry?: string
  isHiringPartner: boolean
  displayOrder: number
}

// API functions
export async function getCourses(params?: {
  category?: string
  isFeatured?: boolean
  isFree?: boolean
  limit?: number
}): Promise<Course[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params?.category) searchParams.append('where[category][equals]', params.category)
    if (params?.isFeatured !== undefined) searchParams.append('where[isFeatured][equals]', params.isFeatured.toString())
    if (params?.isFree !== undefined) searchParams.append('where[isFree][equals]', params.isFree.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    
    searchParams.append('where[status][equals]', 'published')

    const response = await fetch(`${PAYLOAD_API_URL}/api/courses?${searchParams}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch courses')
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}

export async function getMentors(params?: {
  isFeatured?: boolean
  isActive?: boolean
  limit?: number
}): Promise<Mentor[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params?.isFeatured !== undefined) searchParams.append('where[isFeatured][equals]', params.isFeatured.toString())
    if (params?.isActive !== undefined) searchParams.append('where[isActive][equals]', params.isActive.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())

    const response = await fetch(`${PAYLOAD_API_URL}/api/mentors?${searchParams}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch mentors')
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching mentors:', error)
    return []
  }
}

export async function getTestimonials(params?: {
  isFeatured?: boolean
  isVerified?: boolean
  limit?: number
}): Promise<Testimonial[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params?.isFeatured !== undefined) searchParams.append('where[isFeatured][equals]', params.isFeatured.toString())
    if (params?.isVerified !== undefined) searchParams.append('where[isVerified][equals]', params.isVerified.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())

    const response = await fetch(`${PAYLOAD_API_URL}/api/testimonials?${searchParams}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials')
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getBlogPosts(params?: {
  category?: string
  isFeatured?: boolean
  isPublished?: boolean
  limit?: number
}): Promise<BlogPost[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params?.category) searchParams.append('where[category][equals]', params.category)
    if (params?.isFeatured !== undefined) searchParams.append('where[isFeatured][equals]', params.isFeatured.toString())
    if (params?.isPublished !== undefined) searchParams.append('where[isPublished][equals]', params.isPublished.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())

    const response = await fetch(`${PAYLOAD_API_URL}/api/blog-posts?${searchParams}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getCompanies(params?: {
  isHiringPartner?: boolean
  limit?: number
}): Promise<Company[]> {
  try {
    const searchParams = new URLSearchParams()
    
    if (params?.isHiringPartner !== undefined) searchParams.append('where[isHiringPartner][equals]', params.isHiringPartner.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    
    searchParams.append('sort', 'displayOrder')

    const response = await fetch(`${PAYLOAD_API_URL}/api/companies?${searchParams}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch companies')
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching companies:', error)
    return []
  }
}

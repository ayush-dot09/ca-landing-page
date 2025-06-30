import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import MentorCard from "@/components/MentorCard";
import TestimonialCard from "@/components/TestimonialCard";
import CompanyLogos from "@/components/CompanyLogos";
import MovingCompanyLogos from "@/components/MovingCompanyLogos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 h-[60vh] lg:h-[65vh] md:h-[60vh] sm:h-[55vh] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end h-full py-4 lg:py-6">
            {/* Left Content */}
            <div className="text-left animate-fade-in-up lg:order-1 z-20 relative self-center lg:self-end pb-8 lg:pb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Skyrocket Your<br />
                Finance Career
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                Learn industry-relevant skills from top mentors.<br />
                Network with aspirational peer group
              </p>

              <Button asChild variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="#scroll">
                  View courses
                </Link>
              </Button>
            </div>

            {/* Right Content - Person Image with Company Logos */}
            <div className="relative h-full flex items-end justify-center lg:order-2">
              {/* Main Person Image - Bottom Aligned */}
              <div className="absolute inset-0 z-10 overflow-hidden">
                <img
                  src="/bohemian-man-with-his-arms-crossed-removebg-preview.png"
                  alt="CA Professional"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-cover object-bottom min-h-full"
                  style={{
                    objectPosition: 'center bottom',
                    display: 'block',
                    margin: '0',
                    padding: '0',
                    marginBottom: '0',
                    paddingBottom: '0'
                  }}
                />
              </div>

              {/* Company Logos - Animated (Independent Layer) */}
              <CompanyLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">2.7+ L</div>
              <div className="text-gray-600 font-medium">Learning Hours</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">1:1</div>
              <div className="text-gray-600 font-medium">Mentorship</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Mentors</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Companies Hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Hired By Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Hired By</h2>
            <p className="text-lg text-gray-600">Join thousands of CAs working at top companies</p>
          </div>

          {/* Moving Company Logos */}
          <MovingCompanyLogos />

          <div className="text-center mt-12">
            <Button asChild variant="camonkOutline" size="lg">
              <Link href="/hire-from-us">
                View All Partners
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CA MONK?</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
              Achieve Your Goals<br />
              With Our Proven Process
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: 'Get 1:1 Mentorship by Top 1%', icon: Users },
              { title: 'Network with aspirational Peer Group', icon: Target },
              { title: 'Get Interview Ready', icon: Award },
              { title: 'Undertake Structured Courses by Experts', icon: BookOpen },
              { title: 'Crack your Dream Job Role', icon: Rocket }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover-lift shadow-camonk border-0 bg-white group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section id="scroll" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Courses By Categories</h2>
            <p className="text-lg text-gray-600">Discover Courses Aligned With Your Career Goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interview Prep',
                description: 'Cracking interview made easy',
                icon: Target,
                color: 'from-blue-500 to-blue-600',
                href: '/interview-prep'
              },
              {
                title: 'Masterclasses',
                description: 'Build foundation of technical & soft skills',
                icon: Award,
                color: 'from-purple-500 to-purple-600',
                href: '/masterclass'
              },
              {
                title: 'Upskill',
                description: 'Learn tools & skills for faster growth',
                icon: TrendingUp,
                color: 'from-green-500 to-green-600',
                href: '/upskill'
              },
              {
                title: 'Mentorship',
                description: 'Get 1:1 guidance from industry experts',
                icon: Users,
                color: 'from-orange-500 to-orange-600',
                href: '/mentorship'
              },
              {
                title: 'Free Courses',
                description: 'Explore free courses from CA Monk',
                icon: BookOpen,
                color: 'from-emerald-500 to-emerald-600',
                href: '/free-courses'
              },
              {
                title: 'Placement Drive',
                description: 'Get placed at top companies - SAMBHAV',
                icon: Rocket,
                color: 'from-red-500 to-red-600',
                href: '/placement-drive'
              }
            ].map((category, index) => {
              const Icon = category.icon
              return (
                <Link key={index} href={category.href} className="group">
                  <Card className="hover-lift shadow-camonk hover:shadow-camonk-lg border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-blue-50 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                      <div className="mt-4 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold mr-2">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 mb-8">Isn&apos;t learning an investment your future deserves?</p>

            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-2 shadow-lg">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Limited Time Offer - Up to 60% Off</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CourseCard
              title="Getting Interview Ready Workshop"
              category="Interview Prep"
              price={5999}
              originalPrice={9999}
              trustedBy={12000}
              href="/courses/getting-interview-ready-workshop"
            />
            <CourseCard
              title="Financial Modeling Workshop"
              category="Upskill"
              price={1999}
              originalPrice={4999}
              trustedBy={3621}
              href="/courses/financial-modeling-workshop"
            />
            <CourseCard
              title="Microsoft Excel Mastery Workshop"
              category="Upskill"
              price={599}
              originalPrice={4999}
              trustedBy={5587}
              href="/courses/excel-mastery-workshop"
            />
          </div>

          <div className="text-center">
            <Button asChild variant="camonk" size="lg" className="font-bold">
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Mentors</h2>
            <p className="text-lg text-gray-600 mb-8">Not just any Mentor, You get a CA Monk Mentor</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="camonk" size="lg" className="font-bold">
                <Link href="/mentorship">
                  <Users className="mr-2 w-5 h-5" />
                  All Mentors
                </Link>
              </Button>

              <Button asChild variant="camonkOutline" size="lg" className="font-bold">
                <Link href="/become-mentor">
                  Become a Mentor
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Scrolling Mentors */}
          <div className="overflow-hidden rounded-2xl">
            <div className="flex space-x-6 animate-scroll md:space-x-8 py-4">
              {[
                { name: 'CA Aayush Jain', title: 'Senior Manager, Big 4', specialization: ['Audit', 'Finance'], company: 'Deloitte' },
                { name: 'CA Akanksha Gupta', title: 'Investment Banking Analyst', specialization: ['IB', 'Valuation'], company: 'Goldman Sachs' },
                { name: 'CA Aditya V Hegde', title: 'Financial Consultant', specialization: ['Finance', 'Strategy'], company: 'McKinsey' },
                { name: 'CA Anjali Singhal', title: 'Tax Manager', specialization: ['Tax', 'Compliance'], company: 'PwC' },
                { name: 'CA Ameya Lokhande', title: 'Senior Auditor', specialization: ['Audit', 'Risk'], company: 'KPMG' },
                { name: 'CA Diksha Kundu', title: 'Finance Manager', specialization: ['Finance', 'Analytics'], company: 'EY' },
                { name: 'CA Anand Maheshwari', title: 'Consulting Partner', specialization: ['Consulting', 'Strategy'], company: 'BCG' },
                { name: 'CA Harleen Kaur', title: 'Senior Associate', specialization: ['Audit', 'Finance'], company: 'Bain' },
                { name: 'CA Ankit Agarwal', title: 'Investment Analyst', specialization: ['Investment', 'Research'], company: 'JP Morgan' },
                { name: 'CA Anmol Bedi', title: 'Financial Advisor', specialization: ['Finance', 'Planning'], company: 'Accenture' },
                { name: 'CA Divyanshu Negi', title: 'Tax Consultant', specialization: ['Tax', 'Advisory'], company: 'TCS' },
                { name: 'CA Ashutosh Agrawal', title: 'Audit Manager', specialization: ['Audit', 'Compliance'], company: 'Infosys' },
                // Duplicate for seamless loop
                { name: 'CA Aayush Jain', title: 'Senior Manager, Big 4', specialization: ['Audit', 'Finance'], company: 'Deloitte' },
                { name: 'CA Akanksha Gupta', title: 'Investment Banking Analyst', specialization: ['IB', 'Valuation'], company: 'Goldman Sachs' },
                { name: 'CA Aditya V Hegde', title: 'Financial Consultant', specialization: ['Finance', 'Strategy'], company: 'McKinsey' },
              ].map((mentor, index) => (
                <MentorCard
                  key={index}
                  name={mentor.name}
                  title={mentor.title}
                  company={mentor.company}
                  specialization={mentor.specialization}
                  rating={4.5 + (index % 5) * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Have To Say...</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of successful CAs who transformed their careers with us</p>

            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-full px-6 py-2 shadow-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-2" />
              <span className="text-sm font-semibold text-gray-700">4.9/5 Average Rating from 10,000+ Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <TestimonialCard
              studentName="Yaksha Bora"
              testimonial="This program heightened my awareness of the essential steps required to secure a dream job. It pushed me beyond my comfort zone, encouraging me to think creatively, and ultimately, it boosted my self-confidence."
              rating={5}
              studentTitle="CA Student"
            />
            <TestimonialCard
              studentName="Priya Sharma"
              testimonial="The mentorship program was exceptional. My mentor guided me through every step of the interview process and helped me land my dream job at a Big 4 firm."
              rating={5}
              studentTitle="Senior Associate"
              company="Deloitte"
            />
            <TestimonialCard
              studentName="Rahul Kumar"
              testimonial="CA Monk's courses are incredibly practical and industry-relevant. The Excel mastery course alone transformed how I approach financial modeling."
              rating={5}
              studentTitle="Financial Analyst"
              company="Goldman Sachs"
            />
          </div>

          <div className="text-center">
            <Button asChild variant="camonkOutline" size="lg" className="font-bold">
              <Link href="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Courses</h2>
            <p className="text-lg text-gray-600 mb-8">Let the learning continue - No cost, just value</p>

            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-2 shadow-lg">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm font-semibold text-green-700">100% Free - No Hidden Charges</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <CourseCard
              title="Building Financial Models From Scratch"
              category="Upskill"
              price={0}
              originalPrice={9999}
              trustedBy={11273}
              href="/courses/building-financial-models"
              isFree={true}
            />
            <CourseCard
              title="Ultimate Guide To Foreign Jobs"
              category="Interview Prep"
              price={0}
              originalPrice={4999}
              trustedBy={3621}
              href="/courses/ultimate-guide-foreign-jobs"
              isFree={true}
            />
            <CourseCard
              title="Ultimate Guide To Stat Audit"
              category="Masterclass"
              price={0}
              originalPrice={4999}
              trustedBy={5587}
              href="/courses/ultimate-guide-stat-audit"
              isFree={true}
            />
          </div>

          <div className="text-center">
            <Button asChild variant="camonkGreen" size="lg" className="font-bold">
              <Link href="/free-courses">
                <BookOpen className="mr-2 w-5 h-5" />
                View All Free Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section - CA MONK Style */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Blogs</h2>
              <p className="text-gray-600 text-lg">Trending finance topics</p>
            </div>
            <Button asChild variant="camonkOutline" size="default" className="font-semibold">
              <Link href="/blog">
                View All
              </Link>
            </Button>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MENTORSHIP Card */}
            <Link href="/blog/mentorship" className="group">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                {/* Background with professional office/mentorship scene */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-20 right-15 w-16 h-16 bg-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/8 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg">MENTORSHIP</h3>
                </div>
              </div>
            </Link>

            {/* PLACEMENT Card */}
            <Link href="/blog/placement" className="group">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                {/* Background with business/corporate scene */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-16 left-8 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-16 right-12 w-18 h-18 bg-white/5 rounded-full"></div>
                    <div className="absolute top-1/3 right-8 w-14 h-14 bg-white/8 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg">PLACEMENT</h3>
                </div>
              </div>
            </Link>

            {/* UPSKILL Card */}
            <Link href="/blog/upskill" className="group">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                {/* Background with technology/analytics scene */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-900">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-12 left-12 w-22 h-22 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-24 right-8 w-16 h-16 bg-white/5 rounded-full"></div>
                    <div className="absolute top-2/3 right-16 w-10 h-10 bg-white/8 rounded-full"></div>
                    <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-white/6 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wider drop-shadow-lg">UPSKILL</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

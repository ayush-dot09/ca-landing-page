import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Interview Prep',
      links: [
        { title: 'Interview Preparation Workshop', href: '/courses/interview-preparation-workshop' },
        { title: 'Articleship Training Workshop', href: '/courses/articleship-training-workshop' },
        { title: 'CA Monk Placement Drive', href: '/courses/placement-drive' },
        { title: 'Company Guides', href: '/company-guides' },
        { title: 'Aptitude Test', href: '/aptitude-test' },
        { title: 'Free Resources', href: '/free-resources' },
      ]
    },
    {
      title: 'Masterclass',
      links: [
        { title: 'Statutory Audit', href: '/courses/statutory-audit' },
        { title: 'Finance', href: '/courses/finance' },
        { title: 'Direct Tax', href: '/courses/direct-tax' },
        { title: 'Investment Banking', href: '/courses/investment-banking' },
        { title: 'Management Consulting', href: '/courses/management-consulting' },
      ]
    },
    {
      title: 'UpSkill',
      links: [
        { title: 'Excel Mastery', href: '/courses/excel-mastery' },
        { title: 'Financial Modeling', href: '/courses/financial-modeling' },
        { title: 'Alteryx For Data Analytics', href: '/courses/alteryx' },
        { title: 'Python For Finance', href: '/courses/python-finance' },
        { title: 'SAP FICO', href: '/courses/sap-fico' },
        { title: 'Tableau', href: '/courses/tableau' },
      ]
    },
    {
      title: 'Popular Articles',
      links: [
        { title: 'Crush interviews with 8 tricks', href: '/blog/crush-interviews-8-tricks' },
        { title: '16 questions Big 4 asks', href: '/blog/16-questions-big-4' },
        { title: 'How Analytics Empowers CAs', href: '/blog/analytics-empowers-cas' },
        { title: 'Mentorship is vital for CAs', href: '/blog/mentorship-vital-cas' },
        { title: 'Digital Marketing For CAs', href: '/blog/digital-marketing-cas' },
      ]
    },
    {
      title: 'Partnership',
      links: [
        { title: 'Hire From CA Monk', href: '/hire-from-us' },
        { title: 'Become A Mentor', href: '/become-mentor' },
        { title: 'Careers @ CA Monk', href: '/careers' },
      ]
    },
    {
      title: 'Mentorship',
      links: [
        { title: '1:1 Mentorship', href: '/mentorship' },
        { title: 'Student Mentorship', href: '/student-mentorship' },
        { title: 'Resume Review', href: '/resume-review' },
        { title: 'Mock Interview', href: '/mock-interview' },
        { title: 'Events', href: '/events' },
      ]
    },
    {
      title: 'Tools',
      links: [
        { title: 'Resume Scorer', href: '/tools/resume-scorer' },
        { title: 'AI Interview Bot', href: '/tools/interview-bot' },
        { title: 'Articleship Scorer', href: '/tools/articleship-scorer' },
        { title: 'Salary Estimator', href: '/tools/salary-estimator' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Free Courses', href: '/free-courses' },
        { title: 'Finance Jobs', href: '/jobs' },
        { title: 'Blog', href: '/blog' },
        { title: 'Testimonials', href: '/testimonials' },
        { title: 'Wall Of Fame', href: '/wall-of-fame' },
        { title: 'Verify Certificate', href: '/verify-certificate' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Refund Policy', href: '/refund-policy' },
        { title: 'Terms & Conditions', href: '/terms-conditions' },
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Newsletter Section - First Column */}
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">CA MONK</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Learn industry-relevant skills from top mentors. Network with aspirational peer group. Get Interview Ready with CA MONK.
                </p>

                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Get the latest updates on courses and career insights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
                      />
                    </div>
                    <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg whitespace-nowrap">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="col-span-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media and App Links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <span className="text-sm font-bold text-white">Follow us on:</span>
                <div className="flex space-x-4">
                  <Link href="https://www.youtube.com/c/CAShivamPalan" className="text-gray-400 hover:text-red-500 transition-all duration-200 hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/ca_monk/" className="text-gray-400 hover:text-pink-500 transition-all duration-200 hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/company/ca-monk/" className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                  <Link href="https://t.me/camonk8" className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Download our app:</span>
                </div>
                <div className="flex space-x-3">
                  <Link href="#" className="inline-block group">
                    <div className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg flex items-center space-x-2 h-10 transition-all duration-200 group-hover:scale-105 shadow-lg">
                      <div className="text-xs">
                        <div>Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="inline-block group">
                    <div className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg flex items-center space-x-2 h-10 transition-all duration-200 group-hover:scale-105 shadow-lg">
                      <div className="text-xs">
                        <div>Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-400">
                Copyright © 2024 CA MONK. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Made with ❤️ for CA Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

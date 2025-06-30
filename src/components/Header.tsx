'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X, ShoppingCart } from 'lucide-react'

interface NavigationItem {
  title: string
  href: string
  badge?: string
  submenu?: {
    title: string
    subtitle: string
    href: string
  }[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems: NavigationItem[] = [
    {
      title: 'Interview Prep',
      href: '/interview-prep',
      submenu: [
        { title: 'Interview Prep Workshop', subtitle: 'Crack Interviews @ Top Companies', href: '/courses/interview-prep-workshop' },
        { title: 'Mega Prep Bootcamp', subtitle: 'Ace ICAI Campus Placements', href: '/courses/mega-prep-bootcamp' },
        { title: 'Articleship Training Masterclass', subtitle: 'Land Articleship for your dream job', href: '/courses/articleship-training' },
        { title: 'Industrial Training Masterclass', subtitle: 'Free masterclass for CA Articles', href: '/courses/industrial-training' },
        { title: 'Free resources', subtitle: 'Resources to kickstart your interview prep', href: '/free-resources' },
        { title: 'Placement drive', subtitle: 'Get hired by top companies', href: '/placement-drive' },
        { title: 'Company Guides', subtitle: 'Interview process & prep simplified', href: '/company-guides' },
        { title: 'Aptitude tests', subtitle: 'Brush up your technical concepts', href: '/aptitude-tests' },
      ]
    },
    {
      title: 'Masterclass',
      href: '/masterclass',
      submenu: [
        { title: 'Statutory Audit', subtitle: 'Perform Stat Audit like BIG 4 Consultant', href: '/courses/statutory-audit' },
        { title: 'Internal Audit', subtitle: 'Optimize company process to profitability', href: '/courses/internal-audit' },
        { title: 'Finance', subtitle: 'Your entry into Finance domain', href: '/courses/finance' },
        { title: 'Indirect Taxation', subtitle: 'Become an Indirect Tax Expert', href: '/courses/indirect-taxation' },
        { title: 'Investment Banking', subtitle: 'Become a matchmaker between companies', href: '/courses/investment-banking' },
        { title: 'Management Consulting', subtitle: 'Help businesses make right decisions', href: '/courses/management-consulting' },
        { title: 'Financial Due Diligence', subtitle: 'Your Pathway to Become an FDD Expert', href: '/courses/financial-due-diligence' },
      ]
    },
    {
      title: 'UpSkill',
      href: '/upskill',
      submenu: [
        { title: 'Financial Modelling & Valuation', subtitle: 'Your gateway to Finance & IB', href: '/courses/financial-modelling' },
        { title: 'Excel Mastery', subtitle: 'Most important foundational skill to learn', href: '/courses/excel-mastery' },
        { title: 'Sap FICO', subtitle: 'Tool used by Top MNCs for Finance', href: '/courses/sap-fico' },
        { title: 'Alteryx', subtitle: 'Present data in insightful visual dashboard', href: '/courses/alteryx' },
        { title: 'Python for Finance', subtitle: '10X your productivity using Technology', href: '/courses/python-finance' },
        { title: 'Tableau', subtitle: 'Understand your data to draw insights', href: '/courses/tableau' },
        { title: 'Google Data Studio', subtitle: 'Drive business decisions through data', href: '/courses/google-data-studio' },
      ]
    },
    {
      title: 'Tools',
      href: '/tools',
      submenu: [
        { title: 'Interview Bot', subtitle: 'Practice Mock Interviews with AI Bot', href: '/tools/interview-bot' },
        { title: 'Resume Scorer', subtitle: 'Check if your resume will be shortlisted?', href: '/tools/resume-scorer' },
        { title: 'Salary Estimator', subtitle: 'Know the market compensation for your profile', href: '/tools/salary-estimator' },
        { title: 'Articleship Scorer', subtitle: 'Check your articleship suitability', href: '/tools/articleship-scorer' },
      ]
    },
    {
      title: 'Hire From Us',
      href: '/hire-from-us',
    },
    {
      title: 'More',
      href: '#',
      submenu: [
        { title: 'WhatsApp Communities', subtitle: 'Get real-time updates on new opportunities', href: '/communities' },
        { title: 'Free Courses', subtitle: 'With recorded videos', href: '/free-courses' },
        { title: 'Events', subtitle: 'Learn with Leaders - LIVE', href: '/events' },
        { title: 'Jobs', subtitle: 'Exciting Finance Jobs @ Top Companies', href: '/jobs' },
        { title: 'Become a Mentor', subtitle: 'Teach, Mentor, Create Impact', href: '/become-mentor' },
        { title: 'Blogs', subtitle: 'Trending finance topics', href: '/blog' },
        { title: 'Testimonials', subtitle: 'Why we do what we do', href: '/testimonials' },
        { title: 'Wall Of Fame', subtitle: 'Our Champions, Our pride', href: '/wall-of-fame' },
      ]
    }
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <Link href="/courses/getting-interview-ready-workshop" className="hover:underline relative z-10 font-medium">
          🎯 Get Interview Ready Workshop - Limited Time Offer! Learn More →
        </Link>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                CA MONK
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold flex items-center rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                  >
                    {item.title}
                    {item.badge && (
                      <span className="ml-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse shadow-lg">
                        {item.badge}
                      </span>
                    )}
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      <div className="py-3">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group/item"
                          >
                            <div className="font-semibold group-hover/item:text-blue-600">{subItem.title}</div>
                            {subItem.subtitle && (
                              <div className="text-xs text-gray-500 mt-1 group-hover/item:text-blue-500">{subItem.subtitle}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <Button asChild variant="camonk" size="sm" className="font-semibold">
                <Link href="/login">
                  Login
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in-up">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                  {item.badge && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant="camonk" className="w-full font-semibold">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

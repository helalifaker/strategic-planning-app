'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, TrendingUp, FileText, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-neutral-900" />
            <span className="text-lg font-semibold tracking-tight">Strategic Planning</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Features
            </Link>
            <Link href="#demo" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Demo
            </Link>
            <Link
              href="/versions/00000000-0000-0000-0000-000000000007"
              className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-800 transition-colors"
            >
              View Demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-semibold tracking-tight leading-tight mb-6">
            Strategic Planning
            <span className="block text-neutral-600 mt-2">Made Simple</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Sophisticated financial modeling for school board members to assess building developer proposals and make informed strategic decisions through 2052.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/versions/00000000-0000-0000-0000-000000000007"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Explore Demo Scenario
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Planning Years', value: '30', suffix: 'years' },
            { label: 'Revenue Models', value: '2', suffix: 'curricula' },
            { label: 'Rent Options', value: '3', suffix: 'models' },
            { label: 'Financial Statements', value: '3', suffix: 'reports' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-semibold mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-600">{stat.suffix}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Powerful Features</h2>
            <p className="text-lg text-neutral-600">Everything you need for comprehensive financial planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Dual-Curricula Revenue Model',
                description: 'Model two distinct educational programs with separate capacities and tuition structures for accurate enrollment projections.',
              },
              {
                icon: BarChart3,
                title: 'Three Rent Calculation Models',
                description: 'Choose from fixed growth, revenue percentage, or land/built-up area models to match your partnership structure.',
              },
              {
                icon: Users,
                title: 'Dynamic Cost Scaling',
                description: 'Staff and operational costs automatically adjust based on student enrollment and capacity utilization.',
              },
              {
                icon: FileText,
                title: 'Complete Financial Statements',
                description: 'Generate P&L, Balance Sheet, and Cash Flow statements with convergence algorithms for accuracy.',
              },
              {
                icon: BarChart3,
                title: 'Scenario Comparison',
                description: 'Compare multiple scenarios side-by-side to evaluate different developer proposals and assumptions.',
              },
              {
                icon: FileText,
                title: 'Board-Ready Presentations',
                description: 'Professional presentation mode and export capabilities for board meetings and stakeholder reports.',
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-lg">
                <feature.icon className="w-10 h-10 mb-4 text-neutral-900" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Try our interactive demo with a pre-configured base case scenario showing a 10-year growth plan through 2052.
          </p>
          <Link
            href="/versions/00000000-0000-0000-0000-000000000007"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-105 shadow-xl"
          >
            View Base Case Scenario
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-200">
            <h3 className="text-lg font-semibold mb-4">Demo Scenario Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">National Curriculum</div>
                <div className="text-2xl font-semibold">950 students</div>
                <div className="text-sm text-neutral-600">Target enrollment</div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">International Curriculum</div>
                <div className="text-2xl font-semibold">475 students</div>
                <div className="text-sm text-neutral-600">Target enrollment</div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">Rent Model</div>
                <div className="text-2xl font-semibold">Fixed Growth</div>
                <div className="text-sm text-neutral-600">2.5% annual increase</div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-1">Growth Pattern</div>
                <div className="text-2xl font-semibold">10-Year Linear</div>
                <div className="text-sm text-neutral-600">Steady ramp to capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-neutral-600">
          <p>Strategic Planning Application for School Board Financial Modeling</p>
          <p className="mt-2">Built with Next.js, Supabase, and modern financial calculation engines</p>
        </div>
      </footer>
    </div>
  );
}
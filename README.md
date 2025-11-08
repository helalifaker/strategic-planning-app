# Strategic Planning Application

A sophisticated board-ready strategic planning application for school board members to assess building developer proposals through 2052 with Apple-quality design and real-time scenario modeling.

## 🎯 Overview

This application helps school board members evaluate different building developers based on land/construction yield models and make strategic planning decisions for the school's financial future through 2052.

## ✨ Key Features

- **Apple-Quality Design**: Modern Minimalism Premium interface following Apple best practices
- **30-Year Strategic Planning**: Historical (2023-2024), Near-term (2025-2027), and Long-term (2028-2052) projections
- **Complex Revenue Modeling**: Dual-curricula with individual capacity and tuition structures
- **Flexible Rent Models**: Support for three different rent calculation methodologies
- **Dynamic Cost Scaling**: Teacher/non-teacher costs automatically adjust based on student count
- **Real-time Scenario Modeling**: Instant calculations and scenario comparisons
- **Financial Statement Generation**: P&L, Balance Sheet, and Cash Flow with convergence algorithms
- **Developer Assessment Tools**: Board-ready reporting for evaluating building proposals

## 🏗️ Architecture

### Technology Stack
- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn/ui, Lucide React
- **Financial Calculations**: Decimal.js for high-precision arithmetic
- **Deployment**: Vercel

### Core Components
- **Admin Interface**: Environment-linked assumptions and global defaults
- **Planning Interface**: Version-based assumptions and scenario modeling
- **Financial Engine**: Complete convergence loop with P&L → Balance Sheet → Cash Flow iterations
- **CAPEX Module**: Depreciation calculations for building and equipment purchases
- **Export Capabilities**: PDF generation and professional chart rendering

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- pnpm (recommended) or npm
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/helalifaker/strategic-planning-app.git
cd strategic-planning-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Supabase credentials in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Business Logic

### Planning Horizons
- **Historical**: 2023-2024 (actual data)
- **Near-term**: 2025-2027 (5-year strategic planning)
- **Long-term**: 2028-2052 (25-year projections - most critical for developer assessment)

### Revenue Model
- Two separate curricula within the school
- Each curriculum has maximum capacity and individual tuition fees
- Automatic aggregation of both revenue streams

### Cost Model
- Teacher costs scale with student enrollment
- Non-teacher costs automatically adjust
- Dynamic recalculation as assumptions change

### Rent Models (3 Types)
1. **Fixed Value**: Fixed amount with growth pattern
2. **Revenue Percentage**: Percentage of total revenue
3. **Land + Construction**: Land (sqm × cost) + Built-Up Area (sqm × cost)

## 🏛️ Database Schema

The application uses a comprehensive Supabase database with the following key tables:

- `organizations` - School organization data
- `versions` - Planning versions/scenarios
- `admin_assumptions` - Global environment assumptions
- `version_assumptions` - Version-specific assumptions
- `version_rent` - Rent model configurations
- `admin_fixed_capex_class` - CAPEX depreciation classes
- `version_capex_additions` - CAPEX additions per version
- `calculations` - Financial statement results

## 📈 Financial Engine

The application includes a sophisticated financial calculation engine that:

1. **Convergence Algorithm**: Iteratively balances P&L, Balance Sheet, and Cash Flow
2. **CAPEX Integration**: Depreciation calculations with useful life tracking
3. **Working Capital**: Automatic calculation of AR, AP, and inventory changes
4. **Debt Management**: Dynamic debt structuring and interest calculations
5. **Tax Calculations**: Corporate tax with net operating loss carryforwards

## 🎨 Design System

The application follows Apple's design principles:

- **Typography**: SF Pro Display font family
- **Grid System**: 8pt spacing grid
- **Color Palette**: 90% neutral grays for professional appearance
- **Layout**: Card-based design with subtle shadows
- **Interactivity**: Smooth transitions and micro-animations

## 📱 User Experience

- **Board-Ready Interface**: Designed for executive-level presentations
- **Intuitive Navigation**: No training required for board members
- **Real-time Updates**: Instant calculation updates as assumptions change
- **Responsive Design**: Optimized for desktop and tablet use
- **Professional Charts**: Publication-quality financial visualizations

## 🔧 Development

### Project Structure
```
app/
├── api/                    # API routes
├── admin/                  # Admin interface
├── versions/               # Planning interface
├── compare/                # Scenario comparison
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx               # Home page

lib/
├── engine/                 # Financial calculation engine
├── supabase/              # Supabase client and utilities
├── types/                 # TypeScript type definitions
└── utils/                 # Helper utilities

components/
└── ui/                    # Reusable UI components
```

### Financial Calculation Engine
The core calculation engine is located in `lib/engine/index.ts` and includes:
- Complete financial statement generation
- Convergence algorithms for accuracy
- CAPEX depreciation calculations
- Dynamic cost scaling based on student count
- Multi-year projection capabilities

## 🧪 Testing

Test the application with the provided demo scenario:
- Navigate to `/versions/00000000-0000-0000-0000-000000000007`
- Click "Run Calculation" to see the financial engine in action
- Observe convergence status and financial statement generation

## 📋 Key Dependencies

- `next`: Next.js 16 framework
- `react`: React 19 UI library
- `@supabase/supabase-js`: Supabase client
- `decimal.js`: High-precision decimal arithmetic
- `lucide-react`: Icon library
- `tailwindcss`: CSS framework
- `@types/node`: Node.js type definitions

## 🤝 Contributing

This is a board-ready application designed for strategic planning and developer assessment. For modifications or enhancements, ensure any changes maintain the Apple-quality design standards and professional presentation requirements.

## 📄 License

Private repository - All rights reserved.

## 🏢 Target Audience

Designed specifically for school board members who need to:
- Assess building developer proposals
- Make long-term strategic financial decisions
- Compare multiple development scenarios
- Present findings to stakeholders
- Ensure financial sustainability through 2052

---

**Built with ❤️ for strategic school planning and developer assessment**
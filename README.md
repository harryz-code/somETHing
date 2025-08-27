# somETHing v2

A Next.js-based Ethereum education and content platform that puts the human story at the center of blockchain education.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "somETHing v2"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
somETHing v2/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── badge.tsx     # Badge component
│   │   ├── button.tsx    # Button component
│   │   ├── card.tsx      # Card component
│   │   └── progress.tsx  # Progress component
│   ├── audience-section.tsx
│   ├── builder-profiles.tsx
│   ├── distribution-profiles.tsx
│   ├── footer.tsx
│   ├── funding-breakdown.tsx
│   ├── hero-section.tsx
│   └── project-overview.tsx
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities (cn function)
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives
- **Class Variance Authority** - Component variant management

## 🎨 Design System

The project uses a custom design system with:
- **Primary Color**: Ethereum-inspired green (`#10B981`)
- **Secondary Colors**: Muted grays and accents
- **Typography**: Inter font family
- **Components**: Consistent card, button, badge, and progress components

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: CSS variables for theme switching
- **Accessible**: ARIA labels and semantic HTML
- **Performance**: Optimized with Next.js features
- **Type Safety**: Full TypeScript coverage

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚨 Issues Fixed

The following issues were resolved during setup:

1. **Missing Project Structure**: Created proper Next.js App Router structure
2. **Import Path Mismatch**: Fixed `distribution-channels` → `distribution-profiles` import
3. **Missing UI Components**: Created Card, Badge, Button, and Progress components
4. **Missing Dependencies**: Installed all required packages
5. **CSS Configuration**: Set up proper Tailwind CSS with design tokens
6. **TypeScript Errors**: Resolved all type checking issues

## 🎯 Next Steps

Before deployment, consider:

1. **Environment Variables**: Set up any required environment variables
2. **SEO Optimization**: Add meta tags and structured data
3. **Analytics**: Integrate analytics tracking
4. **Testing**: Add unit and integration tests
5. **Performance**: Optimize images and bundle size
6. **Security**: Review and secure any sensitive data

## 📄 License

This project is part of the somETHing Ethereum education initiative.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This is a v2 iteration of the somETHing project, focusing on improved user experience and modern web technologies.

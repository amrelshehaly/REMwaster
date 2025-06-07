# Remwaste - Skip Hire Services

A modern React application for skip hire and waste removal services. Browse available skips, view pricing details, and select the right size for your project.

## 🚀 Live Demo

**Try it online:** [CodeSandbox](https://codesandbox.io/p/github/amrelshehaly/REMwaster/draft/wonderful-hermann)

## 📋 Features

- Browse available skip sizes (5-yard, 8-yard, etc.)
- View pricing with VAT and transport costs
- Interactive skip selection with preview
- Responsive design with dark mode support
- Optimized performance with React.memo and lazy loading

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS with BEM methodology
- **Architecture:** Atomic Design Pattern

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amrelshehaly/REMwaster.git
   cd REMwaster/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Tooltip/
│   │   └── ...
│   └── molecules/      # Composite components
│       ├── SkipList/
│       └── SkipPreview/
├── hooks/              # Custom React hooks
├── types/              # TypeScript definitions
└── assets/             # Images and static files
```

## 🎯 Performance Optimizations

- React.memo for component memoization
- useCallback for stable function references
- Image preloading for faster LCP
- Minified and compressed bundle
- CSS code splitting

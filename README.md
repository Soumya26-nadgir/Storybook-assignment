# E-commerce Component Library

A modern, accessible, and production-ready component library built with React, TypeScript, and Tailwind CSS. This project showcases reusable UI components with comprehensive Storybook documentation and end-to-end testing.

## 🚀 Features

- **Modern Components**: Button, Rating, ProductCard, and ThemeToggle components with multiple variants
- **Type Safety**: Full TypeScript support with strict type checking
- **Dark Mode**: Built-in theme switching with persistent user preference
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Storybook**: Interactive documentation with controls and docs
- **Responsive**: Mobile-first design that works on all devices
- **Tested**: Comprehensive unit and end-to-end tests with Playwright

## 🛠️ Tools & Libraries

### Core
- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint (with TypeScript support)
- Prettier

### Testing
- Playwright (E2E testing)
- Storybook (Component testing)
- React Testing Library

### UI Components
- Lucide Icons
- Class Variance Authority (for component variants)
- clsx (for conditional class names)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Storybook-1

# Install dependencies
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm test
```

## 📚 Storybook

This project uses Storybook for component development and documentation. Storybook provides an isolated environment to develop and test components in isolation.

### Running Storybook

```bash
npm run storybook
```

Storybook will be available at: http://localhost:6006

### Features

- **Interactive Controls**: Tweak component props in real-time
- **Documentation**: Auto-generated documentation for each component
- **Accessibility**: Built-in accessibility testing
- **Responsive Testing**: Test components at different viewport sizes
- **Dark Mode**: Toggle between light and dark themes

### Available Stories

1. **Button**
   - Variants: Primary, Secondary, Outline, Ghost, Link
   - States: Default, Hover, Active, Disabled, Loading
   - Sizes: sm, md, lg
   - With Icons

2. **ProductCard**
   - Default view
   - On Sale variant
   - With category badge
   - Favorite toggle functionality

3. **Rating**
   - Different sizes (sm, md, lg)
   - Read-only and interactive modes
   - Custom max ratings

4. **ThemeToggle**
   - Light/Dark mode switching
   - Persistent theme preference

## 🎨 Design Assumptions

1. **Theme System**
   - Uses CSS variables for theming
   - Supports light and dark modes
   - Responsive design with mobile-first approach

2. **Accessibility**
   - All interactive elements are keyboard navigable
   - Proper ARIA labels and roles
   - Sufficient color contrast ratios
   - Focus states for all interactive elements

3. **Component Design**
   - Reusable and composable components
   - Prop-based customization
   - Consistent spacing and typography scale
   - Smooth transitions and animations

4. **Performance**
   - Code splitting with React.lazy and Suspense
   - Optimized images and assets
   - Efficient state management

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Test Coverage
- Unit tests for individual components
- Integration tests for component interactions
- End-to-end tests for critical user flows

## 📦 Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
- **A11y**: Accessibility testing
- **Viewport**: Responsive design testing
- **Multiple Stories**: Various component states and examples

## 🎨 Design System

- **Colors**: Professional blue and gray palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent 8px spacing system
- **Animations**: Smooth transitions and hover effects

## ♿ Accessibility

All components are built with accessibility in mind:
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🧪 Testing

Components include Storybook interaction tests and accessibility validation through the A11y addon.

## 📱 Responsive Design

The library supports multiple breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

## 🔧 Tech Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Storybook 8** - Documentation
- **Lucide React** - Icons
- **class-variance-authority** - Component variants
- **clsx** - Conditional classnames
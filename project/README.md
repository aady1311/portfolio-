# Portfolio React TypeScript Project

This is a React TypeScript conversion of the original HTML portfolio.

## Project Structure

```
project/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certificates.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## Features

- **React 18** with TypeScript
- **React Router** for navigation
- **Responsive Design** - Same styling as original
- **Component-based Architecture**
- **Type Safety** with TypeScript
- **Form Handling** with state management
- **Mobile Optimized** layouts

## Pages

- **Home** - Hero section with profile and social links
- **About** - Personal introduction and background
- **Skills** - Technical skills with progress bars
- **Projects** - Timeline layout with project showcases
- **Certificates** - Grid layout of certifications
- **Contact** - Contact form with Formspree integration

## Installation

```bash
cd project
npm install
npm start
```

## Build

```bash
npm run build
```

The build folder will contain the production-ready files.

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- CSS3 (same styles as original)
- Formspree (contact form)
- BoxIcons
- ScrollReveal (for animations)

## Original Features Preserved

- All original styling and animations
- Mobile responsive design
- Timeline project layout
- Certificate grid layout
- Contact form functionality
- Social media links
- Navigation with active states
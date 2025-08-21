# 🌟 Personal Portfolio Website

A modern, responsive, and visually stunning portfolio website built with React and Vite, featuring a cosmic-themed design with dark/light mode support.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.12-teal)

## ✨ Features

### 🎨 **Modern Design**

- **Cosmic Theme**: Beautiful star background with animated meteors
- **Dual Theme Support**: Dark/Light mode toggle with smooth transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Fade-in effects, floating elements, and hover interactions

### 🚀 **Interactive Components**

- **Hero Section**: Eye-catching introduction with profile picture and floating elements
- **About Section**: Professional overview with service highlights
- **Skills Section**: Categorized skills with authentic brand logos and progress bars
- **Projects Section**: Live project embeds with GitHub links
- **Contact Form**: Functional contact form with toast notifications
- **Professional Footer**: Multi-section footer with social links

### 🛠️ **Technical Features**

- **React 19**: Latest React features with modern hooks
- **Vite 7**: Lightning-fast development and build process
- **Tailwind CSS 4**: Utility-first styling with custom theme variables
- **Font Awesome**: Authentic brand icons for technologies
- **React Router**: Client-side routing for navigation
- **React Hot Toast**: Simple and elegant toast notifications
- **ESLint**: Code quality and consistency

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FaridBerlin/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg           # Profile picture
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx      # About section with services
│   │   ├── ContactSection.jsx    # Contact form with toast
│   │   ├── Footer.jsx           # Professional footer
│   │   ├── HeroSection.jsx      # Landing section with profile
│   │   ├── Navbar.jsx           # Navigation with theme toggle
│   │   ├── ProjectsSection.jsx  # Projects showcase
│   │   ├── SkillsSection.jsx    # Skills with brand logos
│   │   ├── StarBackground.jsx   # Animated cosmic background
│   │   └── ThemedToggle.jsx     # Theme switcher component
│   ├── pages/
│   │   ├── Home.jsx             # Main page layout
│   │   └── NotFound.jsx         # 404 page
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & theme
├── package.json
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── eslint.config.js             # ESLint configuration
```

## 🎨 Customization

### Personal Information

1. **Profile Picture**: Replace `/public/images/profile.jpg` with your photo
2. **Personal Details**: Update contact information in `ContactSection.jsx`
3. **Bio & Description**: Modify text content in `HeroSection.jsx` and `AboutSection.jsx`

### Projects

Update the `projects` array in `ProjectsSection.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/username/repo",
    isLive: true,
    embedUrl: "https://your-live-project.com",
  },
];
```

### Skills

Modify the `skillCategories` object in `SkillsSection.jsx`:

```javascript
const skillCategories = {
  frontend: {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 95 },
      // Add more skills...
    ],
  },
};
```

### Theme Colors

Customize colors in `src/index.css`:

```css
:root {
  --primary: 0 84% 60%; /* Main accent color */
  --background: 197 100% 95%; /* Light background */
  --foreground: 222 47% 11%; /* Light text */
}

.dark {
  --primary: 0 84% 65%; /* Dark mode accent */
  --background: 222 47% 4%; /* Dark background */
  --foreground: 213 31% 91%; /* Dark mode text */
}
```

## 📦 Dependencies

### Core Dependencies

- **React 19.1.1**: UI library
- **React DOM 19.1.1**: DOM rendering
- **React Router DOM 7.8.1**: Client-side routing
- **Vite 7.1.2**: Build tool and dev server

### UI & Styling

- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **@tailwindcss/vite 4.1.12**: Vite plugin for Tailwind
- **Lucide React 0.539.0**: Icon library
- **Font Awesome**: Brand icons and social media icons
- **Class Variance Authority 0.7.1**: Component variants
- **clsx 2.1.1** & **tailwind-merge 3.3.1**: Conditional styling

### Features

- **React Hot Toast 2.6.0**: Toast notifications
- **@radix-ui/react-toast 1.2.15**: Toast components (legacy)

### Development

- **ESLint 9.33.0**: Code linting
- **@vitejs/plugin-react 5.0.0**: React plugin for Vite

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:

   ```javascript
   export default defineConfig({
     base: "/Portfolio/",
     // ... other config
   });
   ```

3. Add to `package.json`:

   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on push

## 🎯 Performance Features

- **Vite HMR**: Hot module replacement for instant development feedback
- **Code Splitting**: Automatic code splitting with React Router
- **Optimized Images**: Proper image optimization and lazy loading
- **Minimal Bundle**: Tree-shaking and dead code elimination
- **CSS Optimization**: Purged unused CSS in production

## 🌟 Key Highlights

### Visual Excellence

- **Cosmic Animation**: Dynamic star field with shooting meteors
- **Smooth Transitions**: 300ms transitions throughout the app
- **Professional Layout**: Clean, modern design following best practices
- **Brand Consistency**: Authentic technology logos with proper colors

### User Experience

- **Intuitive Navigation**: Smooth scrolling and clear section navigation
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Fast Loading**: Optimized assets and efficient code

### Developer Experience

- **Modern Stack**: Latest React and Vite versions
- **Type Safety**: ESLint configuration for code quality
- **Hot Reload**: Instant development feedback
- **Clean Code**: Well-organized components and utilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/FaridBerlin/Portfolio/issues).

## 👨‍💻 Author

**Farid Hima**

- Website: [Portfolio](https://faridberlin.github.io/Portfolio/)
- GitHub: [@FaridBerlin](https://github.com/FaridBerlin)
- LinkedIn: [Farid Hima](https://linkedin.com/in/farid)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <strong>Built with ❤️ using React & Tailwind CSS</strong>
</div>

# 🛠️ Portfolio Technical Implementation

## 5-Minute Code-Focused Presentation

---

## 📋 **Quick Overview**

### **⚡ Stack**: React 19 + Vite 7 + Tailwind CSS 4 + OGL + Sonner

### **🎯 Focus**: Modern WebGL backgrounds, purple-blue theme system, advanced animations

---

## 🚀 **MINUTE 1: Setup & Installation**

### **Project Creation**

```bash
npm create vite@latest portfolio -- --template react
cd portfolio && npm install
```

### **Key Dependencies**

```bash
# Core Framework
npm install react-router-dom tailwindcss @tailwindcss/vite
npm install clsx tailwind-merge lucide-react

# Advanced Features
npm install sonner ogl class-variance-authority
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

# Development & Deployment
npm install gh-pages --save-dev
```

---

## 🏗️ **MINUTE 2-3: Core Implementation**

### **Enhanced Router Setup**

```javascript
// App.jsx - Sonner Toast Integration
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-right"
        expand={true}
        richColors={true}
        closeButton={true}
        duration={4000}
        toastOptions={{
          style: {
            fontSize: "18px",
            fontWeight: "600",
            padding: "20px 24px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            minWidth: "400px",
            minHeight: "80px",
          },
          className: "sonner-toast-large",
        }}
        theme="system"
      />
    </BrowserRouter>
  );
}
```

### **Purple-Blue Theme System**

```css
/* index.css - Custom Color Variables */
:root {
  --primary: 257 91% 57%; /* Purple-blue #6625FC */
  --primary-foreground: 0 0% 98%;
}

.dark {
  --primary: 257 91% 65%; /* Lighter for dark mode */
  --primary-foreground: 213 31% 91%;
}

@utility text-glow {
  text-shadow: 0 0 10px rgba(102, 37, 252, 0.5);
}

@utility cosmic-button {
  @apply px-6 py-2 rounded-full bg-primary text-primary-foreground 
         hover:shadow-[0_0_10px_rgba(102,37,252,0.5)] hover:scale-105;
}
```

### **Conditional Background System**

```javascript
// Home.jsx - Light/Dark Mode Backgrounds
const [isDarkMode, setIsDarkMode] = useState(false);

return (
  <div
    className={`min-h-screen text-foreground ${
      isDarkMode
        ? "bg-background"
        : "bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100"
    }`}
  >
    {/* Galaxy background only in dark mode */}
    {isDarkMode && (
      <div className="fixed inset-0 z-0">
        <GalaxyBackground
          mouseRepulsion={true}
          mouseInteraction={true}
          hueShift={257} // Purple-blue theme
        />
      </div>
    )}
  </div>
);
```

---

## 💻 **MINUTE 4: Advanced Features**

### **WebGL Galaxy Background with Global Mouse Interaction**

```javascript
// GalaxyBackground.jsx - Document-level mouse events
function handleMouseMove(e) {
  const rect = ctn.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = 1.0 - (e.clientY - rect.top) / rect.height;
  targetMousePos.current = { x, y };
  targetMouseActive.current = 1.0;
}

// Listen on document for global interaction
if (mouseInteraction) {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);
}
```

### **Technology Logo Loop**

```javascript
// LogoLoop.jsx - Animated Technology Showcase
const LogoLoop = () => {
  const logos = [
    { name: "React", logo: <ReactSVG /> },
    { name: "JavaScript", logo: <JSSVG /> },
    // ... more tech logos
  ];

  return (
    <div className="overflow-hidden" style={{ marginTop: "50px" }}>
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((tech, index) => (
          <Logo key={index} name={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
};
```

### **Enhanced Toast Notifications**

```javascript
// ContactSection.jsx - Multiple Toast Types
const showToastDemo = () => {
  toast.info("🚀 Portfolio Tech Stack Info", {
    description: "Built with React 19 + Vite 7 + Tailwind CSS 4 + Sonner!",
    duration: 4000,
  });

  setTimeout(() => {
    toast.warning("⚡ Experimental Feature Alert", {
      description: "Enhanced colorful notifications with bigger icons!",
      duration: 4000,
    });
  }, 1500);
};
```

---

## ⚡ **MINUTE 5: Build & Deploy**

### **GitHub Pages Deployment**

```bash
npm run dev     # localhost:5174
npm run build   # Production build with Galaxy background
npm run deploy  # Auto-deploy to GitHub Pages
```

### **Key Technical Achievements**

- **WebGL Integration**: OGL library for performant Galaxy animations
- **Global Mouse Events**: Document-level interaction for full-page effects
- **Conditional Rendering**: Smart background switching (Galaxy vs Sky-blue)
- **Purple-Blue Branding**: Consistent #6625FC theme across all components
- **Enhanced UX**: Sonner toasts with custom styling and larger icons
- **Technology Showcase**: Animated LogoLoop with authentic brand colors

### **Performance Optimizations**

- **Conditional Galaxy**: Only renders WebGL in dark mode
- **Document Events**: Efficient global mouse tracking
- **CSS Custom Properties**: Smooth theme transitions
- **Component Lazy Loading**: Optimized bundle sizes

---

## 🎯 **Demo Highlights**

1. **Theme Toggle**: Purple-blue moon icon → Galaxy background
2. **Mouse Interaction**: Galaxy particles respond across entire page
3. **Logo Showcase**: Smooth scrolling technology loop
4. **Toast System**: Colorful notifications with enhanced styling
5. **Responsive**: Sky-blue gradient (light) / Galaxy (dark)

**Result: Professional portfolio with advanced WebGL effects and modern React architecture.**

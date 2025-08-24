import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from 'sonner'


function App() {
  

  return (
    <>
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
            fontSize: '18px',
            fontWeight: '600',
            padding: '20px 24px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            minWidth: '400px',
            minHeight: '80px',
          },
          className: 'sonner-toast-large',
        }}
        theme="system"
      />
    </BrowserRouter>
    </>
  )
}

export default App

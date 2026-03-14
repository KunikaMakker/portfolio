import { ThemeProvider } from "@/components/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
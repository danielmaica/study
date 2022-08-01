import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { Feature } from "./pages/Feature";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </Router>
  );
}

import { Routes, Route } from "react-router-dom";
import App from "./App";
import { HomePage, ProductsPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

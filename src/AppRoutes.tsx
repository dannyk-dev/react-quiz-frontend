import { Routes, Route } from "react-router-dom";
import App from "./App";
import { HomePage, ProductsPage } from "./pages";
import { RequireAuth } from "./hooks/auth/RequireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<RequireAuth child={<ProductsPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

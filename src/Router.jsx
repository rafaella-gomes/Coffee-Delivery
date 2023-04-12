import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout ";
import { SuccessPage } from "./pages/SuccessPage";
import { DefaultLayout } from "./layouts/DefaultLayout";

// import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/successpage" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}

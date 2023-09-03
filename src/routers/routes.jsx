import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

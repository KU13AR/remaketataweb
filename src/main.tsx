import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dynamic viewport height handling for in-app browsers
const updateVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

updateVH();
window.addEventListener('resize', updateVH);
window.addEventListener('orientationchange', updateVH);

createRoot(document.getElementById("root")!).render(<App />);

import { Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./routes";

export default function App() {
  return (
    <Routes>
      {appRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

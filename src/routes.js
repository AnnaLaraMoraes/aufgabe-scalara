import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Hypotenuse } from "./pages/hypotenuse/hypotenuse";
import { Mod } from "./pages/mod/mod";
import { Circumference } from "./pages/circumference/circumference";
import { Start } from "./pages/start/start";
import { Historic } from "./pages/historic/historic";
import { Explanation } from "./pages/explanation/explanation";

export default function Routes() {
  return (
    <Switch>
      <Route path="home" element={<Home />} />
      <Route path="hypotenuse" element={<Hypotenuse />} />
      <Route path="mod" element={<Mod />} />
      <Route path="circumference" element={<Circumference />} />
      <Route path="start-page" element={<Start />} />
      <Route path="historic" element={<Historic />} />
      <Route path="explanation" element={<Explanation />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Switch>
  );
}

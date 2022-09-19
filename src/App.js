import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

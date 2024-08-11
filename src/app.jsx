import { Routes, Route } from "react-router-dom";
import Footer from "./companents/footer";
import Header from "./companents/header";
import Homepage from "./companents/home";
import Xit from "./pages/hammasiniKorsatish1";
import Xit1 from "./pages/xit1";
import Xit2 from "./pages/xit2";
import Dynamicpage from "./companents/dynamic";

import Karzinka from "./pages/karzinkapage";
import Tanlangan from "./pages/tanlanganpage";
import SearchPage from "./pages/SearchPage";
import Kirish from "./companents/kirish";
import LogAuth from "./companents/Auth/logAuth";
import RegisterAuth from "./companents/Auth/registerAuth";
import Dynamicpage2 from "./companents/dynamic2";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="Xit" element={<Xit />} />
          <Route path="Xit1" element={<Xit1 />} />
          <Route path="Xit2" element={<Xit2 />} />
          <Route path="product/:id" element={<Dynamicpage />} />
          <Route path="products/:id" element={<Dynamicpage2 />} />
          <Route path="tanlangan" element={<Tanlangan />} />
          <Route path="karzinka" element={<Karzinka />} />
          <Route path="kirish" element={<Kirish />} />
          <Route path="SerchPage" element={<SearchPage />} />
          <Route path="logAuth" element={<LogAuth />} />
          <Route path="registerAuth" element={<RegisterAuth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;

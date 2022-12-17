import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Donations from "./pages/Donations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Landing from "./pages/Landing";
import NotFound from "./pages/Notfound";
import Services from "./pages/Services";

function App() {
  let title = "Family Literacy Network";
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

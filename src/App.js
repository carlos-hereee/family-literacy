import { useEffect } from "react";
import Header from "./pages/Header";

function App() {
  let title = "Family Literacy Network";
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

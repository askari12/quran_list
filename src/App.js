import Header from "./page/Header"
import HomePage from "./page/HomePage"
import NotFound from "./page/NotFound"
import NamazTimingPage from "./page/NamazTimingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/namazTimings" element={<NamazTimingPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;

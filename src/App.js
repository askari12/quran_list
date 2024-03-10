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
        <Route path="/quran_list" element={<HomePage />} />
        <Route path="/quran_list/namazTimings" element={<NamazTimingPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;

import "./App.css";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Notes } from "./Notes/Notes";
import { LoginRegister } from "./Login/LoginRegister";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Notes />} path="/" />
          <Route element={<LoginRegister />} path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

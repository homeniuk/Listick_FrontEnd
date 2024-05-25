
import ListicksPage from './components/ListicksPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PageWasNotFound from './components/PageWasNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'           element={<ListicksPage />} />
        <Route path='login'       element={<LoginPage />} />
        <Route path='register'    element={<RegisterPage />} />
        <Route path='*'           element={<PageWasNotFound/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

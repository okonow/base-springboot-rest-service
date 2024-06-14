import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Citizens } from './components/Citizens/Citizens';
import { Main} from './components/Main/Main';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/citizens" element={<Citizens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookListPage from "./pagess/BookListPage";
import AddBookPage from "./pagess/AddBookPage";
import BookDetailPage from './pagess/BookDetailPage';
import AboutPage from './pagess/AboutPage'



function HomePage() {
  return <h1 className="text-4xl font-bold text-green-500">Tailwind is working!</h1>;
}


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;


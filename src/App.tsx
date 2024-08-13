// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import { ThemeProvider } from './context/themeContext';
import Container from './components/Container';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
          <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

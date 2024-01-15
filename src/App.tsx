import { Home } from "pages";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "theme/theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

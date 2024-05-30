import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from './styles/GlobalStyle';
import { ExpenseProvider } from "./context/ExpenseContext";


const App = () => {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
};

export default App;
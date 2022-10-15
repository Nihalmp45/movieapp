import React from "react";
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import "./App.scss";



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/movie/:imdbID" element={<MovieDetail />}/>
         <Route path="*" element={<PageNotFound />}/>
         <Route path="/Register" element={<Register />}/>
         <Route path="/Login" element={<Login />}/>
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

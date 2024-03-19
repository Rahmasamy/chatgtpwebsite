import React from "react";
import { Article,CTA,Brands,Features,NavBar } from "./components";
import {Blog,FeaturesCont,Footer,Header,Possibilty,WhatGpt } from "./Containers";
import './App.css';
function App() {
  return (
    <div className="App">
     <div className="gradient__bg">
      <NavBar/>
      <Header/>
     </div>
     <Brands/>
     <WhatGpt/>
     <FeaturesCont/>
     <Possibilty/>
     <CTA/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;

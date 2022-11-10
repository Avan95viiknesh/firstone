import React from "react";
import '../App.css';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {

  const data = ['content']
  return (
    <div>
    <Header data= {data} />
    <Content data= {data} />
    <Footer data= {data}  />
    </div>
  );
};

export default Page;

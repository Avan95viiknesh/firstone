import React from "react";
import "../App.css";

const Content = ({data}) => {
  return (
    <div>
      <section className="content">
        <div className="container">
          <div className="top-section">
            <div className="left-side">
              <div className="left-side_content">
               {
                data.map((item) => {
                  return <>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  <li>{item} </li>
                  </>
                  
                  })  }
              </div>
            </div>
            <div className="right-side">
              <div className="right-side_content">
                <span className="right-side_top"> { data}</span>
                <div className="right-side_center">
                    <span className="first-content">{ data}</span>
                    <span className="second-center">{ data}</span>
                    <span className="third-center">{ data}</span>
                </div>
                <div className="right-side_bottom">
    <span>{ data}</span>
                </div>
              </div>
            </div>
             
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;

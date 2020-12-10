import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";

function ncard(val)
{
  console.log(val);
  return(
    
    <Card
    imgscr={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.links}
    />
  );
}


ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);

import React from  'react';
import './index.css';
// import ReactDOM from 'react-dom';
 
function Card1(props){
    console.log(props);
    return(<>
    <div className="cards">
      <div className="card">
        <img src={props.mysrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.sname}</span>
          <h3 className="card_title">{props.sTitle}</h3>
          <a href={props.shref} rel="noreferrer" target='_blank'>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>);
  }

export default Card1 ;
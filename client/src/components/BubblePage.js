import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import { getColors } from '../actions'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=>{
    props.getColors()
    
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default connect(state=>state, {getColors})(BubblePage);

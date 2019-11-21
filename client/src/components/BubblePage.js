import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import { getColors } from '../actions'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = ({ colors, getColors }) => {
  // const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getColors()
  }, [])

//updateColors={setColorList} 

  return (
    <>
      <ColorList colors={colors} />
      <Bubbles colors={colors} />
    </>
  );
};

const mapStateToProps = (state) => {
  return { colors: state.colorReducer.colorData }
}

export default connect(mapStateToProps, { getColors })(BubblePage);

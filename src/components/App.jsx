import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('Hello');

  const [buttonColor, setButtonColor] = useState('white');

  const handleClick = () => {
    setHeadingText('Clicked!');
  }
  
  const handleMouseOver = () => {
    setHeadingText('Mouse Over!');
    setButtonColor('black');
  }

  const handleMouseOut = () => {
    setHeadingText('Mouse Out!');
    setButtonColor('white');
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: buttonColor}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

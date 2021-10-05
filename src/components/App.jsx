import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('No Mouse Event!');

  const [buttonColor, setButtonColor] = useState('white');
  const [name, setName] = useState('')

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

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  // In HTML, elements are responsible of handling their own state.
  // For example, if you type in an input element, the value will be
  // equal to the one that you already typed.

  // In React, however, you have to set the value property to the 
  // Thing you typed manually.

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <h1>You typed {name}</h1>
      <h1>{headingText}</h1>
      <input 
      type="text" 
      placeholder="What's your name?" 
      onChange={handleChange}
      value={name} />
      
      <button 
        style={{backgroundColor: buttonColor}} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

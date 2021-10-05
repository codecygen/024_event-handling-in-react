import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('Mouse not hovered on button!');
  const [submittedName, setSubmittedName] = useState('');
  const [buttonColor, setButtonColor] = useState('white');
  const [name, setName] = useState('')

  const handleClick = () => {
    setHeadingText('Clicked!');
    setSubmittedName(name);
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

  // Alternative solution for "onClick={handleClick}" for button element
  // would be to wrap entire thing with form element (input and button elements),
  // replace "onClick={handleClick}" with "type='submit", then
  // in form element, as an attribute add this "onSubmit={handleClick}"
  // In this case you have to pass an argument inside "handleClick(e)" function,
  // Inside it write "e.preventDefault();"

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
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

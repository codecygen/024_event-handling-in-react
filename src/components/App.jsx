import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('Mouse not hovered on button!');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedLastName, setSubmittedLastName] = useState('');
  const [buttonColor, setButtonColor] = useState('white');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleClick = () => {
    setHeadingText('Clicked!');
    setSubmittedName(name);
    setSubmittedLastName(lastName);
  }
  
  const handleMouseOver = () => {
    setHeadingText('Mouse Over!');
    setButtonColor('black');
  }

  const handleMouseOut = () => {
    setHeadingText('Mouse Out!');
    setButtonColor('white');
  }

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
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
      <h1>Hello {submittedName} {submittedLastName}</h1>
      <h1>You typed {name} {lastName}</h1>
      <h1>{headingText}</h1>
      <input 
      type="text" 
      placeholder="First Name" 
      onChange={handleNameChange}
      value={name} />

      <input 
        type='text' 
        placeholder='Last Name' 
        onChange={handleLastNameChange} 
        value={lastName} />
      
      <button 
        style={{backgroundColor: buttonColor}} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

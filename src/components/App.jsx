import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('Mouse not hovered on button!');
  const [buttonColor, setButtonColor] = useState('white');
  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  });

  const [submittedFName, setSubmittedFName] = useState({
    fName: '',
    lName: ''
  });

  const handleClick = () => {
    // SubmittedFName will get all the values from
    // typed record which is fullName.
    setSubmittedFName({
      fName: fullName.fName,
      lName: fullName.lName
    });
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
    // value that you enter into input cell, this also controls
    // value attribute of the element.
    const newValue = e.target.value;

    // name attribute in input elements
    const inputName = e.target.name;
    
    // You have to write it like this because, React
    // will delete the previous fName or lName value
    // in other cases.
    inputName === 'fName' ?
      setFullName({fName: newValue, lName: fullName.lName})
      : setFullName({lName: newValue, fName: fullName.fName})

    // You can also call another function in setFullName function if you
    // want to do so.
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
      <h1>Hello {submittedFName.fName} {submittedFName.lName}</h1>
      <h1>You typed {fullName.fName} {fullName.lName}</h1>
      <h1>{headingText}</h1>
      <input 
        type="text"
        name='fName' 
        placeholder="First Name" 
        onChange={handleNameChange}
        value={fullName.fName} 
      />

      <input 
        type="text" 
        name='lName'  
        placeholder="Last Name" 
        onChange={handleNameChange}
        value={fullName.lName} 
      />
      
      <button 
        style={{backgroundColor: buttonColor}} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

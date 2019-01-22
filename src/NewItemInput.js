import React from 'react';
/*
stateless or functional component names need to start with an upper case letter
https://stackoverflow.com/a/39788120/315385
*/
function NewItemInput(props) {
  return (<input
            type="text"
            placeholder={`Enter ${props.fieldNamePrompt}`}
            value={props.value}
            onChange={(event) => props.handleChange(event)}
          />);
}

export default NewItemInput;
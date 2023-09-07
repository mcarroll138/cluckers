import React from "react";
import PropTypes from "prop-types"; 
import { v4 } from "uuid";

// function NewCluckForm(props){
//     const myStyledComponentStyles = {
//         backgroundColor: '#ecf0f1',
//         fontFamily: 'sans-serif',
//         paddingTop: '50px',         
//         justifycontent: 'center'
//       }            
//     function handleNewCluckFormSubmission(event) {
//         event.preventDefault();
//         props.onNewCluckCreation({
//             cluckName: event.target.cluckName.value,
//             cluckText: event.target.cluckText.value,
//             id: v4()
//         });
//     }
//     return (
//         <div style={myStyledComponentStyles}>
//              <form onSubmit={handleNewCluckFormSubmission}>
//         <input
//           type='text'
//           name='cluckName'
//           placeholder='Names' />
//         <textarea
//           name='cluckText'
//           placeholder='Cluck here.' />
//         <button type='submit'>Cluck!</button>
//       </form>
//         </div>
//     );
// }

// NewCluckForm.propTypes = {
//     onNewCluckCreation: PropTypes.func
// };

// export default NewCluckForm;



import styled from "styled-components"; // Import styled-components for styling

const FormContainer = styled.div`
  background-color: #ecf0f1;
  font-family: sans-serif;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column; /* Center content vertically */
  align-items: center; /* Center content horizontally */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function NewCluckForm(props) {
  function handleNewCluckFormSubmission(event) {
    event.preventDefault();
    props.onNewCluckCreation({
      cluckName: event.target.cluckName.value,
      cluckText: event.target.cluckText.value,
      id: v4()
    });
  }

  return (
    <FormContainer>
      <Form onSubmit={handleNewCluckFormSubmission}>
        <label htmlFor="cluckName">Name:</label>
        <Input
          type="text"
          id="cluckName"
          name="cluckName"
          placeholder="Enter your name"
        />

        <label htmlFor="cluckText">Cluck:</label>
        <TextArea
          id="cluckText"
          name="cluckText"
          placeholder="Cluck here."
        />

        <Button type="submit">Cluck!</Button>
      </Form>
    </FormContainer>
  );
}

NewCluckForm.propTypes = {
  onNewCluckCreation: PropTypes.func
};

export default NewCluckForm;

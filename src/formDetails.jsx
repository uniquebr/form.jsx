import React, { useState } from "react";

const FormDetails = () => {
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState(""); 
  const [email, setEmail  ] = useState(""); 
  const [address, setAddress  ] = useState(""); 
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value); // Updated function name
  }
  
  function handleChangeEmail(e){
    setEmail(e.target.value)
  }

  function handleChangeAddress(e) {
    setAddress(e.target.value);
  }


  return (
    <div>
      <h3>Personal details</h3>
      First Name <input type="text" onChange={handleChangeName} /> <p> Last Name: {name}</p>
      Last Name <input type="text" onChange={handleChangeLastName} /> <p>Last name: {LastName}</p>
      <p>Please check all the emotions that apply to you</p>
      <div> Gender :
        Male <input type="radio"  name="options" value="option1" />
        Female <input type="radio"  name="options" value="option2" />
      </div> 
      Email <input type="text" onChange={handleChangeEmail} /> <p>Email: {email}</p>
      Data of Bith <input type="date" id="date" name="date"/>
      <br />
      Address <input type="text" onChange={handleChangeAddress} />    <p>Your Address: {address}</p> 
    </div>
 
  );
};

export default FormDetails;
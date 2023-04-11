import React from "react";
import "../Dates/Dates.scss";
import { useEffect, useState } from "react";
import editIcon from "../../assets/edit-24px.svg";
import { getDates, postDate } from "../../utils/apiRequest";
import axios from "axios";

const Dates = ({info, setInfo}) => {
  
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  const [selectOption, setSelectOption] = useState('');

    //form submit
  function handleSubmit(e) {    
    e.preventDefault();
    //clear from fields
    setInputFirst();
    setInputSecond();

    e.target.reset();
    

    //sending empty array to handle multi handleSubmits
  const inputArray = [inputFirst,inputSecond,selectOption];
  const newArray = []

    for(let i =0; i <inputArray.length; i++) {
      if (inputArray[i]){
           newArray.push(inputArray[i])
        } 
        
    } 

    const postObj = {
        daily: newArray,
    };

    //  post data
    axios.post('http://localhost:8080/dates', postObj)
    .then((res) => {
         console.log(res)
         setInfo([...info, res.data]);
       }) 
       .catch((error) => console.log(error));

  }
  //for each input
  const handleFirstChange = (e) => {
    e.preventDefault()
     setInputFirst(e.target.value)
  } 
  const handleSecondChange = (e) => {
    e.preventDefault()
     setInputSecond(e.target.value)
  } 
  const handleThirdChange = (e) => {
    e.preventDefault()
     setInputThird(e.target.value)
  }
  //for dropdown list
  const handleChange = e => {
    setSelectOption(e.target.value)
    
  }

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="date">
      <form onSubmit={handleSubmit} className="date__form">
        <div className="date__form--title">
          <label className="date__form--day">Things to Do</label>
          <div className="date__form--info">
            <input
              className="date__form--details"
              type="text"
              onChange={handleFirstChange}
              value={inputFirst}
            />

           <label htmlFor="notesInput">
              <select id="dropdown" value={selectOption} onChange={handleChange}>
              <option value="option1">--Please choose an option--</option>
              <option value="Grocery List">Grocery List</option>
              <option value="Notes">Notes</option>
              <option value="Events">Events</option>
            </select>
          </label>
          
   
          </div>
          <div className="btn">
            <button className="btn__edit">edit</button>
            <button className="btn__submit" type="submit">
              {" "}
              Submit{" "}
            </button>
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dates;

import React from "react";
import "../Dates/Dates.scss";
import { useEffect, useState } from "react";
import editIcon from "../../assets/edit-24px.svg";
import { getDates, postDate } from "../../utils/apiRequest";

const Dates = (props) => {
  const [info, setInfo] = useState([]);
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  const [selectOption, setSelectOption] = useState('');

  const { dateList } = props;
    //form submit
  function handleSubmit(e) {    
    e.preventDefault();
    //clear from fields
    setInputFirst();
    setInputSecond();
    setInputThird();
    e.target.reset();
    

    //sending empty array to handle multi handleSubmits
  const inputArray = [inputFirst,inputSecond,inputThird];
  const newArray = []

    for(let i =0; i <inputArray.length; i++) {
      if (inputArray[i]){
           newArray.push(inputArray[i])
        } 
        
    } 

    console.log(newArray)

    const postObj = {
        daily: newArray,
    };

  

    //  post data
    postDate(postObj);
    
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

  // function DropdownFilter() {
  //   const [options, setOptions] = useState([
  //     'option1',
  //     'groceryList',
  //     'notes',
  //     'events',
  //     'pending'
  //   ]);
  //   const [filteredOptions, setFilteredOptions] = useState(options);
  
  //   const handleFilterChange = (event) => {
  //     const value = event.target.value.toLowerCase();
  //     const filtered = options.filter((option) => option.toLowerCase().includes(value));
  //     setFilteredOptions(filtered);
  //   };


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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              onChange={handleSecondChange}
              value={inputSecond}/>

            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              onChange={handleThirdChange}
              value={inputThird}/>
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />
           <label htmlFor="notesInput">
              <select id="dropdown" value={selectOption} onChange={handleChange}>
              <option value="option1">--Please choose an option--</option>
              <option value="option2">Grocery List</option>
              <option value="option3">Notes</option>
              <option value="option4">Events</option>
              <option value="option5">Pending</option>
            </select>
              
          </label>
          
              

           
          </div>
          <div className="btn">
            <img src={editIcon} alt="editIcon" type="text" />
            <button className="btn__submit" type="submit">
              {" "}
              Add{" "}
            </button>
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dates;

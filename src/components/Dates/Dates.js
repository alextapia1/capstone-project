import React from "react";
import "../Dates/Dates.scss";
import { useEffect, useState } from "react";
import editIcon from "../../assets/edit-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import { getDates, postDate } from "../../utils/apiRequest";

const Dates = (props) => {
  const [info, setInfo] = useState([]);
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
//   const [input, setInput] = useState();

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

  //const value = e.target.value; 
  //setInput({...input,[e.target.value]:value});

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
          <label className="date__form--day">Monday</label>
          <div className="date__form--info">
            <input
              className="date__form--details"
              type="text"
            //   placeholder={info.length !== 0 ? info[0].info : ""}
              onChange={handleFirstChange}
              value={inputFirst}
            />
            <input
              className="date__form--details"
              type="text"
              name="data"
              onChange={handleSecondChange}
              value={inputSecond}
            />
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              onChange={handleThirdChange}
              value={inputThird}/>
           
          </div>
          <div className="btn">
            <button className="btn__submit" type="submit">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" type="text" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Tuesday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />  
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Wednesday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
             />    
            
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Thursday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />          
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Friday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />  
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Saturday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />   
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>

        <div className="date__form--title">
          <label className="date__form--day">Sunday</label>
          <div className="date__form--info">
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
            <input 
              className="date__form--details" 
              type="text" 
              name="data" 
              />  
          </div>
          <div className="btn">
            <button className="btn__submit" type="text">
              {" "}
              Submit{" "}
            </button>
            <img src={editIcon} alt="editIcon" />
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dates;

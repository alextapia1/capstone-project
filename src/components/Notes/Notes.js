import React from 'react';
import '../Notes/Notes.scss';
import editIcon from "../../assets/edit-24px.svg";
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";


const Notes = () => {

const[info, setInfo] = useState ('');
const[groceryList, setGroceryList] = useState ('');
const[events, setEvents] = useState ('');
const[notes, setNotes] = useState('');
const [inputFirst, setInputFirst] = useState('');
// const [inputSecond, setInputSecond] = useState('');
// const [inputThird, setInputThird] = useState('');

function handleSubmit(e) {    
    e.preventDefault();
    //clear from fields
    setInputFirst();
    // setInputSecond();
    // setInputThird();
    e.target.reset();

    //sending empty array to handle multi handleSubmits
const inputArray = [inputFirst];
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
  // const handleSecondChange = (e) => {
  //   e.preventDefault()
  //    setInputSecond(e.target.value)
  // }
  // const handleThirdChange = (e) => {
  //   e.preventDefault()
  //    setInputThird(e.target.value)
  // }

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const chooseOption =[groceryList, notes, events]
 
  const filteredItems =chooseOption.filter((inputArray) => !inputArray);



    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__bar'></h2> </div>   
                <card className='note__title'>  
                  <h1>Grocery List</h1>
                    <div className='note__duo'>
                          <h2 className='note__info' >info{chooseOption[0]}</h2> 
                          <input type='checkbox' value='completed'></input>
                          <ul>
                                {filteredItems.map(item => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>   
                          </div>
                </card>

                <card className='note__title'>
                  <h1>Notes</h1>
                          <div className='note__duo'>
                          <h2 className='note__info' >info</h2>
                          <input type='checkbox' value='completed'></input>
                          </div>
                </card>
                <card className='note__title'>
                  <h1>Events</h1>
                  //////loop
                      //div   flex row  info 90% status 8%           
                          <h2 className='note__nfo' >info</h2>
                          <input type='checkbox' value='completed'></input>
                      ///div
                    ////finish
                </card>

            <form onSubmit={handleSubmit} className='note__form'>
        
                        <div className='note__form--title'>
                            <label className='note__form--date'>Notes</label>
                            <div className='note__form--info'>
                            <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[0].info : ""}
                             onChange={handleFirstChange}
                             value={inputFirst} />
                  
                            </div>
                            
                        </div>

                       

                      

            </form>
        </div>
    );
};

export default Notes;
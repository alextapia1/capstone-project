import React from 'react';
import '../Notes/Notes.scss';
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";
import { useActionData } from 'react-router-dom';
import axios from 'axios';


const Notes = () => {

const [info, setInfo] = useState ('');
const [groceryList, setGroceryList] = useState ('');
const [events, setEvents] = useState ('');
const [notes, setNotes] = useState('');
const [inputFirst, setInputFirst] = useState('');


// function handleSubmit(e) {    
//     e.preventDefault();
//     //clear from fields
//     setInputFirst();
   
//     e.target.reset();

//     //sending empty array to handle multi handleSubmits
// const inputArray = [inputFirst];
// const newArray = []
  
//       for(let i =0; i <inputArray.length; i++) {
//         if (inputArray[i]){
//              newArray.push(inputArray[i])
//           } 
          
//       } 
  
//       console.log(newArray)

//loop through options
  const chooseOption = [groceryList, notes, events];

   //const postObj = {
   //       daily: newArray,
     // };
  
      //  post data
     // postDate(postObj);
          

//}

 //for each input
//  const handleFirstChange = (e) =>
//     e.preventDefault()
//      setInputFirst(e.target.value)
//   } 

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);

  

    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__bar'></h2> </div>   
                <section className='note__title'> 

                  <h1>Grocery List</h1>
                    <div className='note__duo'>
                            <h2 className='note__info' >info</h2> 
                            <input type='checkbox' value='completed'></input>
                          </div>
                </section>

                <section className='note__title'>
                  <h1>Notes</h1>
                    
                          <div className='note__duo'>
                            <h2 className='note__info' >info</h2>
                            <input type='checkbox' value='completed'></input>
                          </div>
                </section>

                <section className='note__title'>
                  <h1>Events</h1>
                       
                          <div className='note__duo'>
                            <h2 className='note__nfo' >info</h2>
                            <input type='checkbox' value='completed'></input>
                          </div>
                </section>

        </div>
    );
};

export default Notes;

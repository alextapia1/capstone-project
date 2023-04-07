import React from 'react';
import '../Notes/Notes.scss';
import editIcon from "../../assets/edit-24px.svg";
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";


const Notes = () => {

const[info, setInfo] = useState ('');
const[groceryList, setGroceryList] = useState ('');
const[events, setEvents] = useState ('');
const[pending, setPending] = useState ('');
const [inputFirst, setInputFirst] = useState('');
const [inputSecond, setInputSecond] = useState('');
const [inputThird, setInputThird] = useState('');

function handleSubmit(e) {    
    e.preventDefault();
    //clear from fields
    setInputFirst();
    setInputSecond();
    setInputThird();
    e.target.reset();

    //sending empty array to handle multi handleSubmits
const inputArray = [inputFirst,inputSecond];
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
                    <h2 className='note__title'></h2> </div>   
            <form onSubmit={handleSubmit} className='note__form'>
            <div className='note__form--title'>

                            <label className='note__form--date'>Grocery List</label>
                            <div className='note__form--info'>
                            <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[0].info : ""}
                             onChange={handleFirstChange}
                             value={inputFirst} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[1].info : ""}
                             onChange={handleSecondChange}
                             value={inputSecond} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[2].info : ""}
                             onChange={handleThirdChange}
                             value={inputThird} />
                            </div>
                            <div className='btn'>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <button className='btn__submit' type='text'> Add </button>

                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Notes</label>
                            <div className='note__form--info'>
                            <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[0].info : ""}
                             onChange={handleFirstChange}
                             value={inputFirst} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[1].info : ""}
                             onChange={handleSecondChange}
                             value={inputSecond} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[2].info : ""}
                             onChange={handleThirdChange}
                             value={inputThird} />
                            </div>
                            <div className='btn'>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <button className='btn__submit' type='text'> Add </button>
                            
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Events</label>
                            <div className='note__form--info'>
                            <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[0].info : ""}
                             onChange={handleFirstChange}
                             value={inputFirst} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[1].info : ""}
                             onChange={handleSecondChange}
                             value={inputSecond} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[2].info : ""}
                             onChange={handleThirdChange}
                             value={inputThird} />
                            </div>
                            <div className='btn'>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <button className='btn__submit' type='text'> Add </button>

                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Pending</label>
                            <div className='note__form--info'>
                            <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[0].info : ""}
                             onChange={handleFirstChange}
                             value={inputFirst} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[1].info : ""}
                             onChange={handleSecondChange}
                             value={inputSecond} />
                             <input className='note__form--details'
                             type="text" placeholder={info.length !== 0 ? info[2].info : ""}
                             onChange={handleThirdChange}
                             value={inputThird} />
                            </div>
                            <div className='btn'>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <button className='btn__submit' type='text'> Add </button>
                            </div>
                            
                        </div>

            </form>
        </div>
    );
};

export default Notes;
import React from 'react';
import '../Notes/Notes.scss';
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";



const Notes = ({info, setInfo}) => {

const [groceryList, setGroceryList] = useState ('');
const [events, setEvents] = useState ('');
const [notes, setNotes] = useState('');
const [onEdit, setOnEdit] = useState('');
const [finished, setFinished] = useState('');


  const chooseOption = [groceryList, notes, events];

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
       console.log(res[0].category)
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);

     
      //filter through dropdown list
   const filteredGroceryList = info.filter((option) => option.category === "Grocery List");
   const filteredNotes = info.filter((option) => option.category === "Notes");
   const filteredEvents = info.filter((option) => option.category === "Events");
   
     
    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__bar'></h2> </div>   
                <section className='note__title'> 

                  <h1 className='note__subtitle'>Grocery List</h1>
                  {filteredGroceryList.map((option) => (
                    <div className='note__duo' key={option.item_id}>
                            <input type='checkbox' value='completed' defaultChecked={option.completed ? true : false}/> 
                            <button className='note__edit' >edit</button>
                            <h4 className='note__info' >{option.info}</h4> 
                          </div>
                             ))}
                </section>

                <section className='note__title'> 

                <h1 className='note__subtitle'>Notes</h1>
                {filteredNotes.map((option) => (
                  <div className='note__duo' key={option.item_id}>
                          <input type='checkbox' value='completed' defaultChecked={option.completed ? true : false}/> 
                          <button className='note__edit' >edit</button>
                          <h4 className='note__info' >{option.info}</h4> 
                        </div>
                          ))}
                </section>

                <section className='note__title'> 

                <h1 className='note__subtitle'>Events</h1>
                {filteredEvents.map((option) => (
                  <div className='note__duo' key={option.item_id}>
                          <input type='checkbox' value='completed' defaultChecked={option.completed ? true : false}/> 
                          <button className='note__edit' >edit</button>
                          <h4 className='note__info' >{option.info}</h4> 
                        </div>
                          ))}
                </section>

        </div>
    );
};

export default Notes;

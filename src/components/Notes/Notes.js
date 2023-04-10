import React from 'react';
import '../Notes/Notes.scss';
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";
import { useActionData } from 'react-router-dom';
import axios from 'axios';


const Notes = ({info, setInfo}) => {

// const [info, setInfo] = useState ([]);
const [groceryList, setGroceryList] = useState ('');
const [events, setEvents] = useState ('');
const [notes, setNotes] = useState('');
const [onSearchChange, setOnSearchChange] = useState('');


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

      // const handleChange = (e) => {
      //    onSearchChange(e.target.value)
      // }
      //filter through dropdown list
   const filteredGroceryList = info.filter((option) => option.category === "Grocery List");
   const filteredNotes = info.filter((option) => option.category === "Notes");
   const filteredEvents = info.filter((option) => option.category === "Events");
   
       // info.filter===category===groceryList
      // groceryList.map activity.info
    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__bar'></h2> </div>   
                <section className='note__title'> 

                  <h1>Grocery List</h1>
                  {filteredGroceryList.map((option) => (
                    <div className='note__duo' key={option.item_id}>
                            <h2 className='note__info' >{option.info}</h2> 
                            <input type='checkbox' value='completed'/> 
                          </div>
                             ))}
                </section>

                <section className='note__title'> 

                <h1>Notes</h1>
                {filteredNotes.map((option) => (
                  <div className='note__duo' key={option.item_id}>
                          <h2 className='note__info' >{option.info}</h2> 
                          <input type='checkbox' value='completed'/> 
                        </div>
                          ))}
                </section>

                <section className='note__title'> 

                <h1>Events</h1>
                {filteredEvents.map((option) => (
                  <div className='note__duo' key={option.item_id}>
                          <h2 className='note__info' >{option.info}</h2> 
                          <input type='checkbox' value='completed'/> 
                        </div>
                          ))}
                </section>

        </div>
    );
};

export default Notes;

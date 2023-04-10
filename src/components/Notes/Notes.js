import React from 'react';
import '../Notes/Notes.scss';
import { useEffect, useState } from 'react';
import { getDates, postDate } from "../../utils/apiRequest";
import { useActionData } from 'react-router-dom';
import axios from 'axios';


const Notes = (props) => {

const [info, setInfo] = useState ('');
const [groceryList, setGroceryList] = useState ('');
const [events, setEvents] = useState ('');
const [notes, setNotes] = useState('');
const [inputFirst, setInputFirst] = useState('');
const [onSearchChange, setOnSearchChange] = useState('');


  const chooseOption = [groceryList, notes, events];

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);

      const handleChange = (e) => {
         onSearchChange(e.target.value)
      }

    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__bar'></h2> </div>   
                <section className='note__title'> 

                  <h1>Grocery List</h1>
                    <div className='note__duo'>
                            <h2 className='note__info' >info</h2> 
                            <input type='checkbox' value='completed'
                             onChange={props.onSearchChange}/>
                          </div>
                </section>

                <section className='note__title'>
                  <h1>Notes</h1>
                          <div className='note__duo'>
                            <h2 className='note__info' >info</h2>
                            <input type='checkbox' value='completed'
                            onChange={props.onSearchChange}/>
                          </div>
                </section>

                <section className='note__title'>
                  <h1>Events</h1>
                          <div className='note__duo'>
                            <h2 className='note__nfo' >info</h2>
                            <input type='checkbox' value='completed'
                             onChange={props.onSearchChange}/>
                          </div>
                </section>

        </div>
    );
};

export default Notes;

import React from 'react';
import '../Dates/Dates.scss';
import { useEffect, useState } from 'react';
import editIcon from "../../assets/edit-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import { getDates, postDate } from '../../utils/apiRequest';

const Dates = (props) => {
    const [item_id, setItem_id] = useState('');
    const [data, setData] = useState([]);
  
   
    const {dateList} = props


        function handleFormSubmit(e) {
           e.preventDefault();

           const form = e.target;

           const item_id = form.item_id.value;
           const task = form.data.value;
           console.log(form)
           console.log(task)
           //    const inputvalues =  {
               //     // form.category.value,
               //     data:data
               //     }   
               //    console.log(inputvalues)
               console.log(form.category)
               console.log(form.data)
               
            }
            
            
        //  if (!item_id || !task) {
        //     //alerts are bad going to get ride of this
        //     // alert('skip to next day ')
        //     return true;
        // }

         //get date
         useEffect(() =>{
            getDates()
            .then(res => {
            console.log(res)
            setData(res)
            }).catch(error => console.log(error))
        },[]);
            
        console.log(data)
        //post data
            postDate() 
              .then((res) =>{
            })
            



    return (
        <div className='date'>
            <form onSubmit={handleFormSubmit} className='date__form'>
              
                 <div className='date__form--title'>
                            <label className='date__form--day'>Monday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" placeholder = {!(data.length===0) ? data[0].data : '' }
                            onChange={(e) => data(e.target.value)}/>
                            <input className='date__form--details' type="text" value = {data.data} 
                            onChange={(e) => setData(e.target.value)}/>
                            <input className='date__form--details' type="text" value = {data.data}
                            onChange={(e) => setData(e.target.value)} />
                            <input className='date__form--details' type="text" value = {data.data}
                            onChange={(e) => setData(e.target.value)} />
                            <input className='date__form--details' type="text" value ={data.data}
                            onChange={(e) => setData(e.target.value)} />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text' onChange={(e) => setData(e.target.value)}> Submit </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                <div className='date__form--title'>
                            <label className='date__form--day'>Tuesday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text"
                            onChange={(e) => setData(e.target.value)}/>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                
                 <div className='date__form--title'>
                            <label className='date__form--day'>Wednesday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="data" 
                            onChange={(e) => setData(e.target.value)}/>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                   
                        <div className='date__form--title'>
                            <label className='date__form--day'>Thursday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <label className='date__form--day'>Friday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <label className='date__form--day'>Saturday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <label className='date__form--day'>Sunday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>
                    
                    </form>   
            
        </div>
    );
};

export default Dates;
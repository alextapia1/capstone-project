import React from 'react';
import '../Dates/Dates.scss';
import { useEffect, useState } from 'react';
import editIcon from "../../assets/edit-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import axios from 'axios';
import { getDates } from '../../utils/apiRequest';

const Dates = () => {
    const [item_id, setItem_id] = useState('');
    const [category, setCategory] = useState('');
    const [data, setData] = useState('');
    const [complete, setComplete] = ('');
   
   

        function handleSubmit(event) {
           event.preventDefault();

           const form = event.target;
            console.log(form)
        //    const inputvalues = [ 
        //     form.category.value,
        //     form.data.value
        //     ]
            // console.log(inputvalues)
            console.log(form.category)
            console.log(form.data)

         }
    
       
         useEffect(() =>{
            console.log()
            getDates()
            .then(res => {
            console.log(res)
            
            })
        },[])
            //render data
       
            



    return (
        <div className='date'>
            <form onSubmit={handleSubmit} className='date__form'>
              
                 <div className='date__form--title'>
                            <label className='date__form--day'>{category.category}</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ={data.data} />
                            <input className='date__form--details' type="text" name ={data.data} />
                            <input className='date__form--details' type="text" name ={data.data} />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                <div className='date__form--title'>
                            <label className='date__form--day'>Tuesday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                
                 <div className='date__form--title'>
                            <label className='date__form--day'>Wednesday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
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
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
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
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
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
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
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
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='text'> Add </button>
                            <img src={editIcon} alt='editIcon'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>
                    
                    </form>   
            
        </div>
    );
};

export default Dates;
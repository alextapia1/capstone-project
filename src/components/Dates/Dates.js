import React from 'react';
import '../Dates/Dates.scss';
import { useEffect, useState } from 'react';
import editIcon from "../../assets/edit-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";
import axios from 'axios';

const Dates = () => {

    const [selectedFile, setSelectedFile] = useState('');
   

        function handleSubmit(event) {
           event.preventDefault();

           const form = event.target;

           const inputvalues = [
            form.item_id.values,
            form.category.values,
            form.data.values,
            form.complete.values,
            ]
                //axios post
         }
    
       

       
            



    return (
        <div className='date'>
            <form onSubmit={handleSubmit} className='date__form'>
              
                 <div className='date__form--title'>
                            <label className='date__form--day'>Monday</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
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
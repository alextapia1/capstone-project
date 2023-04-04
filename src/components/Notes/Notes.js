import React from 'react';
import '../Notes/Notes.scss';
import editIcon from "../../assets/edit-24px.svg";
import deleteIcon from "../../assets/delete_outline-24px.svg";

const Notes = () => {

    return (
        <div className='note'>
                <div className='note__memo'>
                    <h2 className='note__title'></h2> </div>   
            <form className='note__form'>
            <div className='note__form--title'>

                            <label className='note__form--date'>Grocery List</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Notes</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Events</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />

                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Pending</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__submit' type='text'> Submit </button>
                            <img src={editIcon} alt='editIcon' type='text'/>
                            <img src={deleteIcon} alt='deleteIcon'/>
                            </div>
                        </div>

            </form>
        </div>
    );
};

export default Notes;
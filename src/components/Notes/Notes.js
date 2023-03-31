import React from 'react';
import '../Notes/Notes.scss';

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
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Notes</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                        <div className='note__form--title'>
                            <label className='note__form--date'>Events</label>
                            <div className='note__form--info'>
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            <input className='note__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

            </form>
        </div>
    );
};

export default Notes;
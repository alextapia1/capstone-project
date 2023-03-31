import React from 'react';
import '../Dates/Dates.scss';

// const cards = [{
//     id: 1, title: "Sunday", content:"text, text, text,",
//     id: 2, title: "Monday", content:"text, text, text,",
//     id: 3, title: "Tuesday", content:"text, text, text,",
//     id: 4, title: "Wednesday", content:"text, text, text,",
//     id: 5, title: "Thursday", content:"text, text, text,",
//     id: 6, title: "Friday", content:"text, text, text,",
//     id: 7, title: "Saturday", content:"text, text, text,",
// }]

const Dates = () => {

    return (
        <div className='date'>
            <form className='date__form'>
              
                 <div className='date__form--title'>
                            <h1 className='date__form--day'>Monday</h1>
                            <label className='date__form--date'>April 10, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                <div className='date__form--title'>
                            <h1 className='date__form--day'>Tuesday</h1>
                            <label className='date__form--date'>April 11 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                
                 <div className='date__form--title'>
                            <h1 className='date__form--day'>Wednesday</h1>
                            <label className='date__form--date'>April 12, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                   
                        <div className='date__form--title'>
                            <h1 className='date__form--day'>Thursday</h1>
                            <label className='date__form--date'>April 13, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <h1 className='date__form--day'>Friday</h1>
                            <label className='date__form--date'>April 14, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <h1 className='date__form--day'>Saturday</h1>
                            <label className='date__form--date'>April 15, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>

                        <div className='date__form--title'>
                            <h1 className='date__form--day'>Sunday</h1>
                            <label className='date__form--date'>April 16, 2023</label>
                            <div className='date__form--info'>
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            <input className='date__form--details' type="text" name ="details" />
                            </div>
                            <div className='btn'>
                            <button className='btn__add' type='submit'>Comment </button>
                            </div>
                        </div>
                    
                    </form>   
            
        </div>
    );
};

export default Dates;
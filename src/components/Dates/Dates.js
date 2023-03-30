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
            <div className='date__container'>
              
                <div className='date__block'>
                    <h1 className='date__title'>Sunday</h1>
                    <p className='date__date'>April 14, 2023</p>
                        <div className='date__data'>
                            <span className='date__text'>going for a walk</span>
                            <span className='date__text'>washing clothes</span>
                            <span className='date__text'>picking up Dinner</span>
                        </div>
                </div>

                <div className='date__block'>
                        <h1 className='date__title'>Monday</h1>
                        <p className='date__date'>April 15, 2023</p>
                        <div className='date__data'>
                            <span className='date__text'>going for a walk</span>
                            <span className='date__text'>washing clothes</span>
                            <span className='date__text'>picking up Dinner</span>
                        </div>    
                 </div>

                
                        <div className='date__block'>
                            <h1 className='date__title'>Tuesday</h1>
                            <p className='date__date'>April 16, 2023</p>
                            <div className='date__data'>
                                <span className='date__text'>going for a walk</span>
                                <span className='date__text'>washing clothes</span>
                                <span className='date__text'>picking up Dinner</span>
                            </div>
                      </div>

                   <form>
                    
                    </form>   
            </div>
        </div>
    );
};

export default Dates;
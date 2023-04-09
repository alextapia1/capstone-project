import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../components/Dates/Dates";
import Notes from "../components/Notes/Notes";



const HomePage = () => {
    const [dateList, setDateList] = useState([]);
    const [featuredNote, setFeaturedNote] = useState();
    const [info, setInfo] = useState ('');
 
    
    //get date
    useEffect(() => {
      axios.get('http://localhost:8080/dates')
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
    }, [setInfo]);
    
    console.log(info, 'another one')

    return (
        <div className="home">
            <Dates dateList={dateList}/>
            <Notes featuredNote={featuredNote}/> 
        </div>
    )
}

export default HomePage;
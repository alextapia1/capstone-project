import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../components/Dates/Dates";
import Notes from "../components/Notes/Notes";



const HomePage = () => {
    const [dateList, setDateList] = useState([]);
    const [featuredNote, setFeaturedNote] = useState('');
    const [info, setInfo] = useState ([]);
 
    

    const onSearchChange = (e) =>{
      setInfo(e.target.value);
    }

    return (
        <div className="home">
            <Dates dateList={dateList} info={info} setInfo={setInfo} />
            <Notes featuredNote={featuredNote} onSearchChange={onSearchChange} info={info} setInfo={setInfo}/> 
        </div>
    )
}

export default HomePage;
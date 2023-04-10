import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../components/Dates/Dates";
import Notes from "../components/Notes/Notes";



const HomePage = () => {
    const [dateList, setDateList] = useState([]);
    const [featuredNote, setFeaturedNote] = useState('');
    const [info, setInfo] = useState ([]);
 
    
    //get date
    // useEffect(() => {
    //   axios.get('http://localhost:8080/dates')
    //   .then((res) => {
    //     console.log(res.data[0].info)
    //     setInfo(res);
    //   }) 
    //   .catch((error) => console.log(error));
    // }, [setInfo]);
    

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
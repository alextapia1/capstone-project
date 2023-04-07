import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../components/Dates/Dates";
import Notes from "../components/Notes/Notes";
import { getDates, postDate } from "../utils/apiRequest";


const HomePage = () => {
    const [dateList, setDateList] = useState([]);
    const [featuredNote, setFeaturedNote] = useState();
    const [info, setInfo] = useState ('');
    const [selectedDate, setSelectedDate] = useState(null);

  //get date
  useEffect(() => {
    getDates()
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => console.log(error));
  }, []);


    return (
        <div className="home">
            <Dates dateList={dateList}/>
            <Notes featuredNote={featuredNote}/> 
        </div>
    )
}

export default HomePage;
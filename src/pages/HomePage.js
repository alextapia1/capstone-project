import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../components/Dates/Dates";
import Notes from "../components/Notes/Notes";


const HomePage = () => {
    const [dateList, setDateList] = useState([]);
    const [featuredNote, setFeaturedNote] = useState();

    return (
        <div className="home">
            <Dates dateList={dateList}/>
            <Notes featuredNote={featuredNote}/>

        </div>
    )
}

export default HomePage;
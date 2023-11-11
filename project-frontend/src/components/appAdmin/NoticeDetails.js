
import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/NoticeDetails.css';

const NoticeDetails = () => {
    const noticeParam = useParams();
    const [notice, setNotice] = useState({});

    useEffect(() => {
        console.log(noticeParam.id);
        axios.get(`http://localhost:4200/notices/${noticeParam.id}`)
            .then((response) => {
                setNotice(response.data);
            })
            .catch((error) => {
                console.error("Error fetching notice data:", error);
            });
    }, [noticeParam.id]);

  return (
    <div className='notice-details'>
        <br></br><br></br>
        <h3>{notice.title}</h3><br></br>
        <p className='content'>{notice.content}{notice.content}{notice.content}{notice.content}{notice.content}</p><br></br>
        <p style={{paddingLeft: "20px"}}>{notice.issuedOn}</p>
    </div>
  );
};

export default NoticeDetails;
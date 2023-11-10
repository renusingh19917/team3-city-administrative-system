
import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
        <h3>{notice.title}</h3>
        <p>{notice.content}</p>
        <p>{notice.issuedOn}</p>
    </div>
  );
};

export default NoticeDetails;
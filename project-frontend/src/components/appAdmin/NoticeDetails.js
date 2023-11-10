

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// const ComplaintDetails = ({ complaints, updateStatus }) => {
const NoticeDetails = () => {
//   const { id } = useParams();
//   const notice = notices[id];

    const noticeParam = useParams();
    const [notice, setNotice] = useState({});

    useEffect(() => {
        console.log(noticeParam.id);
        //    fetch(`http://localhost:4200/notices/${noticeParam.id}`)
        axios.get(`http://localhost:4200/notices/${noticeParam.id}`)
            .then((response) => response.json())
            .then((data) => {
                setNotice(data);
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
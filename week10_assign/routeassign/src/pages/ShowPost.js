import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowPost = ({apiUrl}) => {
  const Params = useParams();
  const [post, setPost] = useState(null);

  useEffect(()=>{
    axios.get(`${apiUrl}posts/${Params.postID}`).then(response => {
      setPost(response.data);
    })
  }, []);
  return (
    <>
      <h1>글 목록</h1>
      <strong>제목 : {post && post.title}</strong>
      <div>내용 : {post && post.contents}</div>
    </>
  );
};

export default ShowPost;
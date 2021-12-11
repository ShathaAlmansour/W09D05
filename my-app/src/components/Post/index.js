import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css"

const Post = ({ setPost, getPost }) => {
    const state = useSelector((state) => {
        return state;
      });
    
      
      const [img, setImg] = useState("");
      const [desc, setDesc] = useState("");
    
      const newPost = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/newPost/${state.signIn.user._id}`,
          {
            desc: desc,
            img: img,
          },
          {
            headers: { Authorization: `Bearer ${state.signIn.token}` },
          }
        );
        setPost(false);
        e.target[0].value = "";
        e.target[1].value = "";
        getPost();
      };
    
      return (
        <div className="home">
          <form className="formm"
            onSubmit={(e) => {
              newPost(e);
            }}
          >
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              onChange={(e) => setImg(e.target.value)}
            />
            <input
              type="text"
              name="desc"
              placeholder="Descriopn"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <input type="submit" name="submit" value="Post"  />
          </form>
        </div>
      );
    };

export default Post
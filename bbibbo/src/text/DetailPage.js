import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

import '../App.css';

let Box = styled.div`
    width : 700px;
    height: 800px;
    /* border: 4px solid antiquewhite; */
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 20px;
`

let Title = styled.input`
    width: 600px;
    height: 40px;
    margin-bottom: 15px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #F6F6F6;
    border: 1px solid #E8E1F3;
`

let Content = styled.input`
    width: 600px;
    height: 500px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #F6F6F6;
    border: 1px solid #E8E1F3;
    margin-bottom: 15px;
` 

let Name = styled.input`
    width: 290px;
    height: 40px;
    margin-bottom: 15px;
    border: 0;
    outline: 0;
    font-size: 16px;
    margin-right: 20px;
    background-color: #F6F6F6;
    border: 1px solid #E8E1F3;
`

let Date = styled.input`
    width: 290px;
    height: 40px;
    margin-bottom: 15px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #F6F6F6;
    border: 1px solid #E8E1F3;
`

let Update_Button = styled.button`
    width: 600px;
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 15px;
    background-color: #D1CBE4;
    margin-top: 10px;

    &:hover{  
        background-color : #A8A0C0;
        color: white;
    }

    /* &:focus{  
        background-color : ;
        color: white;
    } */
`

let Emoji = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

function DetailPage({index, title, content}){

    useEffect(() => {
        console.log(index + " " + title + " " + content);
    }, [index, title, content])

    let navigate = useNavigate();

    let [like, setLike] = useState(0);
    let [dislike, setDislike] = useState(0);

    return(
        <div>
            <Box>
                <Title value={title} readonly ></Title>

                <Content value={content} readonly ></Content>

                <Name value={index} readonly ></Name>
                
                <Date value="작성일 : 2022-07-19" readonly ></Date>

                <Update_Button onClick={()=>{navigate('/updatepage')}}>수정하기</Update_Button>

                <br/>

                <Emoji>
                    <img src="/like.png" className="like" onClick={()=>{
                        {setLike(like+1)}
                        axios.post('',{asdf:like, aags:dislike})
                        .then(()=>{})
                        .catch(()=>{})
                    }}></img>
                    <img src="/dislike.png" className="dislike" onClick={()=>{
                        {setDislike(dislike+1)}
                        axios.post('',{asdf:like, aags:dislike})
                        .then(()=>{})
                        .catch(()=>{})
                    }}></img>
                </Emoji>
                
                <Emoji>
                    <div className="like_num">{like}</div>
                    <div className="dislike_num">{dislike}</div>
                </Emoji>
                

            </Box>
        </div>
    )
}

export default DetailPage;
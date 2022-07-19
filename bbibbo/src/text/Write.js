import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import '../App.css';

let Box = styled.div`
    width : 700px;
    height: 800px;
    /* border: 4px solid antiquewhite; */
    background-color: #F4EFFC;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 20px;
`

let Title_Input = styled.input`
    width: 600px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 15px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    font-size: 18px;
`

let Name = styled.input`
    width: 290px;
    height: 40px;
    margin-bottom: 15px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    font-size: 18px;
    margin-right: 17px;
`

let Date = styled.input`
    width: 290px;
    height: 40px;
    margin-bottom: 15px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    font-size: 18px;
`

let Content_Input = styled.input`
    width: 600px;
    height: 600px;
    border: 0;
    border-radius: 10px;
    outline: 0;
    font-size: 17px;
` 

let Write_Button = styled.button`
    width: 150px;
    height: 40px;
    border: 0;
    border-radius: 10px;
    font-size: 17px;
    margin-top: 30px;
    background-color: #D1CBE4;
    color: white;
    &:hover{  
        background-color: #A8A0C0;
    }

    &:focus{  
        
    }
`

let Cancel_Button = styled.button`
    width: 150px;
    height: 40px;
    border: 0;
    border-radius: 10px;
    font-size: 17px;
    margin-top: 30px;
    margin-right: 305px;
    background-color: #D1CBE4;
    color: white;
    &:hover{  
        background-color: #A8A0C0;
    }

    &:focus{  
        
    }
`

function Write(){

    let [title, setTitle] = useState();
    let [content, setContent] = useState();

    return(
        <div className="App">
            <Box>

                <Title_Input placeholder="제목" onChange={(e)=>{
                    setTitle(e.target.value)
                }}></Title_Input>

                <Name></Name>

                <Date></Date>

                <Content_Input placeholder="글" onChange={(e)=>{
                    setContent(e.target.value)
                }}></Content_Input>

                <Cancel_Button>취소</Cancel_Button>

                <Write_Button onClick={()=>{
                    axios.post('',{asdf : title, qwer : content})
                    .then((result)=>{})
                    .catch(()=>{})
                }}>청원하기</Write_Button>

            </Box>
        </div>
    )
}

export default Write;
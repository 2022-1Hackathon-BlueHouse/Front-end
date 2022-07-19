import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

let Box = styled.div`
    width : 700px;
    height: 800px;
    /* border: 4px solid antiquewhite; */
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding: 20px;
`

let Title = styled.input`
    width: 600px;
    height: 40px;
    margin-top: 10px;
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

function DetailPage({index, title, content}){

    useEffect(() => {
        console.log(index + " " + title + " " + content);
    }, [index, title, content])

    let navigate = useNavigate();

    return(
        <div>
            <Box>
                <Title value={title} readonly ></Title>

                <Content value={content} readonly ></Content>

                <Name value={index} readonly ></Name>
                
                <Date value="작성일 : 2022-07-19" readonly ></Date>

                <Update_Button onClick={()=>{navigate('/updatepage')}}>수정하기</Update_Button>
            </Box>
        </div>
    )
}

export default DetailPage;
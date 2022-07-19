import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../App.css';

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

// let Category = styled.input`
//     width: 100px;
//     height: 40px;
//     margin-top: 10px;
//     margin-bottom: 15px;
//     margin-right: 15px;
//     border: 0;
//     outline: 0;
//     font-size: 16px;
//     background-color: #F6F6F6;
//     border: 1px solid #E8E1F3;

//     &::placeholder {
//         color: black;
//     }

// `

let Title_Input = styled.input`
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

// let Name = styled.input`
//     width: 290px;
//     height: 40px;
//     margin-bottom: 15px;
//     border: 0;
//     outline: 0;
//     font-size: 18px;
//     margin-right: 17px;
// `

// let Date = styled.input`
//     width: 290px;
//     height: 40px;
//     margin-bottom: 15px;
//     border: 0;
//     outline: 0;
//     font-size: 18px;
// `

let Content_Input = styled.textarea`
    width: 600px;
    height: 500px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #F6F6F6;
    border: 1px solid #E8E1F3;
` 

let FileUpload = styled.input`
    width: 600px;
    height: 40px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #F6F6F6;
    margin-top: 20px;
    border: 1px solid #E8E1F3;
    padding-top: 4px;
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

    let navigate = useNavigate();

    return(
        <div className="App">
            <Box>

                {/* <Category placeholder=" 카테고리 ▼"></Category> */}

                <Title_Input placeholder=" 제목을 입력하세요" onChange={(e)=>{
                    setTitle(e.target.value)
                }}></Title_Input>

                {/* <Name></Name>

                <Date></Date> */}

                <Content_Input placeholder=" 내용을 입력하세요" onChange={(e)=>{
                    setContent(e.target.value)
                }}></Content_Input>

                <FileUpload placeholder=" 파일 업로드" type='file'></FileUpload>

                <Cancel_Button onClick={()=>{navigate(-1)}}>취소</Cancel_Button>

                <Write_Button onClick={()=>{
                    axios.post('http://172.16.6.42:8090/board/write',{title : title, content : content})
                    .then((result)=>{})
                    .catch(()=>{})
                }}>업로드</Write_Button>

            </Box>
        </div>
    )
}

export default Write;
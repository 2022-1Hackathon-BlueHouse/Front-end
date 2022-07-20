import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../App.css';
import Login from './Login.js';

let Box = styled.div`
    width: 700px;
    height: 570px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 3px 3px rgb(179, 179, 179);
` 

// let SubBox_Left = styled.div`
//     display: flex;
//     width: 425px;
//     height: 525px;
//     background-color: aliceblue;
//     border-radius: 10px 0px 0px 10px;
// `

// let SubBox_Right = styled.div`
//     background-image: url('../logo.jpg');
//     width: 425px;
//     height: 525px;
//     background-color: white;
//     border-radius: 0px 10px 10px 0px;
// `

let Register_Input = styled.input`
    width: 310px;
    height: 43px;
    margin-bottom: 10px;
    padding-left: 13px;
    border-radius: 15px;
    font-size: 13px;
    outline: 0;
    border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid;
`

let Register_Input_CheckPass = styled.input`
    width: 210px;
    height: 43px;
    margin-bottom: 10px;
    padding-left: 13px;
    border-radius: 15px;
    font-size: 13px;
    outline: 0;
    border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid;
`

let Register_Button_Check = styled.button`
    width: 75px;
    height: 40px;
    border-radius: 15px;
    border: 0;
    font-size: 14px;
    margin-bottom: 1px;
    outline: 0;
    background-color: #D1CBE4;
    color: white;
    margin-left: 25px;

    &:hover{  
        background-color : #A8A0C0;
        color: white;
    }
`

let Register_Button = styled.button`
    width: 215px;
    height: 43px;
    margin-top: 40px;
    border-radius: 15px;
    border: 0;
    font-size: 18px;
    margin-bottom: 18px;
    outline: 0;
    background-color: #D1CBE4;
    color: white;
    font-weight: bold;

    &:hover{  
        background-color : #A8A0C0;
        color: white;
    }

    /* &:focus{  
        background-color : rgb(54, 12, 12);
        color: white;
    } */
`

let H4_Font = styled.h4`
    margin-top: 42px;
    margin-bottom: 30px;
    font-weight: bold;
`

let A = styled.a`
    color: #7A8FC1;
    font-size: 15px;
    margin-left: 8px;
`

let Div = styled.div`
    font-size: 15px;
`

let True = styled.div`
    font-size: 15px;
`

let False = styled.div`
    font-size: 15px;
    color: red;
`

let Register_id =styled.div`
    margin-right: 280px;
    font-size: 17px;
`

let Register_pw =styled.div`
    margin-right: 230px;
    margin-bottom: 2px;
    font-size: 17px;
`

let Register_check_pw =styled.div`
    margin-right: 185px;
    margin-bottom: 2px;
    font-size: 17px;
`

function Register(){

    let navigate = useNavigate();

    let [id, setId] = useState();
    let [password, setPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();
    let [check, setCheck] = useState(false);

    return(
        <div className="App">
            
            <Box>

                <H4_Font>회원가입</H4_Font>

                <br />
                
                <Register_id>ID</Register_id>
                <Register_Input placeholder="  Email 혹은 전화번호 입력" onChange={(e)=>{
                    setId(e.target.value)
                }}></Register_Input>

                <br/>

                
                <Register_pw>비밀번호</Register_pw>
                <Register_Input placeholder="  비밀번호 입력" onChange={(e)=>{
                    setPassword(e.target.value)
                }}></Register_Input>


                <div className="flex">
                    <Register_Input_CheckPass placeholder="  비밀번호 확인" onChange={(e)=>{setCheckPassword(e.target.value)}}></Register_Input_CheckPass>
                    <Register_Button_Check onClick={()=>{setCheck(true)}}>확인</Register_Button_Check>
                </div>

                {
                    check === true ? password != "" && checkPassword != "" ? 
                    password === checkPassword ? <True>비밀번호가 일치합니다</True> : <False>*비밀번호가 일치하지 않습니다*</False>
                    : null : null
                } 

                <Register_Button onClick={()=>{
                    axios.post('http://172.20.10.2:8090/auth/register',{username : id, password : password})
                    .then((result)=>{navigate('/login')})
                    .catch(()=>{})
                }}>회원가입</Register_Button>

                <br/>

                <div className="flex">
                    <Div>이미 회원이신가요?</Div>
                    <A href="./login">로그인</A>
                </div>


            </Box>

        </div>
    )
}

export default Register;
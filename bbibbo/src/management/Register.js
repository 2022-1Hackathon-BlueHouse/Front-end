import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../App.css';
import Login from './Login.js';

let Box = styled.div`
    width: 850px;
    height: 525px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: flex;
    box-shadow: 3px 3px 3px 3px rgb(179, 179, 179);
` 

let SubBox_Left = styled.div`
    width: 425px;
    height: 525px;
    background-color: aliceblue;
    border-radius: 10px 0px 0px 10px;
`

let SubBox_Right = styled.div`
    background-image: url('../logo.jpg');
    width: 425px;
    height: 525px;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
`

let Register_Input = styled.input`
    width: 325px;
    height: 43px;
    margin-bottom: 20px;
    border-radius: 15px;
    font-size: 17px;
    outline: 0;
    border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid;
`

let Register_Input_CheckPass = styled.input`
    width: 220px;
    height: 43px;
    margin-bottom: 20px;
    border-radius: 15px;
    font-size: 17px;
    outline: 0;
    border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid;
`

let Register_Button_Check = styled.button`
    width: 80px;
    height: 43px;
    border-radius: 15px;
    border: 0;
    font-size: 18px;
    margin-bottom: 20px;
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
    width: 325px;
    height: 43px;
    margin-top: 25px;
    border-radius: 15px;
    border: 0;
    font-size: 18px;
    margin-bottom: 20px;
    outline: 0;
    background-color: #D1CBE4;
    color: white;

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
    margin-top: 70px;
    margin-bottom: 50px;
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

function Register(){

    let navigate = useNavigate();

    let [id, setId] = useState();
    let [password, setPassword] = useState();
    let [checkPassword, setCheckPassword] = useState();

    return(
        <div className="App">
            
            <Box>

                <SubBox_Left></SubBox_Left>

                <SubBox_Right>

                    <H4_Font>회원가입</H4_Font>

                    <Register_Input placeholder="  ID" onChange={(e)=>{
                        setId(e.target.value)
                    }}></Register_Input>

                    <br/>

                    <Register_Input placeholder="  PASSWORD" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></Register_Input>

                    <br/>

                    <div className="flex">
                        <Register_Input_CheckPass placeholder="  Check PASSWORD" onChange={(e)=>{setCheckPassword(e.target.value)}}></Register_Input_CheckPass>
                        <Register_Button_Check onClick={()=>{
                            if(password === checkPassword){
                                <True>비밀번호가 일치합니다</True>
                            }
                            else{
                                <False>비밀번호가 일치하지 않습니다</False>
                            }
                            // {
                            //     password != "" && checkPassword != "" ? 
                            //     password === checkPassword ? <True>비밀번호가 일치합니다</True> : <False>비밀번호가 일치하지 않습니다</False>
                            //     : null
                            // }
                        }}>확인</Register_Button_Check>
                    </div>

                    <Register_Button onClick={()=>{
                        axios.post('',{username : id, password : password})
                        .then((result)=>{})
                        .catch(()=>{})
                    }}>회원가입</Register_Button>

                    <br/>

                    <div className="flex">
                        <Div>이미 회원이신가요?</Div>
                        <A href="./login">로그인</A>
                    </div>

                </SubBox_Right>

            </Box>

        </div>
    )
}

export default Register;
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

import '../App.css';

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
    display: flex;
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

let Login_Input = styled.input`
    width: 310px;
    height: 43px;
    margin-bottom: 20px;
    border-radius: 15px;
    font-size: 13px;
    outline: 0;
    border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid;
`

let Login_Button = styled.button`
    width: 216px;
    height: 43px;
    margin-top: 25px;
    border-radius: 15px;
    border: 0;
    font-size: 17px;
    margin-bottom: 20px;
    outline: 0;
    background-color: #D1CBE4;
    color: white;

    &:hover{  
        background-color : #A8A0C0;
        color: white;
    }

    /* &:focus{  
        background-color : ;
        color: white;
    } */
`

let A = styled.a`
    color: #7A8FC1;
    font-size: 15px;
    margin-left: 8px;
`

let Div = styled.div`
    font-size: 15px;
`

let H4_Font = styled.h4`
    margin-top: 13px;
    margin-bottom: 40px;
    font-weight: bold;
`

function Login(){

    let navigate = useNavigate();

    let [id, setId] = useState();
    let [password, setPassword] = useState();

    return(
        <div className="App">

            <Box>

                <SubBox_Left>
                    
                </SubBox_Left>

                <SubBox_Right>

                    <img className="miniLogoStyle" src="/logo.png"></img>

                    <H4_Font>로그인</H4_Font>

                    <Login_Input placeholder="     ID입력" onChange={(e)=>{
                        setId(e.target.value)
                    }}></Login_Input>

                    <br/>

                    <Login_Input placeholder="     PASSWORD입력" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></Login_Input>

                    <br/>

                    <Login_Button onClick={()=>{
                        axios.post('http://172.16.6.42:8090/login',{username : id, password : password})
                        .then((result)=>{})
                        .catch(()=>{})
                    }}>로그인</Login_Button>

                    <br/>
                    
                    <div className="flex">
                        <Div>회원이 아니신가요?</Div>
                        <A href="./register">회원가입</A>
                    </div>
                    
                </SubBox_Right>

            </Box>
            
        </div>
    )
}

export default Login;
import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { ButtonGroup, Button, Form } from 'react-bootstrap';

import './App.css';

import config from './config.json'

import DetailPage from './text/DetailPage';

let Search_Input = styled.input`
    height: 35px;
    outline: 0;
    border-radius: 10px 0px 0px 10px;
    margin-left: 550px;
    margin-top: 20px;
    border-right: 0;
    border-left: #7A8FC1 2px solid;
    border-top: #7A8FC1 2px solid;
    border-bottom: #7A8FC1 3px solid;
`

let Search_Button = styled.button`
    height: 35px;
    border: 0;
    outline: 0;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    border-right: #7A8FC1 2px solid;
    border-left: #7A8FC1 2px solid;
    border-top: #7A8FC1 2px solid;
    border-bottom: #7A8FC1 2px solid;

    &:hover{
        background-color: #7A8FC1;
    }

`

function makeArrayWithSize(size) {
    let arr = []

    for(let i = 0; i < size; i++) {
        arr.push('');
    }
    return arr;
}

function List({setIndex, setTitle, setContent}) {

    useEffect(() => {
        loadPage(1)
    }, [])

    let navigate = useNavigate();

    let [list, setList] = useState([]);

    let [pageSize, setPageSize] = useState(1);

    let [detailNum, setDetailNum] = useState();

    let [search, setSearch] = useState();

    let loadPage = (page) => {
        axios.get(`${config.server}/board/list?page=${page}`)
                                            .then((data) => {setPageSize(data.data.endPage); setList(data.data.list.content); })
                                            .catch(() => { })
    }

    return (
        <div className="App">

            <div className="backgroundimg">

                <Search_Input placeholder="  검색하기" onChange={(e)=>{setSearch(e.target.value)}}></Search_Input>
                
                <Search_Button onClick={()=>{
                    axios.get(`${config.server}/board/list?query=${search}`)
                    .then((result)=>{
                        setPageSize(result.data.endPage); setList(result.data.list.content);
                    })
                    .catch(()=>{})
                }}><div>&#x1F50D;</div></Search_Button>
            

                <div className="full_div flex">

                    <div className="table_area">
                        <table className="table_title">
                            <thead>
                                <tr>
                                    <th style={{ width: '110px' }}>번호</th>
                                    <th>제목</th>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                        </table>

                        {
                            list.map((ele, index) => {
                                return (
                                    <div>
                                        <table className="table_content">
                                            <tbody onClick={()=>{setIndex(ele.idx); setTitle(ele.title); setContent(ele.content); navigate("/detailpage")}} className='list_hover'>
                                                <tr className="table_feed">
                                                    <td style={{ width: '110px' }}>{ele.idx}</td>
                                                    <td className="table_item">{ele.title}</td>
                                                    <td className="table_item">2022-07-20</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            })
                        }

                    </div>
                    
                    <div className="line"></div>

                    <div className="list_button_margin">
                        <ButtonGroup aria-label="Basic example" className="list_button_margin">
                            {
                                makeArrayWithSize(pageSize).map((item, index) => {
                                    return (
                                        <Button onClick={() => {
                                            loadPage(index + 1)
                                        }} className='list_button'>{index + 1}</Button>
                                    )
                                })
                            }

                        </ButtonGroup>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default List;
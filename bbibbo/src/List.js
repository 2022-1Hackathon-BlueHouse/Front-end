import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { ButtonGroup, Button } from 'react-bootstrap';

import './App.css';
import DetailPage from './text/DetailPage';

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

    let loadPage = (page) => {
        axios.get(`http://172.16.6.42:8090/board/list?page=${page}`)
                                            .then((data) => {setPageSize(data.data.endPage); setList(data.data.list.content); })
                                            .catch(() => { })
    }

    return (
        <div className="App">

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
                                                <td className="table_item">2022-07-19</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                    }

                </div>

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
    )
}


export default List;
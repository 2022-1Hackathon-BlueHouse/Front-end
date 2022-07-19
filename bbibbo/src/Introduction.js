import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import "./App.css";


let Box = styled.div`
    width: 1200px;
    height: 600px;
    margin-right: auto;
    margin-left: auto;
`

let Write_Button = styled.button`
    width: 200px;
    height: 60px;
    background-color: #b7c5e7;
    border: 0;
    outline: 0;
    border-radius: 15px;
    font-weight: bold;
    font-size: large;

    &:hover{  
        background-color: #7394e0;
    }

    &:focus{  
        
    }
`

function Introduction(){

    let navigate = useNavigate();

    return(
        <div>

            <Box>
                <div className="head">몽글몽글 안내</div>

                <div>
                    <p className="btn">✔</p>
                    <p className="locate1">몽글몽글이란?</p>
                </div>

                <div className="locate1-2">
                    <p>몽글몽글은 대소고 학생들이 자유롭게 이용할 수 있는 커뮤니티 사이트입니다.
                    또한 몽글몽글은 익명과 실명을 쓸 수 있어서 개인정보를 지킬 수 있습니다.</p>
                </div>

                <div>
                    <p className="btn">✔</p>
                    <p className="locate1">몽글몽글 작성방법</p>
                </div>
                
                <div className="locate1-2">
                    <p>현재 페이지 상단에 있는 "몽글몽글하기"를 클릭하시면 작성하실 수 있고
                        "몽글몽글보기"를 클릭하시면 작성된 글들을 볼 수 있습니다.
                    </p>
                </div>

                <div>
                    <p className="btn">✔</p>
                    <p className="locate1">주의사항</p>
                </div>

                <div className="locate1-2">
                    <p>다른 사용자가 쓴 글을 허락없이 퍼가거나 부적절한 행동시 관련법률 및 운영정책에 의해 제재 받을 수 있습니다. </p>
                </div>

                <Write_Button onClick={()=>{navigate('/write')}}>몽글몽글가기</Write_Button>

            </Box>
            
        </div>  
    )
}

export default Introduction;
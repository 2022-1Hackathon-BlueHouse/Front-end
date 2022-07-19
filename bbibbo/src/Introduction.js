import React from "react"
import styled from "styled-components";
import "./App.css";

let Box = styled.div`
    width: 1200px;
    height: 600px;
    margin-right: auto;
    margin-left: auto;
`

function Introduction(){
    return(
        <div>
          <div className="head">몽글몽글 소개</div>

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
                    <p className="locate1">주의사항</p>
                </div>

                <div className="locate1-2">
                    <p>다른 사용자가 쓴 글을 허락없이 퍼가거나 부적절한 행동시 관련법률 및 운영정책에 의해 제재 받을 수 있습니다. </p>
                </div>

                <div>
                    <p className="btn">✔</p>
                    <p className="locate1">몽글몽글 청원작성</p>
                </div>
                
                <div className="locate1-2">
                    <p>현재 페이지 상단에 있는 "청원하기"를 클릭하시면 작성하실 수 있고
                        청원글은 청원을 하시면 작성하신 글들을 볼 수 있습니다.
                    </p>
                </div>
        </div>  
    )
}

export default Introduction;
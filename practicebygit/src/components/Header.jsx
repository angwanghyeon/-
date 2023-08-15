import React from "react";
import style from '../style/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="inner-header">
                <h1 className="title">
                    <a>제자리</a>
                </h1>
                <nav id="gnb">
                    <ul className="depth01">
                        <li>
                            <a href="#" className="menu_choice">
                                여행지
                            </a>
                            <div className="menu_detail">
                                <ul className="depth02_1">
                                    <li className="">
                                        <a href="#" className="detail01">
                                            <span>관광지</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="#" className="detail01">
                                            <span>음식</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="#" className="detail01">
                                            <span>숙박</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="#" className="detail01">
                                            <span>축제와 행사</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu_choice">
                                추천
                            </a>
                            <div className="menu_detail">
                                <ul className="depth02_2">
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>테마여행</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>여행큐레이션</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>일정추천</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu_choice">
                                여행정보
                            </a>
                            <div className="menu_detail">
                                <ul className="depth02_3">
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>공지사항</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>무엇이든 물어보세요</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>교통혼잡도</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>인구밀집도</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>영상 제주</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu_choice">
                                나의 여행
                            </a>
                            <div className="menu_detail">
                                <ul className="depth02_4">
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>나의 여행</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>나의 일정</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>찜한 여행</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>리뷰 관리</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="detail01">
                                            <span>정보 수정</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="language-wrap">
                    <a href="#" className="login">
                        로그인
                    </a>
                    <button
                        type="button"
                        title="언어목록 열기(선택된 언어)"
                        className="language-btn"
                    >
                        한국어
                    </button>
                    <button className="search-btn">
                        <i className="select">검색하기</i>
                    </button>
                </div>
            </div>
            <div className="search-wrap">
                <div className="inner">
                    <p>원하는 걸 검색해보세요</p>
                    <div className="search-area"></div>
                    <button className="btn-close">
                        <i className="hidden">검색 닫기</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

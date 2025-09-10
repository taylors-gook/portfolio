import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//gsap 쓸거다 자동선언 그리고 scrollTrigger 플러그인도 쓸거다 자동선언

import port_img1 from "../assets/img/port_1.png";
import port_img2 from "../assets/img/port_2.png";
import port_img3 from "../assets/img/port_3.png";
import port_img4 from "../assets/img/port_4.png";
import port_img5 from "../assets/img/port_5.png";
import port_img6 from "../assets/img/port_6.png";

const PortText=[
    {
        code : "/",
        img : port_img1,
        alt : "포트폴리오 이미지1",
        title : "1차 포트폴리오_주제",
        desc : " 1차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img2,
        alt : "포트폴리오 이미지2",
        title : "2차 포트폴리오_주제",
        desc : " 2차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img3,
        alt : "포트폴리오 이미지3",
        title : "3차 포트폴리오_주제",
        desc : " 3차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img4,
        alt : "포트폴리오 이미지4",
        title : "4차 포트폴리오_주제",
        desc : " 4차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img5,
        alt : "포트폴리오 이미지5",
        title : "5차 포트폴리오_주제",
        desc : " 5차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
    {
        code : "/",
        img : port_img6,
        alt : "포트폴리오 이미지6",
        title : "6차 포트폴리오_주제",
        desc : " 6차 포트폴리오의 디자인과 와이어프레임을 토대로 해서 웹페이지를 만들었으며, 가로 모드 액션을 주어서 모든 작품을 보여줄 예정입니다.",
        view : "/",
    },
]


const Port = () => {
    const horizontalRef = useRef(null);
    //비어있는 상태의 하나를 만들겠다 선언(null) 빈상태가 문자, 숫자 다 가능함; useRef훅으로 초기화하라는 명령어
    //위에 useRef훅 명령어 안나와 있으면 이 훅 부분만 지웠다가 다시 쓰고 엔터 치면 나옴 
    // import React, { useRef } from 'react'
    const sectionRef = useRef([]);
    //sectionRef라는 변수를 생성하고 usseRef훅으로 배열값으로 초가화하라는 명령어
    //배열로 만들어 달라는 이야기; 숫자변수인지 문자변수인지 뭔지 상관없이 지들이 알아서 배열로 만들어줌
    // useRef(0)으로 쓰면 숫자변수로 만들어줌 
    // useRef() 변화하는 값으로 저장하라는 명령어

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        //gsap에서 ScrollTrigger 플러그인을 쓸거다 등록해라 명령어

        let horizontal = horizontalRef.current;
        // horizontalRef라는 변수에다가 current속성값을 넣어라 명령어
        //current는 useRef훅에서 쓸수 있는 속성값임; current는 useRef훅에서만 쓸수 있음; 
        // 실제로 현재 가지고 있는 값임 
        //useRef훅은 리액트에서 제공하는 훅임; useRef훅은 리액트에서 제공하는 훅임; useRef훅은 리액트에서 제공하는 훅임
        const sections = sectionRef.current;
        //sectionRef라는 변수에다가 current속성값을 넣어라 명령어
        //current는 useRef훅에서 쓸수 있는 속성값임; current는 useRef훅에서만 쓸수 있음; 
        // 실제로 현재 가지고 있는 값임 
        //useRef훅은 리액트에서 제공하는 훅임; 

        let scrollTween = gsap.to(sections, {

            xPercent: -120 * (sections.length - 1),
            ease: "none",
            //속도가 동일하게 유지되기 위해 none으로 설정
            scrollTrigger: {
                trigger: horizontal,
                //트리거는 감시하는 요소임; horizontal이라는 변수라는 움직일 개체를 정해라라는 명령어 
                //트리거가 타겟이라는 말. 얘가 움직일꺼라는 말임
                start: "top 100px",
                end: "+=3000",
                //end: "+=" + horizontal.offsetWidth, 이거는 end지점이 가로길이 만큼 더 내려가라는 명령어 그 대신 3000을 고정값으로 씀 왜냐면 우리는 값을 알고 있으닌깐
                scrub: 1, //스크럽은 스크롤을 부드럽게 해주는 명령어 지연시간 1초를 줌
                pin: true,
            },
        });
            return () => {
                scrollTween.kill();
                //한번만하고 scrollTween을 끝내라 라는 명령어
            }
        },[]); //,[]); 처음에 한번만 실행하고 끝내라는 명령어;
        

        //useEffect(()=>{}) : 렌더링 할 때마다 실행되는 문법
        //useEffect(()=>{},[]) : 처음 화면에 첫렌더링 될 때 한번 실행
        //useEffect(()=>{},[value]) : 화면에 첫 렌더링 될 때 한번 실행하고 밸류값이 바뀔때 실행하는 문법


    return (
        <section id='port' ref={horizontalRef}> 
        {/* horizontalRef라는 변수를 ref속성값으로 넣어서 PORT에 영향을 주어라 라는 명령어 */}
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>작품들</em>
                </div>
                <div className="port_wrap">

                    {PortText.map((port, key) => (
                        <div className={`port_item p${key+1}`} 
                        key={key}
                        ref={(el => sectionRef.current[key] = el)}
                        >

                            <span className='num'>0{key+1}.</span>
                            <a href={port.code} className='img'>
                                <img src={port.img} alt={port.alt} />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>{port.desc}</p>
                            <a href={port.view} className='site' target='_blank' rel='noreferrer'>사이트 보기</a>
                        </div>
                    ))}

                    
                </div>
            </div>
        </section>
    )
}

export default Port
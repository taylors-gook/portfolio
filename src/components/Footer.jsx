import React from 'react'

const Footer = () => {
  return (
    <section id='footer' role='conterinfo'>
      <div className='footer_inner'>
        <div className='footer_text'>
          <span>CHAIHWAN JUNG</span>
          <span>jungch0823@gmail.com</span>
        </div>
        <div className='footer_infor'>
          <div className='left'>
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p className='desc'>회원가입을 하시면 댓글과 게시판 기능을 사용할 수 있어요.</p>
          </div>
          <div className='right'>
            <h3>social</h3>
            <ul>
              <li>
                <a href="/">1차 포트폴리오</a>
                <em>클릭하시면 1차 포트폴리오로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">2차 포트폴리오</a>
                <em>클릭하시면 2차 포트폴리오로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">팀프로젝트_1</a>
                <em>클릭하시면 팀프로젝트_1로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">팀프로젝트_2</a>
                <em>클릭하시면 팀프로젝트_2로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">대학교 졸업작품</a>
                <em>클릭하시면 대학교 졸업작품으로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">Github</a>
                <em>클릭하시면 Github로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">GSAP</a>
                <em>클릭하시면 GSAP로 이동할 수 있습니다.</em>
              </li>
              <li>
                <a href="/">REACT</a>
                <em>클릭하시면 REACT로 이동할 수 있습니다.</em>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer_bottom'>
          &copy; jungch0823 all rights reserved<br />
          이 사이트는 포트폴리오로 상업용으로 사용되지 않습니다.
          <br />
          참조사이트 기입 줄
        </div>
      </div>
    </section>
  )
}

export default Footer
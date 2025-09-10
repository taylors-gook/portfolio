import React from 'react'

const ContactText=[
  {
    link:"/",
    title:"KAKAO ID : jungch0823",
  },{
    link:"mailto:jungch0823@naver.com",
    title:"MAIL : jungch0823@naver.com",
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_inner">
        <div className="contact_title">CONTACT</div>
        <div className="contact_lines" aira-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <div className="contact_text">
          <div className="text">
            {ContactText.map((contact,key)=>(
              <div key={key}>
                <a href={contact.link} target='_blank' rel='noreferrer'>{contact.title}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact_lines bottom" aira-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Contact
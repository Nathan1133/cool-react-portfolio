import React from 'react';
import profilePic from "../../assets/images/profilepic.png"

function About() {
  return (
    <section className="background">
      <h1 id="about" className='heading'>Who am I?</h1>
      <img src={profilePic} className="profile" style={{width: "10%", border: "3px solid #ffffff"}} alt=""/>

      <p className="info">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>



    </section>
  );
}

export default About;
import React from 'react';
import coverImage from '../../assets/cover/IMG_0670.JPG';
function About() {
  return (
    <section>
      <h1 id="about" className="center">
        Who is Youseph Gueye?
      </h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <p> Youseph // Software Engineer // Barista </p>
    </section>
  );
}

export default About;
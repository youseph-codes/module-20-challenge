import React from 'react';
import photo from '../../assets/small/readme-generator.png'

function Projects() {
    const currentCategory = {
        name: "README Generator",
        description:
          "This is a command line application that dynamically creates a professional README.md file in regards to the user inputs using the inquirer package. The command line will accept user inputs and choices and drop them into its designated spots on the README.md file.",
      };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <div className='flex-row'>
        <img src={photo} alt="readme-generator" className='img-thumbnail mx-1'/>
      </div>
    </section>
  );
}
export default Projects;
import React from 'react'
import './portfolio.css'
import './style.css'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

      <div className="container">
        <div className="card-deck">
          <div className="card">
            <a href="https://cprom.github.io/running-wild/" target="#"><img src="./assets/images/UCIeats_logo.png" className="card-img-top-b"
              alt="UCI Eats logo" /></a>
            <div className="card-body">
              <a href="https://cprom.github.io/running-wild/" target="#" />
              <a href="https://cprom.github.io/running-wild/"><p className="card-text-a">UCI Eats</p>
                <p>Web app that helps you search for restaurants and events around your area.</p></a>
              <a href="https://github.com/cprom/running-wild" target="#"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>
          <div className="card">
            <a href="http://ambutrack.herokuapp.com//" target="#"><img src="." className="card-img-top-a" alt="Ambutrack" /></a>
            <div className="card-body">
              <a href="#">
                <p className="card-text">Ambutrack</p>
                <p>Web app that helps you track EMT Shift</p>
              </a>
              <a href="https://github.com/JFrick1992/AmbuTrack/" target="#"><i class="fab fa-github-square fa-2x"></i></a>

            </div>
          </div>
          <div className="card">
            <a href="#"><img src="" className="card-img-top" alt="" /></a>
            <div className="card-body">
              <a href="https://github.com/preyx/bcprj3-react" target="#">
                <p className="card-text">Coder Book</p>
                <p>BootCamp Chat Bot </p>
                <a href="https://github.com/preyx/bcprj3-react" target="#"><i class="fab fa-github-square fa-2x"></i></a>
              </a>
            </div>
          </div>
        </div>

      </div >


    </>
  )
}


export default Projects
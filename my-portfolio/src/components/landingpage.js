import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends React.Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/professions-1-4/132/32-512.png"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | React</p>
              <div className="social-links">

                <a href="https://www.linkedin.com/in/adam-chois" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://www.github.com/engineerdragon01" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Need to figure out instagram icon problem}
                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-instagram-square" aria-hidden="true" />
                </a>
                */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

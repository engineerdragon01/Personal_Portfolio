import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                />
            </div>
            <h2 style={{paddinTop: '2em'}}>Adam Chois</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>Put some text here</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>132 Hacker Way Menlo Park, 94035</p>
            <h5>Phone</h5>
            <p>(916) 690 1344</p>
            <h5>Email</h5>
            <p>engineerdragon01@berkeley.edu</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

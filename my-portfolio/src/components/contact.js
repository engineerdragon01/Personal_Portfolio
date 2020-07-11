import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Adam Chois</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Hi there! Thank you for visiting my website. I am a Bioengineering student
              at UC Berkeley with a passion for Computer Science and Programming. Full Stack
              Development is very fun for me as both an artist and a future engineer.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (916) 690 1344
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  engineerdragon01@berkeley.edu
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

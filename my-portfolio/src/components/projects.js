import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
            'url(https://i.pinimg.com/originals/42/c4/72/42c472e40153ad462c21ee940da50374.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              A project I have been working on.
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
            'url(https://i.pinimg.com/originals/42/c4/72/42c472e40153ad462c21ee940da50374.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              A project I have been working on.
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
            'url(https://i.pinimg.com/originals/42/c4/72/42c472e40153ad462c21ee940da50374.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              A project I have been working on.
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
            'url(https://i.pinimg.com/originals/42/c4/72/42c472e40153ad462c21ee940da50374.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              A project I have been working on.
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
            'url(https://i.pinimg.com/originals/42/c4/72/42c472e40153ad462c21ee940da50374.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              A project I have been working on.
            </CardText>
            <CardActions border>
              <Button colored>View Code</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;

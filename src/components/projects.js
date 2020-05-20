import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div class='projects-grid'>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/* Projet 1  React*/}
            <CardTitle
              style={{
                color: '#3393d4',
                height: '176px',
                background:
                  'url(https://bunyaminserbest.github.io/Sakalli-Barber-shop/static/media/6.73667631.jpg) center / cover',
              }}
            ></CardTitle>
            <CardText>
              Made with Html, css, JS, bootstrap, React, Realization of one page
              for a BarberShop salon
            </CardText>
            <CardActions border>
              <Button>
                <a
                  href='https://github.com/Bunyaminserbest/Sakalli-Barber-shop'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Github
                </a>
              </Button>

              <Button colored>
                <a
                  href='https://bunyaminserbest.github.io/Sakalli-Barber-shop/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  LIVE DEMO
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/* Projet 1  React*/}
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover',
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              semper eros, non pulvinar ipsum. Nunc eget hendrerit risus. Mauris
              eu feugiat dolor.
            </CardText>
            <CardActions border>
              <Button>Github</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/* Projet 1  React*/}
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover',
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              semper eros, non pulvinar ipsum. Nunc eget hendrerit risus. Mauris
              eu feugiat dolor.
            </CardText>
            <CardActions border>
              <Button>Github</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                paddingTop: '50px',
                color: 'white',
                height: '176px',
                background:
                  'url(https://github.com/Bunyaminserbest/CornFlix/blob/master/screenshot5.png?raw=true) center / cover',
              }}
            >
              CornFlix
            </CardTitle>
            <CardText>
              Made with Html, css, JS, bootstrap, PHP, mySQL, MovieDB(API)
              Realization of streaming website
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href='https://github.com/Bunyaminserbest/CornFlix'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Github
                </a>
              </Button>

              <Button colored>
                <a
                  href='http://www.mikehanon.be/CornFlix/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Livedemo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            {/* Projet 1  NodeJS*/}
            <CardTitle
              style={{
                paddingTop: '50px',
                color: 'black',
                height: '176px',
                background:
                  'url(https://lh3.googleusercontent.com/proxy/WTHjXz2-1GeeCQIwjG6FrEfSTU8AmBWoiyeQvLEedWzULB7TobMljD4pjLIjKQNW5C6QfcjKW-6nb63KyuwjtK2SPxCVer2zcFOd) center / cover',
              }}
            >
              DevConnectors
            </CardTitle>
            <CardText>
              Made with React Hooks, Redux With DevTools, nodejs, Postman HTTP
              Client, Mongoose / MongoDB / Atlas Heroku Realization of small
              social network
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href='https://github.com/Bunyaminserbest/devConnector'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  github
                </a>
              </Button>
              <Button colored>
                <a
                  href='https://cryptic-caverns-69520.herokuapp.com/'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Livedemo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='categroy-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>nodeJS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>{this.toggleCategories()}</Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;

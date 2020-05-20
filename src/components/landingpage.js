import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import PhotoProfil from '../img/moi.jpg';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={PhotoProfil} alt='photoProfil' className='avatar-img' />

            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootsrap | Javascript | React | PHP | MySQL | NodeJS
                | Express | MongoDB
              </p>

              <div className='social-links'>
                {/*LinkedIn*/}
                <a
                  href='https://www.linkedin.com/in/bunyamin-serbest-b470b2191/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/*Github*/}
                <a
                  href='https://github.com/Bunyaminserbest'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                <a href='#' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

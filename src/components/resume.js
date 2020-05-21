import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import PhotoProfil from '../img/moi3.png';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={PhotoProfil}
                alt='avatar'
                style={{
                  height: '300px',
                  borderRadius: '100%',
                  marginTop: '50px',
                }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Bunyamin Serbest</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />
            <p>
              I feel pretty comfortable in the creation of application
              components. My main goal for the moment is to evolve and improve
              my skills as much as possible.
            </p>
            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />
            <h5>Address</h5>
            <p>1000 Bruxelles</p>
            <h5>Phone</h5>
            <p>+32 493 06 66 42</p>
            <h5>Email</h5>
            <p>Bunyamin.srbst@gmail.com</p>
            <h5>Website</h5>
            <p>www.Bunyaminserbest.com</p>
            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={'August 2019'}
              endYear={' February 2020'}
              schoolName='Becode'
              schoolDescription='Seven months training in webdevelopment'
            />
            <Education
              startYear={2015}
              endYear={2017}
              schoolName='ULB'
              schoolDescription='Faculty of Psychological Sciences and Education'
            />
            <Education
              startYear={2013}
              endYear={2014}
              schoolName=''
              schoolDescription='Obtained my CESS in IT-Management-Accounting'
            />
            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />

            <h2>Work Experience</h2>
            <Experience
              title={'Projects:'}
              jobName='DevConnectors'
              jobDescription='Made with React Hooks, Redux With DevTools, nodejs,
              Postman HTTP Client, Mongoose / MongoDB / Atlas Heroku. Realization of small social network'
            />
            <Experience
              jobName='Sakalli Barber shop'
              jobDescription='Made with Html, css, JS, bootstrap, React.
              Realization of one page for a BarberShop salon'
            />
            <Experience
              jobName='CornFlix'
              jobDescription='Made with Html, css, JS, bootstrap, PHP, mySQL, MovieDB
              (API) Realization of streaming website'
            />
            <Experience
              jobName='NawCollective'
              jobDescription='Made with Wordpress CMS. Realization of a client project'
            />

            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />

            <h2>Skills</h2>
            <Skills skills={'HTML/CSS '} progress={100} />
            <Skills skills={'Bootstrap '} progress={100} />
            <Skills skills={'JavaScript'} progress={90} />
            <Skills skills={'React '} progress={80} />
            <Skills skills={'PHP '} progress={70} />
            <Skills skills={'Wordpress '} progress={70} />
            <Skills skills={'NodeJS '} progress={44} />
            <Skills skills={'Express '} progress={44} />
            <Skills skills={'python '} progress={20} />
            <Skills skills={'Figma, Whimsycal '} progress={70} />
            <hr style={{ borderTop: '3px solid #30709c', width: '50%' }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;

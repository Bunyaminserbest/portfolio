import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import PhotoContact from '../img/moi2.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Bunyamin Serbest</h2>
            <img
              src={PhotoContact}
              alt='avatar'
              style={{
                height: '350px',
                borderRadius: '10%',
                marginTop: '30px',
              }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I'll get back to you as soon as I get a signal...
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +32 493 06 66 42
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-fax' aria-hidden='true' />
                    +32 493 06 66 42
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    Bunyamin.srbst@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    +32 493 06 66 42
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;

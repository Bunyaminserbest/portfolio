import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell style={{ verticalAlign: 'middle' }} col={1}>
          {this.props.skills}
        </Cell>
        <Cell col={11}>
          <ProgressBar
            style={{ margin: 'auto', width: '75%' }}
            progress={this.props.progress}
          />
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

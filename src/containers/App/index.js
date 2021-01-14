import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard/index.js';
import theme from './../../commons/Theme/index';

class App extends Component {
    render() {
        
        const { classes } = this.props;
        console.log(this.props)
        return (
            <ThemeProvider theme={theme}>
                <TaskBoard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
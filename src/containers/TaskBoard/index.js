import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUES } from './../../constants/index';

class TaskBoard extends Component {
    renderBoard() {
        let x = null;
        x = (
            <Grid container spacing={2}>
                    {
                        STATUES.map((status, index) => {
                            return (
                                <Grid item md={4} xs={6}>
                                    {status.label}
                                </Grid>
                            );
                        })
                    }
            </Grid>
        );
        return x;
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className="Default">
                    <AddIcon /> Add new task
                </Button>
                {this.renderBoard()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);
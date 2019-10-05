import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardActions, CardContent, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EmptyCard({...props}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

import React from 'react'
import useStyles from './landing-page-styles'


export default function Home() {

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          This is home
        </h1>
        <h2>Click on Search to get Weather Information</h2>
      </div>
    </div>
  )
}

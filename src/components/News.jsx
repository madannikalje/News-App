import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style.js"
import { Grid, Link, Paper } from '@material-ui/core';


function News({ news }) {
    const classes = useStyles()
    console.log(news)
    return (
        <div className={classes.container}>

        {news.map(data => {
            return (
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="./7T9364v.gif"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="h2" className={classes.text}>
                        {data.title}
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                    {data.summary}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" className={classes.btn} href={data.link} component={Link}>
                    Learn More
                    </Button>
                </CardActions>
            </Card> 
                
            )
        })}
       
        </div>
    )
}

export default News

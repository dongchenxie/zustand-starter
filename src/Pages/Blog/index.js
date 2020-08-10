/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 10:25:25
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 13:56:07
 * @Description: file content
 */
import React from "react";
import { useStore } from "../../API/store";
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


function Home() {
    const classes = useStyles();
  const { count, inc,language,getBlogs } = useStore();
  const [blogs,setBlogs]=React.useState([])
  const loadBlogs= async()=>{
    const result = await getBlogs(language)
    if(result.status==200){
        setBlogs(result.data.data)
    }
  }
  React.useEffect(()=>{
    loadBlogs()
  },[language])
  return (
    <Container>
      {/* <div>{count}</div>
      <button onClick={inc}>+++</button> */}
      <h2>blog</h2>
      <div>language is :{language}</div>
      {blogs.map((v,i)=>{
          return(<Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Blog {v.modified}
            </Typography>
            <Typography variant="h5" component="h2">
              {v.title.rendered}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <div dangerouslySetInnerHTML={{__html:v.acf.contentc}}/>
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>)
      })}
    </Container>
  );
}
export default Home;

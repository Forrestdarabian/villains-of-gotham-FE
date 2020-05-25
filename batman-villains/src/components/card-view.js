import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "../icons/about.jpg";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardView({ item, handleDelete, history }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: "20px", width: "300px" }}>
      <CardHeader title="Villains List" />
      <CardMedia className={classes.media} image={logo} />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="h1">
          Boss: {item.boss}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          Second in Command: {item.secondInCommand}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          Brute: {item.secondInCommand}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          Henchman: {item.secondInCommand}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          Thug: {item.secondInCommand}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}

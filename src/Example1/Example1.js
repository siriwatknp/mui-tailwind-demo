import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Reply from "@material-ui/icons/Reply";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: 12,
    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.12)",
    backgroundColor: palette.common.white,
    borderRadius: 12,
    display: "flex",
    gap: "12px",
  },
  imageSuperWrapper: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '50%',
  },
  imageWrapper: {
    // netflix trick
    height: 0,
    position: "relative",
    minWidth: 200,
    borderRadius: 12,
    overflow: "hidden",
    paddingBottom: "75%",
  },
  img: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    objectFit: "cover",
  },
  content: {
    flexBasis: "50%",
    padding: "16px 20px",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "0.875rem",
  },
  subtitle: {
    marginBottom: "2rem",
  },
  author: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
    borderRadius: 48,
    objectFit: "cover",
  },
  nameWrapper: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontWeight: 600,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: 300,
  },
}));

const Example1 = () => {
  const classes = useStyles();
  return (
    <article className={classes.root}>
      <div className={classes.imageSuperWrapper}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1557939628-3e476420db6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="forest with big trees"
          />
        </div>
      </div>
      <div className={classes.content}>
        <Typography variant="h2" className={classes.title}>
          Green plants are going to extinct about 500 times faster than they
          should, Study finds
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          If you are the sort of person who just can not keep a plant alive, you
          are not alone according to a new study published June 10 in the
          journal Nature.
        </Typography>
        <div className={classes.author}>
          <img
            className={classes.avatar}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className={classes.nameWrapper}>
            <Typography className={classes.name}>
              Alexander Parkinson
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Jun 20, 2019
            </Typography>
          </div>
          <IconButton>
            <Reply />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default Example1;

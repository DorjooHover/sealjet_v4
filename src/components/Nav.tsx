import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: 'flex'
  },
  nav_logo: {
    height: 30,
  }
}));

export function Nav() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          <img src="./img/sealjet-logo.png" alt="" className={classes.nav_logo} />
        </Typography>

        <Button color="inherit">
          <Link href="/">
            <a style={{ color: 'white', textTransform: 'none' }}>
              <Typography color="inherit">Нүүр</Typography>
            </a>
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/product">
            <a style={{ color: 'white', textTransform: 'none' }}>
              <Typography color="inherit">Бүтээгдэхүүн</Typography>
            </a>
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/info">
            <a style={{ color: 'white', textTransform: 'none' }}>
              <Typography color="inherit">Мэдээ</Typography>
            </a>
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/order">
            <a style={{ color: 'white', textTransform: 'none' }}>
              <Typography color="inherit">Захиалга</Typography>
            </a>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

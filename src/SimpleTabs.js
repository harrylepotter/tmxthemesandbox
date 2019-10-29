import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const tabsStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: "#CC0033"
  }
}));

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '10px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    color: 'rgb(138,146,166)',
    '&[aria-selected="true"]': {
      color: 'black'
    }
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const tabsClasses = tabsStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <AppBar position="static"> */}
      <Tabs
        classes={tabsClasses}
        class="primary"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab
          className={classes.root}
          disableRipple="true"
          label="Item One"
          {...a11yProps(0)}
        />
        <Tab className={classes.root} disableRipple="true" label="Item Two" {...a11yProps(1)} />
        <Tab className={classes.root} disableRipple="true" label="Item Three" {...a11yProps(2)} />
      </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

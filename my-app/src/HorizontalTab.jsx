import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '53vw',
    marginLeft: '400px',
    marginTop: '50px',
  },

  colinStyle: {
    fontSize: '11px',
    padding: '-15px'
  },

  infoStyle: {
    fontSize: '13px',
    paddingBottom: '10px',
    fontFamily: 'Roboto'
  }

}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={<span className={classes.colinStyle}>Insurance</span>} {...a11yProps(0)}/>
          <Tab label={<span className={classes.colinStyle}>Medicare For All</span>} {...a11yProps(1)} />
          <Tab label={<span className={classes.colinStyle}>Lowering Drug Prices</span>} {...a11yProps(2)} />
          <Tab label={<span className={classes.colinStyle}>Stopping Addiction</span>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.infoStyle}>
        <svg width="170" height="101" viewBox="0 0 270 301" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="right">
                <stop offset="0" stop-color="#ff0000">
                  <animate dur="3s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
                <stop offset="0" stop-color="#fff">
                  <animate dur="3s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
              </linearGradient>
            </defs>
            <g id="Frame 2">
            <path id="Vector 2" d="M181 38.5H88V117.5H26V194.5H88V276H181V194.5H239V117.5H232H181V38.5Z" stroke="black" stroke-width="6" fill="url(#right)"/>
            </g>
        </svg>
        The worst fear of a patient is the hospital bill after their treatment.<br></br> That is why this administration
        is trying to ensure that health insurance is affordable and <br></br> high quality for every American. See our progress.

      </TabPanel>
      <TabPanel value={value} index={1} className={classes.infoStyle}>
        The public option that was introduced a year ago is the most landmark piece <br></br> of healthcare reform in American history. 
        This has allowed millions of <br></br> of Americans who would otherwise pay exorbitant prices for care, will never have to <br></br> do so again.
        Read about how this is making a positive impact.
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.infoStyle}>
        This administration has taken on the task of getting the best possible drug <br></br> prices for Americans. The days of big pharma charging thousands
        <br></br> for needed medications is over. Our data shows the best possible result <br></br> this could have. Learn more.
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.infoStyle}>
        Drug addiction continues to affect millions of Americans. <br></br> Our efforts on the grassroots level and from the top are making a difference.
        From opening supervised injection sites to punishing drug executives, we are slowing down this epidemic that has taken far too many lives
        over far too many years. Learn more. 
      </TabPanel>
    </div>
  );
}
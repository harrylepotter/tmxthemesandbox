import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useTabsStyles = makeStyles(() => ({
  indicator: {
    display: "none"
  },
  flexContainer: {
    borderBottom: 'none'
  },
  root:{
    marginBottom: '-2px'
  }
}));

const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const defaultBgColor = palette.grey[300];
  const defaultSelectedBgColor = "#272C34";
  const defaultMinWidth = {
    md: 120
  };
  const getTextColor = color => {
    return '#121921';
    // if (Color(color).isLight()) return palette.text.primary;
    // return palette.common.white;
  };
  return {
    root: ({ bgColor = defaultBgColor, minWidth = defaultMinWidth }) => ({
      opacity: 1,
      overflow: "initial",
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
      borderTop: 'solid 2px #D5DFE9',
      borderRight: 'solid 2px #D5DFE9',
      borderBottom: 'none',
      color: '#98A1B1',
      backgroundColor: 'transparent',
      transition: "0.2s",
      [breakpoints.up("md")]: {
        minWidth: minWidth.md
      },
      "&:first-of-type":{
        borderLeft: 'solid 2px #D5DFE9'
      },
      "&:before": {
        transition: "0.2s"
      },
      "&:hover": {
        "&:not($selected)": {
          backgroundColor: Color(bgColor)
            .whiten(0.6)
            .hex()
        },
        "&::before": {
          opacity: 0
        },
        "& + $root:before": {
          opacity: 0
        }
      }
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      marginBottom: '-2px',
      fontWeight: 600,
      color: getTextColor(selectedBgColor),
      "& + $root": {
        zIndex: 1
      },
      "& + $root:before": {
        opacity: 0
      }
    }),
    wrapper: {
      zIndex: 2,
      marginTop: spacing(0.5),
      textTransform: "initial"
    }
  };
});

const TMXPrimaryTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
  return (
    <Tabs {...props} classes={tabsClasses}>
      {tabs.map(tab => (
        <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} />
      ))}
    </Tabs>
  );
};

TMXPrimaryTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired
    })
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({})
  }),
  tabProps: PropTypes.shape({})
};
TMXPrimaryTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
  tabProps: {}
};

export default TMXPrimaryTabs;

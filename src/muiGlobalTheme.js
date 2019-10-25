import { createMuiTheme } from "@material-ui/core/styles";
import * as cssVariables from "./variables";

export default createMuiTheme({
  palette: {
    primary: { main: cssVariables.PRIMARY_COLOR },
    secondary: { main: cssVariables.PRIMARY_COLOR }
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: cssVariables.TYPOGRAPHY_CONTROL_FONT_SIZE,
        fontFamily: cssVariables.DEFAULT_FONT
      },
      body2: {
        fontFamily: cssVariables.DEFAULT_FONT
      },
      colorError: {
        fontWeight: cssVariables.ERROR_FONT_WEIGHT,
        color: cssVariables.ERROR_COLOR,
        fontSize: cssVariables.TYPOGRAPHY_CONTROL_FONT_SIZE,
        fontFamily: cssVariables.DEFAULT_FONT
      }
    },
    MuiDialog: {
      paperWidthSm: {
        borderRadius: cssVariables.PAPER_BORDER_RADIUS
      }
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: cssVariables.DIALOG_TITLE_BACKGROUND_COLOR,
        padding: cssVariables.DIALOG_TITLE_PADDING,
        color: cssVariables.DIALOG_TITLE_FONT_COLOR
      }
    },
    MuiButton: {
      disableRipple: true,
      root: {
        disableRipple: true,
        letterSpacing: "0.5px",
        height: "32px",
        fontSize: "14px",
        lineHeight: "16px",
        fontFamily: cssVariables.DEFAULT_FONT,
        color: "#121921",
        margin: cssVariables.BUTTON_MARGIN,
        boxShadow: "0px 3px 3px rgba(18,25,33,0.07)",
        borderRadius: "2px",
        border: "solid 1px #D5DFE9",
        textTransform: cssVariables.TEXT_TRANSFORM_NONE,
        background: "#FFFFFF",
        "&:hover": {
          fontWeight: 600,
          border: "solid 1px #D5DFE9",
          background: "#FF0000"
          // backgroundColor: "#35C37D",
          // // Reset on touch devices, it doesn't add specificity
          // "@media (hover: none)": {
          //   backgroundColor: "#35C37D"
          // }
        },
        "&:disabled": {
          opacity: "0.5"
        },
        "&:active": {
          background: "#FFFFFF",
          boxShadow: "none"
        }
      },
      textPrimary: {
        color: cssVariables.PRIMARY_BUTTON_TEXT_COLOR,
        fontFamily: cssVariables.DEFAULT_FONT
      },
      sizeSmall: {
        fontSize: cssVariables.DEFAULT_FONT_SIZE,
        minWidth: cssVariables.SMALL_BUTTON_MIN_WIDTH,
        padding: cssVariables.SMALL_BUTTON_PADDING
      },
      contained: {
        boxShadow: cssVariables.BUTTON_SHADOW,
        borderRadius: cssVariables.BUTTON_BORDER_RADIUS
      }
    },
    MuiInputBase: {
      root: {
        fontSize: cssVariables.DEFAULT_FONT_SIZE
      }
    },
    MuiInputLabel: {
      outlined: {
        fontSize: cssVariables.DEFAULT_FONT_SIZE
      },
      shrink: {
        transform: cssVariables.NO_SCALE_TRANSFORM
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: cssVariables.SVG_ICON_FONT_SIZE
      },

      colorAction: {
        color: cssVariables.SUCCESS_ACTION_COLOR
      }
    },
    MuiTableCell: {
      root: {
        borderBottomWidth: cssVariables.TABLE_BORDER_BOTTOM_WIDTH
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: cssVariables.DEFAULT_FONT_SIZE,
        minHeight: cssVariables.MENU_ITEM_MIN_HEIGHT
      }
    },
    MuiGrid: {
      item: {
        padding: `${cssVariables.GRID_ITEM_PADDING_TOP} ${
          cssVariables.GRID_ITEM_PADDING_RIGHT
        }`
      }
    },
    MuiTabs: {
      flexContainer: {
        borderBottom: cssVariables.FLEX_CONTAINER_BOTTOM_BORDER
      }
    },
    MuiFormLabel: {
      root: {
        color: cssVariables.FONT_COLOR_GREY,
        fontSize: cssVariables.DEFAULT_FONT_SIZE,
        fontFamily: cssVariables.DEFAULT_FONT
      }
    },
    MuiPrivateTabIndicator: {
      root: {
        height: cssVariables.TAB_HEIGHT
      }
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: cssVariables.INPUT_PADDING_TOP,
        paddingBottom: cssVariables.INPUT_PADDING_BOTTOM
      }
    },
    MuiList: {
      root: {
        border: cssVariables.LIST_BORDER
      }
    },
    MuiListItem: {
      selected: {
        backgroundColor: cssVariables.SELECTED_LIST_ITEM_COLOR
      }
    },
    MuiTab: {
      root: {
        textTransform: cssVariables.TEXT_TRANSFORM_NONE,
        "@media (min-width: 960px)": {
          fontSize: cssVariables.TAB_FONT_SIZE,
          fontFamily: "Source Sans Pro",
          cursor: cssVariables.TAB_CURSOR,
          minWidth: cssVariables.TAB_MIN_WIDTH
        }
      }
    },
    MuiDivider: {
      root: {
        margin: "0 0 5px 0",
        padding: 0,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderColor: cssVariables.LIST_BORDER_COLOR
      }
    },
    // https://github.com/mui-org/material-ui/issues/15945
    PrivateRadioButtonIcon: {
      layer: {
        left: 0
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderRadius: cssVariables.NOTCHED_OUTLINE_RADIUS
      }
    }
  },
  typography: {
    fontFamily: cssVariables.DEFAULT_FONT,
    fontSize: cssVariables.DEFAULT_FONT_SIZE
  }
});

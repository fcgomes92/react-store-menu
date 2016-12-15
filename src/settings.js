/**
 * Created by gomes on 14/12/16.
 */
import {
    red500, red300, red700,
    blue500, blue300, blue700,
    orange500, orange300, orange700,
    darkBlack, white, grey300, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const palette = {
    primary1Color: orange500,
    primary2Color: orange700,
    primary3Color: orange300,
    accent1Color: red500,
    accent2Color: red300,
    accent3Color: red700,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: orange500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
};
export const theme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: palette,
});
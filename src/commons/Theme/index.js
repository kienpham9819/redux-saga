import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color : {
        primary : "#0288D1",
        secondary : "#FFEB3B",
        error : "#E64A19"
    },
    typography : {
        fontFamily : "Roboto"
    },
    shape : {
        borderRadius : 4,
        backgroundColor : "#7C4DFF",
        textColor : "FFFFFF",
        border : "CCCCCC"
    }
});
    
export default theme;
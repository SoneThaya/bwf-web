import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, purple, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: lightBlue,
  },
});

export default theme;

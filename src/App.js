import logo from "./logo.svg";
import "./App.css";
import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import { Autocomplete, Grid } from "@mui/material";
import MovieData from "./data/MovieData";
import { TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Alert } from "@mui/material";
import { Stack } from "@mui/material";
import Dialouge from "./components/dialouge/Dialouge";
import { Skeleton } from "@mui/material";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

//new import
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
    incNumber,
    decNumber,
    changeColor1,
    changeColor2,
} from "./action/index";
import { dark } from "@mui/material/styles/createPalette";
// import FloatingFab from './components/FloatingFab/FloatingFab'

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(90deg, #C8FACD 30%, #FFF7CD 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
        "&:hover": {
            background: "#C8FACD",
            boxShadow: "none",
        },
    },
});

function App() {
    let classes = useStyles();

    const dispatch = useDispatch();

    const [themeFlag, setThemeFlag] = useState(true);
    const [themeName, setThemeName] = useState("Light");

    let lightTheme = createTheme({
        palette: {
            info: {
                main: "#3791EE",
            },
        },
    });
    let darkTheme = createTheme({
        palette: {
            info: {
                main: "#1A2035",
            },
            text: {
                secondary: "#FFFFFF",
            },
        },
    });

    return (
        <ThemeProvider theme={themeFlag ? lightTheme : darkTheme}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "95%",
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        padding: "20px 0",
                        width: "100%",
                    }}
                >
                    <Typography variant="h4" align="center">
                        Bangladesh
                    </Typography>
                    <Typography variant="h6" align="center">
                        Bangladesh
                    </Typography>

                    <TextField
                        autoComplete="true"
                        variant="standard"
                        value="Personal Details"
                        sx={{
                            border: "none",
                            pb: 5,
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        <form autoComplete="off" style={{ width: "100%" }}>
                            <Grid container>
                                <Grid container>
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        sx={{
                                            pb: 2,
                                        }}
                                    >
                                        <label
                                            for="jobs"
                                            style={{ display: "flex" }}
                                        >
                                            <Typography color="text.secondary">
                                                Wanted Job Title
                                            </Typography>
                                            <Tooltip title="Add a title like 'Senior engineer">
                                                <HelpOutlineIcon
                                                    color="info"
                                                    fontSize="small"
                                                />
                                            </Tooltip>
                                        </label>
                                        <input
                                            id="jobs"
                                            type="text"
                                            placeholder="e.g teacher"
                                        />
                                    </Grid>

                                    {/* input 2 */}
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        sx={{
                                            pb: 2,
                                        }}
                                    >
                                        <label
                                            for="jobs"
                                            style={{ display: "flex" }}
                                        >
                                            <Typography color="text.secondary">
                                                Wanted Job Title
                                            </Typography>
                                        </label>
                                        <input
                                            id="jobs"
                                            type="text"
                                            placeholder="e.g teacher"
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    {/* input 3 */}
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        sx={{
                                            pb: 2,
                                        }}
                                    >
                                        <label
                                            for="jobs"
                                            style={{ display: "flex" }}
                                        >
                                            <Typography
                                                color="text.secondary"
                                                sx={{
                                                    pb: 1,
                                                    fontSize: "15px",
                                                }}
                                            >
                                                First Name
                                            </Typography>
                                        </label>
                                        <input
                                            id="jobs"
                                            type="text"
                                            placeholder="e.g Hasibul"
                                        />
                                    </Grid>
                                    {/* input 4 */}
                                    <Grid
                                        item
                                        md={6}
                                        sm={12}
                                        sx={{
                                            pb: 2,
                                        }}
                                    >
                                        <label
                                            for="jobs"
                                            style={{ display: "flex" }}
                                        >
                                            <Typography color="text.secondary">
                                                Last Name
                                            </Typography>
                                        </label>
                                        <input
                                            id="jobs"
                                            type="text"
                                            placeholder="e.g Hasan Siam"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Accordion 1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse malesuada
                                        lacus ex, sit amet blandit leo lobortis
                                        eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </form>
                    </Box>
                </div>

                <div
                    style={{
                        padding: "20px 0",
                        width: "50%",
                        display: "none",
                    }}
                ></div>
            </div>
            <Fab
                variant="extended"
                sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                }}
            >
                <VisibilityIcon /> &nbsp; Preview
            </Fab>
        </ThemeProvider>
    );
}

export default App;

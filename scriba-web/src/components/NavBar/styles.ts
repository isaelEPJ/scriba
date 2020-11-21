import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { colors } from "../../assets/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        navLinks: {
            fontSize: "22px",
            margin: "0 6px 0 18px",
            textDecoration: "none",
            color: colors.white,
            "&:hover": {
                color: colors.green1,
            },
        },
        navbar: {
            backgroundColor: colors.blue2,
            height: "56px",
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        logoIcon: {
            "&:hover": {
                color: colors.green1,
            },
        },
        logoImg: {
            maxWidth: "9rem",
            maxHeight: "9rem",
        },

        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            },
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
    })
);
export default useStyles;

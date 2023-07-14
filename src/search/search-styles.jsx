import { makeStyles } from "tss-react/mui";

export default makeStyles()({
    root: {
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    textField: {
        marginRight: 5,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapBox: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 0px',
        '@media (max-width: 475px)': {
            flexDirection: 'column',
            margin: '0px 10px',
        },
    },
})
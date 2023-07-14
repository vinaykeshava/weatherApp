import { makeStyles } from 'tss-react/mui'

export default makeStyles()({

    root: {
        width: '100vw',
        height: 'calc(100vh - 64px)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'black',
        '&::before': {
            content: "''",
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'inherit',
            height: 'inherit',
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20201012/pngtree-white-cloud-on-blue-sky-weather-background-image_410050.jpg)',
            backgroundSize: 'cover',
            opacity: .8,
            zIndex: -1,
        },
    },
    container: {
        padding: 10,
        background: '#3f6066bd',
        color: 'white',
        textAlign: 'center'
    },
})
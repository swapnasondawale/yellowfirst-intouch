import { IconButton, makeStyles, Modal } from '@material-ui/core';
import Hamburger from 'hamburger-react';
import React from 'react';
import avatar from '../Assets/Images/avatar.png'

const useStyles = makeStyles((theme) => ({
    menuContainer: {
        margin: 'auto',
        width: '100%',
        height: '100%',
    },
    drawerContent: {
        margin: 'auto',
        width: '100%',
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'auto',
        textAlign: 'center',
        padding: '4px',
        backgroundColor: '#fff',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            width: '100%',
            height: '100%',
        }
    },
    drawerContainer: {
        // border: '2px solid blue',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'auto',
        width: 'auto',
        height: '768px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            width: '100%',
            height: '768px',
        }
    },

    hamburgerContainer: {
        marginTop: '10%',
        marginLeft: '300px',
        width: '100%',
        height: '40%',
        display: 'grid',
        justifyContent: 'right',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
        }
    },
    contentContainer: {
        margin: 'auto',
        marginTop: '-10%',
        width: '100%',
        height: '700px',
        display: 'grid',
        gridTemplateColumns: 'auto',
    },
    avatar: {
        height: '250px',
        margin: 'auto',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            height: 'auto',
        }

    },
    avatarPic: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '32px',
    },
    avatarProfile: {
        marginBottom: '24px',
    },

    avatarProfileH: {
        margin: 'auto',
        fontSize: '40px',

        letterSpacing: '-2px',
        marginBottom: '8px',
    },
    avatarProfileP: {
        marginTop: 'auto',
        color: 'rgb(172, 169, 169)',
    },
    content: {
        opacity: '1',
        maxWidth: '800px',
        margin: '0 auto',
    },
    contentP: {
        lineHeight: '1.6',
        marginBottom: '16px',
    },
    footer: {
        textAlign: 'center',
        height: 'max-content',
    },

}))

function CustomDrawer(props) {
    const classes = useStyles();
    return (
        <div className={classes.menuContainer}>
            <Modal
                open={props.open}
            >
                <div className={classes.drawerContent}>
                    <div className={classes.hamburgerContainer}>
                        <IconButton>
                            <Hamburger toggled={props.open} toggle={props.setOpen}
                                direction="left"
                                size={30}
                                color= 'black'                          
                            />
                        </IconButton>

                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.avatar}>
                            <div className={classes.avatarPic}>
                                <img className='avatar-img' src={avatar} alt='avatar' />
                            </div>
                            <div className={classes.avatarProfile}>
                                <h1 className={classes.avatarProfileH}>UX UI Design Studio</h1>
                                <p className={classes.avatarProfileP}>HUMANIZING DIGITAL EXPERIENCE</p>
                            </div>
                        </div>
                        <div className={classes.content}>
                            <p>The secret to a loveable product experience resides in how the problem is solved, thus we create <br />
                            innovative and disruptive digital product journeys that empathize with users, archiving business <br />
                                    goals, and appeal to global audiences.</p>
                        </div>
                        <div className={classes.footer}>
                            <h4>hello@yellowfirst.com</h4>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default CustomDrawer;
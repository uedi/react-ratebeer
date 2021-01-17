import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    header: {
        height: 50,
        display: 'flex',
        position: 'sticky',
        backgroundColor: '#131313',
        top: 0,
        zIndex: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    link: {
        color: '#fff',
        marginLeft: 5,
        marginRight: 5
    }
})

const Header = ({ loggedIn, handleLogout }) => {
    const classes = useStyles()
    
    const linkComponent = (target, text, startIcon, endIcon) => (
        <Button
            className={classes.link}
            color='inherit'
            component={Link}
            to={target}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {text}
        </Button>
    )

    const logoutButton = () => (
        <Button
            className={classes.link}
            color='inherit'
            onClick={handleLogout}
        >
            Logout
        </Button>
    )

    return (
        <div className={classes.header}>
            <div>
                { linkComponent('/', 'Home') }
                { linkComponent('/ratings', 'ratings') }
                { linkComponent('/beers', 'Beers') }
                { linkComponent('/breweries', 'Breweries') }
                { linkComponent('/styles', 'Styles') }
                { linkComponent('/countries', 'Countries') }
            </div>
            <div>
                { !loggedIn && linkComponent('/login', 'Login') }
                { !loggedIn && linkComponent('/signup', 'SignUp') }
                { loggedIn && logoutButton() }    
            </div>
        </div>
    )
}

export default Header
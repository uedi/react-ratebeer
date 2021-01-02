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
        alignItems: 'center'
    },
    link: {
        color: '#fff'
    }
})

const Header = () => {
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

    return (
        <div className={classes.header}>
            { linkComponent('/', 'Home') }
            { linkComponent('/beers', 'Beers') }
            { linkComponent('/breweries', 'Breweries') }
            { linkComponent('/styles', 'Styles') }
            { linkComponent('/signin', 'SignIn') }
            { linkComponent('/signup', 'SignUp') }

        </div>
    )
}

export default Header
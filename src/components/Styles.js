import React from 'react'
import { useSelector } from 'react-redux'
import StylesTable from './StylesTable'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Styles = () => {

    const history = useHistory()
    const styles = useSelector(state => state.styles)

    const createStyleClicked = () => {
        history.push('/styles/new')
    }

    return (
        <div>
            <h1 className='table-header'>Styles</h1>
            <Button className='button' style={{ marginLeft: '2em'}} onClick={createStyleClicked} color='primary'>Create style</Button>
            {styles && <StylesTable styles={styles} />}
        </div>
    )
}

export default Styles
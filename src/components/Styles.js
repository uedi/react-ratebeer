import React from 'react'
import { useSelector } from 'react-redux'
import StylesTable from './StylesTable'

const Styles = () => {

    const styles = useSelector(state => state.styles)

    return (
        <div>
            <h1 className='table-header'>Styles</h1>
            {styles && <StylesTable styles={styles} />}
        </div>
    )
}

export default Styles
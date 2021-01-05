import React, { useState } from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@material-ui/core'

/*
const useStyles = makeStyles({
    root: {
        margin: '2em',
    },
    container: {
        //maxHeight: 440,
    }
})
*/

const BreweriesTable = ({ breweries }) => {
  
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper className='table-paper'>
            <TableContainer>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            <TableCell key={'name'}>
                                Name
                            </TableCell>
                            <TableCell key={'year'}>
                                Year
                            </TableCell>
                            <TableCell key={'country'}>
                                Country
                            </TableCell>
                            <TableCell key={'status'}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {breweries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(brewery => {
                            return(
                                <TableRow key={brewery.id}>
                                    <TableCell key={'name'}>
                                        {brewery.name}
                                    </TableCell>
                                    <TableCell key={'year'}>
                                        {brewery.year}
                                    </TableCell>
                                    <TableCell key={'country'}>
                                        {brewery.country && brewery.country.name}
                                    </TableCell>
                                    <TableCell key={'status'}>
                                        {brewery.status && brewery.status}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default BreweriesTable
import React, { useState } from 'react'
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

const CountriesTable = ({ countries }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
    }

    const handleSetRowsPerPage = (event) => {
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
                            <TableCell key={'breweries'}>
                                Breweries
                            </TableCell>
                            <TableCell key={'beers'}>
                                Beers
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(country => {
                            return (
                                <TableRow key={country.id}>
                                    <TableCell key={'name'}>
                                        {country.name}
                                    </TableCell>
                                    <TableCell key={'breweries'}>
                                        {country.breweries ? country.breweries : '0'}
                                    </TableCell>
                                    <TableCell key={'beers'}>
                                        {country.beers ? country.beers : '0'}
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
                onChangeRowsPerPage={handleSetRowsPerPage}
            />
        </Paper>
    )
}

export default CountriesTable
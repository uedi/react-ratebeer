import React, { useState } from 'react'
import { Paper, 
    Table, 
    TableBody, 
    TableCell,
    TableContainer, 
    TableHead, 
    TablePagination, 
    TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'

const BeersTable = ({ beers }) => {
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
                            <TableCell key={'brewery'}>
                                Brewery
                            </TableCell>
                            <TableCell key={'style'}>
                                Style
                            </TableCell>
                            <TableCell key={'rating'}>
                                Rating
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((beer) => {
                            return (
                                <TableRow key={beer.id}>
                                    <TableCell key={'name'}>
                                        <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                                    </TableCell>
                                    <TableCell key={'brewery'}>
                                        {beer.brewery && beer.brewery.name}
                                    </TableCell>
                                    <TableCell key={'style'}>
                                        {beer.style && beer.style.name}
                                    </TableCell>
                                    <TableCell>
                                        {beer.rating}
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
                count={beers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default BeersTable
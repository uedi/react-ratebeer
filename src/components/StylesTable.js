import React, { useState } from 'react'
import { makeStyles} from '@material-ui/core/styles'
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

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: '100vh'
    }
})

const StylesTable = () => {
    const classes = useStyles()
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
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            <TableCell key={'name'}>
                                Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

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

export default StylesTable
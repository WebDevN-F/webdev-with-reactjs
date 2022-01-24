import React from 'react';
import './user.css';
import { IconButton } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    DataGrid,
    GridOverlay,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

function CustomLoadingOverlay() {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
  }

const User = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="user-listname">
                        <img src={params.row.avatar} alt={params.row.user} className="avatar" />
                        <span className="user-name">{params.row.user}</span>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'transactions',
            headerName: 'Transaction volumn',
            type: 'number',
            width: 220,
            renderCell: (params) => {
                return (
                    <span className="transaction-volumn">$ {params.row.transactions}</span>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="user-action">
                        <IconButton className="user-action-edit">
                            <ModeEditIcon />
                        </IconButton>
                        <IconButton className="user-action-delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            }
        }
    ];

    const rows = Array.from(Array(1000).keys()).map(i => ({
        id: i,
        user: `User ${i}`,
        email: `webdevA${i}@gmail.com`,
        transactions: Math.floor(Math.random() * 100000),
        avatar: '/50x50.png',
    }));

    return (
        <div className="userContainer">
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={100}
                    rowsPerPageOptions={[100, 200, 300, 400, 500]}
                    checkboxSelection
                    components={{
                        Pagination: CustomPagination,
                        LoadingOverlay: CustomLoadingOverlay,
                    }}
                />
            </Box>
        </div>
    )
};

export default User;

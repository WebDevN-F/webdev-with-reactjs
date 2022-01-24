import React from 'react';
import './user.css';
import { DataGrid } from '@mui/x-data-grid';

const User = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'orders',
            headerName: 'Total Orders',
            type: 'number',
            width: 120,
        },
    ];
    
    const rows = [
        { id: 1, username: 'Snow', email: 'Jon', orders: 35 },
        { id: 2, username: 'Lannister', email: 'Cersei', orders: 42 },
        { id: 3, username: 'Lannister', email: 'Jaime', orders: 45 },
        { id: 4, username: 'Stark', email: 'Arya', orders: 16 },
        { id: 5, username: 'Targaryen', email: 'Daenerys', orders: null },
        { id: 6, username: 'Melisandre', email: null, orders: 150 },
        { id: 7, username: 'Clifford', email: 'Ferrara', orders: 44 },
        { id: 8, username: 'Frances', email: 'Rossini', orders: 36 },
        { id: 9, username: 'Roxie', email: 'Harvey', orders: 65 },
    ];

    return (
        <div className="userContainer">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
};

export default User;

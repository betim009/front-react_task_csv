import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useCsv } from '../../hooks/useCsv';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task', headerName: 'Task', width: 240 },
    { field: 'status', headerName: 'Status', width: 140 },
    { field: 'description', headerName: 'Descrição', width: 640 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function MyTable() {
    const { dataCSV } = useCsv()

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={dataCSV}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

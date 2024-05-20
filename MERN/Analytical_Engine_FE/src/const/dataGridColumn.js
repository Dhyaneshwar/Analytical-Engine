export const contactColumns = [
  {
    field: '_id',
    headerName: 'id',
    flex: 0.15,
  },
  {
    field: 'first_name',
    headerName: 'First Name',
    flex: 0.3,
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    flex: 0.3,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 0.65,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 0.35,
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 0.35,
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 0.35,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 2,
    renderCell: (params) => `${params.value}`,
  },
]

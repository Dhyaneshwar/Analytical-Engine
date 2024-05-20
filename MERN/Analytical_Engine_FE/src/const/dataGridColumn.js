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

export const contactModalCommonColumns = [
  {
    field: 'id',
    headerName: 'Contact ID',
    flex: 0.1,
  },
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
  },
  {
    field: 'organisation_id',
    headerName: 'Organisation ID',
    flex: 0.15,
  },
  {
    field: 'system_score',
    headerName: 'System Score',
    flex: 0.25,
  },
]

export const contactModalColumns = [
  {
    field: 'asset_id',
    headerName: 'Contact ID',
    flex: 0.1,
  },
  {
    field: '_id',
    headerName: 'Recommendation ID',
    flex: 0.1,
  },
  {
    field: 'user_id',
    headerName: 'User ID',
    flex: 0.1,
  },
  {
    field: 'creator_id',
    headerName: 'Creator ID',
    flex: 0.1,
  },
]

export default {
  // onBoardOptions: [
  //   {name: 'Admin Pranchage', value: 'adminPranchage'},
  //   {name: 'Pranchage', value: 'Pranchage'},
  // ],
  patient: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      value: '',
      isRequired: false
    },
    {
      name: 'pranchageName',
      type: 'text',
      label: 'Pranchage Name',
      value: '',
      isRequired: false
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
      value: '',
      isRequired: false
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      value: '',
      isRequired: false
    },
    {
      name: 'qualification',
      type: 'text',
      label: 'Qualification',
      value: '',
      isRequired: false
    },
    {
      name: 'treatments',
      type: 'text',
      label: 'Treatments',
      value: '',
      isRequired: false
    },
    {
      name: 'pranchageType',
      type: 'text',
      label: 'Pranchage Type (clinic, medical store ..etc)',
      multiline: false,
      value: '',
      isRequired: false
    },
    {
      name: 'pranchageAddress',
      type: 'text',
      label: 'Pranchage Address',
      multiline: true,
      value: '',
      isRequired: false
    },

  ]
}

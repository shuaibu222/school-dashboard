export default {
  name: 'student',
  type: 'document',
  title: 'Student',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'department',
      type: 'object',
      fields: [
        {
          name: 'dept',
          title: 'Department',
          type: 'reference',
          to: {type: 'department'},
          options: {
            sort: {order: 'ASC', fields: ['name']},
          },
        },
      ],
    },
  ],
}

export default {
    name: 'companyinfo',
    title: 'companyinfo',
    type: 'document',
    fields: [

        {
            name: 'name',
            title: 'name',
            type: 'string',
        },



        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },


        {
            name: 'email',
            title: 'email',
            type: 'string',
        },


        {
            name: 'logo',
            title: 'logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },



    ]
  };
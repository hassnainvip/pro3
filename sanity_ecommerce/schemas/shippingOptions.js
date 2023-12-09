
export default {
    name: 'shipping_options',
    title: 'Custom Shipping Options',
    type: 'array',

    of: [


        {
            name: 'shipping_options',
            title: 'Custom Shipping Options',
            type: 'object',
            fields: [
                {
                    name: 'shipping_option',
                    title: 'Shipping Text',
                    type: 'string',
                },
                // {
                //     name: 'shipping_charges',
                //     title: 'shipping charges',
                //     type: 'number',
                // },
                {
                    name: 'is_s_true',
                    title: 'Turn on or off',
                    type: 'boolean',
                    initialValue: false,
                },

            ]
        }


      
    
    ],
    
}
export default {
    name: 'product',
    title: 'product',
    type: 'document',
    fields: [
        {
            name: 'visible',
            title: 'is product visible',
            type: 'boolean',
            initialValue: false,

        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },

        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'woocommerceid',
            title: 'Same id as wooCommerce',
            type: 'number',
        },
        {
            name: 'shipping_charges',
            title: 'Shipping Charges',
            type: 'number',
        },
        {
            name: 'shipping_options',
            title: 'Shipping options',
            type: 'shipping_options',
        },
        
        {
            name: 'discription',
            title: 'Discription',
            type: 'string',
        },
        {
            name: 'pre_title',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'customer_rating',
            title: 'Customer rating Text',
            type: 'string',
        },
        {
            name: 'customer_rating_value',
            title: 'Customer rating value in number',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'original_price',
            title: 'Orignal Price',
            type: 'number',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'boolean',
          },
        {
            name: 'discountprice',
            title: 'discount Price for buy one get one',
            type: 'number',
        },

        {
            name: 'details',
            title: 'Details',
            type: 'blockContent',
        }
    ],
    
}
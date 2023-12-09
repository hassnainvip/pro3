import { PlayIcon } from '@sanity/icons'

export default {
    name: 'custom_script_video',
    title: 'Custom Script For Video',
    type: 'object',
    icon: PlayIcon,
    fields: [
        {
            name: 'platform_name',
            title: 'Platform Name',
            type: 'string',
        },
        {
            name: 'custom_script_video',
            title: 'Youtube Video URL',
            type: 'text',
        },
    
    ],
    
}
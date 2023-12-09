import {defineCliConfig} from 'sanity/cli'

const projectIds = '35fbhooj';
// 35fbhooj

export default defineCliConfig({
  api: {
    projectId: projectIds,
    dataset: 'production'
  }
})

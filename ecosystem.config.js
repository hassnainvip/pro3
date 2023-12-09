module.exports = {
    apps: [{
        script: 'npm start'
    }],

    deploy: {
        production: {
            key: 'key.pem',
            user: 'root',
            host: '139.59.106.3',
            ref: 'origin/main',
            repo: 'git@github.com:hassnainhp/ecommerce_website.git',
            path: '/home/master/applications/ydkgwcuvph/public_html',
            'pre-deploy-local': '',
            'post-deploy': 'cd /home/master/applications/ydkgwcuvph/public_html/source/vovo && source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh_options': 'ForwardAgent=yes'
        }
    }
}

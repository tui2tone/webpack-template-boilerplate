const html = require('./html')
const dashboard = require('./dashboard')

const plugins = [
    ...dashboard,
    ...html
]

module.exports = plugins
module.exports = {
    configureWebpack: {
        reserved: {
           alias: {
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views',
           }
        }
    }
}
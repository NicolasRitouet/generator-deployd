module.exports = {
    <% if (angular) { %>js: {
        files: ['<%%= folders.public %>/lib/**', '<%%= folders.public %>/app/**/*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true,
        },
    },<% } %>
    files: [
        '<%%= folders.public %>/*.html',
        '<%%= folders.public %>/styles/{,*/}*.css',
        '<%%= folders.public %>/script/{,*/}*.js',
        '<%%= folders.public %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ],
    options: {
        livereload: true
    }
};
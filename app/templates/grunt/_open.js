module.exports = {
	dev: {
        path: 'http://localhost:<%%= deployd.dev.options.port%>'
    },
    prod: {
        path: 'http://localhost:<%%= deployd.prod.options.port%>'
    }
};
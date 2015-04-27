/**
 * Created by andy.chen on 2015/4/24.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8081);
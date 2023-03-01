/*
 * Created by harinaths on 30/1/16.
 */
var config = {
    port: 9001,
    viewPath: __dirname + '/dist', //Template Engine
    publicPath: __dirname + '/src', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("login")
})
app.get('/homePage', function(req, res){
    res.render("homePage")
})
app.get('/attendance', function(req, res){
    res.render("attendance")
})

app.get('/reports', function(req, res){
    res.render("reports")
})

app.get('/holidayCalendar', function(req, res){
    res.render("holidayCalendar")
})

app.get('/leaveApply', function(req, res){
    res.render("leaveApply")
})

app.get('/leaveHistory', function(req, res){
    res.render("leaveHistory")
})
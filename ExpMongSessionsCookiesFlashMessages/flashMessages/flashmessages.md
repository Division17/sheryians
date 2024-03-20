# Flash messages are set/used/can be used only with Express-session only.
 
 Flash messages are shown in frontend. They are linked along with the backend to display warings 

 there is no way to exchange data between routes in server (global variables are not used as it is a bad practice to pollute the global space) to solve this flash messages are used.

 flash messages allow us to share data between routes because which one route's data can be shared with other routes.

 1> connect-flash 
 2> set up sessions 
 3> configure all in app.use

 to create
 req.flash("name", value)

 to read
 req.flash("name")
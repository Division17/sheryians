http methods
# PUT POST GET DELETE and many more 

# Node
1) C++ wrapped with js 

# Express
1) install express 
    -> import it ->

       app = express() ->

       middlewares if required (agge jaane se phele humse mil kar jana kind of they execute before any route everytime whenever a route is routed) ->

       app.use(req, res, next)=>{
         //code to execute
         next();  // must to be used as it pass ons the control to the route if not passed will result in infinite loading as nodejs has a consequence that it moves the control to the middleware and don't receive it back until next is used.
       } ->

  app.get("/route",(req, res)=>{
           //req -> contains the user data received from the user consists of a lot of data
           //res -> data that is being provided by the server

           consists of code
})

app.listen(port number , ()=>{
    to console or can skip the function part but listen is must as it opens ups a port where server will be running
})


# EJS
  1) install it 
  2) configure it by   app.set("view engine", "ejs")
  3) create a folder named " views " that consists of all the ejs files 
  4) use res.render("file name without extension",{ data to be shared or to be given out})
  5) use "<%=variable name (similar name as that given in data from .render to provide dynamic data) %> "


# Express static files
  to store the css, js and images to be used in frontend.
  1) configure -> 
                    app.use(express.static("path of the folder from where you have to include the files"))
  2) industry standars 3 folders are created with names stylesheets, javascripts and images for respective
  3) files are linked to ejs like normally as linked in html just a thing to keep in mind that you have to skip the path that is already mentioned in ecpress.static("path")
  4) good to go.                  
            

  # Express error handling   
    
    
      
        app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)

    res.render('error', { error: err,
    code: 500})
  })

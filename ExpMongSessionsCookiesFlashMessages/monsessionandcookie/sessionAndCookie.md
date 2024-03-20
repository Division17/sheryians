# Session :->

             user data  is stored on server side by using sessions, the data is safe and secured and cann't be tempered with normally. Must save data in such a way.
            Data on backend.

 1)    install express-session
 2) import it in app.js 
 3) use a middle ware to assign it values -> {   
                                                  resave: false,
                                                  saveUninitialized:false,
                                                  secret: "any string fro security purposes"
                                               } 
          req.session.koibhinaam = "koi bhi value"

          can be used throughout routes to check or acces values.     

          req.session.destroy((err)=>{
           if (err) throw err;
           res.send("chal rha hai")
          })                                    


    ***   server restart honne par values return to their default state ***



# Cookies :->

           user data is stored on client side by using cookies, the data is  not safe and secured and can be tempered with normally. Mustn't save data in such a way unitll required.
            Data on front-end.

1) cookie-parser
2) congif cookie

   cookie setup/create
   res.cookie("name of cookie", value)

   cookie reading
   req.cookies.name

   cookie deleteion
   res.clearCookie("name of cookie")

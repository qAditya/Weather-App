const express=require('express');
const app=express();
const path =require('path'); //Library which have many functions realted to path
const hbs=require('hbs'); //It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions
const port=process.env.PORT || 8000;;
app.set('view engine','hbs');// in order to tell express that the view engine is hbs.Viewengine is the combination of HTML tags, Server Controls and a programming language and works inside the application for rendering view to the browser or to the user.
app.set('views', path.join(__dirname,'/templates/views'));//In order to tell express where view directory is located
hbs.registerPartials(path.join(__dirname,'/templates/partials'));//Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called directly by other templates.In order to use a partial, it must be registered via Handlebars.registerPartial
//app.set('views', path.join(__dirname, '/templates/views'));

app.use(express.static(path.join(__dirname,"/public")));//in order to tell express to render the static pages from here.


app.get('/',(req,res)=>      //Root Route.
{
    res.render('index')
})
app.get('/about',(req,res)=> 
{
    res.send("We update you with weather report")
})
app.get('/weather',(req,res)=> 
{
    res.render('weather');
})
app.get('*',(req,res)=> 
{
    res.render('404error');
})


app.listen(port, () =>      ///App listen at this port number.
{
    console.log("Running....");
})
// What is port?

//A port is a virtual point where network connections start and end.
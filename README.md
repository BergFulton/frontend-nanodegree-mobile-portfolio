##Udacity FEND Web Optimization Project

#####TL;DR- Make a local copy, run npm install, then gulp, then open index-critical.html. 

###What is this? 
This is my submission for the Udacity Frontend Web Developer Nanodegree Project 5- web optimization. 

The project starts as a very janky, and very ugly (Sorry, Cameron) portfolio, and students must use their JavaScript, CSS, HTML, Gulp, and basically any other tool they can think of to get:    
1) A Pagespeed Insights score of 90/100 on desktop _and_ mobile  
2) A jank free scroll on the `views/pizza.html` page  
3) A .5ms resize of the pizzas on `views/pizza.html` page

Original code found [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

###How can I see it?
First, put on your sunglasses. This page isn't pretty. But restyling wasn't part of the course, and there's only so many hours...

1) But for real, first, clone this repo into a local directory.   
 **Before continuing, do you have `npm` and `gulp` working on your machine? If not, do that now. Documentation for NodeJS [is here](https://nodejs.org/en/) and  Gulp [is here](http://gulpjs.com/). You need these, trust me.**

2) In the terminal, navigate to the local directory where you've put this repo, and  type `npm install`.

3) Then type `gulp`. 
   After you type `gulp`, you'll see a bunch of things happen in the terminal. That's good! `gulp` is minifying images and code, optimizing them for the web. 

4) After `gulp` has finished, you'll see a file called `index-critical.html` in your local directory. Open that in your browser of choice. 

###I want to test this on PageSpeed Insights!
OK, cool. You're going to need to local host this in order to do it. 
 
Do you have Python on your computer? If not, go get that. 

You need `ngrok` to make this happen. See [this page](https://www.npmjs.com/package/ngrok).

In a terminal window, type:  
`python -m SimpleHTTPServer 8080` (case sensitive!)

Open another terminal window, and type:  
`ngrok http 8080`  
You'll see a bunch of words, but what you're looking for is a forwarding address that looks like this:   
`forwarding: http://8ed3d66e.ngrok.io`   
Copy & paste the URL in to PageSpeed Insights, and be amazed!


###What's going on?
`gulpfile.js` has a series of tasks in it that are doing things like minifying HTML, cleaning CSS, and one very important task called `critical`. 

`critical` generates `index-critical.html` from the standard `index.html` files. We need `index.html` to create `index-critical.html`, so *don't* delete it. 

`index-critical` contains minified HTML & inline CSS, which help performance. They're not great at being human readable, so maintain your standard CSS/HTML files & folders. 


###Other optimizations
`views/js/main.js` contained a number of non-performant loops that were optimized to increase page speed. The main improvements were moving anything that requested DOM access outside of the loop, saving a ton of memory. 

Images were larger (physically and DPI) than was needed for this project, so those were fed to [GraphicsMagic](https://www.npmjs.com/package/gm) task in the `gulp` file.  

Duplicate CSS was also removed. 

HTML, CSS, and JS were all minified for performance. 



###Acknowledgements
Lots of support and help from Karol & Andrew at Udacity (as always, cheers mates!). 

Big big help was had from [LacyPJR's repo](https://github.com/lacyjpr/optimization) for this project. 

Last, but certainly not least, sanity checking & JavaScript commiseration by [pfulton](http://github.com/pfulton).



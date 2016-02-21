
<head>
        <meta charset="utf-8">
        <title>学习React</title>
        <script src="bundle.js"></script>
    </head>
    
    <body>
      
        <div id="example"></div>
       
    </body>


I am having the same problem and it happens because the scripts are executed before
 having the DOM parsed (maybe you are including your scripts in your index head). 
 To fix this, you can use defer in your script inclusion.
 
 
 <head>
    ...
    <script src="app.js" defer></script>
    ...
</head>


The defer attribute loads your script when the page has finished parsing, 
so even if you place your scripts into your index head, 
you will be sure the script is going to find all your elements because they will be there.
# Nucscholar Search
This repository is a part of an effort to create a google like search engine specific to nuclear research. The current standard does not search all of the time, and when it does it misses information that is known to be presesnt.
## HTML
There are two important HTML pages
* test.html  
This is the main HTML page of the search. This page takes user input and calls the JavaScript file to run the search functionality outlined in the script.js file.  
* output.html  
This file displays the returned papers to the User. The file script.js calls this page after running the search and gives it the papers that matched the search criteria. This file also contains a script tag that defines its JavaScript functionality, such as iterating through the list of returned papers and output the infromation.  
  
  
***NOTE: There are two additional HTML pages found in this repo. They are formatted for use on wordpress. The only difference is, the HTML pages denoted '(wordpress)', do not call an external JavaScript. The JavaScript is instead called and defined within the HTML file itself.***
## JavaScript
There is only a single JavaScript file wihtin this repository.
* script.js
This is the main script of the repo. The test.html page calls this script. It handles all of the search functionality and redirects the user to the output.html page after search is complete.

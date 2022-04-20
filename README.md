# Nucscholar Search
This repository is a part of an effort to create a google like search engine specific to nuclear research. The current standard does not search all of the time, and when it does it misses information that is known to be presesnt.
## HTML
There are two HTML pages.
* search.html  
This is the main HTML page of the search. This page takes user input and calls JavaScript functions to search the Nucscholar JSON file.
* searchoutput.html
* 
This file displays the returned papers to the User. The functions in search.html calls this page after running the search and gives it the papers that matched the search criteria. This file also contains a script tag that defines its JavaScript functionality, such as iterating through the list of returned papers and output the infromation.  
  
***NOTE: There are two additional HTML pages found in this repo within the Legacy folder. The only difference is the HTML pages found in the legacy folder call an external JavaScript file.***
## JavaScript
There is only a single JavaScript file wihtin this repository in the Legacy folder.
* script.js
* 
script.js contains the same functionality as search but is contained within its own file. This file was used to seperate out the pieces of the webpage but for wordpress all JavaScript code has to be within the script tags of the html. 

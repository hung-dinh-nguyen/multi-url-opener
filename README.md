/* VERSION 1
Overview
1. index.html 
    a. Title of Application 
    b. Explanation/Instruction 
    c. Text Area Input 
    d. Submit Button 
    e. Preview Section
    d. Open All Links Button 
2. script.js 
    a. 


CODE PROCEDURE 
1. Converts text area input into a string 
2. Use JS match, or similar, to find all valid links in input. 
    a. Accepts spaces, return, and no spaces between valid links 
3. Push each valid link to an empty array 
4. Number and Print each link in the Preview Section 
    a. Display total number of links too
5. Open all links in new tab when a button is pressed 


Building Steps 
1. JS
2. HTML 
3. Integration between JS & HTML 
4. CSS 

*/


/* VERSION 2
Overview
1. index.html 
    a. Title of Application 
    b. Explanation/Instruction 
    c. Text Area Input 
    d. Submit Button 
    e. Preview Section
    d. Open All Links Button 

Building Blocks
1. React 
    a. Main Component 
        i. Title and Instructions 
        ii. Input Text Area State 
    b. URL Input Submission Component
        i. Create a text area to hold the urls
            - Connect text to input text area state 
        ii. Create a button to manipulate the text
            - Parse the input text area
            - Generate a preview of all parsed urls 
    c. Preview Component 
        i. Display a text area that lists all the generated links 
            - Number each link and show the total amount 
        ii. Create a button that opens all urls in a new tab 

2. CSS 
    a. Make it look pretty 
    b. Maybe, blue and dark theme 
*/

# Multi-URL Opener 
Allows you to open multiple URLs at once. The tool lets you preview the links before opening them in a new tab.
This lets you review the number of links, spot potential typos, and track pertinent sites

### Instructions 
1. Enter one full URL address per line
2. Make sure to allow pop-ups and redirects for this site 
3. Click on "PREVIEW" to see a numbered list of links 
4. Press on "OPEN" to open all URLs in new tabs 


# Overview
uses .charAt() to decode a string
# How to use the function
This uses a function so that it easily slips into websites with a simple function call. Say you had the JSON {"id":2821313}, you would insert the json into the first slot so
that it looks like this, Decode({"id":2821313}), now just before the closing bracket you put a ',' and then the character # of the first thing after the ':' in this case the
first number (2) is character # 7 so our complete function looks like this, Decode({"id":2821313}, 7) the full function and a example for the Decode() can be found at 
Main.js

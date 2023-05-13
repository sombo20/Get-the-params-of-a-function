# Get-the-params-of-a-function

## About

### This code demonstrates how to extract the parameters of a function in JavaScript using regular expressions.

## Code
<pre>
const myFunction = (param1, param2, param3) => {
    // do something with the function
};

const params = myFunction.toString()
    .match(/\((.*?)\)/)[0]
    .split(",")
    .map(item => item.trim());

console.log(params); // returns [param1, param2, param3]
</pre>

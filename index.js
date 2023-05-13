const myFunction = (param1, param2, param3) => {
    // do something with the function
};

const params = myFunction.toString()
    .match(/\((.*?)\)/)[0]
    .split(",")
    .map(item => item.trim());

console.log(params); // returns [param1, param2, param3]

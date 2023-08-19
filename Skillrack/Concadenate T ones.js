/*

Concatenate T Ones
The program must accept an integer N as the input. The program must find the number of
ones T in the binary representation of N. Then the program must form the binary representation of
an integer X by concatenating T ones. Finally, the program must print the integer value of X as the
output.
Boundary Condition(s):
2 <= N <= 10^8
Input Format:
The first line contains N.
Output Format:
The first line contains X.
Example Input/Output 1:
Input:
10
Output:
3
Explanation:
There are 2 ones present in the binary representation of 10 (1010). 
So the binary representation of the integer X is 11.
The decimal equivalent of 11 is 3.
Hence the output is 3
Example Input/Output 2:
Input:
15
Output:
15



*/








var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  terminal: true
});

var lines = [];

reader.on('line', function (line) {
    lines.push(line);
});

reader.on('close', function () {
    var n = lines[0];
    var b = Number(n).toString(2)
    var r = b.replace(/0/g,'')
    var dec = parseInt(r,2)
    console.log(dec)
});
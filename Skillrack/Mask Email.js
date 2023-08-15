/* Problem :

Mask Email
A string S representing the email of a user is passed as the input. The program must secure the
email by masking vowels and digits with asterisk * and print the resulting masked string value M as
the output.
Boundary Condition(s):
5 <= Length of S <= 100
Input Format:
The first line contains S.
Output Format:
The first line contains M.
Example Input/Output 1:
Input:
your5name_007@gmail.com
Output:
y**r*n*m*_***@gm**l.c*m
Example Input/Output 2:
Input:
AS34DFq65werx7cm0v@red@rediffmail.com
Output:
*S**DFq**w*rx*cm*v@r*d@r*d*ffm**l.c*m  */


//Coding :

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
    
    var str = lines[0];
    
    var v = "aeiouAEIOU1234567890";
    var n = v.length;
    for (let i=0;i<n;i++) {
        var regx = new RegExp(v[i],'g')
        str = str.replace(regx,"*")
    }
    console.log(str)
});
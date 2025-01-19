let output = '';
let skipNumber = 5;
for (i=1;i<=10;i++)
{
    if(i===skipNumber)
    {
        continue;
    }
    output += String(i)+" ";
}
console.log(output);

let output1 = '';
let skipNumber1 = 5;
for (i=1;i<=10;i++)
{
    if(i===skipNumber1)
    {
        break;
    }
    output1 += String(i)+" ";
}
console.log(output1);

let samplebject = {
    name:'Jay',
    age: 20,
    location:'Delhi'
}
for(key in samplebject)
{
    console.log(key+':'+samplebject[key])
}
let sameValue = ['Jay', 20, 'Delhi']
for (i=0; i<sameValue.length; i++)
{
    console.log(sameValue[i]);
}
let mywork = [];
for(i=1;i<=10;i++)
{
const status = (i%2==0)? true:false;

const  lession = {
     name: `lession ${i}`,
     Status:status
};
mywork.push(lession)
}
console.log(mywork);
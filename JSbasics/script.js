var age=18;
if(age<13){
    console.log("minor");
}
else if(age>=18){
    console.log("major");
}

age>=18?console.log("major"):console.log("minor");

function naming(fn,ln){
    console.log(fn+' '+ln);
}
naming('Hiranmayee','Dixith');
var names=['krithi','keerthana','darshan'];
console.log(names[2]);
console.log(names.length);
names.push('kalki');
names.unshift("raj");
names.pop();
console.log(names);

var a1,a2,a3,tip1,tip2,tip3,total1,total2,total3;
a1=124;
a2=48;
a3=268;
tip1=tip(a1);
tip2=tip(a2);
tip3=tip(a3);
total1=a1+tip1;
total2=a2+tip2;
total3=a3+tip3;

var tiparray=[tip1,tip2,tip3];
var bill=[total1,total2,total3];
console.log(tiparray);
console.log(bill);
function tip(amount){
if(amount<=50){
    t=amount*0.2;
    
}
else if(amount>50&&amount<200){
    t=amount*0.15;
}
else if(amount>=200){
    t=amount*0.1;
}
return t;
}

var myDetails = {
    firstname: 'Hiranmayee',
    lastname: 'Dixith',
    dob: 1998,
    family: ['chithkala','sathih'],
    calcAge: function(birthyear){
        return 2019-birthyear;
    }
};

console.log(myDetails.firstname);
var z='dob';
console.log(myDetails[z]);

myDetails.dob=1997;
console.log(myDetails);

//creating an object

var sam=new Object();
sam.firstname='Chinmayee';
console.log(sam);

console.log('Chinmayee is '+myDetails.calcAge(1994)+' years old');


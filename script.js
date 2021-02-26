function hideNumber(){
    var creditCardNumer=document.getElementById("creditCardNumer").value;
    if(creditCardNumer.length==14){
    var firstHidden=creditCardNumer.slice(0,9);
    firstHidden="**********";
    document.getElementById("hiddeNumbers").innerHTML=firstHidden+creditCardNumer.slice(10,14);
    document.getElementById("danger").innerHTML="";
    }
    else{
        document.getElementById("danger").innerHTML="Enter Correct Credit Card Number Length 14";
        document.getElementById("hiddeNumbers").innerHTML="";
    } 
}

function calculate(){
    var potatoesInput=document.getElementById("potatoesInput").value;
    var total=(potatoesInput.match(/potato/g)).length;
    document.getElementById("totalAmount").innerHTML=total;
}
function repeatChar(){
    var charachterInput=document.getElementById("charachterInput").value;
    var doubleChar="";
    for(i=0; i<charachterInput.length; i++){
        doubleChar +=charachterInput[i]+charachterInput[i];
        document.getElementById("repeatedCharacter").innerHTML=doubleChar;
    }
}

function grossSalary(){
    var salaryInput=document.getElementById("salaryInput").value;
    if(salaryInput<=10000){
        var hraPer=(salaryInput*20)/100;
        var daPer=(salaryInput*80)/100;
        var totalSalary=parseInt(salaryInput)+parseInt(hraPer)+parseInt(daPer);
        document.getElementById("totalSalary").innerHTML=totalSalary;
    }
    else if(salaryInput<=20000){
        var hraPer=(salaryInput*25)/100;
        var daPer=(salaryInput*90)/100;
        var totalSalary=parseInt(salaryInput)+parseInt(hraPer)+parseInt(daPer);
        document.getElementById("totalSalary").innerHTML=totalSalary;
    }
    else if(salaryInput>20000){
        var hraPer=(salaryInput*30)/100;
        var daPer=(salaryInput*95)/100;
        var totalSalary=parseInt(salaryInput)+parseInt(hraPer)+parseInt(daPer);
        document.getElementById("totalSalary").innerHTML=totalSalary;
    }
}

function calculateBill(){
    var unitInput=document.getElementById("unitInput").value;
    if(unitInput<=50){
        var bill=unitInput*0.50;
        var surCharge=(bill*20)/100;
        var totalBill=bill+surCharge;
        document.getElementById("totalBill").innerHTML=totalBill;
    }
    else if(unitInput>50 &&  unitInput<=150){
        var bill=unitInput*0.75;
        var surCharge=(bill*20)/100;
        var totalBill=bill+surCharge;
        document.getElementById("totalBill").innerHTML=totalBill;
    }
    else if(unitInput>150 &&  unitInput<=250){
        var bill=unitInput*1.20;
        var surCharge=(bill*20)/100;
        var totalBill=bill+surCharge;
        document.getElementById("totalBill").innerHTML=totalBill;
    }
    else if(unitInput>250){
        var bill=unitInput*1.50;
        var surCharge=(bill*20)/100;
        var totalBill=bill+surCharge;
        document.getElementById("totalBill").innerHTML=totalBill;
    }
}

function sumOfMultiples(){
    var limitInput=document.getElementById("limitInput").value;
    var sum=0;
    if(limitInput<1000){
       for(i=0; i<limitInput; i++){
        if(i%3==0 || i%5==0){
            sum =sum+i;
        }
       }
       document.getElementById("result").innerHTML=sum;
    }
}

function calculateNumberOfElements(){
    var arrayInput=document.getElementById("arrayInput").value;
    var count={};
    var arr=new Array(arrayInput);
    var second=prompt("Enter Second Element of Array");
    arr[1]=second;
    var third=prompt("Enter Third Element of Array");
    arr[2]=third;
    var fourth=prompt("Enter Fourth Element of Array");
    arr[3]=fourth;
    var fifth=prompt("Enter Fifth Element of Array");
    arr[4]=fifth;
    for(i=0; i<arr.length; i++){
        var num=arr[i];
        count[num]=count[num] ? count[num] +1 :1;
    }
    var myJSON = JSON.stringify(count);
    document.getElementById("numberOfElements").innerHTML=myJSON;
}

function countChars(){
    var searchChar=document.getElementById("searchChar").value;
    var string=document.getElementById("string").value;
    var num=0;
    for(i=0; i<=string.length; i++){
        if(string[i]==searchChar){
            num++;
        }
    }
    document.getElementById("searchOutput").innerHTML=num;
}
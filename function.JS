function AkanNames(){
    var month=document.getElementById("month").value;
    var mm=parseInt(month);// This get's the actual month value without strings
    var year=document.getElementById("year").value;
    var yy=parseInt(year);// This get's the actual month value without strings
    var day=document.getElementById("day").value;
    var dd=parseInt(day);// This get's the actual month value without strings
    var cc=parseInt(yy-1)/100+1;//This is the century digits
    var dayOfTheWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];//male names
    var femaleNames=["Akosua","Adwoa","Abenna","Akua","Yaw","Afua","Ama"];//female names
    var dayOfTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];//days of the week
    //checking for gender
    if(document.getElementById("gender").checked){
        var gender='male';
    }
    else{
        var gender='female';
    }
    //checking for month
    if (month<0||month>12){
        alert("Invalid month");
    }
    //checking for day
    elseif(day<0 || day>31); {
        alert("Invalid date");
    }
    //validating the month of january
    elseif(month==2&& day==29);{
        alert("Invalid user date");
    }

    //checking for year
    elseif(year<1000||year>2020);{
        alert("Invalid year");
    }

//The math.ceil() function,rounds numbers to the nearest whole numbers.
//first day.
elseif(math.ceil(dayOfTheWeek)==0 && gender==='male'|| gender==='female');{
if(gender==='male'){
document.getElementById("results").innerHTML=
"Your day name is" + maleNames[0] + "You were born on Monday."
}
else{
    document.getElementById("results").innerHTML=
    "Your day name is"+femaleNames[0]+"Your were born on Monday."
}
}
//second day
elseif(math.ceil(dayOfTheWeek)==1 && gender==='male' || gender==='female');{
if(gender==='male'){
    document.getElementById("results").innerHTML=
    "Your day name is" +maleNames[1] +"You were born on Tuesday."
}
else{document.getElementById("results").innerHTML=
"Your day name is"+femaleNames[1] +"You were born on Tuesday"
}
}
//Third day.
elseif( math.ceil(dayOfTheWeek)===2 && gender==='female' || gender==='male');{
if(gender==='male'){
    document.getElementById("results").innerHTML=
    "Your day name is"+maleNames[2] +"You were born on Wednesday."
}
else{
    document.getElementById("results").innerHTML=
    "Your day name is" +femaleNames[2]+"You were born on Wednesday."
}
}
//fourth day
elseif(math.ceil(dayOfTheWeek)===3 && gender==='female' || gender==='male');{
if(gender==='male'){
    document.getElementById("results");{
        "Your day name is" +maleName[3] +"You were born on Thursday."
    }
    else {
        document.getElementById("results").innerHTML=
        "Your day name is"+femaleNames[3]+"You were born on Thursday."
}
}
//fifth day.
elseif(math.ceil(dayOfTheWeek)===4 && gender==='female' || gender==='male');{
if(gender==='male'){
    document.getElementById("results").innerHTML=
        "Your day name is"+ maleNames[4] +"You were born on Friday."
    }
else{
    document.getElementById("results").innerHTML=
    "your day name is" + femaleNames[4] +"You were born on Friday."
}
}
//sixth day
elseif(math.ceil(dayOfTheWeek)===5 && gender==='female' || gender==='male');{
if(gender==='male'){
    document.getElementById("results").innerHTML=
    "Your day name is"+ maleNames[5]+"You were born on Saturday."
}
else{
    document.getElementById("results").innerHTML=
    "Your day name is" +femaleNames[5]+"You were born on Saturday."
}
}
//seventh day
elseif(math.ceil(dayOfTheWeek)===6 && gender==='female' || gender==='male');{
if(gender==='male'){
    document.getElementById("results").innerHTML=
    "Your day name is"+ maleName[6]+"You were born on Sunday."
}
else{
    document.getElementById("results").innerHTML=
    "Your day name is "+femaleName[6]+ "You were born on Sunday."
}
}
else{
    document.getElementById("results").innerHTML=
    alert("Enter your information please!!");
}
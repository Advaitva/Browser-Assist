var background=document.getElementById('background');
var time=document.getElementById('time');
var day=document.getElementById('day');
function timeset(){
    var date=new Date,
    hour=date.getHours(),
    min=date.getMinutes(),
    dayNum=date.getDay(),
    month=date.getMonth(),
    dateN=date.getDate();
    monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    dayArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    function n(n){
        return n>9 ? '' + n:'0'+n;
    }
    // time.innerHTML=hour+ ':' + min + ':' +sec;
    time.textContent=[n(hour),n(min)].join(':');
    day.textContent=dayArray[dayNum]+','+' '+monthArray[month]+' '+dateN;
    setTimeout('timeset()',1000);

}
timeset();
function backgroundSet(){
    var n=Math.ceil(Math.random()*14);
    background.src='/images/b'+n+'_1.jpg';
    setTimeout('backgroundSet()',600000);
}
backgroundSet();
// function sendCoord(){

//     if(navigator.geolocation)
//     {
//         navigator.geolocation.getCurrentPosition(function(pos){
//             var lat=pos.coords.latitude;
//             var long=pos.coords.longitude;
//             var dataSend={
//                 lat:lat,
//                 long:long
//             }
//         });
//         $.post('/',dataSend,function(data,status){
//             console.log(data);
//             console.log(status);
//         });
//     }
// }
getGreet();
getMood();
function getMood(){
  data=calculate();
  document.getElementById('moodMsg').textContent=data.mood;
}
function getGreet(){
    var data=calculate();
    document.getElementById('greetMsg').textContent=data.greet;
}
function calculate(){
    var date=new Date;
    hours=date.getHours();
    if(0<=hours && hours<=11)
    {
        greeting="Morning";
        mood="Day";
    }
    else if(12<=hours && hours<=16)
    {
        greeting="Afternoon";
        mood="Day";
    }
    else if(17<=hours && hours<=20)
    {
        greeting="Evening";
        mood="Time";
    }
    else
    {
        greeting="Night";
        mood="Sleep";
    }
    data= {greet:greeting,mood:mood};
    return data;
}
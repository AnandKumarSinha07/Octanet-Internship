const input=document.getElementById('input-box');
const listContainer=document.getElementById('list-container')
const listBox=document.getElementById('checked');
const button=document.getElementById('btn');


function addTask(){
    if(input.value==='')
    {
        alert('Enter Something')
    }
    else{
        const li=document.createElement('li');
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        input.value='';
        const span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    SavedData();
}

listContainer.addEventListener('click',(e)=>{
      if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
      }
      else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
      }
},false)

function SavedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();


/*-------------Geolocatio ----------------------------------*/
function gotLocation(position){
      console.log(position);
}

function failedLocation(){
    alert('not able to get Location')
}
button.addEventListener('click',async()=>{
    const result=navigator.geolocation.getCurrentPosition(gotLocation,failedLocation)
})
/*-------------------------Time---------------------------------*/
function showTime(){
    const currenTime=new Date();
    const timeRead=`${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`;

    console.log(currenTime);
    console.log(timeRead);
    const display=document.getElementById('clock');
    display.innerHTML=timeRead;
    display.style.display="block"
}
showTime();
// setInterval(showTime,1000);
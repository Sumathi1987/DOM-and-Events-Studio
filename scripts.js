// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    const missionAbort = document.getElementById("missionAbort");
    const button = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const status = document.getElementById("flightStatus");
    const height = document.getElementById("spaceShuttleHeight");
    const up1 = document.getElementById("Up");
    const down1 = document.getElementById("Down");
    const right1 = document.getElementById("Right");
    const left1 = document.getElementById("Left");
 var height1 = 0 ;    
var imgObj = null;
imgObj = document.getElementById("rocket");
imgObj.style.position = "relative";
imgObj.style.top = '0px';
imgObj.style.left = '0px';

    missionAbort.addEventListener("click",function(){
    document.getElementById("shuttleBackground").style.background = "green";
     confirm("Are you sure you want to abort the mission?");
     status.innerHTML = "Mission aborted!";
     height.innerHTML ="Height is 0" 
        });

       land.addEventListener("click",function(){
      document.getElementById("shuttleBackground").style.background = "green";
       window.alert("The shuttle is landing. Landing gear engaged.");
       status.innerHTML ="The shuttle has landed."
       height.innerHTML = "Height is 0";
          });
    
        button.addEventListener("click",function(){
        document.getElementById("shuttleBackground").style.background = "blue";
        confirm("Confirm that the shuttle is ready for takeoff");
        status.innerHTML = "Shuttle in flight.";
        height.innerHTML = "Height is 10000";
        });

        
        up1.addEventListener("click",function(){
          imgObj.style.top = parseInt(imgObj.style.top) -10 +'px';
          document.getElementById("shuttleBackground").style.background = "green";
          height1 += 10000;
          height.innerHTML = height1;
        });

        down1.addEventListener("click",function(){
          imgObj.style.top = parseInt(imgObj.style.top) +10 +'px';
          document.getElementById("shuttleBackground").style.background = "green";
          height1 -= 10000;
          height.innerHTML = height1;
        });


        left1.addEventListener("click",function(){
          imgObj.style.left = parseInt(imgObj.style.left) - 10 +'px';
          document.getElementById("shuttleBackground").style.background = "green";
        });

        right1.addEventListener("click",function(){
          imgObj.style.left = parseInt(imgObj.style.left) + 10 +'px';
          document.getElementById("shuttleBackground").style.background = "green";
        });
    }
    window.onload =init;
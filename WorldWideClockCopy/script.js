

function displayTime(){
    
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let timeOfDay;
    let body = document.body;
    
      
    if(hours == 0){
      hours = 12;
    }
  
    if(hours > 12){
      hours = hours - 12;
      timeOfDay = "PM";
    }
    else {
      timeOfDay = "AM";
    }
    
     if(hours < 10){
      hours = "0" + hours;
    }  
  
     if(minutes < 10){
        minutes = "0" + minutes;
    }
    
     if(seconds < 10){
      seconds = "0" + seconds;
    }
    
    // console.log("Its " + hours+ " hours and "+ minutes +" minutes");
    
    let clockDiv = document.getElementById("clock");
    
    if(timeOfDay == "PM"){
        body.style.backgroundColor = "rgb(45, 93, 125)";
        body.style.color = "white";
      
    } else {
      body.style.backgroundColor= "rgb(138, 178, 227)";
      body.style.color = "black";
    }
    
    clockDiv.innerText = hours + ":" + minutes +":"+ seconds +" "+ timeOfDay;
    let holder = [];
    
    //This makes 12pm work
    if(hours == 12){
      hours = 11;
    }
    holder[0] = hours;
    holder[1] = minutes;
    // console.log(holder);
    return holder;
    // return hours;
  }
  setInterval(displayTime, 1000);

  function idk(){
    let t1 = displayTime();
    let t1Hour = t1[0];
    // console.log(t1Hour);
    let t1Min = t1[1];
    // console.log(t1Min);
    let newN = new Date();
    let newH = newN.getHours();
    // if(newH != t1){
    //   changeVid();
    // }
    let timeUntil = 60-t1Min;
    // console.log(timeUntil);
    let timeNeeded = 60000 * timeUntil;
    // console.log(timeNeeded);
    return timeNeeded;

  }

  

  function changeVid(){
    // let howMany = 0;
    let places =["https://www.youtube.com/embed/wnNrd-VjLsQ", 
               "https://www.youtube.com/embed/emI8r2dfk6g?",
               "https://www.youtube.com/embed/IbT8QNslcFk",
               "https://www.youtube.com/embed/1-iS7LArMPA?",
               "https://www.youtube.com/embed/gcDWT-mTCOI?",
               "https://www.youtube.com/embed/o0FKqXql87o?",
               "https://www.youtube.com/embed/CKQMqZlvpvg",
               "https://www.youtube.com/embed/h1wly909BYw",
               "https://www.youtube.com/embed/HoHlSQoOWBk",
               "https://www.youtube.com/embed/2SBgNeEpIio",
               "https://www.youtube.com/embed/cH7VBI4QQzA",
               "https://www.youtube.com/embed/LZ5Ja2mHgoA"
              ]
            //   console.log(places.length)
            //0, would be hour 0, which is midnight
            

              let placesNames = ["Kauai, Hawaii", "Alberta, Canada", "Mexico","NYC, NY", "Denmark","Spain","Cape Town, South Africa", "St. Petersburg, Russia ","Thailand", "Korea", "Japan","New Zealand"]
            //   console.log(placesNames.length)

              let timeDiff = ["6 hours ahead", "2 hours ahead", "1 hour ahead", "0 hours ahead", "6 hours behind", "6 hours behind", "6 hours behind", "7 hours behind", "11 hours behind", "13 hours behind", "13 hours behind", "17 hours behind"]


              //Colors from https://codepen.io/zessx/details/kyEEBK
              let backColors = ["linear-gradient(#020111 85%, #191621 100%)", " linear-gradient( #020111 60%,#20202c 100%)", " linear-gradient(#020111 10%,#3a3a52 100%)", "linear-gradient(#20202c 0%,#515175 100%)", "linear-gradient(#40405c 0%,#6f71aa 80%,#8a76ab 100%)", "linear-gradient(#4a4969 0%,#7072ab 50%,#cd82a0 100%)", "linear-gradient(#757abf 0%,#8583be 60%,#eab0d1 100%)", "linear-gradient(#82addb 0%,#ebb2b1 100%)","linear-gradient(#94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)","linear-gradient(#b7eaff 0%,#94dfff 100%)", "linear-gradient(#9be2fe 0%,#67d1fb 100%)","linear-gradient(#90dffe 0%,#38a3d1 100%)", "linear-gradient(#57c1eb 0%,#246fa8 100%)", "linear-gradient(#2d91c2 0%,#1e528e 100%)", "linear-gradient(#2473ab 0%,#1e528e 70%,#5b7983 100%)", "linear-gradient(#1e528e 0%,#265889 50%,#9da671 100%)", "linear-gradient(#1e528e 0%,#728a7c 50%,#e9ce5d 100%)", "linear-gradient(#154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)", "linear-gradient(#163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)", "linear-gradient(#071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)", "linear-gradient(#010A10 30%,#59230B 80%,#2F1107 100%)","linear-gradient(#090401 50%,#4B1D06 100%)", "linear-gradient(#00000c 80%,#150800 100%)" ]
              for(let j = 0; j < backColors.length; j++){
                // convert to military time
                let temp = displayTime();
                let globalH = temp[0];
                let copy = globalH;
                console.log(copy);
                copy = (copy - "0") + 11;
                // console.log(copy);
                // console.log(j);

                if(copy == j ){
                  // let grab = document.getElementsByTagName('body').innerHTML;
                  // document.style.backgroundColor = backColors[j]; 
                  document.body.style.background = backColors[j];
                  // console.log(j);
                  // console.log(backColors[j]);
                }
              }


            //  let globalH = displayTime();
            let temp = displayTime();
            let globalH = temp[0];
            // console.log(globalH);



             for(let i = 0; i < places.length; i++){
                if( globalH == "0"+i || globalH == i){
                    //revert to  military time
                //    globalH = (globalH - "0") + 12;
                    
                    // console.log(i);
                    // let timeOtherPlace = (globalH - "0")+ numbers[i+1];

                    // console.log(timeOtherPlace)
                    document.getElementById("myFrame").src= places[i];
                    document.getElementById("where").innerText = placesNames[i];
                    // document.getElementById("placeTime").innerText = timeOtherPlace;
                    document.getElementById("timeDiff").innerText = "Time Difference: You are " + timeDiff[i];
                }

             }
            //  howMany++;
            // return howMany; 
            // window.location.reload();
  }

  changeVid();
   //get the current hour, and minute, then calulate how many minutes till next hour and then call changeVid.
  // idk();

  // setInterval(changeVid, idk);
  function repeat(){
    // idk();
    let timeM = idk();
    // setInterval(changeVid, timeM);
    setInterval(function(){
      window.location.reload();
      idk();
      changeVid();
      repeat();
      // window.location.reload();
    }, timeM);
    // console.log(timeM);
  }

repeat();




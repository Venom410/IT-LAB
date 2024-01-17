function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = timeString;
  
    var greeting = '';
    if (hours >= 5 && hours < 11) {
      greeting = 'Good morning!';
    } else if (hours >= 11 && hours < 13) {
      greeting = 'Good noon!';
    }
      else if (hours >= 13 && hours < 16) {
        greeting = 'Good afternoon!';
    } 
    else if (hours >= 16 && hours < 20) {
      greeting = 'Good evening!';
    }
    else {
      greeting = 'Good night!';
    }
  
    document.getElementById('greeting').innerHTML = greeting;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  
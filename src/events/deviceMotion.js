export function getGyro() {
    window.addEventListener('devicemotion', event => {
        console.log(event.acceleration.x + ' m/s2');
        console.log("works")
      });
      
}


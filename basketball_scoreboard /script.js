

let home_point = 0;
let guest_point = 0;
let home = document.getElementById('board-result-home');
let guest = document.getElementById('board-result-guest');

let addPoint = (team, points) =>{
    team == 'home' ? home_point = home_point + points : guest_point = guest_point + points;
    home.innerHTML = home_point;
    guest.innerHTML = guest_point;
} 
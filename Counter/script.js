let counter = 0
let previous_entries = []

let increment =()=>{
    counter = counter +1;
    previous_entries.push(counter)
    document.getElementById('counter-value').innerHTML = counter;
}

let save =()=>{
    previous_entries.forEach(number => {
      document.getElementById('previous-values').innerHTML = `Previous entries: ${number}`; 
    });
    document.getElementById('counter-value').innerHTML = counter=0;
}
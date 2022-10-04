let counter = 0
let previous_entries = []
let counter_value = document.getElementById('counter-value');
let previous_values = document.getElementById('previous-values');


let increment= ()=>{
    counter = counter +1;
    previous_entries.push(counter)
    counter_value.innerHTML = counter;
}

let save= ()=>{
    previous_entries.forEach(number => {
      previous_values.innerHTML = `Previous entries: ${number}`; 
    });
   counter_value.innerHTML= counter= 0;
}
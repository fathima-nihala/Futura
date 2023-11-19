document.addEventListener('DOMContentLoaded',function(){//" document.addEventListener"-  method is used to attach an event listener to the entire HTML document. 
    const display=document.getElementById('display');
    const buttons=document.querySelectorAll('.calculator-buttons button'); //"querySelectorAll" method is handy for selecting multiple elements based on a CSS selector.


buttons.forEach(button=>{ //"forEach" to iterate through each button
button.addEventListener('click',function(){ //Adds a click event listener to each button in the buttons collection.
const value=this.dataset.value;

if(value === 'AC'){
    display.value=''; //clear the display
}else if(value === 'DEL'){
    display.value=display.value.slice(0,-1); //// Delete the last character
}else if(value === '='){
    try{
        display.value=eval(display.value);//to evaluate
    }catch(error){
        display.value='Error';
    }
}else{
    display.value+=value;
}
});
});
});
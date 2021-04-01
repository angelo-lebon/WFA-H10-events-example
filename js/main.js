"use strict";

window.addEventListener('load', init);

function init(){

    var containers = document.getElementsByClassName('container');

    for(let container of containers){
        container.addEventListener('click', displayEventPhase);
        // container.addEventListener('click', displayEventPhase, true);
    }
}

function displayEventPhase(e){
    let phase = e.eventPhase;

    e.stopPropagation();

    if ( 1 === phase){
        phase = 'Capturing';
    }
    if( 2 === phase){
        phase = 'At Target';
    }
    if(3 === phase){
        phase = 'Bubbling';
    }

    console.log(`Box: ${this.id} - ${phase}`);
    // if(e.target.id === this.id){
    //     console.log(`Box: ${e.target.id} - ${phase}`);
    // }
}
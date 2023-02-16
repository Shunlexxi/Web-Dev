dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


function dragElement(terrariumElement)
{
    //setting 4 positions for positioning on the screen
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4= 0;

    //more pointer manipulation    
    terrariumElement.onpointerdown = pointerDrag;



    function pointerDrag(e) {
        //prevented default event pointerDown
        e.preventDefault();
    
        //display details on console
        console.log(e);
    
        pos3 = e.clientX;
        pos4 = e.clientY;
    
        //when mouse is down, start dragging
        document.onpointermove = elementDrag;
        //when mouse is up, stop dragging
        document.onpointerup = stopElementDrag;
    }


    function elementDrag(e){
        //manipulating plants position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    
    function stopElementDrag(){
        //stop dragging by resetting onpinterup and onpointermove
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

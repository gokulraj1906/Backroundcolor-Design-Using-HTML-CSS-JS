let c=0;
function colourChange(){
    c=c+1;
    if(c>6){
        c=1;
    }
    switch(c){
            
            case 1:
            document.getElementById("color").innerHTML="Background Color:Blue";
            document.getElementById("color").style="color:black";
            document.getElementById("box").style="background-color:blue";
            document.getElementById("btn").style="color:black";
            break;
            case 2:
                document.getElementById("color").innerHTML="Background Color:Yellow";
                document.getElementById("color").style="color:black";
                document.getElementById("box").style="background-color:yellow";
                document.getElementById("btn").style="color:black";
                break;
            case 3:
            document.getElementById("color").innerHTML="Background Color:Green";
            document.getElementById("color").style="color:black";
            document.getElementById("box").style="background-color:green";
            document.getElementById("btn").style="color:black";
            break; 
            case 4:
            document.getElementById("color").innerHTML="Background Color:Black";
            document.getElementById("color").style="color:black";
            document.getElementById("box").style="background-color:black";
            document.getElementById("btn").style="color:black";
            break;
            case 5:
            document.getElementById("color").innerHTML="Background Color:Wheat";
            document.getElementById("color").style="color:black";
            document.getElementById("box").style="background-color:wheat";
            document.getElementById("btn").style="color:black";
            break;   
            case 6:
            document.getElementById("color").innerHTML="Background Color:Red";
            document.getElementById("color").style="color:black";
            document.getElementById("box").style="background-color:red";
            document.getElementById("btn").style="color:black";
            break;
    }
}
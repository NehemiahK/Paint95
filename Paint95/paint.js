function create(x){
    return document.createElement(x);
}
function makeText(text){
   return document.createTextNode(text);
}
function makeAtt(att){
   return document.createAttribute(att);
}

function makeItAll(){
    var container = create("div");
    container.id="contain";
    document.body.appendChild(container);

    var paint = create("div");
    paint.id="paints";
    document.getElementById("contain").appendChild(paint);

    var red = create("button");
    red.className="colorChoice";
    red.id="paintRed";
    document.getElementById("paints").appendChild(red);

    var blue = create("button");
    blue.className="colorChoice";
    blue.id="paintBlue";
    document.getElementById("paints").appendChild(blue);

    var green = create("button");
    green.className="colorChoice";
    green.id="paintGreen";
    document.getElementById("paints").appendChild(green);

    var yellow = create("button");
    yellow.className="colorChoice";
    yellow.id="paintYellow";
    document.getElementById("paints").appendChild(yellow);

    var purple = create("button");
    purple.className="colorChoice";
    purple.id="paintPurple";
    document.getElementById("paints").appendChild(purple);


    var pally = create("input");
    pally.id="pallete";
    pally.setAttribute("type", "color");
    pally.setAttribute("name", "favcolor");
    pally.setAttribute("value", "#4effe1");
    document.getElementById("paints").appendChild(pally);

    var eraser = create("input");
    eraser.id="erase";
    eraser.setAttribute("type", "image");
    eraser.setAttribute("src", "eraser.png");
    document.getElementById("paints").appendChild(eraser);

    var breaker = create("br");
    document.getElementById("paints").appendChild(breaker);

    var restart = create("button");
    restart.className="colorChoice";
    restart.id="reset";

    document.getElementById("paints").appendChild(restart);
    var restartText = makeText("Reset");
    restart.appendChild(restartText);

    var breaker2 = create("br");
    document.getElementById("paints").appendChild(breaker2);

    var brushText = create("p");
    var t = makeText("Brush Size");
    brushText.appendChild(t);
    document.getElementById("paints").appendChild(brushText);

    var plusSign = create("button");
    plusSign.className="colorChoice";
    plusSign.id="plus";
    document.getElementById("paints").appendChild(plusSign);
    var t2 = makeText("+");
    plusSign.appendChild(t2);

    var minusSign = create("button");
    minusSign.className="colorChoice";
    minusSign.id="minus";
    document.getElementById("paints").appendChild(minusSign);
    var t3 = makeText("-");
    minusSign.appendChild(t3);

    var breaker3 = create("br");
    document.getElementById("paints").appendChild(breaker3);

    var saveButt = create("button");
    saveButt.className="colorChoice";
    saveButt.id="saveCanvas";
    document.getElementById("paints").appendChild(saveButt);
    var t4 = makeText("Save");
    saveButt.appendChild(t4);

    var loadButt = create("button");
    loadButt.className="colorChoice";
    loadButt.id="loadCanvas";
    document.getElementById("paints").appendChild(loadButt);
    var t5 = makeText("Load");
    loadButt.appendChild(t5);

    var canva = create("div");
    canva.id="canvas";
    document.getElementById("contain").appendChild(canva);

}

makeItAll();


var pal = document.getElementById('pallete');
var currentColor = "black";

var candraw = false;
var currentSize =16;

document.getElementById("plus").addEventListener("click", function(){
    currentSize+=6;
    console.log(currentSize);
});
document.getElementById("minus").addEventListener("click", function(){
    currentSize-=6;
    console.log(currentSize);
});



document.getElementById("paintRed").addEventListener("click", function(){
    currentColor = "red";
});

document.getElementById("paintBlue").addEventListener("click", function(){
    currentColor = "blue";
});
document.getElementById("paintGreen").addEventListener("click", function(){
    currentColor = "green";
});
document.getElementById("paintPurple").addEventListener("click", function(){
    currentColor = "purple";
});
document.getElementById("paintYellow").addEventListener("click", function(){
    currentColor = "yellow";
});

document.getElementById("pallete").addEventListener("change", function(){
    currentColor = pal.value;
});
document.getElementById("erase").addEventListener("click", function(){
    currentColor = "white";
});
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById('canvas').innerHTML="";
});

document.getElementById("canvas").addEventListener("mousedown", function(event){
    candraw = true;
    var x = event.pageX;
    var y = event.pageY;
    makeDiv(x,y);
    });

document.getElementById("canvas").addEventListener("mouseup", function(event){
    candraw = false;
});


document.getElementById("canvas").addEventListener("mousemove", function(event){
        if(candraw == true){
        var x = event.pageX;
        var y = event.pageY;

        if (x<670 && y<490 && x>200 && y>20){
            makeDiv(x,y);
        }

        }
});

function makeDiv(xPlane,yPlane){
    var canvas = document.getElementById('canvas');
    var div = document.createElement('div');
    div.setAttribute('class', 'colorDiv');
    div.style.backgroundColor = currentColor;
    div.style.width= currentSize + 'px';
    div.style.height=currentSize + 'px';
    div.style.top = yPlane - (currentSize/2) + 'px';
    div.style.left = xPlane -(currentSize/2) + 'px';
    canvas.appendChild(div);
}

document.getElementById("saveCanvas").addEventListener("click", function(){
    var saveObj = canvas.innerHTML;
    localStorage.setItem('lastCanvas', saveObj);

});

document.getElementById("loadCanvas").addEventListener("click", function(){
    var loadObj = localStorage.getItem('lastCanvas');
    canvas.innerHTML = loadObj;

});

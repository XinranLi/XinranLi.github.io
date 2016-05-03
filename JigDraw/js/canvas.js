var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', 270);
canvas.setAttribute('height', 500);
canvas.setAttribute('id', 'canvas');
canvas.setAttribute('z-index', '999999999999');
canvas.setAttribute('position', 'relative');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$( "#front" ).css("background-color", "#a40000");
var linesty = "round";
var width = $(window).width();

$('#canvas').mousedown(function(e){
    width = $(window).width();
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    if (width >= 900) {
        mouseX = e.pageX-365;
        mouseY = e.pageY-85;
    } else if (width >= 600) {
        mouseX = e.pageX-165;
        mouseY = e.pageY-85;
    } else {
        mouseX = e.pageX-110;
        mouseY = e.pageY-85;
    }
    paint = true;
    addClick(mouseX, mouseY);
    redraw(linesty);
});

$('#canvas').mousemove(function(e){
    width = $(window).width();
    if(paint){
        if (width >= 900) {
            addClick(e.pageX-365, e.pageY-85, true);
        } else if (width >= 600) {
            addClick(e.pageX-165, e.pageY-85, true);
        } else {
            addClick(e.pageX-110, e.pageY-85, true);
        }        
        redraw();
    }
});

$('#canvas').mouseup(function(e){
    paint = false;
});

$('#canvas').mouseleave(function(e){
    paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var curColor = "#000";
var clickColor = new Array();
var clickRadius = new Array();
var clickSize = new Array();
var clickOpac = new Array();
var curSize = "small";
var radius= 1;
var curopa = 1;
var clickTool = new Array();
var preColor = "#000";
var preSize = "small";
var preRadius = 1;
context.lineJoin = "round";

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickRadius.push(radius);   
    clickColor.push(curColor);
    clickSize.push(curSize);
    clickOpac.push(curopa);
}
$(document).keypress(function(e) {
    if(e.which == 49) {
        changeSize("small", 10);
    }
});

$(document).keypress(function(e) {
    if(e.which == 50) {
        changeSize("small", 20);
    }
});

$(document).keypress(function(e) {
    if(e.which == 51) {
        changeSize("small", 30);
    }
});

$(document).keypress(function(e) {
    if(e.which == 52) {
        changeSize("small", 40);
    }
});

$(document).keypress(function(e) {
    if(e.which == 53) {
        changeSize("small", 50);
    }
});

$(document).keypress(function(e) {
    if(e.which == 54) {
        changeSize("small", 60);
    }
});

$(document).keypress(function(e) {
    if(e.which == 55) {
        changeSize("small", 70);
    }
});

$(document).keypress(function(e) {
    if(e.which == 56) {
        changeSize("small", 80);
    }
});

$(document).keypress(function(e) {
    if(e.which == 57) {
        changeSize("small", 90);
    }
});

$(document).keypress(function(e) {
    if(e.which == 58) {
        changeSize("small", 100);
    }
});

function changeColor(newColor) {
    curColor= newColor;
    preColor = curColor;
    context.strokeStyle = clickColor[clickColor.length-1];
    redraw();
    $( ".selected" ).css("background-color", newColor);
}

function changeSize(newSize, newRadius) {
    preSize = curSize;
    preRadius = radius;
    radius= newRadius;
    curSize = newSize;
    context.lineWidth = curSize;
    redraw();
}


function redraw(){ 
    context.lineJoin = linesty;
    for(var i=0; i < clickX.length; i++){		
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
          context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);   
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickRadius[i];
        context.stroke();
    }
    context.globalAlpha = clickOpac[i];
}

$( "#trash" ).click(function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    clickTool = new Array();
    clickSize = new Array();
    clickColor = new Array();
    clickX= new Array();
    clickY= new Array();
    clickDrag = new Array();
    clickRadius = new Array();
});


//color
$( "#a40000" ).click(function() {
    changeColor("#a40000");
});

$( "#e60012" ).click(function() {
    changeColor("#e60012");
});

$( "#ff0000" ).click(function() {
    changeColor("#ff0000");
});

$( "#ec6941" ).click(function() {
    changeColor("#ec6941");
});

$( "#f19149" ).click(function() {
    changeColor("#f19149");
});

$( "#facd89" ).click(function() {
    changeColor("#facd89");
});
$( "#fbd7bc" ).click(function() {
    changeColor("#fbd7bc");
});
$( "#fff1de" ).click(function() {
    changeColor("#fff1de");
});
$( "#fff100" ).click(function() {
    changeColor("#fff100");
});

$( "#fff799" ).click(function() {
    changeColor("#fff799");
});
$( "#8fc31f" ).click(function() {
    changeColor("#8fc31f");
});

$( "#22ac38" ).click(function() {
    changeColor("#22ac38");
});

$( "#007130" ).click(function() {
    changeColor("#007130");
});

$( "#84ccc9" ).click(function() {
    changeColor("#84ccc9");
});

$( "#7ecef4" ).click(function() {
    changeColor("#7ecef4");
});

$( "#00b7ee" ).click(function() {
    changeColor("#00b7ee");
});

$( "#00479d" ).click(function() {
    changeColor("#00479d");
});
$( "#8f82bc" ).click(function() {
    changeColor("#8f82bc");
});

$( "#601986" ).click(function() {
    changeColor("#601986");
});
$( "#de3172" ).click(function() {
    changeColor("#de3172");
});

$( "#f29c9f" ).click(function() {
    changeColor("#f29c9f");
});

$( "#b28850" ).click(function() {
    changeColor("#b28850");
});

$( "#b28850" ).click(function() {
    changeColor("#b28850");
});

$( "#b28850" ).click(function() {
    changeColor("#b28850");
});

$( "#81511c" ).click(function() {
    changeColor("#81511c");
});
$( "#ddd" ).click(function() {
    changeColor("#ddd");
});
$( "#888" ).click(function() {
    changeColor("#888");
});

$( "#000" ).click(function() {
    changeColor("#000");
});

$( "#fff" ).click(function() {
    changeColor("#fff");
});

$( ".nonebox" ).click(function() {
    curColor="";
    clickColor.push("");
    context.strokeStyle = clickColor[clickColor.length-1];
    redraw(curColor, radius);
    $(".selected" ).css("background-color", "#fff");
});


$("#front" ).click(function() {
    $( "#frontbg" ).addClass("selectedborder");
    $( "#front" ).addClass("selected");
    $( "#backbg" ).removeClass("selectedborder");
    $( "#back" ).removeClass("selected");
    curColor = $(".selected").css("background-color");
});

$( "#back" ).click(function() {
    $( "#backbg" ).addClass("selectedborder");
    $( "#back" ).addClass("selected");
    $( "#frontbg" ).removeClass("selectedborder");
    $("#front" ).removeClass("selected");
    curColor = $(".selected").css("background-color");
});

function changeOpacity(myValue){
    document.getElementById("currentValue").innerHTML = myValue + "%";
    curopa = myValue/100;
    context.globalAlpha = curopa;
    $( ".selected" ).css("opacity", curopa);
}

$( "#t1" ).click(function() {
    changeSize("small", 1);
});

$( "#t2" ).click(function() {
    changeSize("normal", 3);
});

$( "#t3" ).click(function() {
    changeSize("large", 5);
});

$( "#t4" ).click(function() {
    changeSize("huge", 9);
});

$( "#t5" ).click(function() {
    changeSize("huge", 15);
});

$( "#t6" ).click(function() {
    changeSize("huge", 22);
});

$( "#pen" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#pen" ).addClass("selectedtool");
    $("#canvasDiv").addClass("penCursor");
    radius = preRadius;
    curSize = preSize;
    radius = 2;
    curSize = "normal";
    curColor = preColor;
    linesty = "miter";
    context.strokeStyle = curColor;
    redraw();
    $("#canvasDiv").css("cursor","");
    $("#canvasDiv").removeClass("eraCursor"); 
    $("#canvasDiv").removeClass("pencilCursor");
    $("#canvasDiv").removeClass("bucketCursor");
    $("#canvasDiv").removeClassClass("brushCursor");
    $("#canvasDiv").addClass("penCursor");
});

$( "#brush" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#brush" ).addClass("selectedtool");
    radius = 11;
    curSize = "large";
    curColor = preColor;
    context.strokeStyle = curColor;
    context.globalAlpha = 0.3;
    linesty = "bevel";
    redraw();
    $("#canvasDiv").css("cursor","");
    $("#canvasDiv").removeClass("penCursor");
    $("#canvasDiv").removeClass("eraCursor"); 
    $("#canvasDiv").removeClass("pencilCursor");
    $("#canvasDiv").removeClass("bucketCursor");
    $("#canvasDiv").addClass("brushCursor");
});

$( "#shape" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#shape" ).addClass("selectedtool");
    $("#canvasDiv").css("cursor","crosshair");
});

$( "#line" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#line" ).addClass("selectedtool");
    $("#canvasDiv").css("cursor","crosshair");
    curColor = "#fff";
    var top = 0;
    var left= 0;
    var top2 = 0;
    var left2 = 0;
    i = 0;
    $("#canvasDiv").on("click", function(e) {
        i++;
        //If even, draw line
        if (i%2 != 0) {
        //First point
        top = e.pageY;
        left = e.pageX;
        }
        else  {
        //Second point
        top2 = e.pageY;
        left2 = e.pageX;
        //Calculate difference
        heightdifference = top2-top;
        widthdifference = left2-left;
            //arcsin fix: x < -1 or x > 1 not allowed
            //I suck at this, maybe someone can find a better solution?
            divide =  (heightdifference/widthdifference < -1 || heightdifference/widthdifference > 1) ?  widthdifference/heightdifference : heightdifference/widthdifference
            //Rotate the line
        rotation = 180/Math.PI*Math.asin(divide)
            //Pythagoras
        width = Math.sqrt(Math.pow(heightdifference,2)+Math.pow(widthdifference,2))
            //Margin: Pythagoras 2
        a = width/2
        var b
        c = widthdifference/2
        margintop = Math.sqrt(Math.pow(a,2)-Math.pow(c,2))
        margintop = (rotation > 0) ? 0-margintop : margintop;
        top = top - 85;
        left = left - 365;
        var newline = {
           "height": "2px",
           "background": "black",
           "width": width,
           "position": "absolute",
           "top": top,
           "left": left,
            "margin-top": 0-margintop,
            "-webkit-transform": "rotate("+rotation+"deg)",
            "-moz-transform": "rotate("+rotation+"deg)",
            "-ms-transform": "rotate("+rotation+"deg)",
            "-o-transform": "rotate("+rotation+"deg)",
            "transform": "rotate("+rotation+"deg)"    
        };
        $("#canvasDiv").addClass(newline);
        }           
    }) 
});

$( "#eraser" ).click(function() {
    linesty = "round";
    $(".toolbox").removeClass("selectedtool");
    $("#eraser" ).addClass("selectedtool");
    $("#canvasDiv").css("cursor","");
    $("#canvasDiv").removeClass("penCursor");
    $("#canvasDiv").removeClass("brushCursor");       
    $("#canvasDiv").removeClass("pencilCursor");
    $("#canvasDiv").removeClass("bucketCursor");
    $("#canvasDiv").addClass("eraCursor");
    curColor="#fff";
    context.strokeStyle = curColor;
    redraw();
});

$( "#bucket" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#bucket" ).addClass("selectedtool");
    $("#canvasDiv").css("cursor","");
    $("#canvasDiv").removeClass("penCursor");
    $("#canvasDiv").removeClass("eraCursor"); 
    $("#canvasDiv").removeClass("pencilCursor");
    $("#canvasDiv").removeClass("brashCursor");
    $("#canvasDiv").addClass("bucketCursor");
});

$( "#move" ).click(function() {
    $(".toolbox").removeClass("selectedtool");
    $("#move" ).addClass("selectedtool");
    curColor= "rgba(0,0,0,0)";
    context.strokeStyle = curColor;
    $("#canvasDiv").css("cursor","move");
});


$( "#pencil" ).click(function() {
    linesty = "round";
    $(".toolbox").removeClass("selectedtool");
    $("#pencil" ).addClass("selectedtool");
    $("#canvasDiv").css("cursor","");
    $("#canvasDiv").removeClass("penCursor");
    $("#canvasDiv").removeClass("eraCursor"); 
    $("#canvasDiv").removeClass("bucketCursor");
    $("#canvasDiv").removeClass("brushCursor");
    $("#canvasDiv").addClass("pencilCursor");
    radius = preRadius;
    curSize = preSize;
    curColor = preColor;
    context.strokeStyle = curColor;
    redraw();
});

//$( "#opa" ).click(function() {
//  alert( "Handler for .click() called." );
//});
$( "#hide" ).click(function() {
    $( "#hide" ).hide();
    $( "#chat" ).show();
});

$( "#chattitle" ).click(function() {
    $( "#chat" ).hide();
    $( "#hide" ).show();
});


$( "#f1" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("<p><span style='color:#FAB57A'>Me:</span> Hi Holly!</p> <p><span style='color:#FAB57A'>Me:</span> would you like to join my picture?</p><p><span style='color:#80D6FF'>Holly:</span> Wow cool! Sure!</p><p><span style='color:#FAB57A'>Me:</span> I've sent you an invitation. Check it</p><p><span style='color:#80D6FF'>Holly:</span> Awesome! got it!</p>");
    $("#f1" ).addClass("selfri");
});

$( "#f2" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f2" ).addClass("selfri");
});

$( "#f3" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f3" ).addClass("selfri");
});

$( "#f4" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f4" ).addClass("selfri");
});

$( "#f5" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f5" ).addClass("selfri");
});

$( "#f6" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f6" ).addClass("selfri");
});

$( "#f7" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f7" ).addClass("selfri");
});

$( "#f8" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f8" ).addClass("selfri");
});

$( "#f9" ).click(function() {
    $(".friendname").removeClass("selfri");
    $(".chatright").html("");
    $("#f9" ).addClass("selfri");
});

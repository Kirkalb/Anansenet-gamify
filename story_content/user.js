window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script17 = function()
{
  var clabsPDFWindow=window.open("https://cluelabs.com/stencil/display/widget-pdf-maker-display-loading","clabsPDFWindow"),xhttp=new XMLHttpRequest,targlink="https://cluelabs.com/stencil/display/widget-pdf-maker-display?chart=MjI4MHw2NjU4fGVlZjQ5YzhiMTJlZjhlNzIzMzFlODYyZTg4ZmNiMjg1";xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.response){var t=GetPlayer(),e=JSON.parse(xhttp.response),a=document.createElement("form");a.setAttribute("method","post"),a.setAttribute("action",targlink+"&vardata=sent&method=post"),a.setAttribute("target","clabsPDFWindow"),document.body.appendChild(a),e.forEach(function(e,s){(newfield=document.createElement("input")).setAttribute("type","text"),newfield.setAttribute("name",e),newfield.setAttribute("value",btoa(encodeURIComponent(t.GetVar(e)))),a.appendChild(newfield)}),clabsPDFWindow.postMessage("loading","*"),a.submit(),document.body.removeChild(a),t.SetVar("stencilrendered",parseInt(t.GetVar("stencilrendered"))+1)}},xhttp.open("GET",targlink,!0),xhttp.send();

}

window.Script18 = function()
{
  var clabsPDFWindow=window.open("https://cluelabs.com/stencil/display/widget-pdf-maker-display-loading","clabsPDFWindow"),xhttp=new XMLHttpRequest,targlink="https://cluelabs.com/stencil/display/widget-pdf-maker-display?chart=MjI4MHw2NjU4fGVlZjQ5YzhiMTJlZjhlNzIzMzFlODYyZTg4ZmNiMjg1";xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.response){var t=GetPlayer(),e=JSON.parse(xhttp.response),a=document.createElement("form");a.setAttribute("method","post"),a.setAttribute("action",targlink+"&vardata=sent&method=post"),a.setAttribute("target","clabsPDFWindow"),document.body.appendChild(a),e.forEach(function(e,s){(newfield=document.createElement("input")).setAttribute("type","text"),newfield.setAttribute("name",e),newfield.setAttribute("value",btoa(encodeURIComponent(t.GetVar(e)))),a.appendChild(newfield)}),clabsPDFWindow.postMessage("loading","*"),a.submit(),document.body.removeChild(a),t.SetVar("stencilrendered",parseInt(t.GetVar("stencilrendered"))+1)}},xhttp.open("GET",targlink,!0),xhttp.send();

}

};

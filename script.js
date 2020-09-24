var array= [
  {color:"BlueViolet"},
  {color:"Coral"},
  {color:"DarkMagenta"}
]

var clickers =[];

function click(color){
  var that = this;
  this.color=color;
  this.number=0;
  this.ele=document.createElement("div");
  this.ele.style.height="100px";
  this.ele.style.width="200px";
  this.ele.style.backgroundColor=this.color;
  this.ele.style.borderRadius="10px";
  this.ele.style.display="flex";
  this.ele.style.justifyContent="center";
  this.ele.style.alignItems="center";
  this.ele.style.fontSize = "18px";

  this.numberEle=document.createElement("div");
  this.numberEle.innerHTML=this.number;
  this.ele.appendChild(this.numberEle);
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });
  
  document.body.appendChild(this.ele);

}

click.prototype.addUp = function(){
  this.number++;
  this.numberEle.innerHTML=this.number;
}

for(var i=0; i<array.length; i++){
  clickers.push(new click(array[i].color))
}
window.onload=function(){
    var input1,
    input2,
    use_input,
    mouse_in=false,
    input_fields=["sparkyoo1","sparkyoo2","sparkyoo3"],
    dragId=false,
    odd_even="even"
    var div=document.createElement("div"); 
    setTimeout(function(){
    div.setAttribute("id","sparkywoo")
    div.onmouseover=function(){
        mouse_in=true
    }
    div.onmouseleave=function(){
        mouse_in=false
    }
    var styles={
        height:"25vw",
        width:"25vw",
        background:'white',
        position:'fixed',
        top:"0",
        right:"0",
        zIndex:"10000",
        borderRadius:"30%"
        
    };
     function activateField(id){
         console.log("in active field")
         if(id=="sparkyoo1"){
           use_input=input1

         }
         else{
            use_input=input2
         }
    }
    

    Object.assign(div.style, styles);
    div.innerHTML=`
        <div id="1" style="display:flex;width:100%;height:85%;flex-wrap:wrap;flex-direction:row;padding-top:10%;" >

        <div class="input_div" style="display:flex;width:50%;height:85%;flex-wrap:wrap;flex-direction:column">
        <input type="text" style="height:2px;background:none;color:black;border-bottom:solid black .1vw;border-top:none;border-left:none;border-right:none; position:relative;top:-2.7vw;left:-9vw;max-width:6vw;outline:none;height:2vw;">
        <input type="text"  id="sparkyoo1" class="hoohoo draggable" onclick="activateField("sparkyoo1")"><br><br>
         
        <input type="text" style="height:2px;background:none;color:black;border-bottom:solid green 4px;border-top:none;border-left:none;border-right:none;">
        <input type="text"  id="sparkyoo2" class= "hoohoo draggable" onclick="activateField("sparkyoo2")" ><br><br>
        </div>
        <div id="2" style="width:100%;height:15%; text-align:centre; padding-bottom:10%">
        <span id="plusplus" style="padding-left:5vw"> <img  id ="plusplusimg" onclick="newItem" style="margin-bottom:2vw"> <br><br> </span>
        </div>


    `

     
   
    document.body.appendChild(div); 
   
   

    function newItem(){
        
        nums=[]
        for(var i in input_fields){
             var item = input_fields[i].at(-1)
             item_no=parseInt(item)
             
             nums.push(item_no)
        }
        
        var last_num=Math.max(...nums)
        
        next_num=(last_num+1).toString()
        var entry=document.createElement("input"); 
        entry.type="text"
        entry.id="sparkyoo"+next_num
        input_fields.push(entry.id)
        
        entry.class="hoohoo draggable"
        entry.onclick=`activateField(${entry.id})`
        entry.style.marginLeft="2vw"
        entry.style.width="9vw"
        entry.style.height="2vw"
        
        var div=document.getElementById("1")
        div.appendChild(entry)
        var br = document.createElement("br");
        
         entry.addEventListener('click',function()
        {alert("clicked")
         this_num=entry.id.at(-1)
         use_input=this_num
         alert("use input="+use_input)
         

    })
        
        
        
    }
    document.getElementById("plusplus").addEventListener ("click", newItem)
    let plus = document.getElementById("plusplusimg");
    plus.src = chrome.runtime.getURL("plus-sign-icon.png");
    plus.style.height="2.5vw"
    plus.style.width="2.5vw"
    plus.style.marginLeft="5.5vw"
    
    



    // Code to drag elements

  





    //


   
    let elements=document.querySelectorAll('.hoohoo')
    for (const element of elements){
        element.style.marginLeft="2vw"
        element.style.width="9vw"
        element.style.height="2vw"
        element.flexBasis="2"
    }
    var sparky1 =document.getElementById("sparkyoo1")
    var sparky2=document.getElementById("sparkyoo2")
    var sparky3=document.getElementById("sparkyoo3")
    sparky1.addEventListener('click',function()
        {console.log("clicked")
         use_input=1
         console.log("use input="+use_input)

    })
    sparky2.addEventListener('click',function()
        {console.log("clicked")
         use_input=2
         console.log("use input="+use_input)

    })
   
   
    window.addEventListener("click",function(event){


    	var txt=window.getSelection().toString()
        // check that user hasn't clicked inside plugin window 
        console.log("mouse in="+mouse_in)
        if(mouse_in===true){
            console.log("in plugin window")
            return        }

        // check that user has actually highlited something not just clicked
        if (txt=="" || txt == null){
            console.log("empty!")
                return
            
        }
        console.log(txt)
        string_num=use_input.toString()
        spark_no="sparkyoo"+string_num
       

        var sparky=document.getElementById(spark_no)
        alert(use_input)
        alert(spark_no)
        alert(sparky)
       
        sparky.value=txt
        chrome.runtime.sendMessage({
                        data: "Hello popup, text was"+txt
                    }, function (response) {
                        console.dir(response);
                    });
        
    })
    chrome.runtime.onMessage.addListener(gotMessage)
    function gotMessage(message,sender,sendResponse){
    	console.log(message)
    	console.log("<<<< from background service >>>")
    }
    


var container = document.getElementById('sparkywoo')
  console.log("container"+container)
  elm = document.getElementById('sparkywoo')
  console.log("client heithg"+container.clientHeight)
   console.log("client width"+container.clientWidth)
     
  
  var isMouseDown = false,
   mouseX,
    mouseY,
      elmTop,
      elmLeft,
      diffX,
      newElmTop,
      newElmLeft,
      diffY
      
  
  var containerWidth = container.clientWidth,
      containerHeight = container.clientHeight,
     elmWidth = elm.clientWidth,
     elmHeight = elm.clientHeight;
  
    
  function mouseDown(e) {
   if(document.activeElement.tagName=="INPUT"){

    return
   }
    isMouseDown = true;
    
   
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    elmTop = elm.offsetTop;
    elmLeft = elm.offsetLeft;
    
    diffX = mouseX - elmLeft;
    diffY = mouseY - elmTop;
    
  }
  
  function mouseUp() {
    isMouseDown = false;
    
  }
  
  function mouseMove(e) {
    
    if (!isMouseDown) return;
    
    var newMouseX = e.clientX;
    var newMouseY = e.clientY;
    
    newElmTop = newMouseY - diffY;
    newElmLeft = newMouseX - diffX;
    
   
   
   
   
    elm.style.top = newElmTop + "px";
    elm.style.left = newElmLeft + "px";
    
  }
  
  document.addEventListener('mousemove', mouseMove);
  elm.addEventListener('mouseup', mouseUp);
  elm.addEventListener('mousedown', mouseDown);

}



,1000);}







window.onload=function(){
    var input1,
    input2,
    use_input,
    mouse_in=false,
    existsSchema=false, //Use this to check whether have set a schema or not - if not just load one input box see code below (line)
    schema=["sparkywoo1","sparkywoo2","boo"]
    input_fields=[],
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
        height:"50vw",  //was 30 for both
        width:"50vw",
        background:'white',
        position:'fixed',
        top:"0",
        right:"0",
        zIndex:"100000000000000",
        borderRadius:"20%"
        
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
        <div id="1" style="display:flex;width:100%;flex-wrap:wrap;flex-direction:row;padding-top:10%;height:80%;align-content:flex-start;" >
        </div>
        <div id="2" style="width:100%;height:10%; text-align:centre; padding-bottom:10%;">
        
        <span id="plusplus" style="padding-left:6vw; "> <img  id ="plusplusimg" onclick="newItem" style="margin-bottom:2vw;margin-left:35%;"> <br><br> </span>
        </div>
        <div id='plus2'>afafkaf</div>. 
        



    `

     
   
    document.body.appendChild(div); 
   
   
    
    function newItem(){
       for (var item in input_fields){
        alert(input_fields[item])
       }
        
        nums=[]
        for(var i in input_fields){
             var item = input_fields[i].at(-1)
             item_no=parseInt(item)
             
             nums.push(item_no)
        }
        
        var last_num=Math.max(...nums)
        
        next_num=(last_num+1).toString()
        entryID="sparkyoo"+next_num
        input_fields.push(entryID)

        newHtml=`<div style="display:flex;flex-direction:row; width:100%;height:85%;">
        <div class="input_div" style="display:flex;width:80%;flex-wrap:wrap;flex-direction:column">
        
        <input type="text" style="height:2px;background:none;color:black;border-top:none;border-left:none;border-right:none;border-bottom:none;text-align:center; width:9vw;margin-left:2vw;height:25%;padding-bottom:0;border:0px;font-size:90%;">
        <input type="text"  id="${entryID}" class="hoohoo draggable" onclick="activateField("${entryID}")"><br><br>
        </div>
        <div style="width:10%;">
      
        <img class="minus">

      
        </div>
        </div>
        </div>
       
`
        
        const newDiv = document.createElement("span");
        newDiv.innerHTML=newHtml
        var div=document.getElementById("1")
        div.append(newDiv)
        var br = document.createElement("br");
        var entry=document.getElementById(entryID)
        entry.addEventListener('click',function()
        {alert("clicked")
         this_num=entry.id.at(-1)
         use_input=this_num
         alert("use input="+use_input)
         

    }) 
         let elements=document.querySelectorAll('.hoohoo')
    for (const element of elements){
        element.style.marginLeft="2vw"
        element.style.width="9vw"
        element.style.height="2vw"
        element.flexBasis="2"
    }
    const collection = document.getElementsByClassName("minus");
    for (let i = 0; i < collection.length; i++) {
      collection[i].src=chrome.runtime.getURL("collapse.png");
        collection[i].style.height="1.5vw"
        collection[i].style.width="1.5vw"
        collection[i].style.marginLeft=".9vw"
        collection[i].style.marginTop="2.4vw"
         collection[i].addEventListener('click', function(){
           alert(this)
           alert(this.previousSibling)
           alert(this.closest('div'))
           this.closest('div').previousElementSibling.remove()
           this.closest('div').remove()
           this.remove()
          


        })
    }
     
        
    }
    function newSchema(){ //setup new schema at beggining of script need to get a message seeing if this exists or not - if exists use to prepopulate fields
       alert(schema)
        window.URL = window.webkitURL || window.URL;
    let csvContent = "data:text/csv;charset=utf-8," 
    +schema.join(",")
    //+ schema.map(e => e.join(",")).join("\n");
    alert(csvContent)
   var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
    // delete a;// we don't need this anymore
       chrome.runtime.sendMessage({type:"schema",schema: schema}, function(response) {
          console.log(response);
    
   

});

    }
    var add = document.getElementById("plus2")
    add.addEventListener('click',newSchema)

    document.getElementById("plusplus").addEventListener ("click", newItem)
    let plus = document.getElementById("plusplusimg");
    plus.src = chrome.runtime.getURL("plus-sign-icon.png");
    plus.style.height="2.5vw"
    plus.style.width="2.5vw"
    plus.style.marginLeft="35%"
    const collection = document.getElementsByClassName("minus");
    for (let i = 0; i < collection.length; i++) {
      collection[i].src=chrome.runtime.getURL("collapse.png");
        collection[i].style.height="1.5vw"
        collection[i].style.width="1.5vw"
        collection[i].style.marginLeft=".5vw"
        collection[i].style.marginTop="2.4vw"
        collection[i].addEventListener('click', function(){
           alert(this)
           alert(this.previousSibling)
           alert(this.closest('div'))
           this.closest('div').previousElementSibling.remove()
           this.closest('div').remove()
           this.remove()
          


        })
    }


   
   
    
    



    // Code to drag elements

  





    //


   
    let elements=document.querySelectorAll('.hoohoo')
    for (const element of elements){
        element.style.marginLeft="2vw"
        element.style.width="9vw"
        element.style.height="2vw"
        element.flexBasis="3"
    }
    if (existsSchema==false){
    alert("not exits")
    var divNew=document.createElement('span')
   

    var divHtml=`<div style="display:flex;flex-direction:row; width:100%;height:85%;">
        <div class="input_div" style="display:flex;width:80%;flex-wrap:wrap;flex-direction:column">
        
        <input type="text" style="height:2px;background:none;color:black;border-top:none;border-left:none;border-right:none;border-bottom:none;text-align:center; width:9vw;margin-left:2vw;height:25%;padding-bottom:0;border:0px;font-size:90%">
        <input type="text"  id="sparkyoo1" class="hoohoo draggable" onclick="activateField("sparkyoo1")"><br><br>
        </div>
        <div style="width:10%;">
      
        <img class="minus">

      
        </div>
        </div>
        </div>
        </div>
`
    divNew.innerHTML=divHtml

    var div2=document.getElementById("1")
    div2.append(divNew)
    var collection1=document.getElementsByClassName('minus')
    collection1[0].src=chrome.runtime.getURL("collapse.png");
        collection1[0].style.height="1.5vw"
        collection1[0].style.width="1.5vw"
        collection1[0].style.marginLeft=".9vw"
        collection1[0].style.marginTop="2.4vw"
         collection1[0].addEventListener('click', function(){
           alert(this)
           alert(this.previousSibling)
           alert(this.closest('div'))
           this.closest('div').previousElementSibling.remove()
           this.closest('div').remove()
           this.remove()
          


        })

    input_fields.push("sparkyoo1")

    var sparky1 =document.getElementById("sparkyoo1")
    sparky1.style.marginLeft="2vw"
    sparky1.style.width="9vw"
    sparky1.style.height="2vw"
    sparky1.flexBasis="2"
   
    
    sparky1.addEventListener('click',function()
        {console.log("clicked")
         use_input=1
         console.log("use input="+use_input)

    })
   existsSchema=true
   }
   
   
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








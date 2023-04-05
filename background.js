
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	arr=[]
	console.log(message.schema)
	console.log(message.type)
	 if (message.type=="schema"){
		console.log("schema detected")
			

		    console.log('Message received: ', message);
		    for (var i in message.schema){
		       arr.push(message.schema[i])
		    }
		    console.log(arr)
		    for (var i in arr){
		    	console.log(arr[i])
		    }
		     let csvContent = arr.join(",")
			 let csvBlob = new Blob([csvContent], { type: 'text/csv' });
			 let csvUrl = window.webkitURL.createObjectURL(csvBlob);
			 chrome.downloads.download({ url: csvUrl }). //need to send all this BACK to window first - i.e run in content script NOT here
			
    
}

});

chrome.action.onClicked.addListener(listen)
function listen(tab){
console.log(tab)
let msg={
	txt:"hello"
}
chrome.tabs.sendMessage(tab.id,msg.txt)
}
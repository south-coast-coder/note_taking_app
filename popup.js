window.onload = function(){
	var body=document.body
	alert(body)
	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	alert("message was"+message)
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    }); 
});
}
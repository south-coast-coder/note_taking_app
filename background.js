chrome.action.onClicked.addListener(listen)
function listen(tab){
console.log(tab)
let msg={
	txt:"hello"
}
chrome.tabs.sendMessage(tab.id,msg.txt)
}
/* 
1-Get code after an inspect element  view-source:https {no need for now}
2-find video_url with a rejex
3-Json this found var which is in form of "video_url":"the link"
4-prepare the link to be downloadable
5-execute the link


-Next goal:
1make a page where u write video link, 
2that link will add view-source:https to be inspected  {no need for now}
3then execute the program to find link
4fetch the link into download page
5show everything pic and video

-for private video ,
its better to build a chrome extension

*/


var result = document.getElementsByTagName("html")[0].innerHTML;
var n = result.match(/"video_url":"[^"]+"/);
var json = JSON.parse('{'+n[0]+'}')
var url = json.video_url
var newurl = url.replace("\\", "&");
var newurl = newurl.replace("u0026", "");
console.log(newurl);
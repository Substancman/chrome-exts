
chrome.tabs.getSelected ( null, function  ( tab ) { 

if ( tab.url.substring (0,4) != 'http' )
{
  document.getElementById("data").innerHTML = '<div class="mobilecenterbox"><fieldset><p>Click on this extension when you are on pages like <a href=http://google.com target=_blank>google.com</a>.</p></fieldset></div>';
} else {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://builtwith.com/mobile.aspx?" + tab.url, true);

  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      document.getElementById("data").innerHTML = xhr.responseText;
	document.getElementById("mpref").style.display='block';
      
	    document.getElementById('descp').addEventListener('change',function(){store ({'desc':this.checked});});
	    document.getElementById('linkp').addEventListener('change',function(){store ({'link':this.checked});});
	    
	    
	    chrome.storage.sync.get ( 'link', function ( i ) { 
		    document.getElementById('linkp').checked=i.link;
		    
		    if ( i.link ) Array.prototype.forEach.call(document.getElementsByClassName('il'),function(e){e.style.display='none';});
		    } );
		    
		    	    chrome.storage.sync.get ( 'desc', function ( i ) { 
		    document.getElementById('descp').checked=i.desc;
				    if ( i.desc ) Array.prototype.forEach.call(document.getElementsByClassName('id'),function(e){e.style.display='none';});
		    } );
	    
if ( document.getElementById('adv')!=null ) {	    
   document.getElementById('adv').addEventListener('click',function(){advanced('https://builtwith.com/app/mobile/advanced.aspx')},false);
   }
   
   if ( document.getElementById('advl')!=null )
   {
document.getElementById('advl').addEventListener('click',function(){advanced(document.getElementById('advl').href)},false);	   
   }
   
   var cl = document.getElementsByClassName("intLink");
var i;
for (i = 0; i < cl.length; i++) {
	cl[i].addEventListener('click',function(){document.getElementById('mpref').style.display='none'; advanced(this.href)},false);	   
	
}
   
   
    }
  }

}

} );
var BW={};
	
	
store = function ( v )
	{
		chrome.storage.sync.set(v);
	}
	


advanced = function (u)
{
	  var xhr = new XMLHttpRequest();
  xhr.open("GET", u, true);

  xhr.send();
	document.getElementById('data').innerHTML='<div style="width:315px;text-align:center;margin-top:20px;margin-bottom:20px"><img src="https://builtwith.com/img/loading.gif" alt="Loading"> Loading</div>';
	
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      document.getElementById("data").innerHTML = xhr.responseText;
	    
	       var cl = document.getElementsByClassName("intLink");
var i;
for (i = 0; i < cl.length; i++) {
	cl[i].addEventListener('click',function(){document.getElementById('mpref').style.display='none'; advanced(this.href)},false);	   
	
}
	    
	    
	    if ( document.getElementById('detailed') != null )
	    document.getElementById('detailed').addEventListener('click',function(){advanced('https://builtwith.com/app/mobile/detailed.aspx?optimizely.com')},false);
	    else {
		    var s = document.createElement('script');
		    
s.src = chrome.extension.getURL('bw.min.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
	    }
    }
  }
}



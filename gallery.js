// JavaScript Document

//REFERENCING ALBUM PATHS

var Album_path = new Map([
	[0,'url("Albums/Buildings/'],
	[1,'url("Albums/Technology/'],
	[2,'url("Albums/Nature/'],
	[3,'url("Albums/Cars/'],
	[4,'url("Albums/Series/']
]);

var Album_name = new Map([
	[0,'BUILDINGS'],
	[1,'TECHNOLOGY'],
	[2,'NATURE'],
	[3,'CARS'],
	[4,'SERIES']
]);

var Album_imgNo = new Map([
	[0,5],
	[1,6],
	[2,6],
	[3,5],
	[4,9]
]);

fileex = '.jpeg")';

// ADD REQUIRED NO OF ALBUM THUMB DIV

var htmlcontent = '<li><div class="albumbox"></div></li>';
for (var j = 1; j < Album_path.size ; j++){
	document.querySelector('.albumframe').insertAdjacentHTML('beforeend',htmlcontent);
}

//GLOBALS

var selectedAlbum, selectedAlbum_size;
var i,k;
var thumbboxs;
var albums = Array.from(document.querySelectorAll('.albumbox'));

//GET INDEX OF SELECTED ALBUM AND VIEW ALBUM

/*for (var j = 0, len = albumFrame.children.length; j < len; j++)
	{
		(function(index){
			albumFrame.children[j].onclick = function(){
				removeActive(albums);
				this.firstChild.classList.add('activeThumb');
				selectedAlbum = Album_path.get(index);
				init(selectedAlbum);
			}    
		})(j);
	}*/



//SELECTING ALBUM

albums.forEach(function(current,index){
	current.addEventListener('click',function(){
		document.querySelector('.thumbframe').innerHTML = '';
		var imgthumbcontent = '<li><div class="thumbbox"></div></li>';
		for (var j = 0; j < Album_imgNo.get(Album_imgNo.size-(index+1)) ; j++){
			document.querySelector('.thumbframe').insertAdjacentHTML('beforeend',imgthumbcontent);
		}
		removeActive(albums);
		this.classList.add('activeThumb');
		selectedAlbum = Album_path.get(Album_path.size-(index+1));
		selectedAlbum_size = Album_imgNo.get(Album_path.size-(index+1));
		k=0;
		init(selectedAlbum);
	}); 
});

//DESELECTING THUMBS

var removeActive = function(thumb_class){
	thumb_class.forEach(function(current){
		current.classList.remove('activeThumb');
	});
};
	
//ADDING ALL THUMBS

function addthumbs(){
	i = 1;
	thumbboxs = Array.from(document.querySelectorAll('.thumbbox'));
	thumbboxs.forEach(function(current){
		current.style.backgroundImage = selectedAlbum+i+fileex;
		i++;
		//removeActive(thumbboxs);
	});}

//ADDIND 7 THUMBNAILS ON THE THUMBFRAME

/*var addthumbs = function(thumbno){
	thumbboxs.forEach(function(current){
		current.style.backgroundImage = selectedAlbum+thumbno+'.jpg")';
		i = thumbno++;
		removeActive(thumbboxs);
	});}

document.querySelector('.thumbright').addEventListener('click',function(){addthumbs(i+1)});
document.querySelector('.thumbleft').addEventListener('click',function(){
	if (i>8){
		addthumbs(i-13);
	}
});
*/
//INITIALIZING THE PAGE

function init(Album_selected){
	selectedAlbum = Album_selected;
	addthumbs();
	document.querySelector('.thumbbox').classList.add('activeThumb');
	document.querySelector('#mainframe').style.backgroundImage = document.querySelector('.thumbbox').style.backgroundImage;
	
	//SELECTING THUMB AND VIEWING IMAGE

	thumbboxs.forEach(function(current,index){
		current.addEventListener('click',function(){
			k = index;
			removeActive(thumbboxs);
			this.classList.add('activeThumb');
			document.querySelector('#mainframe').style.backgroundImage = this.style.backgroundImage;
		});
	});

	/*for (var j = 0; j < albumFrame.children.length; j++){
		albumFrame.children[j].firstChild.style.backgroundImage = Album_path.get(j)+'1'+'.jpg")';
	}*/
}

//AUTOMATICALLY CLICK THE FIRST ALBUM

document.querySelector('.albumframe').children[0].firstChild.click();

//AUTOMATICALLY CLICK THE FIRST THUMB

document.querySelector('.thumbframe').children[0].firstChild.click();

//MOVING IMAGES

document.querySelector('.leftarrow').addEventListener('click',function(){
	if (k>0){
		document.querySelector('.thumbframe').children[k-1].firstChild.click();
	}
});

document.querySelector('.rightarrow').addEventListener('click',function(){
	if (k !== (selectedAlbum_size-1)){
		document.querySelector('.thumbframe').children[k+1].firstChild.click();
	}
});

//ADD ALBUM THUMBNAILS

albums.forEach(function(current,index){
		current.style.backgroundImage = Album_path.get(Album_path.size-(index+1))+'1'+fileex;
	});

























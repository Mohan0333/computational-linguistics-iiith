var English=[
	["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
	["some students like to study in the night","in the night some students like to study"],
	["John and Mary went to church","Mary and John went to church"],
	["John went to church after eating","after eating John went to church","John after eating went to church"],
	["did he go to market","he did go to market"],
	["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
	["John goes to the library and studies","John studies and goes to the library"],
	["John ate an apple so did she","she ate an apple so did John"],
	["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
	["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"],
     ];
var Hindi=[
	 ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
	 ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
	 ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम",
	 "उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
	 ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
	 ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
	 ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
	 ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है"," बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
	 ];
var rs='';
var cnt=0;
var cmt=0;
var crt;

function dis(){
if (language.value === "English"){              
                
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo4").innerHTML = "";
    document.getElementById("demo5").innerHTML = "";
    document.getElementById("demo6").innerHTML = "";
    document.getElementById("demo7").innerHTML = "";
        answers="";
	    sen="";
	cmt=0;
document.getElementById("x").style.display="block";
document.getElementById("y").style.display="block";

//to choose a random sentence 
var rand1=English[Math.floor(Math.random()*English.length)];
var rand2=rand1[Math.floor(Math.random()*rand1.length)];
var s=rand2;
crt=rand1;
//to shuffle the words in choosen sentence
var shuff=s.split(' ');

	var max=shuff.length,temp,index;
	while(max>0){
		index=Math.floor(Math.random()*max);
		max--;
		temp=shuff[max];
		shuff[max]=shuff[index];
		shuff[index]=temp;
	}

//to display the random words as buttons
	var s='';
	var ss='';
	rs='';
	for(i=0;i<shuff.length;i++)
	{
		s=' <button id="btn'+i+'" value='+shuff[i]+' onclick="ord(this.id,this.value)">'+shuff[i]+'</button>';
         ss+=(s+"   ");
		 rs+=(s+"   ");
		 cmt++;
	}
document.getElementById("demo").innerHTML=ss;
}
else if(language.value==="Hindi"){
	
	
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo4").innerHTML = "";
    document.getElementById("demo5").innerHTML = "";
    document.getElementById("demo6").innerHTML = "";
    document.getElementById("demo7").innerHTML = "";
        answers="";
	    sen="";
cmt=0;
document.getElementById("x").style.display="block";
document.getElementById("y").style.display="block";
var rand3=Hindi[Math.floor(Math.random()*Hindi.length)];
var rand4=rand3[Math.floor(Math.random()*rand3.length)];
var s=rand4;
crt=rand3;

//to shuffle the words in choosen sentence
var shuff=s.split(' ');

	var max=shuff.length,temp,index;
	while(max>0){
		index=Math.floor(Math.random()*max);
		max--;
		temp=shuff[max];
		shuff[max]=shuff[index];
		shuff[index]=temp;
	}
//to display the random words as buttons

	var s='';
	var ss='';
       rs='';
	for(i=0;i<shuff.length;i++)
	{
		s='<button id="btn'+i+'"  value='+shuff[i]+' onclick="ord(this.id,this.value)">'+shuff[i]+'</button>';
         ss+=(s+"   ");
	    rs+=(s+"    ");
		cmt++;
	}

document.getElementById("demo").innerHTML=ss;
}
else if(language.value===""){

    alert("select language");
                
           }}


//to show formed sentence
var sen="";
function ord(id,value){
	sen+=value+" ";
	cnt++;
	document.getElementById("demo1").style.display="block";
	 document.getElementById("demo2").innerHTML = sen;
	document.getElementById(id).style.display = "none";
	document.getElementById("demo3").innerHTML = '<button onclick="re()">Re-form the sentence</button>';

if(cnt==cmt){
	document.getElementById("demo4").innerHTML='<button onclick="check()">Check the correctness of this sentence</button>';
    cnt=0;
}
}
function re(){
	sen="";
document.getElementById("demo1").style.display="";
document.getElementById("demo2").innerHTML=sen;
document.getElementById("demo").innerHTML=rs;
document.getElementById("demo3").innerHTML="";
document.getElementById("demo4").innerHTML="";
document.getElementById("demo5").innerHTML="";
document.getElementById("demo6").innerHTML="";
document.getElementById("demo7").innerHTML="";
}
function check(){
	fsen=sen.trim();
	if(crt.includes(fsen))
	{
		document.getElementById("demo5").innerHTML="<span style='font-size: 35px; color: green;'>Right answer!!!</span>";
	}
	else{
		document.getElementById("demo5").innerHTML="<span style='font-size: 35px; color:red;'>Wrong answer!!!</span>";
        document.getElementById("demo6").innerHTML='<button onclick="ans()">Get Correct Sentence</button>'	
	}
	
}
function ans(){
var answers='';
	for(i=0;i<crt.length;i++)
	{
	  answers+=crt[i]+"<br>";
	}
	document.getElementById("demo7").innerHTML=answers;
	document.getElementById("demo6").innerHTML='<button onclick="hide()">Hide the correct Sentence</button>'
}
function hide(){
	document.getElementById("demo7").innerHTML="";
	document.getElementById("demo6").innerHTML='<button onclick="ans()">Get Answers</button>'
}
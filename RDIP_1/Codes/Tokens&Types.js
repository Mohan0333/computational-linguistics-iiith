var corpus=[['A mouse was having a very bad time. She could find no food at all. \
 She looked here and there, but there was no food, and she grew very thin. \
 At last the mouse found a basket, full of corn. There was a small hole in the  \
 basket, and she crept in. She could just get through the hole. \
 Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating \
 and eating. She had grown very fat before she felt that she had had enough. \
 When the mouse tried to climb out of the basket, she could not. She was too fat \
 to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall \
 I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the \
 rat, "if you want to climb out of the basket, you must wait till you have grown as thin \
 as you were when you went in.'],['A wolf carried off a lamb. The lamb said, " I know you \
 are going to eat me, but before you eat me I would like to hear you play the flute. I have \
 heard that you can play the flute better than anyone else, even the shepherd himself." The \
 wolf was so pleased at this that he took out his flute and began to play. When he had done, \
 the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs \
 heard the sound, and they came running up and fell on the wolf and the lamb was able to get back \
 to the flock.'],['A man had a little dog, and he was very fond of it. He would pat its head, and \
 take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. \
 A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" \
 said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps \
  on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, \
 he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged \
 its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee.\
 The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and\
 they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the\
 dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.']];
 
 //to include snowball
 
 //var stemmer = new Snowball('English');
//stemmer.setCurrent('abbreviations');
//stemmer.stem();
//console.log(stemmer.getCurrent());
 
 var str='';
 //to display the corpus
 function dis(){
	 if(choose.value=="corpus1")
	 {
	 document.getElementById("demo").innerHTML=corpus[0];
	 str=corpus[0]+'';
	 }
	 else if(choose.value=="corpus2")
	 {
		 document.getElementById("demo").innerHTML=corpus[1];
		 str=corpus[1]+'';
	 }
	 else if(choose.value=="corpus3")
	 {
		 document.getElementById("demo").innerHTML=corpus[2];
		 str=corpus[2]+'';
	 }
	 else if(choose.value=="")
	 {
	  alert("select corpus");
	 }
 document.getElementById("demo1").innerHTML="Enter the number of tokens and types for the above corpus:";
 document.getElementById("demo2").style.display="block";
 document.getElementById("demo3").innerHTML='<button onclick="check()">Submit</button>'
 }
 function check(){
	 //to find no of words
	 var pattern = /\w+/ig;
		var s = str.match(pattern);
		 
 if(document.getElementById("tok").value==s.length)
     document.getElementById("tok").style.background="green";
 
 else
	 document.getElementById("tok").style.background="red";
 
 //to find no of unique words
        var s1 = s.join(" ");
		var s2 = s1.toLowerCase();
		var s3= s2.split(' ');
		var uniquewords = new Set(s3);

 if(document.getElementById("typ").value==uniquewords.size)
     document.getElementById("typ").style.background="green";
 
 else
	 document.getElementById("typ").style.background="red";
 
 if((document.getElementById("tok").value==s.length)&(document.getElementById("typ").value==uniquewords.size))
 {
	 document.getElementById("demo4").innerHTML="<span style='color:green'>Right Answer</span>"
     document.getElementById("demo5").innerHTML='<button onclick="root()">Continue</button>'
 }
else
	document.getElementById("demo4").innerHTML="<span style='color:red'>Wrong Answer</span>"
 }

function root(){
		 document.getElementById("demo3").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
	     document.getElementById("demo4").innerHTML="#new types:<br> <input type='text' size='8'>"
		 document.getElementById("demo5").innerHTML='<button onclick="stmg()">Submit</button>'
	 }
function stmg(){
var	ss= str.replace(/[^a-zA-Z]/g,"");
var sl=ss.toLowerCase();
var stm=sl.split(' ');
var stemmer = new Snowball('English');
var arr=[];
for(i=0;i<stm.length;i++){
	stemmer.setCurrent(stm[i]);
	stemmer.stem();
    arr.push(stemmer.getCurrent());
}
console.log(arr);
console.log(arr.length);
}
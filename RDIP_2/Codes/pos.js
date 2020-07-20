var English=['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];
var Hindi=['राम ने सीता के लिए फल तोड़ा','छोटे बच्चे पाठशाला जल्दी आयेंगे','मेहनत का फल मीठा होता है','वाह! वह खूबसूरत है','पेड़ से पत्ते गिर गए'];
function sen(){
	
	if(language.value=="eng"){	
	var p='<center><select name="sent" id="sent" onchange="tab()"><option value="e0">---Select a sentence---</option><option value="e1">'+English[0]+'</option><option value="e2">'+English[1]+'</option><option value="e3">'+English[2]+'</option><option value="e4">'+English[3]+'</option><option value="e5">'+English[4]+'</option></center>'
	document.getElementById("dd2").innerHTML=p;
	}
	
	else if(language.value=="hin"){
	var p='<center><select name="sent" id="sent" onchange="tab()"><option value="e0">---Select a sentence---</option><option value="h1">'+Hindi[0]+'</option><option value="h2">'+Hindi[1]+'</option><option value="h3">'+Hindi[2]+'</option><option value="h4">'+Hindi[3]+'</option><option value="h5">'+Hindi[4]+'</option></center>'
	document.getElementById("dd2").innerHTML=p;
	}
	
	else if(language.value=="")
	alert("select language");	
}
	
	function tab(){
		document.getElementById("demo").innerHTML="Select the POS tag for corresponding words";
		var str;
		switch(sent.value)
		{
			case 'e1':
			str=English[0];
			break;
			
			case 'e2':
			str=English[1];
			break;
			
			case 'e3':
			str=English[2];
			break;
			
			case 'e4':
			str=English[3];
			break;
			
			case 'e5':
			str=English[4];
			break;
			
			case 'h1':
			str=Hindi[0];
			break;
			
			case 'h2':
			str=Hindi[1];
			break;
			
			case 'h3':
			str=Hindi[2];
			break;
			
			case 'h4':
			str=Hindi[3];
			break;
			
			case 'h5':
			str=Hindi[4];
			break;
		}
		var str1='';
		str1=str.split(" ");
		console.log(str1[2]);
		if(language.value=="eng"){
			
		var w="";
	for(i=0;i<str1.length;i++){
	
		w+="<tr><td>"+str1[i]+"</td><td><select><option value='Noun' selected>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value='Adjective'>Adjective</option><option value='Adverb'>Adverb</option><option value='Determiner'>Determiner</option><option value='Preposition'>Preposition</option><option value='Conjunction'>Conjunction</option><option value='Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		
	   }
	}
		
		if(language.value=="hin"){
				var w="";
	for(i=0;i<str1.length;i++){
	
		w+="<tr><td>"+str1[i]+"</td><td><select><option value='Noun' selected>Noun</option><option value='Pronoun'>Pronoun</option><option value='Verb'>Verb</option><option value='Adjective'>Adjective</option><option value='Adverb'>Adverb</option><option value='Postposition'>Postposition</option><option value='Conjunction'>Conjunction</option><option value='Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
	 }		
	}
	document.getElementById("demo1").innerHTML="<center><table id='z'><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>" + w + "</table></center>";	
	document.getElementById("demo2").innerHTML="<center><button>Submit</button>"
	}
		
	
var English=['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];
var Hindi=['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];
function sen(){
	
	if(language.value=="eng"){	
	var p='<center><select name="sent" id="sent"><option value="e0">---Select a sentence---</option><option value="e1">'+English[0]+'</option><option value="e2">'+English[1]+'</option><option value="e3">'+English[2]+'</option><option value="e4">'+English[3]+'</option><option value="e5">'+English[4]+'</option></center>'
	document.getElementById("dd2").innerHTML=p;
	}
	
	else if(language.value=="hin"){
	var p='<center><select name="sent" id="sent"><option value="e0">---Select a sentence---</option><option value="h1">'+Hindi[0]+'</option><option value="h2">'+Hindi[1]+'</option><option value="h3">'+Hindi[2]+'</option><option value="h4">'+Hindi[3]+'</option><option value="h5">'+Hindi[4]+'</option></center>'
	document.getElementById("dd2").innerHTML=p;
	}
	
	else if(language.value=="")
	alert("select language");	
}	
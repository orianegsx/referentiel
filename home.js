
var BirthDate = prompt('Entrez votre date de naissance de type jj.mm.aaaa:');
var todayDate = new Date();
var curr_date = todayDate.getDate();
var curr_month = todayDate.getMonth();
var curr_year = 2011;//todayDate.getFullYear();

var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

var m_arcanes = new Array("Le Mat", "I Le Bateleur", "II La Papesse", "III L'Impérarice", "IV L'Empereur", "V Le Pape", "VI L'Amoureux", "VII Le Chariot", "VIII La Justice", "VIIII L'Hermite", "X La Roue de Fortune", "XI La Force", "XII Le Pendu", "XIII L'Arcane sans nom", "XIIII La Tempérence ", "XV Le Diable", "XVI La Maison-Dieu", "XVII L'Etoile", "XVIII La Lune", "XVIIII Le Soleil", "XX Le Jugement","XI Le Monde");

var day = BirthDate.split(".")[0];

var dayOne = day.split("")[0];
var dayTwo = day.split("")[1];

var month = BirthDate.split(".")[1];
var monthOne = month.split("")[0];
var monthTwo = month.split("")[1];

var year = BirthDate.split(".")[2];
var yearOne = year.split("")[0];
var yearTwo = year.split("")[1];
var yearThree = year.split("")[2];
var yearFour = year.split("")[3];

//var dayString = "Vous etes né(e) le jour:  ".concat(day);
//var monthString = "  du mois:  ".concat(month);
//var yearString = "  de l année  :  ".concat(year);

//var birthString = dayString.concat(monthString);

//birthString = birthString.concat(yearString);

//alert(birthString)

//document.write(birthString);

document.write("Vous etes né(e) le  " + day + "-" + m_names[month - 1] 
+ "-" + year);



function reduction(str, nb, nb2, nb3) {
	str = str + '';
	var total = 0,
	l = str.length;
	if (!nb) { nb = 22 };
	if(parseInt(str) <= nb) {return parseInt(str)};
	if (nb2) {
		if(parseInt(str) == nb2) {return parseInt(str)};
	};
	if (nb3) {
		if(parseInt(str) == nb3) {return parseInt(str)};
	};
	for(var i=0;i<l;i++) {
    var c = parseInt(str.charAt(i),10);
    if(!isNaN(c)) { total += c; }
  }
  return total>nb ? reduction(total, nb, nb2, nb3) : total;
};


//alert(reduction(day));

//var todayDayString = "<br>    Nous somme le ".concat(curr_date);
//var todayMonthString = " /  ".concat(curr_month);
//var todayYearString = "  de l année  :  ".concat(curr_year);

//var todayString = todayDayString.concat(todayMonthString);

//todayString = todayString.concat(todayYearString);

//alert(birthString)

//document.write(todayString);
document.write("<br>Nous sommes le  " + curr_date + "-" + m_names[curr_month] 
+ "-" + curr_year);

/*function FunctionSommeDix(str) {
  str = str + '';
  var total = 0,
  l = str.length;
  if(l<2) { return parseInt(str,10); }
  for(var i=0;i<l;i++) {
    var c = parseInt(str.charAt(i),10);
    if(!isNaN(c)) { total += c; }
  }
  return total>24 ? FunctionSommeDix(total) : total; // Vérifier si c'est 24 ou 10 !!
};

function FunctionSommeDixExceptElevenAndTwentyToo(str) {
  str = str + '';
  var total = 0,
  l = str.length;
  if(l<2) { return parseInt(str,10); }
  for(var i=0;i<l;i++) {
  	//alert(i);
    var c = parseInt(str.charAt(i),10);
    if(!isNaN(c)) { 
    	//alert(c);
    	total += c; 
    }
  }
  return (total<10 || total == 11 || total == 22) ? total : FunctionSommeDixExceptElevenAndTwentyToo(total); 
};

function FunctionSommeVingtDeux(str) {
  str = str + '';
  var total = 0,
  l = str.length;
  if(l<2) { return parseInt(str,10); }
  for(var i=0;i<l;i++) {
    var c = parseInt(str.charAt(i),10);
    if(!isNaN(c)) { total += c; }
  }
  //alert(total)
  return total>=22 ? FunctionSommeVingtDeux(total) : total; //pb 15.08.1947 ref 2011
};*/

function carteName(nb) {
	var str = nb + "<b>" + "   " + m_arcanes[nb] + "</b>"
	  return str;

	};
document.write("<br><br>Maison 1 est le jour de naissance : la personnalité. Votre <b>Maison 1</b>  est:  ");
var maisonUn = reduction(day);//(day >= 22 ) ? FunctionSommeVingtDeux(day) : day ;
document.write(carteName(maisonUn)); //Reduction ?Si on est né un 31 est ce qu'on fait 3+1. Si on est né 22 on fait 22


document.write("<br><br>Maison 2 est le mois de naissance : la quête. Votre <b>Maison 2</b>  est:  ");
var maisonDeux = reduction(month); //FunctionSommeVingtDeux(month);
document.write(carteName(maisonDeux));

document.write("<br><br>Maison 3 est l'année de naissance : les préoccupations de la pensée. Votre <b>Maison 3</b>  est:   ");
var maisonTrois = reduction(year); //FunctionSommeVingtDeux(year);
document.write(carteName(maisonTrois));

document.write("<br><br>Maison 4 est la somme du jour, du mois et de l'année de naissance réduit à la fin du calcul : l'orientation concrète de l'existence. Votre <b>Maison 4</b>  est:   ");
var maisonQuatreCalcul = parseInt(day,10) + parseInt(month,10) + parseInt(year,10);
var maisonQuatre = reduction(maisonQuatreCalcul); //FunctionSommeVingtDeux(maisonQuatreCalcul);
document.write(carteName(maisonQuatre));



document.write("<br><br>Maison 5 est la somme des Maisons 1, 2, 3, 4 : le passage obligé. Votre <b>Maison 5</b>  est:     ");
var sommeOneToFourString = maisonUn + maisonDeux + maisonTrois + maisonQuatre;
var maisonCinq = reduction(sommeOneToFourString); //FunctionSommeVingtDeux(sommeOneToFourString);
document.write(carteName(maisonCinq));

document.write("<br><br>Maison 6 est la somme des Maisons 1 et 2 : les qualités. Votre <b> Maison 6</b>  est:   ");
var sommeOneToTwoString = maisonUn + maisonDeux;
var maisonSix = reduction(sommeOneToTwoString); //( sommeOneToTwoString >= 22 ? FunctionSommeVingtDeux(sommeOneToTwoString) : sommeOneToTwoString);
document.write(carteName(maisonSix));


document.write("<br><br>Maison 7 est la soustraction entre les Maisons 3 et 2 : les défis. Votre <b>Maison 7</b>  est:   ");
var diffThreeTwo = maisonTrois > maisonDeux ? maisonTrois - maisonDeux : maisonDeux - maisonTrois;
var maisonSept = reduction(diffThreeTwo);
document.write(carteName(maisonSept));

document.write("<br><br>Maison 8 est la somme de la Maison 6 + l'année concernée réduite entre 1 et 9, sauf 11 et 22 qui ne se réduisent pas : la météo. Votre <b>Maison 8</b>  est:   ");
//var test = curr_date + curr_month + curr_year;//10 + 6 + 2016 =

var SommeHuitAndCurrentYear = maisonSix + reduction(curr_year,9,11,22);
//var test2 = maisonSix + 2 + 1 + 6; 12 + 9
//alert (SommeHuitAndCurrentYear);
//var maisonHuit = String(todayDate);
var maisonHuit = reduction(SommeHuitAndCurrentYear); //FunctionSommeDixExceptElevenAndTwentyToo(SommeHuitAndCurrentYear);
//document.write(test);
//document.write("<br>");

//document.write(test2);
//document.write("<br>");
document.write(carteName(maisonHuit)); // la lune



document.write("<br><br>Maison 9 est la somme des Maisons 6 et 7 : le soi. Votre <b>Maison 9</b>  est:  ");
var maisonNeuf = maisonSix + maisonSept;
maisonNeuf = reduction(maisonNeuf);//FunctionSommeVingtDeux(maisonNeuf);
document.write(carteName(maisonNeuf));


document.write("<br><br>Maison 10 est la différence entre la Maison 9 et le nombre 22 : les expériences. Votre <b>Maison 10</b>  est:  ");
maisonDix = maisonNeuf > 22 ? maisonNeuf - 22 : 22 - maisonNeuf;
maisonDix = reduction(maisonDix);
document.write(carteName(maisonDix));

document.write("<br><br>Maison 11 est la somme des Maisons, 7, 3 et 10 : le projet parental inconscient. Votre <b>Maison 11</b>  est:  ");
var sommeSevenThreeTen = maisonSept + maisonTrois + maisonDix;
var maisonOnze = reduction(sommeSevenThreeTen); //unctionSommeVingtDeux(sommeSevenThreeTen);
document.write(carteName(maisonOnze));

document.write("<br><br>Maison 12 est la somme des Maisons 6, 2 et 4 : la guérison. Votre <b>Maison 12</b> est:  ");
var sommeSixTwoFour = maisonSix + maisonDeux + maisonQuatre;
var maisonDouze = reduction(sommeSixTwoFour); //FunctionSommeVingtDeux(sommeSixTwoFour);
document.write(carteName(maisonDouze));


document.write("<br><br>Maison 13 est la somme des Maisons 12, 1, 5, 3, 11 - constituant l'échelle de Jacob - ajoutée à la somme des Maisons 4, 5, 2 et 9 - formant la ceinture -. On ne réduit qu'à la fin. On observe qu'il faut compter deux fois la Maison 5 : la problématique. On appelle réduction le nombre formé par l'addition des chiffres qui composent un nombre donné. Votre <b>Maison 13</b>  est:  ");
var echelleJacob = maisonDouze + maisonUn + maisonCinq + maisonTrois + maisonOnze;
//document.write(echelleJacob);

var ceinture = maisonQuatre + maisonCinq + maisonDeux + maisonNeuf;
//document.write(ceinture);

var maisonTreize = echelleJacob + ceinture;
maisonTreize = reduction(maisonTreize); //FunctionSommeVingtDeux(maisonTreize);
document.write(carteName(maisonTreize));




















//write("votre texte");


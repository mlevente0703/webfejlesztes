document.getElementById("karakterem").addEventListener("click", eredmeny)
function eredmeny(){
    let jojo=0
    let zahando=0
    let bboy=0

    let dio=0
    let giorno=0
    let rhchili=0
    
    let killerqueen=0
    let avdol=0
    let diavolo=0

    let echoes=0
    let kakyoin=0
    let heavensdoor=0

    if(document.getElementById("kek").checked){
        jojo=jojo+1;
        zahando=zahando+1;
        bboy=bboy+1;
    }
    if(document.getElementById("sarga").checked){
        dio=dio+1;
        giorno=giorno+1;
        rhchili=rhchili+1;
    }
    if(document.getElementById("piros").checked){
        killerqueen=killerqueen+1;
        avdol=avdol+1;
        diavolo=diavolo+1;
    }
    if(document.getElementById("zold").checked){
        echoes=echoes+1;
        kakyoin=kakyoin+1;
        heavensdoor=heavensdoor+1;
    }

    if(document.getElementById("rock").checked){
        diavolo=diavolo+1;
        rhchili=rhchili+1;
        avdol=avdol+1;
    }
    if(document.getElementById("pop").checked){
        echoes=echoes+1;
        bboy=bboy+1;
        killerqueen=killerqueen+1;
    }
    if(document.getElementById("punk").checked){
        kakyoin=kakyoin+1;
        giorno=giorno+1;
        zahando=zahando+1;
    }
    if(document.getElementById("classical").checked){
        dio=dio+1;
        jojo=jojo+1;
        heavensdoor=heavensdoor+1;
    }

    if(document.getElementById("part2").checked){
        jojo=jojo+1;
    }
    if(document.getElementById("part3").checked){
        dio=dio+1;
        avdol=avdol+1;
        kakyoin=kakyoin+1;
    }
    if(document.getElementById("part4").checked){
        echoes=echoes+1;
        killerqueen=killerqueen+1;
        rhchili=rhchili+1;
        zahando=zahando+1;
    }
    if(document.getElementById("part3").checked){
        giorno=giorno+1;
        bboy=bboy+1;
        heavensdoor=heavensdoor+1;
        diavolo=diavolo+1;
    }
    /*eredményértékelés*/
    if(jojo>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Star Platinum"
        document.getElementById("eredmenykep").src="kepek/starplatinum.webp"
    }
    else if(dio>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Za Warudo"
        document.getElementById("eredmenykep").src="kepek/zawarudo.jpg"
    }
    else if(kakyoin>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Zöld Szószóló"
        document.getElementById("eredmenykep").src="kepek/kakyoin.jpg"
    }
    else if(avdol>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Mágikus Vörös"
        document.getElementById("eredmenykep").src="kepek/avdol.png"
    }
    else if(echoes>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Echoes Act III."
        document.getElementById("eredmenykep").src="kepek/echoes.jpg"
    }
    else if(killerqueen>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Killer Queen"
        document.getElementById("eredmenykep").src="kepek/killerqueen.png"
    }
    else if(rhchili>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Red Hot Chili Pepper"
        document.getElementById("eredmenykep").src="kepek/rhchili.png"
    }
    else if(heavensdoor>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Heaven's Door"
        document.getElementById("eredmenykep").src="kepek/heavensdoor.jpg"
    }
    else if(giorno>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Gold Experience"
        document.getElementById("eredmenykep").src="kepek/goldexperience.jpg"
    }
    else if(bboy>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Beach Boy"
        document.getElementById("eredmenykep").src="kepek/bboy.jpg"
    }
    else if(zahando>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Za Hando"
        document.getElementById("eredmenykep").src="kepek/zahando.png"
    }
    else if(diavolo>=2){
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: King Crimson"
        document.getElementById("eredmenykep").src="kepek/diavolo.png"
    }
    else{
        document.getElementById("eredmenykesz").innerHTML="A te karaktered: Rolling Stone"
        document.getElementById("eredmenykep").src="kepek/rolling stone.jpg"
    }
}
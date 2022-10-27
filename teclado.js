/* Letras del teclado mobile */
const teclaQ = document.getElementById("btn-q");
const teclaW = document.getElementById("btn-w");
const teclaE = document.getElementById("btn-e");
const teclaR = document.getElementById("btn-r");
const teclaT = document.getElementById("btn-t");
const teclaY = document.getElementById("btn-y");
const teclaU = document.getElementById("btn-u");
const teclaI = document.getElementById("btn-i");
const teclaO = document.getElementById("btn-o");
const teclaP = document.getElementById("btn-p");
const teclaA = document.getElementById("btn-a");
const teclaS = document.getElementById("btn-s");
const teclaD = document.getElementById("btn-d");
const teclaF = document.getElementById("btn-f");
const teclaG = document.getElementById("btn-g");
const teclaH = document.getElementById("btn-h");
const teclaJ = document.getElementById("btn-j");
const teclaK = document.getElementById("btn-k");
const teclaL = document.getElementById("btn-l");
const teclaÑ = document.getElementById("btn-ñ");
const teclaZ = document.getElementById("btn-z");
const teclaX = document.getElementById("btn-x");
const teclaC = document.getElementById("btn-c");
const teclaV = document.getElementById("btn-v");
const teclaB = document.getElementById("btn-b");
const teclaN = document.getElementById("btn-n");
const teclaM = document.getElementById("btn-m");

/* Defino a las letras sus respectivas funciones cuando se clickean */

teclaA.onclick = presionarA;
teclaB.onclick = presionarB;
teclaC.onclick = presionarC;
teclaD.onclick = presionarD;
teclaE.onclick = presionarE;
teclaF.onclick = presionarF;
teclaG.onclick = presionarG;
teclaH.onclick = presionarH;
teclaI.onclick = presionarI;
teclaJ.onclick = presionarJ;
teclaK.onclick = presionarK;
teclaL.onclick = presionarL;
teclaM.onclick = presionarM;
teclaN.onclick = presionarN;
teclaÑ.onclick = presionarÑ;
teclaO.onclick = presionarO;
teclaP.onclick = presionarP;
teclaQ.onclick = presionarQ;
teclaR.onclick = presionarR;
teclaS.onclick = presionarS;
teclaT.onclick = presionarT;
teclaU.onclick = presionarU;
teclaV.onclick = presionarV;
teclaW.onclick = presionarW;
teclaX.onclick = presionarX;
teclaY.onclick = presionarY;
teclaZ.onclick = presionarZ;

function presionarA(){
    teclaA.disabled= true;
    letrasUsadas+="A";
    buscarLetraenPalabra("A");
}

function presionarB(){
    teclaB.disabled= true;
    letrasUsadas+="B";
    buscarLetraenPalabra("B");
}

function presionarC(){
    teclaC.disabled= true;
    letrasUsadas+="C";
    buscarLetraenPalabra("C");
}

function presionarD(){
    teclaD.disabled= true;
    letrasUsadas+="D";
    buscarLetraenPalabra("D");
}

function presionarE(){
    teclaE.disabled= true;
    letrasUsadas+="E";
    buscarLetraenPalabra("E");
}

function presionarF(){
    teclaF.disabled= true;
    letrasUsadas+="F";
    buscarLetraenPalabra("F");
}

function presionarG(){
    teclaG.disabled= true;
    letrasUsadas+="G";
    buscarLetraenPalabra("G");
}

function presionarH(){
    teclaH.disabled= true;
    letrasUsadas+="H";
    buscarLetraenPalabra("H");
}

function presionarI(){
    teclaI.disabled= true;
    letrasUsadas+="I";
    buscarLetraenPalabra("I");
}

function presionarJ(){
    teclaJ.disabled= true;
    letrasUsadas+="J";
    buscarLetraenPalabra("J");
}

function presionarK(){
    teclaK.disabled= true;
    letrasUsadas+="K";
    buscarLetraenPalabra("K");
}

function presionarL(){
    teclaL.disabled= true;
    letrasUsadas+="L";
    buscarLetraenPalabra("L");
}

function presionarM(){
    teclaM.disabled= true;
    letrasUsadas+="M";
    buscarLetraenPalabra("M");
}

function presionarN(){
    teclaN.disabled= true;
    letrasUsadas+="N";
    buscarLetraenPalabra("N");
}

function presionarÑ(){
    teclaÑ.disabled= true;
    letrasUsadas+="Ñ";
    buscarLetraenPalabra("Ñ");
}

function presionarO(){
    teclaO.disabled= true;
    letrasUsadas+="O";
    buscarLetraenPalabra("O");
}

function presionarP(){
    teclaP.disabled= true;
    letrasUsadas+="P";
    buscarLetraenPalabra("P");
}

function presionarQ(){
    teclaQ.disabled= true;
    letrasUsadas+="Q";
    buscarLetraenPalabra("Q");
}

function presionarR(){
    teclaR.disabled= true;
    letrasUsadas+="R";
    buscarLetraenPalabra("R");
}

function presionarS(){
    teclaS.disabled= true;
    letrasUsadas+="S";
    buscarLetraenPalabra("S");
}

function presionarT(){
    teclaT.disabled= true;
    letrasUsadas+="T";
    buscarLetraenPalabra("T");
}

function presionarU(){
    teclaU.disabled= true;
    letrasUsadas+="U";
    buscarLetraenPalabra("U");
}

function presionarV(){
    teclaV.disabled= true;
    letrasUsadas+="V";
    buscarLetraenPalabra("V");
}

function presionarW(){
    teclaW.disabled= true;
    letrasUsadas+="W";
    buscarLetraenPalabra("W");
}

function presionarX(){
    teclaX.disabled= true;
    letrasUsadas+="X";
    buscarLetraenPalabra("X");
}

function presionarY(){
    teclaY.disabled= true;
    letrasUsadas+="Y";
    buscarLetraenPalabra("Y");
}

function presionarZ(){
    teclaZ.disabled= true;
    letrasUsadas+="Z";
    buscarLetraenPalabra("Z");
}

/* Reiniciar teclado mobile*/
function reiniciarTecladoMobile(){
    teclaA.disabled= false;
    teclaB.disabled= false;
    teclaC.disabled= false;
    teclaD.disabled= false;
    teclaE.disabled= false;
    teclaF.disabled= false;
    teclaG.disabled= false;
    teclaH.disabled= false;
    teclaI.disabled= false;
    teclaJ.disabled= false;
    teclaK.disabled= false;
    teclaL.disabled= false;
    teclaM.disabled= false;
    teclaN.disabled= false;
    teclaÑ.disabled= false;
    teclaO.disabled= false;
    teclaP.disabled= false;
    teclaQ.disabled= false;
    teclaR.disabled= false;
    teclaS.disabled= false;
    teclaT.disabled= false;
    teclaU.disabled= false;
    teclaV.disabled= false;
    teclaW.disabled= false;
    teclaX.disabled= false;
    teclaY.disabled= false;
    teclaZ.disabled= false;
}
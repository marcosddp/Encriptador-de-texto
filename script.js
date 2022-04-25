let encriptarButton = document.getElementById("encriptar");
let desencriptarButton = document.getElementById("desencriptar");
let textarea = document.getElementById("textarea");
let resultado = "";

/*La letra "e" es convertida para "enter"
            La letra "i" es convertida para "imes"
            La letra "a" es convertida para "ai"
            La letra "o" es convertida para "ober"
            La letra "u" es convertida para "ufat"*/

function encriptar() {
  let string = textarea.value;

  for (let index in string) {
    switch (string[index]) {
      case "e":
        resultado += "enter";
        break;

      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;

      case "o":
        resultado += "ober";
        break;

      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += string[index];
    }
  }
}

function textLength(length, text) {
  let r = "";
  for (let i = 0; i < length; i++) {
    if (text[i]) {
      r += text[i];
    }
  }
  return r;
}

function desencriptar() {
  let string = textarea.value;
  //let aux = "";
  let antiVocales = ["ai", "imes",  "ober", "ufat","enter"];
  let exist = false;

  for (let index = 0; index < string.length; index++) {
    //aux += string[index];
    exist = false;
    if (
      string[index] == "e" ||
      string[index] == "i" ||
      string[index] == "a" ||
      string[index] == "o" ||
      string[index] == "u"
    ) {
      for (let at in antiVocales) {
        //gaitober
        let salto = index + antiVocales[at].length;
      
        
        //console.log("El salto es "+salto)
        let saltoText = "";

        for (let y = index; y < salto; y++) {
          saltoText += string[y];
        }
        

        if (saltoText == antiVocales[at]) {
          resultado += antiVocales[at][0];
          exist=true
          index = salto;
          
          break;
        }
        console.log(at)

      }
      
     
    } 
    if(!exist){
      resultado += string[index];
      exist=false
    }
    console.log("el indice es: "+index + " y letra es "+string[index])
  }
}

encriptarButton.onclick = encriptar;
desencriptarButton.onclick = desencriptar;

/*
                      switch (string[index]) {
                        case "enter":
                          resultado += "e";
                          break;

                        case "imes":
                          resultado += "i";
                          break;

                        case "ai":
                          resultado += "a";
                          break;

                        case "ober":
                          resultado += "o";
                          break;

                        case "ufat":
                          resultado += "u";
                          break;

                        default:
                          resultado += string[index];
                      }*/

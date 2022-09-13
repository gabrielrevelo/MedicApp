export default function darFormato(cadena){
    let aMayus = cadena.replace(/[ÁÀÄÂ]/g,'A');
    let aMinus = aMayus.replace(/[áàäâ]/g,'a');
    let eMayus = aMinus.replace(/[ÉÈËÊ]/g,'E');
    let eMinus = eMayus.replace(/[éèëê]/g,'e');
    let iMayus = eMinus.replace(/[ÍÌÏÎ]/g,'I');
    let iMinus = iMayus.replace(/[íìïî]/g,'i');
    let oMayus = iMinus.replace(/[ÓÒÖÔ]/g,'O');
    let oMinus = oMayus.replace(/[óòöô]/g,'o');
    let uMayus = oMinus.replace(/[ÚÙÜÛ]/g,'U');
    let uMinus = uMayus.replace(/[úùüû]/g,'u');
    let enieMayus = uMinus.replace(/[Ñ]/g,'N');
    let enieMinus = enieMayus.replace(/[ñ]/g,'n');
    let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');

    return resultado.toLowerCase();
}
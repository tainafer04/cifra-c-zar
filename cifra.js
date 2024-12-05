function criptografar(frase, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let resultado = "";
    
    //tratar a chave e encontra sua posição do alfabeto
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);
    //letra e a chave
    frase = frase.toUpperCase();
    
    //percorrer cada caracter da frase
    for (let i = 0; i < frase.length; i++) {
    const char = frase[i];
    
    if (alfabeto.includes(char)) {
    
    const index = alfabeto.indexOf(char);
    const novoIndex = (index + deslocamento) % 26;
    resultado += alfabeto[novoIndex];
    }
    // caracteres que não estão no alfabeto permanecem inalterados
    else {
    resultado += char;
    }
    }
    return resultado;
    }
    
    console.log(criptografar("oi", "K"));
    function criptografar(frase, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let resultado = "";
    
    //tratar a chave e encontra sua posição do alfabeto
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);
    //letra e a chave
    frase = frase.toUpperCase();
    
    //percorrer cada caracter da frase
    for (let i = 0; i < frase.length; i++) {
    const char = frase[i];
    
    if (alfabeto.includes(char)) {
    
    const index = alfabeto.indexOf(char);
    const novoIndex = (index - deslocamento,+ 26) % 26;
    resultado += alfabeto[novoIndex];
    }
    // caracteres que não estão no alfabeto permanecem inalterados
    else {
    resultado += char;
    }
    }
    return resultado;
    }
    
    console.log(criptografar("oi", "K"));
    
    console.log(criptografar("YS", "K"))
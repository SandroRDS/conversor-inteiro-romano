var anguloAtual = 0;
var cardinal = document.querySelector("#cardinal");
var romano = document.querySelector("#romano");
var valoresRomanos = {
                        "I":1,
                        "V":5,
                        "X":10,
                        "L":50,
                        "C":100,
                        "D":500,
                        "M":1000
                    }

cardinal.onkeyup = cardinalParaRomano;
romano.onkeyup = romanoParaCardinal;

function cardinalParaRomano()
{
    var valorCardinal = cardinal.value;
    var valorRomano;
    
    valorCardinal = validarCardinal(valorCardinal);
    
    var algarismos = String(valorCardinal).split('');

    if(algarismos.length == 1)
    {
        valorRomano = cardinalParaRomano_unidade(algarismos[0]);
    }

    if(algarismos.length == 2)
    {
        valorRomano  = cardinalParaRomano_dezena(algarismos[0]);
        valorRomano += cardinalParaRomano_unidade(algarismos[1]);
    }

    if(algarismos.length == 3)
    {
        valorRomano  =  cardinalParaRomano_centena(algarismos[0]);
        valorRomano += cardinalParaRomano_dezena(algarismos[1]);
        valorRomano += cardinalParaRomano_unidade(algarismos[2]);
    }

    if(algarismos.length == 4)
    {
        valorRomano  = cardinalParaRomano_milhar(algarismos[0]);
        valorRomano += cardinalParaRomano_centena(algarismos[1]);
        valorRomano += cardinalParaRomano_dezena(algarismos[2]);
        valorRomano += cardinalParaRomano_unidade(algarismos[3]);
    }
    
    
    romano.value = valorRomano;
    rotacionarSetas();
}

function validarCardinal(valorCardinal)
{
    valorCardinal = parseInt(valorCardinal);

    if(valorCardinal > 3999)
    {
        valorCardinal = 3999;
    }

    if(valorCardinal < 1 || isNaN(valorCardinal))
    {
        valorCardinal = 1;
    }

    cardinal.value = valorCardinal;

    return valorCardinal;
}


function cardinalParaRomano_unidade(valorUnidade)
{
    var unidadeRomana = "";

    switch(valorUnidade)
    {
        case '1':
            unidadeRomana = "I";
            break;

        case '2':
            unidadeRomana = "II";
            break;

        case '3':
            unidadeRomana = "III";
            break;

        case '4':
            unidadeRomana = "IV";
            break;

        case '5':
            unidadeRomana = "V";
            break;

        case '6': 
            unidadeRomana = "VI";
            break;

        case '7':
            unidadeRomana = "VII";
            break;

        case '8':
            unidadeRomana = "VIII";
            break;

        case '9':
            unidadeRomana = "IX";
            break;
    }

    return unidadeRomana;
}


function cardinalParaRomano_dezena(valorDezena)
{
    var dezenaRomana = "";

    switch(valorDezena)
    {
        case '1':
            dezenaRomana = "X";
            break;

        case '2':
            dezenaRomana = "XX";
            break;

        case '3':
            dezenaRomana = "XXX";
            break;

        case '4':
            dezenaRomana = "XL";
            break;

        case '5':
            dezenaRomana = "L";
            break;

        case '6': 
            dezenaRomana = "LX";
            break;

        case '7':
            dezenaRomana = "LXX";
            break;

        case '8':
            dezenaRomana = "LXXX";
            break;

        case '9':
            dezenaRomana = "XC";
            break;
    }

    return dezenaRomana;
}


function cardinalParaRomano_centena(valorCentena)
{
    var centenaRomana = "";

    switch(valorCentena)
    {
        case '1':
            centenaRomana = "C";
            break;

        case '2':
            centenaRomana = "CC";
            break;

        case '3':
            centenaRomana = "CCC";
            break;

        case '4':
            centenaRomana = "CD";
            break;

        case '5':
            centenaRomana = "D";
            break;

        case '6': 
            centenaRomana = "DC";
            break;

        case '7':
            centenaRomana = "DCC";
            break;

        case '8':
            centenaRomana = "DCCC";
            break;

        case '9':
            centenaRomana = "CM";
            break;
    }

    return centenaRomana;
}

function cardinalParaRomano_milhar(valorMilhar)
{
    var milharRomana = "";

    switch(valorMilhar)
    {
        case '1':
            milharRomana = "M";
            break;

        case '2':
            milharRomana = "MM";
            break;

        case '3':
            milharRomana = "MMM";
            break;
    }

    return milharRomana;
}

function romanoParaCardinal()
{
    var valorRomano = romano.value.toUpperCase();
    var valorCardinal = 0;
    var algarismos = valorRomano.split('');
    var i = algarismos.length - 1;

    while(i >= 0)
    {
        if(valoresRomanos[algarismos[i-1]] < valoresRomanos[algarismos[i]])
        {
            valorCardinal += valoresRomanos[algarismos[i]] - valoresRomanos[algarismos[i-1]];
            i-=2;
        }
        else
        {
            valorCardinal += valoresRomanos[algarismos[i]];
            i--;
        }
    }
    
    cardinal.value = valorCardinal;
    rotacionarSetas();
}

function rotacionarSetas()
{
    var setas = document.querySelector("#imagem_converter");
    
    anguloAtual += 180;

    setas.style.transform = `rotate(${anguloAtual}deg)`;
}
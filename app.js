const arguments = process.argv.slice(1);
function alanıhesapla(yarıcap){
    let sonuc= 3.14*yarıcap**2
    console.log(`Yarıçapı : ${yarıcap} birim olan Dairenin Alanı : ${sonuc} birimdir`)
}

alanıhesapla(arguments[1] *1);
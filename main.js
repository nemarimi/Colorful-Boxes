function renkleridegistir()
{
    var renkler=["ghostwhite","paleturquoise","plum","papayawhip","palevioletred","aliceblue","powderblue","pink"];
    var rastgele;
    var i;
    for(i=0; i<8; i++){
        rastgele=Math.floor(Math.random()*8);//sıfır ile 7 arasında rastgele tam sayı üretir.
        document.getElementsByTagName("div")[i].style.backgroundColor=renkler[rastgele];
    }
}

   
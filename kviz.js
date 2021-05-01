const poleOtazek = [{
    foto: 'obrazky/moncicak.jpg',
    otazka: 'Co je ikonická hračka z 80. let?',
    odpoved: ['Kočičák', 'Mončičák','Opičák'],
    spravne: 'Mončičák'
},
{
    foto: 'obrazky/ovoce.jpg',
    otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
    odpoved: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
    spravne: 'Jahoda'
},
{
    foto: 'obrazky/pivo.jpg',
    otazka: 'Pro úspěšné absolvování kurzu je potřeba ...',
    odpoved:['Umět JavaScript', 'Chodit po kurzu do hospody'],
    spravne: 'Umět JavaScript'
}]
const kviz = document.createElement('div');

let pocatek = document.querySelector('h1');
let i = 0;
let pocetOtazek = poleOtazek.length;
let pole_odpovedi = [];




function priNacteni() {
    kviz.classList.add('kviz');
    pocatek.appendChild(kviz);
    nacteni_otazky(0);
    console.log()
}


function nacteni_otazky(i) {

    const poradi = document.createElement('div');
    poradi.id ='poradi';
    poradi.textContent = 'otázka ' + (i + 1) +  '/' + pocetOtazek;

    const obsah = document.createElement('div');
    obsah.classList.add('obsah');
    obsah.id ='moznosti';


    const otazka = document.createElement('h1');
    otazka.id = 'otazka';
    otazka.textContent = poleOtazek[i].otazka;

    const odpovedi = document.createElement('li');
    odpovedi.id ='odpovedi';


    const moznosti = document.createElement('span');
    moznosti.id ='moznosti';

    const fotoOtazka = document.createElement('img');
    fotoOtazka.id = 'obrazek';
    fotoOtazka.classList.add('foto');
    fotoOtazka.src = poleOtazek[i].foto;


    kviz.appendChild(poradi);
    poradi.appendChild(otazka);
    otazka.appendChild(obsah);
    obsah.appendChild(fotoOtazka);
    obsah.appendChild(odpovedi);



    for (let j = 0; j < poleOtazek[i].odpoved.length; j=j+1 ) {
        let od_part = document.createElement('li');
        od_part.className ='li';
        od_part.innerHTML = poleOtazek[i].odpoved[j];
        od_part.onclick = function (event) {console.log(event.target.innerHTML);
                                            console.log(pole_odpovedi);
                                        kviz.removeChild(poradi);
                                        pole_odpovedi.push(event.target.innerHTML);
                                        i=i+1
                                        console.log(i)
                                        if (i < pocetOtazek) {

                                               nacteni_otazky(i);
                                               } else {
                                               nacteni_vyhodnoceni();
                                               }
                                      }
        odpovedi.appendChild(od_part)
    }
}

function vyhodnot_otazku(){
}

function udelejHTMLodpovedi(ele){
    let od_part = document.createElement('li');
    od_part.className ='odpoved';
    od_part.innerHTML = ele;

    }

function nacteni_vyhodnoceni(){
     for (let j = 0; j < pocetOtazek; j=j+1 ) {
        const otazka = document.createElement('h2');
        otazka.id = 'otazka';
        otazka.textContent = j + '.' +poleOtazek[j].otazka;
        const tvoje_odpoved = document.createElement('div');
        tvoje_odpoved.textContent = pole_odpovedi[j]


     const vysledek = document.createElement('div');
     vysledek.id ='vysledek';
     vysledek.textContent = 'Správně ' + i + pocetOtazek + 'otázek. Úspěšnost' + '%.'
     kviz.appendChild(otazka);
     otazka.appendChild(tvoje_odpoved)
 }

}
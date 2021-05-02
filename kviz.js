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
},
{
    foto: 'obrazky/snehurka.jpg',
    otazka: 'Kdo je na světě nejkrásnější?',
    odpoved:['já', 'Sněhurka', 'Zeman', ' BB'],
    spravne: 'Sněhurka'
}
]

const kviz = document.createElement('div');

let pocatek = document.querySelector('body');
let i = 0;
let pocetOtazek = poleOtazek.length;
let pole_odpovedi = [];
let ok = 0;


function priNacteni() {
    kviz.classList.add('kviz');
    pocatek.appendChild(kviz);
    nacteni_otazky(0);
}


function nacteni_otazky(i) {

    const poradi = document.createElement('div');
    poradi.id ='poradi';
    poradi.textContent = 'otázka ' + (i + 1) +  '/' + pocetOtazek;

    const obsah = document.createElement('div');
    obsah.classList.add('obsah');
    obsah.id ='moznosti';


    const otazka = document.createElement('h2');
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

    kviz.appendChild(moznosti);
    moznosti.appendChild(poradi);
    moznosti.appendChild(otazka);
    moznosti.appendChild(obsah);
    obsah.appendChild(fotoOtazka);
    obsah.appendChild(odpovedi);


    for (let j = 0; j < poleOtazek[i].odpoved.length; j=j+1 ) {
        let od_part = document.createElement('li');
        od_part.className ='li';
        od_part.innerHTML = poleOtazek[i].odpoved[j];
        od_part.onclick = function (event) {
                                        kviz.removeChild(moznosti);
                                        pole_odpovedi.push(event.target.innerHTML);
                                        i = i + 1;
                                        if (i < pocetOtazek) {
                                               nacteni_otazky(i);
                                               }
                                        else {
                                               nacteni_vyhodnoceni();
                                               }
                                      }
        odpovedi.appendChild(od_part);
    }
}

function udelejHTMLodpovedi(ele){
    let od_part = document.createElement('li');
    //od_part.className ='odpovedi';
    od_part.innerHTML = ele;

    }

function nacteni_vyhodnoceni(){

     const vysledek = document.createElement('div');
     vysledek.className = 'vysledek';

     const vyhodnoceni =  document.createElement('h2');
     vyhodnoceni.textContent = 'tvoje hodnocení';
     pocatek.removeChild(kviz);

     pocatek.appendChild(vysledek);
     vysledek.appendChild(vyhodnoceni);


     for (let j = 0; j < pocetOtazek; j=j+1 ) {
        const otazka = document.createElement('h3');
        otazka.id = 'vysledek_odpovedi';
        otazka.textContent = (j+1) + '. '+ poleOtazek[j].otazka;

        const tvoje_odpoved = document.createElement('div');
        tvoje_odpoved.textContent = 'Tvoje odpověď: '+ pole_odpovedi[j];
        tvoje_odpoved.className = 'vysledek_odpovedi';

        const spravna_odpoved = document.createElement('div');
        spravna_odpoved.className = 'vysledek_odpovedi';

        vysledek.appendChild(otazka);
        vysledek.appendChild(tvoje_odpoved);

        if (pole_odpovedi[j] == poleOtazek[j].spravne) {
        spravna_odpoved.textContent = 'To je SPRÁVNĚ.';
        ok = ok + 1;
        } else {
        spravna_odpoved.textContent = 'Správná odpověď: ' + poleOtazek[j].spravne;
        }
        vysledek.appendChild(spravna_odpoved);
     }

 const zaver = document.createElement('h2');
 let uspesnost = Math.round(ok/pocetOtazek*100);
 zaver.textContent = 'Správně ' + ok + ' ze ' + pocetOtazek + ' otázek. Úspěšnost ' + uspesnost + ' %.';
 vysledek.appendChild(zaver);
}
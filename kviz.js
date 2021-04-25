const poleOtazek = [{
    foto: 'obrazky/moncicak.jpg',
    otazka: 'Co je ikonická hračka z 80. let?',
    odpoved: ['Kočičák', 'Mončičák','Opičák']
},
{
    foto: 'obrazky/ovoce.jpg',
    otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
    odpoved: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností']
},
{
    foto: 'obrazky/pivo.jpg',
    otazka: 'Pro úspěšné absolvování kurzu je potřeba ...',
    odpoved:['Kočičák', 'Mončičák', 'Opičák']
}]

let pocatek = document.querySelector('h1')
let i = 1
let citac = i +'/' + poleOtazek.length
console.log(citac)

function priNacteni() {
    nacteni_otazky(0);
}


function nacteni_otazky(i) {
    const kviz = document.createElement('div')
    kviz.classList.add('kviz')

    const poradi = document.createElement('div');
    poradi.id ='poradi';
    poradi.textContent = 'otázka' + citac;

    const obsah = document.createElement('span');
    obsah.classList.add('obsah')


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



    pocatek.appendChild(kviz)
    kviz.appendChild(poradi);
    poradi.appendChild(otazka);
    otazka.appendChild(obsah);
    obsah.appendChild(fotoOtazka);
    obsah.appendChild(fotoOtazka);
    obsah.appendChild(moznosti);
    moznosti.appendChild(odpovedi);


    for (let j = 0; j < poleOtazek[i].odpoved.length; j=j+1 ) {
        let od_part = document.createElement('li');
        od_part.className ='li';
        od_part.innerHTML = poleOtazek[i].odpoved[j];
        odpovedi.appendChild(od_part)
    }
}

function udelejHTMLodpovedi(ele){
    let od_part = document.createElement('li');
    od_part.className ='odpoved';
    od_part.innerHTML = ele;

    }

function vyhodnoceni(){

}
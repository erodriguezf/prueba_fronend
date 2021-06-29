
const dayList = document.getElementById('dayList');
const nameselect = document.getElementById('nameselect');


let names = [];
let element = 0;
let tam=prompt('ingese el total de notas: ');
let tam2=0;
let i=0;
let ele1=0;
let suma=0;
let  patron=new RegExp('^[0-9]*[0-9]$');
let patron2=new RegExp('^[0-9]+([.][0-9]+)?$');
let sw=0;
let j=1;
if(patron.test(tam)){
for(i=1;i<=tam;i++){
    ele1=prompt('ingrese la nota ' + j + ':  ');
    while(sw==0){
   
    if(patron2.test(ele1)){
        sw=1;
    }else{
        ele1=prompt('no es numero real. (agrege . entre el entero y decimal) ');
        sw=0;
    }
    
    }

    if(sw==1){
        names.push(parseFloat(ele1));
        j=i+1;
        sw=0;
    }
   
}
    tam2=names.length;

}else{
    alert('ingrese numero entero ')
}


for(i in names){
   suma=suma+names[i];
}
let prom=0;
prom=suma/tam2;

alert('su promedio es ' + prom.toFixed(2));

const fragment = document.createDocumentFragment();


for(i in names){
    const Select = document.createElement('OPTION');
    Select.setAttribute('value','Notas');
    Select.textContent=names[i];
    fragment.appendChild(Select);
}
    nameselect.appendChild(fragment);




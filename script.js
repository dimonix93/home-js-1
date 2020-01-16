var term = {
    Canada: 10,
    Russia: 20,
    Ukraine: 30,
    Gemany: 25,
    Spain: 23
}

let zadanie = prompt("Какое задание выполнить?");
if(zadanie == 1){
    function goOnPage(){
        document.location.href="https://habr.com/ru/post/467049/";
    }
    document.getElementById("but1").onclick = goOnPage;
    
    function  backg(){
       // var buttonTwo=document.getElementById("but2");
       if (document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = "red";
        }
        else {document.body.style.backgroundColor = "white";
        }
    }

    document.getElementById("but2").onclick = backg;

    function flex() {    
      document.body.innerHTML = `<section class="allbut2">
      <div>
          <div id="but4" onclick="goOnPage()"> Блок 1</div>
      </div>
      <div>
          <div id="but5" onclick="backg()"> Блок 2</div>
      </div>
      <div>
          <div id="but6" onclick="flex()"> Блок 3</div>
      </div>
    </section>`
    }

    document.getElementById("but3").onclick = flex;

}
else if(zadanie == 2){
    medianTemp(term);
}
else if(zadanie == 3){
    getMaxTemp(term);
}

function medianTemp(obj){
    let sum = 0;
    let counter = 0;
    let median = 0;

    for(let key in obj){
        sum += obj[key];
        counter++;
    }

    median = sum/counter;
    
    return alert("Median temp: " + median);
}

function getMaxTemp(obj) {
    let arr = [];
    let country;//название страны ключ
    for(let key in obj){
        arr.push(obj[key]);//заносим эначения в массив
        if(Math.max.apply(Math, arr)){ //если максимальное значение в массиве
            country = key;//присваиваем переменной ключ
        }
    }
    return alert("Страна с самой высокой температурой: "+ country +" "+ Math.max.apply(Math, arr ));
}




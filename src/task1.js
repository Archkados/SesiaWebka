const web =     
{
    "Calculator": ["Работа была сделана при использовании JavaScript"],
    "Сложность" : ["Затрачено 2 банки энергетика и час разборов"],
    "Итог" : ["Получаем простой калькулятор для вычислений"],
    "github" : ["https://github.com/Archkados/calcul"]
}


const getRes = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('status: ${res.status}');
    }
    return await res.json();
}

getRes('web.json')
    .then(data=> {
        console.log(data);
        for(let key in data){
            console.log(data[key]);
            for(let i in data[key]) {
                console.log(i)
            }
        }
    }
        );

document.querySelector('.content').innerHTML += `<li class = "calc">${web.Calculator}</li>`
document.querySelector('.content').innerHTML += `<li class = "diff">${web.Сложность}</li>`
document.querySelector('.content').innerHTML += `<li class = "itog">${web.Итог}</li>`
document.querySelector('.but1').innerHTML = `<a class = "btn" href = "https://github.com/Archkados/calcul" target = "_blank">GitHub</a>`

const task2 =     
{
    "Чтоявыучил" : ["Я выучил много классных штук, которые можно использовать в HTML"],
    "Полезнобыло" : ["Это интересно и принесло много пользы, как сейчас"],
    "Че" : ["Че"],
    "github" : ["https://github.com/Archkados/calcul"]
}




document.querySelector('.content2').innerHTML += `<li class = "study">${task2.Чтоявыучил}</li>`
document.querySelector('.content2').innerHTML += `<li class = "polezno">${task2.Полезнобыло}</li>`
document.querySelector('.content2').innerHTML += `<li class = "che">${task2.Че}</li>`
document.querySelector('.but2').innerHTML = `<a class = "btn" href = "" target = "_blank">GitHub</a>`


const task3 =     
{
    "Регистрация" : ["Если бы мог материться, матерился бы"],
    "Жесть" : ["Хотелось умереть, пока её делал"],
    "Ненавижу" : ["Изучать джаву - другой уровень"],
    "github" : ["https://github.com/Archkados/calcul"]
}




document.querySelector('.content3').innerHTML += `<li class = "study">${task3.Регистрация}</li>`
document.querySelector('.content3').innerHTML += `<li class = "polezno">${task3.Жесть}</li>`
document.querySelector('.content3').innerHTML += `<li class = "che">${task3.Ненавижу}</li>`
document.querySelector('.but3').innerHTML = `<a class = "btn" href = "" target = "_blank">GitHub</a>`


const task4 =     
{
    "Рил" : ["И я реально делаю это..."],
    "Исламзаче" : ["За че перед новым годом такое давать"],
    "Почему" : ["А мне еще много делать"],
    "github" : ["https://github.com/Archkados/calcul"]
}




document.querySelector('.content4').innerHTML += `<li class = "study">${task4.Рил}</li>`
document.querySelector('.content4').innerHTML += `<li class = "polezno">${task4.Исламзаче}</li>`
document.querySelector('.content4').innerHTML += `<li class = "che">${task4.Почему}</li>`
document.querySelector('.but4').innerHTML = `<a class = "btn" href = "" target = "_blank">GitHub</a>`

const task5 =     
{
    "ночи" : ["Я уже не знаю даже, что писать"],
    "малоджс" : ["Да, я знаю что Json добавил только текст"],
    "Помогите" : ["Помогите"],
    "github" : ["https://github.com/Archkados/calcul"]
}




document.querySelector('.content5').innerHTML += `<li class = "study">${task5.ночи}</li>`
document.querySelector('.content5').innerHTML += `<li class = "polezno">${task5.малоджс}</li>`
document.querySelector('.content5').innerHTML += `<li class = "che">${task5.Помогите}</li>`
document.querySelector('.but5').innerHTML = `<a class = "btn" href = "" target = "_blank">GitHub</a>`


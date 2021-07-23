if(window.location.href.indexOf('index')>-1){
    //Slider
    $('.bxslider').bxSlider({
        auto:true
    });
    //Posts
    let dia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let date = new Date();
    let cadena = '';
    const $posts = document.getElementById('posts');
    var posts = [
        {
            title : 'Prueba de titulo 1',
            date : `Publicado el ${dia[date.getDay()]}, ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`, 
            content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci voluptates quasi accusamus officia laudantium cupiditate numquam laboriosam quidem consectetur voluptatibus, tempora molestiae dicta voluptate vero voluptatem asperiores. Architecto unde harum omnis fuga cum sapiente officiis tempore voluptates minus vero.'
        },
        {
            title : 'Prueba de titulo 2',
            date : `Publicado el ${dia[date.getDay()]}, ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`, 
            content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci voluptates quasi accusamus officia laudantium cupiditate numquam laboriosam quidem consectetur voluptatibus, tempora molestiae dicta voluptate vero voluptatem asperiores. Architecto unde harum omnis fuga cum sapiente officiis tempore voluptates minus vero.'
        },
        {
            title : 'Prueba de titulo 3',
            date : `Publicado el ${dia[date.getDay()]}, ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`, 
            content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci voluptates quasi accusamus officia laudantium cupiditate numquam laboriosam quidem consectetur voluptatibus, tempora molestiae dicta voluptate vero voluptatem asperiores. Architecto unde harum omnis fuga cum sapiente officiis tempore voluptates minus vero.'
        },
        {
            title : 'Prueba de titulo 4',
            date : `Publicado el ${dia[date.getDay()]}, ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`, 
            content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci voluptates quasi accusamus officia laudantium cupiditate numquam laboriosam quidem consectetur voluptatibus, tempora molestiae dicta voluptate vero voluptatem asperiores. Architecto unde harum omnis fuga cum sapiente officiis tempore voluptates minus vero.'
        },
        {
            title : 'Prueba de titulo 5',
            date : `Publicado el ${dia[date.getDay()]}, ${date.getDate()} de ${mes[date.getMonth()]} del ${date.getFullYear()}`, 
            content : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci voluptates quasi accusamus officia laudantium cupiditate numquam laboriosam quidem consectetur voluptatibus, tempora molestiae dicta voluptate vero voluptatem asperiores. Architecto unde harum omnis fuga cum sapiente officiis tempore voluptates minus vero.'
        }
    ]
    // console.log(posts)
    posts.forEach((element)=>{
        // console.log(element)
        cadena += 
        `<article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
                ${element.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
        </article>`;
    });
    $posts.innerHTML = cadena;
}
//Themes
$link = $('#theme');
console.log($link)
$('#to-green').click(()=>{
    $link.attr('href','css/green.css');
});
$('#to-red').click(()=>{
    $link.attr('href','css/red.css');
});
$('#to-blue').click(()=>{
    $link.attr('href','css/blue.css');
});
//Scroll hasta arriba
$('.subir').click(()=>{
    $('html','body').animate({
        scrollTop:0
    },500)
})
//Login falso
$('#login form').submit((event)=>{
    // event.preventDefault();
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var password = $("input[name='password']").val();
    localStorage.setItem('name',name);
})

var name_l = localStorage.getItem('name');
if(name_l != null && name_l!=''){
    $('#about p').text(`Bienvenido ${name_l}`);
    $('#login').hide();
    $('#about').append('<a href="#" id="cerrar">Cerrar<a/>');
}else{
    $('#login').show();
}
$('#cerrar').click(()=>{
    localStorage.removeItem('name');
    // window.location.href='index.html';
    location.reload();
});
//ACORDEON
if(window.location.href.indexOf('about')>-1){
    $('.acordeon').accordion();
}
//RELOJ
if(window.location.href.indexOf('reloj')>-1){
    const mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    setInterval(()=>{
        let fecha = new Date();
        let time = '';
        time  += `${Digit(fecha.getHours())}:${Digit(fecha.getMinutes())}:${Digit(fecha.getSeconds())}`;
        document.getElementById('clock').innerHTML = time;
    },1000);
    function Digit(val){
        if(val<10){
            return '0'+val;
        }else{
            return val;
        }
    }
}
//VALIDACION
if(window.location.href.indexOf('contact')>-1){
    $.validate({
        lang: 'es'
    });
}
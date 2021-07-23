<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>AJAX-JAVASCRIPT</title>
    <script type="text/javascript" src="jquery-3.6.0.js"></script>
    <style>
        #datos{
            margin-top:10px;
            width: 300px;
            height: 400px;
            border:2px solid crimson;
            overflow: auto;
        }
    </style>
</head>
<body>
        <button class="btn btn-success" onclick="getJson()">Traer datos</button>
        <div id="datos">

        </div>
<script>
        const $datos = document.getElementById('datos');
        let cad = '';
        function getJson(){
            const xmlHttp = new XMLHttpRequest();

            xmlHttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let array = JSON.parse(this.responseText);
                    // console.log(array)
                    array.forEach(element => {
                        cad += '<p>'+element.nombre+','+element.edad+'</p>';
                    });
                    $datos.innerHTML = cad;
                }
            }
            xmlHttp.open('GET','data.json',true);
            xmlHttp.send();
        };
        // $.ajax({
        //     type:'POST',
        //     url:'data.json',
        //     success:(response)=>{
        //         console.log(response)
        //     },
        //     error:()=>{
        //         console.log(error)
        //     },
        //     timeout:3000
        // })
    </script>
</body>
</html>
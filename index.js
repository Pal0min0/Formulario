/*var a= 5
var b =6
console.log("el esultado es:"+(a+b))
console.log('el resultado es ${a+b}')//templete string
console.log('la operacion entre a  b es: ${a!=b}')//operadores logicos
console.log(__dirname)//carpeta actual
console.log(__filename)*///nombre del archivo actual


/*console.log(process.argv)/*///procesos que hace 


/*function hola(g){
    var a = process.argv.indexOf(g)
    return process.argv[a+1]
}

console.log(hola('--nombre'))
console.log(process.argv)*/

//que me de estos datos
/*function datos(d){
    var a = process.argv.indexOf(d)
    return process.argv[a+1]
}
var nombre=datos('--nombre')
var apellido=datos('--apellido')
var edad=datos('--edad')
console.log(`Hola ${nombre} ${apellido}, tu edas es ${edad} años`)
console.log(process.argv)*/

//escribir

/*var preguntas = [
    "cual es tu nombre",//hacer preguntas
    "cual es tu edad",
    "donde estudias",
    "esta vivo"
]
var res=[]
function hacer(t){
    Process.stdout.write(preguntas[t])
}  

process.stdin.on('data',function(data){
    res.push(data)
    if(res.length<preguntas.length){
        hacer(res.length)
    }
    else{
        process.stdout.write(`tu info es ${res}`)
        process.exit()
    }
})*///hace l aprimera pergunta

/*var path=require('path')//modulo de node
console.log(__dirname)
console.log(path__basename(__dirname))
console.log(path__join(__dirname,"www"))*/

/*const os=require('os')

console.log("informacion del sistema operativo")
console.log("sistema operativo:",os.platform())
console.log("version sistema operativo:",os.release())


console.log("memoria:",os.totalmem()/1024/1024/1024)
console.log("memoria libre:",os.freemem())
console.log("arquitectura:",os.cpus())
console.log("informacion cpu:",os.endianness())
console.log("tiempo de actividad:",os.uptime()/60/60/60)


console.log("lleva prendido en minutos",os.uptime()/60)
console.log("lleva prendido en horas",os.uptime()/60/60)
console.log("lleva prendido en dias",os.uptime()/60/60/24)*/

/*var util=require('util')
var readline=require('readline')//maneja entredas como lassalidas
var rl=readline.createInterface(process.stdin,preocess.stdout)
var presona={
    nombre:'',
    documentos:[]
}

rl.setPrompt('ingrese sus datos: ')
rl.question('nombre',function(res){
    personalbar.nombrte=res
    rl.prompt()
})
rl.on('line',(inp)=>{
    presona.documentos.push(inp)
    rl.prompt()
    if(persona.documentos.lemgth>2){
        console.log(util.format("su nombre es %s y sus documentos son %j",persona.nombre,persona.documentos))
        process.exit()
    }
 })*/

/*const event=require('events')
var emmiter=new event.EventEmitter()

emmiter.on('evento',(res)=>{
    console.log('${res}')
})
emmiter.emit('evento',"holaa")*/


/*const event=require('events').EventEmitter
var util=require('util')
var persona=function(nombre){
    this.nombre=nombre
}

util.inherits(persona,event)
var person=new persona ("dairon")
person.on('da',(res)=>{
    console.log(`${person.nombre}:${res}`)
})
person.emit('da','holas')

module.exports=persona,person*/


//sincronica
/*const fs=require('fs') //sitema de archibos
var file=fs.readdirSync('./')//lee el directorio

console.log(file)//muestra el contenido del directorio


//asincronica
const fs=require('fs') //sitema de archibos
fs.readdir('./',(err,file)=>{
    if (err){
        throw err
    }
    console.log(file)//muestra el contenido del directorio
})*/



/*const fs=require(`fs`)//modulo de node.js para trabajar con el sistema de archivos
var men=`New file`
fs.writeFileSync (`./13.txt`,men)
fs.appendFileSync(`./13.txt`,`\nHello world`)//agrega contenido al archivo
var hoja=fs.readFileSync(`./13.txt`,`utf-8`)//lee el directorio actual  //sincrono

fs.readdir(`./`,(err,file)=>{
    if(err){
        throw err
    }
console.log(file)//muestra el contenido del directorio actual
  
})
console.log(hoja)*///muestra el contenido del directorio actual






/*const fs=require('fs')//modulo de node.js para trabajar con el sistema de archivos

fs.mkdir(`./oswaldo`,(err)=>{
    if(err){
        throw err
    }
    console.log('carpeta creada')
})


fs.writeFileSync(`./oswaldo/14.txt`,`hola`,(err)=>{
    if(err){
        throw err
    }
})*/







const soap = require('soap')

//URL do WSDL
const url1 = 'http://www.learnwebservices.com/services/hello?wsdl'
const url2 = 'https://www.learnwebservices.com/services/tempconverter?wsdl'

//Service Hello
//Executa o createClient e na callback executamos as operações do client
soap.createClient(url1, (err, client) => {

    const argsHello = { HelloRequest: { Name: "Leandro Ayala" } }
    
    //Executa a operação sayhello contina no wsdl
    client.SayHello(argsHello, function (err, result) {
        console.log(result.HelloResponse.Message)
    });

});

//Service TempConvert
soap.createClient(url2, (err,client) =>{

       const args = { TemperatureInCelsius : 20.0}
    client.CelsiusToFahrenheit(args, function(err,result){
        console.log('Fahrenheit Temperature: ' + result.TemperatureInFahrenheit)
    })

    
})


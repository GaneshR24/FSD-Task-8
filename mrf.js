// Solving problems using array functions on rest countries data.

        //a)  Get all the countries from Asia continent /region using Filter function

    var request1 = new XMLHttpRequest();
    request1.open("GET", "https://restcountries.com/v2/all",true);
    request1.send();
    request1.onload = function(){
        if(request1.status == 200){
            var data = JSON.parse(request1.responseText);
        
            let asiancountries = data.filter((country)=>{
            if(country.region === "Asia"){
            return country;
                }  
                  }) 
                  console.log(asiancountries);
                }
            }

        // b)  Get all the countries with a population of less than 2 lakhs using Filter function

    var request2 = new XMLHttpRequest();
    request2.open("GET", "https://restcountries.com/v2/all",true);
    request2.send();
    request2.onload = function(){
    if(request2.status == 200){
        var data = JSON.parse(request2.responseText);

          let smallcountries = data.filter((pop)=>{
            if(pop.population < 200000){
                return pop;
            }  
          }) 
          console.log(smallcountries);
        }
    }
        
    //  c) Print the following details name, capital, flag using forEach function

    let request3 = new XMLHttpRequest();
    request3.open("GET", "https://restcountries.com/v2/all",true);
    request3.send();
    request3.onload = function(){
    if(request3.status == 200){
        var data = JSON.parse(request3.responseText);
        data.forEach(value => {
            var output = "Name: " + value.name + "| Captial: " + value.capital + "| Flag: " + value.flags.svg;
            console.log(output);
        });
    }
}
    
    // d) Print the total population of countries using reduce function

    
    let request4 = new XMLHttpRequest();
    request4.open("GET", "https://restcountries.com/v2/all",true);
    request4.send();
    request4.onload = function(){
    if(request4.status == 200){
        var data = JSON.parse(request4.responseText);
        let totalpopulation = data.reduce ((a, b) => {
            let total = 0;
            if (a.population){
                total = a.population
            }
            else{
                total = a;
            }
            return total+b.population
        })
        console.log("The total population of the all countries" +" "+ totalpopulation);
    }
}
    
    
    // e) Print the country which uses US Dollars as currency

    let request5 = new XMLHttpRequest();
    request5.open("GET", "https://restcountries.com/v2/all",true)
    request5.send();
    request5.onload = () => {
    let data = JSON.parse(request5.response)
    
    let answer = data.filter((money) => (money.currencies !== undefined))
    let realanswer = answer.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    
    console.log(realanswer)
}
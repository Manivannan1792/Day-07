var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
//Print all the countries detials whose population is less than 2lakhs.
var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
console.log(res);
//Print all the countires which belongs to Asia region.
var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
console.log(res);
//Print the total population of countries using reduce filter.
var res=result.reduce((acc,ele)=>acc+ele.population,0);
console.log(res);
//Print the country which uses US Dollars as currency.
var res=result.filter((ele)=>{for(var i=0;i<ele.currencies.length;i++)
{
if(ele.currencies[i].code==="USD")
{
    return true;
}
}
});
console.log(res);
//Print the country name,capital,flag using forEach.
if(request.status>=200 && request.status<300){
    var data=JSON.parse(request.response);
        data.forEach(function(country){
        let countryName = (country.name.common)?country.name.common:"";
        let countryCapital = (country.capital)?country.capital[0]:"";
        let countryFlag = (country.flag)?country.flag:"";
        console.log("Name:" +countryName + " Capital: "+countryCapital+" Flag:" +countryFlag);
        });
    }
}
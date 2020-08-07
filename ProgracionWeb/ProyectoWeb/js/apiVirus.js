fetch("https://api.thevirustracker.com/free-api?countryTimeline=EC")
.then(response=> response.json())
.then(result=> procesar(result))
.catch(error=> alert(error))

function procesar(result){
    var pos
    var x/*
let result={"countrytimelinedata":[{"info":{
    "ourid":44,
    "title":"Ecuador",
    "code":"EC",
    "source":"https://thevirustracker.com/ecuador-coronavirus-information-ec"
 }}],

"timelineitems":[{"3/01/20":{"new_daily_cases":6,"new_daily_deaths":0,"total_cases":6,"total_recoveries":0,"total_deaths":0},
"3/02/20":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":6,"total_recoveries":0,"total_deaths":0},
"3/03/20":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":7,"total_recoveries":0,"total_deaths":0},
"3/04/20":{"new_daily_cases":3,"new_daily_deaths":0,"total_cases":10,"total_recoveries":0,"total_deaths":0},
"3/05/20":{"new_daily_cases":3,"new_daily_deaths":0,"total_cases":13,"total_recoveries":0,"total_deaths":0},
"3/06/20":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":0,"total_deaths":0},
"3/07/20":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":13,"total_recoveries":0,"total_deaths":0},
"3/08/20":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":14,"total_recoveries":0,"total_deaths":0},
"3/09/20":{"new_daily_cases":1,"new_daily_deaths":0,"total_cases":15,"total_recoveries":0,"total_deaths":0},
"3/10/20":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":15,"total_recoveries":0,"total_deaths":0},
"3/11/20":{"new_daily_cases":2,"new_daily_deaths":0,"total_cases":17,"total_recoveries":0,"total_deaths":0},
"3/12/20":{"new_daily_cases":0,"new_daily_deaths":0,"total_cases":17,"total_recoveries":0,"total_deaths":0}
,"stat":"ok"}]}
*/

let resultr=JSON.stringify(result)
    for(let i in result.timelineitems[0]){
        console.log(i)
        
        for(let j in result.timelineitems[0][i] ){
            console.log(i)
        }
    }

    document.getElementById('contCovid').innerHTML += `
            <tr style="color: white;">
            <td class="pt-3-half" contenteditable="true">${j}</td>
            <td class="pt-3-half" contenteditable="true">${j}</td>
            <td class="pt-3-half" contenteditable="true">${j}</td>
            <td class="pt-3-half" contenteditable="true">${j}</td>
            </tr>
            `;
}
fetch("https://api.thevirustracker.com/free-api?countryTimeline=EC")
.then(response=> response.json())
.then(result=> procesar(result))
.catch(error=> alert(error))

function procesar(result){


    for(let i in result.timelineitems[0]){
        console.log(i)
        var cont=0;
        document.getElementById('contCovid').innerHTML+=`
        <tr style="color: white;" id=${i}>
        <td class="pt-3-half" contenteditable="true">${i}</td>
        </tr>
        `
        for(let j in result.timelineitems[0][i] ){
            console.log(j+"="+result.timelineitems[0][i][j])
            document.getElementById(i).innerHTML+=`
            <td class="pt-3-half" contenteditable="true">${result.timelineitems[0][i][j]}</td>
            `;
        }
    }

    
}
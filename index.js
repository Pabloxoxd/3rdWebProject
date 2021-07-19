var btn = document.querySelector('input#btn').style.cursor = "pointer"


function calculate(){
    var res = document.querySelector('p#result')
    var begin = document.querySelector('input#begin')
    var end = document.querySelector('input#end')
    var pitch = document.querySelector('input#pitch')

    if(begin.value.length == 0 || end.value.length == 0 || pitch.value.length == 0){
        window.alert('ERROR: missing information')
        }
    else if(pitch.value > end.value){
        window.alert('ERROR: Pitch must be under the end value!!')
        }else{
            res.innerHTML = 'Counting:'
            var b = Number(begin.value)
            var e = Number(end.value)
            var p = Number(pitch.value)
        }
     if(b < e){
        for(var i = b; i <= e; i += p){
            res.innerHTML += ` ${i} \u{1F449} `
            }
        }else{
            if(p > b){
             window.alert(`ERROR: If you are trying to decrease the value! The pitch value must be under the begin value !!`)
                }else{
                for(var i = b; i >= e; i -= p){
                    res.innerHTML += ` ${i} \u{1F449} `
            }
        }
    }
}
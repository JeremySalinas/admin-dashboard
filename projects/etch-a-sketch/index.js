function etchsketch(numOfSquares){

  for(let j=0;j<numOfSquares;j++){
    let currentrow = document.createElement('p')
    document.getElementById('pixels').append(currentrow)

    for(let y=0;y<numOfSquares;y++){
      let div = document.createElement('div')
      currentrow.append(div)
      div.classList.add('unhover')
    }
  }

  let color
  let red=0, green=0, blue=0
  let rgbBOX = document.querySelector('.rgbBOX')
  let randomColor
  let random = false
  let j = 0

  rgbBOX.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  document.getElementById('colors').addEventListener('click', e =>{
    console.log(e.target.className)
    console.log(random)
    
    if(e.target.id === 'red')
      red = e.target.value
    if(e.target.id === 'green')
    green = e.target.value
    if(e.target.id === 'blue')
    blue = e.target.value

    if(e.target.className === 'black'){
      red = 0
      green = 0
      blue = 0
    }
    if(e.target.className ==='eraser'){
      red = 255
      green = 255
      blue = 255
    }

    if(e.target.className === 'random'){
      random = true
    }else{
      random = false
    }

    rgbBOX.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  })
  
  for(let i=0;i<(numOfSquares * numOfSquares);i++){
    document.getElementsByClassName('unhover')[i].addEventListener('mouseover', e =>{
      color = document.getElementsByClassName('unhover')[i]
      if(random){
        j++
        randomColor = `rgb(${(Math.random() * 255) +1}, ${(Math.random() * 255) +1}, ${(Math.random() * 255) +1})`
        if(j%10 === 0)
          randomColor = 'black'
        color.style.backgroundColor = randomColor
        rgbBOX.style.backgroundColor = randomColor
      }else{
        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      }
    })
  }

}

let total = prompt("What size do you want the Square? (<100)")

while(total>100){
  total = prompt("MUST BE LESS THAN 100") 
}

etchsketch(total)

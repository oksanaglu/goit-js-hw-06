// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
// }


//  function changecolor(e)
//       {
//        e.preventDefault();

//        const input = this.elements[0];
//        document.body.style.backgroundColor = input.value;
//        input.value = '';
//        input.focus();
// }
    
// function getRandomHexColor()
// {
//     const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     if(randomColor.length != 7){ // In any case, the color code is invalid
//         randomColor = getRandomHexColor();
//     }
//     return randomColor;
//     // The random color will be freshly served
// }
// document.body.style.backgroundColor = getRandomHexColor()


// function getRandomColor()
// {
//     var color = "#";

//     for (var i = 0; i < 3; i++)
//     {
//         var part = Math.round(Math.random() * 255).toString(16);

//         color += (part.length > 1) ? part : "0" + part;
//     }

//     return color;
// }
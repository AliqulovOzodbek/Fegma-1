   // canvas
  const canvas = document.getElementById('canvas');
   // canvas  2d
  const context = canvas.getContext('2d');

  // O'yin maydoni kataklar ulchami
//   const grid = 16;
//   var count = 0;
//   const score = 0;
//   const max = 0;

//   const snake = {
//     x: 160,
//     y: 160,

//     dx: grid,
//     dy: 0,

//     maxCells: 1,

//     cells [],
//   }

//   const food = {
//    x: 320,
//    y: 320,
// }

// function getRandomInt(min,max){
//     return Math.floor(Math.random() * (max - min)) + min;

// }

// function loop() {
//     requestAnimationFrame(loop)
//   if(++count < 4 ){
//     return
//   }

//   count = 0;
//   context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

//   snake.x += snake.dx;
//   snake.y += snake.dy;

//    if(snake.x < 0){
//     snake.x = canvas.clientWidth - grid;
//    } else if(snake.x >= canvas.clientWidth){
//     snake.x = 0;
//    }

//    if(snake.y < 0){
//     snake.y = canvas.clientHeight - grid;
//    } else if(snake.y >= canvas.clientHeight){
//     snake.y = 0;
//    }

//    snake.cells.unshift({ x: snake.x, y: snake.y});

//    if(snake.cells.length > maxCells){
//     snake.cells.pop();

//    }

//    //ovqat rangi
//    context.fillStyle = '#fff';
//    context.fillRect(food.x, food.y, grid - 1, grid - 1);

//    //snake rangi
//    context.fillStyle = '#E43F5A';

    snake.cells.forEach(function(cell, index){
        context
        if(cell.x === food.x && cell.y === food.y){
            snake.maxCells++;
            // achka
            score += 1;
            document.getElementById('score').innerHTML = score;
            // ovqat
            food.x = getRandomInt(0,25) * grid;
            food.y = getRandomInt(0,25) * grid;
        }
        for(vari = i = index + 1; i < snake.cells.length; i++){
            if(cell.x === snake.cells[i].x && cells.y === snake.cells[i].y){
                if(score > max) {
                    max = score;
                }
                snake.x = 160,
                snake.y = 160,
                snake.cells = [];
                snake.maxCells = 1;
                snake.dx = grid;
                snake.dy = 0;
                score = 0;
                food.x = getRandomInt(0,25) * grid;
                food.y = getRandomInt(0,25) * grid;
                document.getElementById('score').innerHTML = max;
            }
        }
    })
        
    

    requestAnimationFrame(loop)
    if (snake.x === food.x && snake.y === food.y){
        food.x = getRandomInt(0,25) * grid;
    }

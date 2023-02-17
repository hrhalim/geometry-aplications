// Event for Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
   const inputBase =  getInputValueId('input-base');
   const inputHeight =  getInputValueId('input-height');
   const TotalTriangle = (0.5 * inputBase * inputHeight).toFixed(2);  
   getResutlList('triangle-title', TotalTriangle);

});


// Event for Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputwidth =  getInputValueId('input-width');
   const inputLength =  getInputValueId('input-length');
   const totalRectangle = (inputwidth * inputLength).toFixed(2);  
   getResutlList('rectangle-title', totalRectangle);
 
 });

 // Event for Parallelogram
document.getElementById('btn-paralleogram').addEventListener('click', function(){
    const parallelogramBase =  getInputValueId('parallelogram-base');
    const parallelogramHeigh =  getInputValueId('parallelogram-heigh');
    const totalParallelogram = (parallelogramBase * parallelogramHeigh).toFixed(2);  
   getResutlList('parallelogram-title', totalParallelogram); 

 });

  // Event for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const inputDiagonalOne =  getInputValueId('diagonal-one');
    const inputDiagonalTwo =  getInputValueId('diagonal-two');
    const totalDiagonal = (0.5 * parallelogramBase * parallelogramHeigh).toFixed(2);  
   getResutlList('rhombus-title', totalDiagonal); 

 });

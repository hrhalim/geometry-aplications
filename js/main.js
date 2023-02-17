// Event for Triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){  
    const inputBase = getInputValueId('input-base');
    const inputHeight = getInputValueId('input-height');
   if(typeof inputBase !== 'number' || typeof inputHeight !== 'number' || inputBase == "" || inputHeight == ""){  
     return alert('Please Provide Valid Number');
   }else {
    const TotalTriangle = (0.5 * inputBase * inputHeight).toFixed(2);  
    getResutlList('triangle-title', TotalTriangle);
   }
   

});


// Event for Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const inputwidth = getInputValueId('input-width');
   const inputLength = getInputValueId('input-length');
   const totalRectangle = (inputwidth * inputLength).toFixed(2);  
   getResutlList('rectangle-title', totalRectangle);
 
 });

//  Event for Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramBase = getInputValueId('parallelogram-base');
    const parallelogramHeigh = getInputValueId('parallelogram-height');
    const totalParallelogram = (parallelogramBase * parallelogramHeigh).toFixed(2);  
   getResutlList('parallelogram-title', totalParallelogram); 

 });

// Event for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const inputDiagonalOne =  getInputValueId('input-diagonal-one');
    const inputDiagonalTwo =  getInputValueId('input-diagonal-two');
    const totalDiagonal = (0.5 * inputDiagonalOne * inputDiagonalTwo).toFixed(2);  
   getResutlList('rhombus-title', totalDiagonal); 

 });

// Event for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const inputPentagonOne =  getInputValueId('input-pentagon-one');
    const inputPentagonTwo =  getInputValueId('input-pentagon-two');
    const totalPentagon = (0.5 * inputPentagonOne * inputPentagonTwo).toFixed(2);  
   getResutlList('pentagon-title', totalPentagon); 

 });

// Event for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const inputEllipseOne =  getInputValueId('input-ellipse-one');
    const inputEllipseTwo =  getInputValueId('input-ellipse-two');
    const totalEllipse = (3.14159265 * inputEllipseOne * inputEllipseTwo).toFixed(2);  
   getResutlList('ellipse-title', totalEllipse); 

 });


 // Event For Blog Button
 document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "blog.html";
 });
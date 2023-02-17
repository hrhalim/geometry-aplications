
//Get Input field Id and value
function getInputValueId(inputId){
    const getInputId = document.getElementById(inputId).value;  
    const getInputIdString = parseFloat(getInputId);
    return getInputIdString;
}

//Get Result List 
function getResutlList(elementId, totalCalculation){    
    const getTitle = document.getElementById(elementId).innerText;
    const resultList = document.getElementById('result-list');
    const createList = document.createElement('li');
    createList.innerHTML = `
        <span>1.</span>
        <span>${getTitle}</span>
        <span>${totalCalculation}cm<sup>2</sup></span>
        <span class="btn-convert">Covert to m<sup>2</sup></span>
    `;  
    resultList.appendChild(createList);

     
}
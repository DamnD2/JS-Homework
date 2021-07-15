// https://www.codewars.com/kata/5235c913397cbf2508000048
// 3 kyu Calculator 

function calcResult(string) {
  const expressionArray = string.toString().split(' ');

  if (expressionArray.length === 1) {
    return parseFloat(string, 10);
  }

  if (expressionArray.indexOf('(') !== -1) {
    const startIndex = expressionArray.indexOf('(');
    const endIndex = expressionArray.indexOf(')');
    const result = calcResult(expressionArray.slice(startIndex + 1, endIndex).join(' '));
    expressionArray.splice(startIndex, (endIndex - startIndex + 1), result);
    return calcResult(expressionArray.join(' '));
  }

  if (expressionArray.indexOf('*') !== -1 || expressionArray.indexOf('/') !== -1) {
    const divisionIndex = expressionArray.indexOf('/');
    const multipluIndex = expressionArray.indexOf('*');

    let index;
    let operator;
    if(divisionIndex !== -1 && multipluIndex !== -1){
      index = (divisionIndex < multipluIndex) ? divisionIndex : multipluIndex;
      operator = (divisionIndex < multipluIndex) ? 'division' : 'multiply';
    } else{
      index = (divisionIndex !== -1) ? divisionIndex : multipluIndex;
      operator = (divisionIndex !== -1) ? 'division' : 'multiply';
    }

    let result;
    if(operator === 'multiply'){
      result = expressionArray[index - 1] * expressionArray[index + 1];
    }
    if(operator === 'division'){
      result = parseFloat(expressionArray[index - 1], 10) / parseFloat(expressionArray[index + 1], 10);
    }
    expressionArray.splice((index - 1), 3, result);
    console.log(expressionArray);
    return calcResult(expressionArray.join(' '));
  }

  if (expressionArray.indexOf('+') !== -1 || expressionArray.indexOf('-') !== -1) {
    const plusIndex = expressionArray.indexOf('+');
    const minusIndex = expressionArray.indexOf('-');

    let index;
    let operator;
    if(plusIndex !== -1 && minusIndex !== -1){
      index = (plusIndex < minusIndex) ? plusIndex : minusIndex;
      operator = (plusIndex < minusIndex) ? 'plus' : 'minus';
    } else{
      index = (plusIndex !== -1) ? plusIndex : minusIndex;
      operator = (plusIndex !== -1) ? 'plus' : 'minus';
    }

    let result;
    if(operator === 'minus'){
      result = expressionArray[index - 1] - expressionArray[index + 1];
    }
    if(operator === 'plus'){
      result = parseFloat(expressionArray[index - 1], 10) + parseFloat(expressionArray[index + 1], 10);
    }
    expressionArray.splice((index - 1), 3, result);
    console.log(expressionArray);
    return calcResult(expressionArray.join(' '));
  }

  return false;
}






// https://www.codewars.com/kata/51c8e37cee245da6b40000bd
// 4 kyu Strip Comments

function solution(input, markers) {
  const inputs = input.split('\n');
  inputs.forEach((string, index) => {
    for (const marker of markers) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === marker) inputs[index] = string.substring(0, i);
      }
    }
  });
  inputs.forEach((string, index) => {
    inputs[index] = string.trim();
  });

  return inputs.join('\n');
}





// https://www.codewars.com/kata/515bb423de843ea99400000a
// 5 kyu PaginationHelper

function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  let count = 0;
  if (pageIndex >= this.pageCount()) return -1;
  for (let i = this.itemsPerPage * (pageIndex); i < this.itemsPerPage * (pageIndex + 1); i++) {
    if (this.collection[i]) count++;
  }
  return count;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return (itemIndex > (this.itemCount() - 1) || itemIndex < 0) ? -1 : (Math.ceil((itemIndex + 1) / this.itemsPerPage)) - 1;
};
function correct(something) {
  return(something);
}

function correctObject(something) {
  return ({
    something: something
  });
}

const correctArrow = (something) => {
  return (something);
}

const correctOneLineArrowObject = (something) => { return ({ something: something }); }

const correctFunction = (something) => {
  return (function() {
    return (something);
  })
}

function test() {
  return;
}

/**
 * INCORRECT CODE BELOW
 */

function incorrect(something){
  return something;
}

function incorrectObject(something){
  return {
    something: something
  };
}

const incorrectArrowObject = (something) => {
  return {
    something: something
  };
}

const incorrectFunction = (something) => {
  return function() {
    return something;
  }
}

const incorrectOneLineArrowObject = (something) => { return { something: something }; }

/** 
 * DO NOT CHANGE
 */

const doNotChange = (something) => something;
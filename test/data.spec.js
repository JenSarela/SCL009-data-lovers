global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPoke = [{

    name: "Caterpie",
    num: "010",
    type: ["Bug"]
  },
  {
    name: "Dragonite",
    num: "149",
    type: ["Dragon"],
    weaknesses: ["Ice"]
  },
  {
    name: "Squirtle",
    num: "007",
    type: ["Water"]
  }

]

describe('pokedexType', () => {


  it('debería ser una función', () => {
    assert.equal(typeof pokedexType, 'function');
  });


  it('debería retornar elemento "Caterpie" para filtrar por tipo "Bug"', () => {
    assert.deepEqual(window.pokedexType(dataPoke, "Bug"), [{
      name: "Caterpie",
      num: "010",
      type: ["Bug"]
    }])
  });
})

describe('pokedexWeaknesses', () => {


it('debería ser una función', () => {
  assert.equal(typeof pokedexWeaknesses, 'function');
});


  it('debería retornar elemento "Dragonite" para filtrar por debilidad Ice"', ()  => {
    assert.deepEqual(window.pokedexWeaknesses(dataPoke,"Ice"), [{
      name: "Dragonite",
      num: "149",
      type: ["Dragon"],
      weaknesses: ["Ice"]

    }])
  });
})



describe('sortCode', () => {


  it('debería ser una función', () => {
    assert.equal(typeof sortCode, 'function');
  });


  it('debería retornar el elemento Caterpie ordenando de la A a la Z', () => {
    assert.deepEqual(window.sortCode(dataPoke, "AZ"), [{
      name: "Caterpie",
      num: "010",
      type: ["Bug"]
    }, ])
  });
})

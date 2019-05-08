/* Manejo de data */
//Aqui Filtraremos, ordenaremos y calcularemos

// CALCULO DE POKEMONES POR TIPO
const counterForType = (codePoke, condition, counterBy) => {
  let resultCounter = codePoke.reduce((contador, codePoke) => {
    if (codePoke[counterBy].includes(condition)) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0)
  return resultCounter;
};
window.counterForType = counterForType;

// FILTRADO POR TIPO
const pokedexType = (codePoke, condition) => {
  const pokeByFilter = codePoke.filter(element => {

    return element.type.includes(condition);

  });

  return pokeByFilter;

}
window.pokedexType = pokedexType;

// FILTRADO POR DEBILIDAD
const pokedexWeaknesses = (codePoke, conditionTwo) => {
  const pokeByWeakness = codePoke.filter(element => {

    return element.weaknesses.includes(conditionTwo);

  });
  return pokeByWeakness;
}
window.pokedexWeaknesses = pokedexWeaknesses;

//funcion ordenar : sort code => codepoke es la data; sortcodeby: es lo que quiero ordenar; sortcodeorder: es como lo voy a ordenar
const sortCode = (codePoke, sortCodeBy, sortCodeOrder) => {
  const comparar = codePoke.sort((a,b)=>{
    return a[sortCodeBy].localeCompare(b[sortCodeBy])
  })
if (sortCodeOrder === "az"){
  return comparar;
}
  if (sortCodeOrder=== "za"){
    return comparar.reverse();
  }
}

window.sortCode = sortCode;

// HACIENDO LOS CALCULOS
/*Para realizar el calculo ocuparemos las mismas variables de los filtros. por lo tanto durante el hack edition podriamos probar como hacer que todo llegue a una sola variables para despues solo llamarlas y no declararlas tantas veces */

/*const pokecounter = (data, condition, counterBy) => {
  let result = data.reduce((contador, data) => {
    if (data[counterBy].includes(condition)) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0)
  return result;
};
window.counter = counter;*/

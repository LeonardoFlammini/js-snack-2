const arrayStringhe = ['pippo', 'PLUTO', 'Paperino'];

const newArray = arrayStringhe.map ((stringa) => {
  return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase() ;
});

console.log(newArray);

//  title = "SNACK 1";
// console.log(title);
// const name = ['pippo', 'PLUTO', 'Paperino'];

// const newname = name.map(remake => {

//  const mayus = remake.charAt(0).toUpperCase();
//  const minus = remake.slice(1).toLowerCase();
//  return mayus + minus;
// });

// console.log(newname);
var personName = ['Ringku','Sheuly','Ali','Afnan',1000];
personName.push("Arhaam");
personName.pop(1000);
personName.shift();
console.log(personName[4]);

for(var i = 0; i < personName.length; i++){
  console.log(personName[i]);
}

console.log(personName.indexOf('sheuly'))

personName.splice(1,2)
console.log(personName);
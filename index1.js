
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

alert("111111");
let woomen =[];
let tmp;
let i=0;

while ( i<5) {
  tmp=prompt("введіть жіноче імя");
  woomen.push(tmp);
  i++;
}

let woomen__number=randomInt(0, 4);
console.log(woomen__number);
alert("ваша жінка "+ woomen[woomen__number]);

confirm("ви любите сир?")?alert("У вас буде "+randomInt(0, 4)+" дітей"):alert("У вас буде "+randomInt(0, 2)+" дітей");

confirm("Чи любите ви життя?")? alert("США? Та Нє - Китай саме для вас(Удачі) )"):alert("Ну Росія так Росія");

prompt("Ваше улюблене число?");
let work=["шахтером","Програмістом","безробітнім","поліцейським"];
alert("і ви станете "+ work[randomInt(0, 3)]);

export default function getRandomNumber(prev_count) {
  let min = 0;
  let max = 15;
  let temp = Math.floor(Math.random() * (max - min + 1)) + min;
  if (temp === prev_count) {
    return temp % 2;
    //temp = getRandomNumber(prev_count)
  } else return temp;
}

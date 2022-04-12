//--- 1.
const ex1 = "I love my cats";
const modify_ex1 = ex1.replace("cats", "dogs");

console.log(ex1); // I love my cats. 원본은 변경되지 않는다.
console.log(modify_ex1); // I love my dogs
console.log();

//--- 2. 대소문자 구분 없이 변경
const ex2 = "Chicken is crispy, and chicken is delicious.";

// ignore, 첫 번째 요소만 변경
console.log(ex2.replace("chicken", "pork cutlet")); // Chicken is crispy, and pork cutlet is delicious.
console.log(ex2.replace(/chicken/i, "pork cutlet")); // pork cutlet is crispy, and chicken is delicious.

// global & ignore, 모든 요소 변경
console.log(ex2.replace(/chicken/gi, "pork cutlet")); // pork cutlet is crispy, and pork cutlet is delicious.

//--- 3. 정규 표현식 사용
const ex3 = "제 학번은 201812000입니다.";
console.log(ex3.replace(/\d{4}/, "2022")); // 제 학번은 202212000입니다.

const ex4 = "오늘은 ABC를 배워볼거예요.";
console.log(ex4.replace(/[a-zA-Z]/g, "DEF")); // 오늘은 DEFDEFDEF를 배워볼거예요.

const ex5 =
  "정규 표현식 강의 오픈 : http://github.com/mihyunLee 010-1234-5678 mihy621@aaa.com";
console.log(ex5.replace(/\@[\w]+.com/g, "@bbb.co.kr")); // 정규 표현식 강의 오픈 : http://github.com/mihyunLee 010-1234-5678 mihy621@bbb.co.kr

// 배열 항목은 이미지 이름과 동일하게 작성한다.
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//img 태그 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//HTML에 요소 추가
document.body.appendChild(bgImage);

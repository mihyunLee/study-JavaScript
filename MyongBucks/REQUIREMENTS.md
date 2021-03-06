## step 1 요구사항 구현을 위한 전략 - 돔 조작과 이벤트 핸들링으로 메뉴 관리하기

### TODO 메뉴 추가

- [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
- [x] 메뉴의 이름을 입력 받고 확인 버튼 클릭으로 추가한다.
- [x] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
- [x] 총 메뉴 개수를 count하여 상단에 보여준다.
- [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
- [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

### TODO 메뉴 수정

- [x] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴를 수정하는 모달창이 뜬다.
- [x] 모달창에서 신규 메뉴명을 입력 받고, 확인 버튼을 누르면 메뉴가 수정된다.

### TODO 메뉴 삭제

- [x] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌(confirm) 모달창이 뜬다.
- [x] 확인 버튼을 클릭하면 메뉴가 삭제된다.
- [x] 총 메뉴 개수를 count하여 상단에 보여준다.

## step 2 요구사항 - 상태 관리로 메뉴 관리하기

### TODO localStorage Read & Write

- [x] localStorage에 데이터를 저장한다.
  - [x] 메뉴를 추가할 때
  - [x] 메뉴를 수정할 때
  - [x] 메뉴를 삭제할 때
- [x] localStorage에 있는 데이터를 읽어온다.

### TODO 카테고리별 메뉴판 관리

- [x] 에스프레소 메뉴판 관리
- [x] 프라푸치노 메뉴판 관리
- [x] 블렌디드 메뉴판 관리
- [x] 티바나 메뉴판 관리
- [x] 디저트 메뉴판 관리

### TODO 페이지 접근시 최초 데이터 Read & Rendering

- [x] 페이지가 처음 로딩될때 localStorage에 에스프레소 메뉴를 읽어온다.
- [x] 에스프레소 메뉴판을 페이지에 그려준다.

### TODO 품절 상태 관리

- [x] 품절 버튼 ui를 추가한다.
- [x] 품절 상태를 보여줄 수 있게 sold-out class를 추가하여 상태를 변경한다.
- [x] 품절 버튼을 클릭하면 localStorage에 상태값이 저장된다.
- [x] 클릭 이벤트에서 가장 가까운 li 태그의 class 속성 값에 sold-out을 추가한다.

## step3 요구사항 - 서버와의 통신을 통해 메뉴 관리하기

### TODO 서버 요청

- [x] 웹 서버를 띄운다.
- [x] 서버에 새로운 메뉴명이 추가될 수 있도록 요청한다.
- [x] 서버에 카테고리별 메뉴리스트를 요청한다.
- [x] 서버에 메뉴가 수정될 수 있도록 요청한다.
- [x] 서버에 메뉴의 품절 상태가 토글될 수 있도록 요청한다.
- [x] 서버에 메뉴가 삭제될 수 있도록 요청한다.

### TODO 리팩터링

- [x]웹 서버를 띄워서 실제 서버에 데이터의 변경을 저장하는 형태로 리팩터링한다.
  - [x] localStorage에 저장하는 로직은 지운다.
  - [x] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.

### TODO 사용자 경험

- [x] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 alert으로 예외처리를 진행한다.
- [x] 중복되는 메뉴는 추가할 수 없다.

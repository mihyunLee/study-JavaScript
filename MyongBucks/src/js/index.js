// DOM element
const $ = (selector) => document.querySelector(selector);

function App() {
  // form 태그가 자동으로 전송되는걸 막기
  $("#espresso-menu-form").addEventListener("submit", (e) =>
    e.preventDefault()
  );

  const addMenuName = () => {
    const espressoMenuName = $("#espresso-menu-name").value;
    if (espressoMenuName !== "") {
      const menuItemTemplate = (espressoMenuName) => {
        return `<li class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
          >
            삭제
          </button>
        </li>`;
      };
      // 리스트에 메뉴 추가하기
      $("#espresso-menu-list").insertAdjacentHTML(
        "beforeend",
        menuItemTemplate(espressoMenuName)
      );
      // 총 개수 업데이트 하기
      const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
      $(".menu-count").innerText = `총 ${menuCount}개`;
      // 메뉴 입력 후 빈 값으로 초기화
      $("#espresso-menu-name").value = "";
    } else {
      // input이 빈 값일 경우 alert 띄워주기
      alert("값을 입력해주세요.");
    }
  };

  // 메뉴 추가 (button)
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  // 메뉴 추가 (enter)
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addMenuName();
    }
  });
}

App();

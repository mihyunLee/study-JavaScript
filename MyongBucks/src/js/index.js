// DOM element
const $ = (selector) => document.querySelector(selector);

// localStorage 객체
const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem("menu");
  },
};

function App() {
  // 메뉴 상태
  // 초기화 해두면 해당 데이터가 어떤 형태로 관리되는지 한 눈에 볼 수 있다.
  this.menu = [];

  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  };

  const addMenuName = () => {
    const espressoMenuName = $("#espresso-menu-name").value;

    this.menu.push({ name: espressoMenuName });
    store.setLocalStorage(this.menu);

    const template = this.menu
      .map((item, index) => {
        return `<li data-menu-id="${index}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${item.name}</span>
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
      })
      .join("");
    if (espressoMenuName !== "") {
      $("#espresso-menu-list").innerHTML = template;
      updateMenuCount();
      // 메뉴 입력 후 빈 값으로 초기화
      $("#espresso-menu-name").value = "";
    } else {
      // input이 빈 값일 경우 alert 띄워주기
      alert("값을 입력해주세요.");
    }
  };

  const updateMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerText);
    this.menu[menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    $menuName.innerText = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu.splice(menuId, 1);
      store.setLocalStorage(this.menu);
      e.target.closest("li").remove();
      updateMenuCount();
    }
  };

  $("#espresso-menu-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-edit-button")) {
      // 수정 버튼을 눌렀을 때
      updateMenuName(e);
    }
    if (e.target.classList.contains("menu-remove-button")) {
      // 삭제 버튼을 눌렀을 때
      removeMenuName(e);
    }
  });

  // form 태그가 자동으로 전송되는걸 막기
  $("#espresso-menu-form").addEventListener("submit", (e) =>
    e.preventDefault()
  );

  // 메뉴 추가 (button)
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  // 메뉴 추가 (enter)
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addMenuName();
    }
  });
}

const app = new App();

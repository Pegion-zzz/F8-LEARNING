document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các tab và nội dung tab
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // Duyệt qua từng tab và thêm sự kiện click
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // 1. Lấy id của tab được click (từ thuộc tính data-tab)
      const tabId = this.getAttribute("data-tab");

      // 2. Xóa class 'active' khỏi TẤT CẢ các tab
      tabs.forEach((t) => t.classList.remove("active"));

      // 3. Xóa class 'active' khỏi TẤT CẢ các tab-content
      tabContents.forEach((content) => content.classList.remove("active"));

      // 4. Thêm class 'active' vào tab VỪA ĐƯỢC CLICK
      this.classList.add("active");

      // 5. Thêm class 'active' vào tab-content TƯƠNG ỨNG với tabId
      const targetContent = document.querySelector(
        `.tab-content[data-tab="${tabId}"]`,
      );
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});

let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll("#page-content li");
  const currentPageElement = pages[currentPage];
  const nextPageIndex = (currentPage + 1) % pages.length;
  const nextPageElement = pages[nextPageIndex];

  currentPageElement.classList.add("turn");

  setTimeout(() => {
    currentPageElement.style.display = "none";
    currentPageElement.classList.remove("turn");
    nextPageElement.style.display = "block";
    currentPage = nextPageIndex;
  }, 400);
}

document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll("#page-content li");
  pages.forEach((page) => (page.style.display = "none"));
  pages[0].style.display = "block";
});

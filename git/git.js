// list click
const listTooltip = document.querySelector("#listTooltip");
const HOVER_CLASS = "listTooltipChecked";

function clickList() {
  document.getElementById("dropdown").classList.toggle("show");


}
/* 
내가 하고 싶은 것
목록 리스트가 보여졌을 때 목록보기의 툴팁이 보이지 않고 싶다. 

*/
window.onclick = (event) => {
  listTooltip.addEventListener("hover", handleHover);
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    const currentClass = listTooltip.className;
    if (currentClass !== HOVER_CLASS) {
      listTooltip.className = HOVER_CLASS;
    } else {
      listTooltip.className = "";
    }
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function handleHover() {
  const currentClass = listTooltip.className;
  if (currentClass !== HOVER_CLASS) {
    listTooltip.className = HOVER_CLASS;
  } else {
    listTooltip.className = "";
  }

}


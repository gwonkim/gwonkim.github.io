function clickList() {
  document.getElementById("dropdown").classList.toggle("show");
  // document.getElementById("listTooltip").classList.toggle("listTooltipChecked");
}

/* 
내가 하고 싶은 것
목록 리스트가 보여졌을 때 목록보기의 툴팁이 보이지 않고 싶다. 
*/

// list click
// const titleTooltip = document.querySelector("#listTooltip");                                                                                                                                                                                                          = "listTooltipChecked";

window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let titleTooltip = document.classListgetElementById("listTitle");
    let openDropdown = dropdowns[i];
    for (let i = 0; i < dropdowns.length; i++) {
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


   // const currentClass = listTooltip.className;
/*     if (currentClass !== HOVER_CLASS) {
      titleTooltip.className = HOVER_CLASS;
    } else {
      titleTooltip.className = "";
    }
   */
/*   
    if(titleTooltip.style.visibility === 'hidden')  {
      titleTooltip.style.visibility = 'visible';
    }else {
      titleTooltip.style.visibility = 'hidden';
    } */
/* 
    if(titleTooltip.style.display === 'none') {
      titleTooltip.style.display = 'block';
    }else {
      titleTooltip.style.display = 'none';
    }
     */


function handleHover() {
  const currentClass = listTooltip.className;
  if (currentClass !== HOVER_CLASS) {
    listTooltip.className = HOVER_CLASS;
  } else {
    listTooltip.className = "";
  }

}


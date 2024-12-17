let nav_link = document.querySelectorAll("nav > ul > li");
let sections = document.querySelectorAll("section");

nav_link.forEach((link, index) => {
    link.addEventListener("click", function(){
        link.classList.toggle("active");
        resetToDefault(nav_link, index);
        sections[index].classList.toggle("active");
        resetToDefault(sections, index);
    });
});

function resetToDefault(array, index){
    for(var i=0; i<array.length; i++){
        if (i == index) {
            continue;
        }
        array[i].classList.remove('active');
    }
};

console.log(nav_link);


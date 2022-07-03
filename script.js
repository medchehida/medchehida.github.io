const toggle = document.getElementById('switch');
const body = document.body;

const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
}

dark = 1;
c = 0;
toggle.onclick = () => {
    if (dark == 1) {
        body.classList.replace('main-dark', 'main-light');
        //document.getElementById('scroll').style.cssText = 'filter: invert(100%);';

        localStorage.setItem('theme', 'main-light');
        dark = 0;
    } else {
        body.classList.replace('main-light', 'main-dark');
        localStorage.setItem('theme', 'main-dark');
        // document.getElementById('scroll').style.cssText = 'filter: invert(0%);';

        dark = 1;
    }
    c = c + 1
    if (c > 3) {
        c = 0;
        alert("Don't fuck up my portfolio please haha 🤣")
    }
};


window.addEventListener("load", function() {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});
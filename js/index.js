var tabs = document.getElementById('tabs').getElementsByTagName('li')
var lists = document.getElementById('lists').getElementsByTagName('ul')
console.log(tabs)
console.log(lists)

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showList;
}


function showList() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = 'active'
            lists[i].className = 'clearFix active'
        } else {
            tabs[i].className = ''
            lists[i].className = 'clearFix'
        }

    }
}
var seckillNav = document.getElementById('seckillNav')
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop
    if (scrollTop >= 260) {
        seckillNav.className = "seckill-nav seckill-navfixed"
    } else {
        seckillNav.className = "seckill-nav"
    }
    console.log(scrollTop)
}
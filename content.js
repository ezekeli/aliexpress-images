var getOrCreateLink = () => {
    var a = document.querySelector('#dwnld');
    if(a == null) {
        var element = document.querySelector('#j-detail-gallery-main img');
        a = document.createElement('a');
        a.innerText = "Download";
        a.id = "dwnld";
        a.style.zIndex = "2";
        a.setAttribute("download", "");
        element.parentNode.insertBefore(a, element);
        return a;
    } else return a;
}

var a = getOrCreateLink()
a.href = document.querySelector('#j-detail-gallery-main img').src

var callback = (allmutations) => {
    allmutations.map((mr) =>{
        var a = getOrCreateLink()
        a.href = mr.target.src;
    });
},
element = document.querySelector('#j-detail-gallery-main img'),
mo = new MutationObserver(callback),
options = {
    'attributes': true,
    'attributeFilter': ['src']
}

mo.observe(element, options);


(function () {

    if (window.innerWidth < 575) {
        var divItems = document.querySelectorAll('.services-content-item');
        divItems.forEach(function(item) {

            console.log("")

            var href = item.getAttribute('data-href');
            var aElement = document.createElement('a');
            aElement.setAttribute('href', href);
            aElement.innerHTML = item.innerHTML;
            aElement.classList.add('services-content-item')
            item.parentNode.replaceChild(aElement, item);
        });
    }

})()

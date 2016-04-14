var xhr = new XMLHttpRequest();
xhr.open('GET', encodeURI('sidebar.html'));
xhr.onload = function() {
    if (xhr.status === 200) {
        //alert('User\'s name is ' + xhr.responseText);
        document.getElementById('sidebar-wrapper').innerHTML = xhr.responseText;
    }
    else {
        alert('There is no sidebar.html to load. Error: ' + xhr.status);
    }
};
xhr.send();


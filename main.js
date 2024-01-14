function checkAll() {
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i=0, n=allCheckboxes.length; i<n; i++) {
        allCheckboxes[i].checked = true;
    }
}

function confirmClicked() {
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i=0, n=allCheckboxes.length; i<n; i++) {
        allCheckboxes[i].disabled = true;
    }
    document.getElementById('confirm').disabled = true;
    if (Math.random() < 0.33) {
        const randomNumber = Math.random();
        if (randomNumber < 0.4) window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        else if (randomNumber < 0.65) window.location.replace('https://www.youtube.com/watch?v=nq3GI-fK8fs');
        else if (randomNumber < 0.9) window.location.replace('https://www.youtube.com/watch?v=gkTb9GP9lVI');
        else if (randomNumber < 0.945) window.location.replace('https://www.youtube.com/watch?v=L_jWHffIx5E');
        else if (randomNumber < 0.99) window.location.replace('https://www.youtube.com/watch?v=uE-1RPDqJAY');
        else if (randomNumber < 1) window.location.replace('https://www.youtube.com/watch?v=gmwbHdJLadE');
    }
    else alert("Thank you for confirming your cookie choices. You may now leave this page.");
}

function checkboxClicked(clickedId) {
    if (document.getElementById(clickedId).checked === true) return;
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i=0, n=allCheckboxes.length; i<n; i++) {
        var currentBox = allCheckboxes[i];
        if (currentBox.id !== clickedId && currentBox.checked === false) {
            if (currentBox.id === 'advertisement' && Math.random() < 0.5) currentBox.checked = true;
            else if (Math.random() < 0.25) currentBox.checked = true;
        }
    }
}

(function (d, s, id) {
    var js, pjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//www.tickcounter.com/static/js/loader.js";
    pjs.parentNode.insertBefore(js, pjs);
}(document, "script", "tickcounter-sdk"));

function switchTheme(theme) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const countdownElement = document.getElementById('countdown'); // Assuming your countdown has this ID

    if (!themeStylesheet) {
        console.error("Theme stylesheet element not found!");
        return;
    }

    switch (theme) {
        case 'blue':
            themeStylesheet.setAttribute('href', 'style.css');
            break;
        case 'dark':
            themeStylesheet.setAttribute('href', 'dark-theme.css');
            break;
        case 'pink':
            themeStylesheet.setAttribute('href', 'pink-theme.css');
            break;
        case 'gold':
            themeStylesheet.setAttribute('href', 'golden-theme.css');
            break;
        case 'green':
            themeStylesheet.setAttribute('href', 'green-theme.css');
            break;
        default:
            themeStylesheet.setAttribute('href', 'style.css');
    }

    // Save the selected theme to localStorage
    localStorage.setItem('theme', theme);
}

// Load the saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'blue';
    switchTheme(savedTheme);
};

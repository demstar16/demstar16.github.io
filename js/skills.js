// list of different icons and their paths
let icons = [
    // languages
    ['Python', '../images/python.png'],
    ['Java', '../images/java.png'],
    ['C', '../images/c.png'],
    ['Rust', '../images/rust.png'],
    ['Lua', '../images/lua.svg'],
    ['HTML', '../images/html.png'],
    ['CSS', '../images/css.png'],
    ['TypeScript', '../images/ts.png'],
    ['JavaScript', '../images/js.svg'],
    ['Git', '../images/git.png'],
    ['SQL', '../images/sql.png'],
    ['Digital Ocean', '../images/digitalocean.png'],
    ['Arduino', '../images/arduino.png'],
    ['Assembly', '../images/assembly.png'],
    // frameworks
    ['Django', '../images/django.png'],
    ['Flask', '../images/flask.png'],
    ['ElectronJS', '../images/electronjs.png'],
    ['LOVE2D', '../images/love2d.png'],
    ['NodeJS', '../images/nodejs.png'],
    ['Docker', '../images/docker.png'],
    ['GitHub Desktop', '../images/githubdesktop.png'],
    // operating systems
    ['Windows', '../images/windows.png'],
    ['MacOS', '../images/mac.png'],
    ['Linux', '../images/linux.png'],
]

const iconContainer = document.getElementById('iconContainer');

// add the icons 3 times to create a long moving banner.
// I'm sure there is a more efficient way of doing this.
//
icons.forEach(function(item) {
    let image = document.createElement('img');
    image.src = item[1]
    image.alt = item[0]

    iconContainer.appendChild(image)
});
icons.forEach(function(item) {
    let image = document.createElement('img');
    image.src = item[1]
    image.alt = item[0]

    iconContainer.appendChild(image)
});
icons.forEach(function(item) {
    let image = document.createElement('img');
    image.src = item[1]
    image.alt = item[0]

    iconContainer.appendChild(image)
});


console.log(iconContainer)

const iconContainerWidth = iconContainer.scrollWidth;
console.log(iconContainerWidth)
window.addEventListener('load', () => {
    self.setInterval(() => {
        iconContainer.scrollTo(iconContainer.scrollLeft + 1, 0);
    }, 15);
});

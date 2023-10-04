let experienceData = [
    [
        ['../images/uwa.png'], // image path
        ['Bachelor of Science'], // title
        ['2020-2023 (3.5 years)'], // date
        ['I completed a Bachelor of Science majoring in Computer Science and Software Engineering. I learned multiple languages, frameworks, skills and best practices throughout this course and I got a ended up getting a WAM of 70 (a distinction), which I was happy with.'], // description
        ['<b>Tech used:</b> Python, C, Java, Flask, OpenAI, Assembly, Arduino, HTML, CSS, JavaScript, OpenGL, Git, MySQL, Docker']
    ],
    [
        ['../images/gene-s.png'],
        ['Software Intern'], 
        ['2021-2022 (3 months)'], 
        ['As an intern I was responsible for converting functions written in Python to be written in Rust, I was also tasked with researching certain modules and packages that would help the software be more efficient. In this role I learnt what it was like working for a start-up company remotely, which meant regular meetings and good communication.'],
        ['<b>Tech used:</b> Python, Rust']
    ],
    [
        ['../images/cewa-no-slogan.png'],
        ['Software Developer'], 
        ['2021-present'], 
        ['In this family run business, along with taking care of the stock, I have created a Django web app for the business and am currently creating desktop calculating tool.'],
        ['<b>Tech used:</b> Django, Python, HTML, CSS, JavaScript, ElectronJS']
    ],

]

let experience = document.getElementById('experience');

experienceData.forEach(function(item) {
    let box = document.createElement('div');
    box.className = 'experience-box';

    let image = document.createElement('img');
    image.src = item[0];

    let header = document.createElement('h1');
    header.innerText = item[1];

    let date = document.createElement('h3');
    date.innerText = item[2];

    let text = document.createElement('p');
    text.innerText = item[3];

    let tech = document.createElement('p');
    tech.className = 'experience-tech';
    tech.innerHTML = item[4];

    box.appendChild(image);
    box.appendChild(header);
    box.appendChild(date);
    box.appendChild(text);
    box.appendChild(tech)

    experience.appendChild(box);

})
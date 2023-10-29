document.addEventListener("DOMContentLoaded", function() {

    let projectData = [
        [
            'Cleaning Equipment WA Website',
            '../images/cewa-website.png',
            'A web application written in Django and deployed on Digital Ocean developed by myself for my family business, Cleaning Equipment WA.',
            'https://cewa.d-sons.com/'
        ],
        [
            'Cleaning Equipment WA Comparator',
            '../images/cewa-comparator.png',
            'A desktop application created by myself in ElectronJS. It is specifically tailored towards the cleaning industry, its purpose is to provide the client with the best recommendation to suit their needs.',
            'https://github.com/demstar16/cewa-machine-comparator'
        ],
        [
            'Password Manager',
            '../images/password-manager.png',
            'A python script that uses a csv file to store and manage tough to crack passwords. Although not eniterly secure, it was a fun project to play around with.',
            'https://github.com/demstar16/password-manager'
        ],
        [
            'Get It Done',
            '../images/get-it-done.png',
            'A basic to do list created with React, still a work in progress with basic functionality completed.',
            'https://github.com/demstar16/get-it-done'
        ],
        [
            'Adam Sandler Wordle',
            '../images/adam-sandler-wordle.png',
            'An Adam Sandler inspired wordle like game created with Flask. One of my favorite projects to date and I learnt a lot making it.',
            'https://adamsandlerwordle.d-sons.com/'
        ],
        [
            'GPS RC Car',
            '../images/rc-car.png',
            'An RC car programmed with C++ and Arduino to go to a coordinate and back. For this group project we not only programmed the car but designed it and assembled all the hardware. It was completed in the Digital Embedded Systems unit at UWA.',
            'https://github.com/demstar16/rc-gps-car'
        ],
        [
            'Duplicates CLI',
            '../images/duplicates1.png',
            'duplicates is a command line utility to locate and report duplicate files in a named directory based on SHA2 hashes. I completed this project with my project partner for the Systems Programming unit.',
            'https://github.com/demstar16/cli-duplicates'
        ],
        [
            'Rake Network Protocol',
            '../images/rake1.png',
            'Client and server applications for rake, a protocol for distributed compilation and remote command execution. Completed in a pair using Python and C.',
            'https://github.com/pavo-etc/rake'
        ],
        [
            'Ridgefield Farm Database',
            '../images/ridgefield1.png',
            'A web application I designed and developed in a team of 4, working closely with the client, for Ridgefield Farm UWA to help them manage paddock data. Built using Django and deployed on Heroku.',
            'https://github.com/demstar16/ridgefield-farm-database'
        ],
        [
            'Triumph',
            '../images/triumph1.png',
            'A terminal political war game developed with Python using the numpy, networkx and matplotx libraries. Bayesian equations are integrated in to make the AI aspects of the game make better decisions.',
            'https://github.com/demstar16/triumph'
        ],
        [
            'ExamGPT',
            '../images/examgpt1.png',
            'A web application designed to assist students and/or teachers with creating questions and answers for those questions. Built by a small team using Flask, HTML, CSS, JavaScript, and openAI.',
            'https://github.com/demstar16/examGPT'
        ],
        [
            'Pong Clone',
            '../images/pong1.png',
            'A Pong clone created in the Harvard CS50 gaming course written in Lua. I did not create the code, I just extended it to include a basic AI you could play along with the 2 player.',
            'https://github.com/demstar16/pong-clone'
        ],
        [
            'Flappy Bird Clone',
            '../images/flappy-bird1.png',
            'A Flappy Bird clone created in the Harvard CS50 gaming course written in Lua. I did not create all the code but rather added features, these included: pause functionality, rewards depending on score, and randomizing distance between pipe pairs and gap distance.',
            'https://github.com/demstar16/flappy-bird-clone'
        ],
    ]

    let projects = document.getElementById('projects');

    projectData.forEach(
        function(item) {
            let link = document.createElement('a');
            link.href = item[3];
            link.target = '__blank'

            let box = document.createElement('div');
            box.className = 'project-box';

            let h1 = document.createElement('h1');
            let img = document.createElement('img');
            let p = document.createElement('p');

            // console.log(item[0])
            // console.log(item[1])
            // console.log(item[2])

            h1.innerText = item[0];
            img.src = item[1];
            p.innerText = item[2];

            box.appendChild(h1);
            box.appendChild(img);
            box.appendChild(p);

            link.appendChild(box)
            projects.appendChild(link)
        }
    )
});
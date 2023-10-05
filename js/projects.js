document.addEventListener("DOMContentLoaded", function() {

    let projectData = [
        [
            'Cleaning Equipment WA', 
            '../images/cewa-site.png', 
            'A web application written in Django and deployed on Digital Ocean developed by myself for my family business, Cleaning Equipment WA.', 
            'https://cewa.d-sons.com/'
        ],
        [
            'Pong Clone', 
            '../images/pong.png', 
            'A Pong clone created in the Harvard CS50 gaming course written in Lua. I did not create the code, I just extended it to include a basic AI you could play along with the 2 player.',
            'https://github.com/demstar16/cs50-pong'
        ],
        [
            'Flappy Bird Clone', 
            '../images/flappy-bird.png', 
            'A Flappy Bird clone created in the Harvard CS50 gaming course written in Lua. I did not create all the code but rather added features, these included: pause functionality, rewards depending on score, and randomizing distance between pipe pairs and gap distance.',
            'https://github.com/demstar16/cs50-flappy-bird'
        ],
        [
            'Triumph', 
            '../images/triumph.png', 
            'A terminal political war game developed with Python using the numpy, networkx and matplotx libraries. Bayesian equations are integrated in to make the AI aspects of the game make better decisions.',
            'https://github.com/demstar16/Triumph'
        ],
        [
            'ExamGPT', 
            '../images/examgpt.png', 
            'A web application designed to assist students and/or teachers with creating questions and answers for those questions. Built by a small team using Flask, HTML, CSS, JavaScript, and openAI.',
            '/'
        ],
        [
            'rake', 
            '../images/rake.png', 
            'A client and server applications for rake, a protocol for distributed compilation and remote command execution. Completed in a pair using Python and C.',
            'https://github.com/pavo-etc/rake'
        ],
        [
            'duplicates', 
            '../images/duplicates.png', 
            'duplicates is a command line utility to locate and report duplicate files in a named directory based on SHA2 hashes. I completed this project with my project partner for the Systems Programming unit.',
            'https://github.com/demstar16/CLI-duplicates'
        ],
        [
            'Ridgefield Farm Database', 
            '../images/ridgefield.png',
            'A web application I designed and developed in a team of 4, working closely with the client, for Ridgefield Farm UWA to help them manage paddock data. Built using Django and deployed on Heroku.',
            'https://github.com/demstar16/Ridgefield-Farm-Database'
        ],
    ]
    
    let projects = document.getElementById('projects');
    
    projectData.forEach(
        function(item){
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
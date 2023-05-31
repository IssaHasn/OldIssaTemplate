const languaes = ['Html5', 'Css3', 'Javascript', 'Python', 'Sql'];
const frames = ['Bootstrap', 'Sass', 'JQuery', 'React', 'Django'];
const images_urls = ['imgs/work1.png', 'imgs/work2.png', 'imgs/work3.png', 'imgs/work4.png', 'imgs/work5.png', 'imgs/work6.png'];

let list1 = document.querySelector('.skills .skills_list div');
let list2 = document.querySelector('.skills .skills_list2 div');
let works = document.querySelector('.list_works');

let log_skills1 = (list) => {
    list.forEach(function(skill){
        list1.innerHTML += ('<li class="skill"><p class="skill_name">' + skill + '</p></li>');
        return 0; 
    });
};

let log_skills2 = (list) => {
    list.forEach(function(skill){
        list2.innerHTML += ('<li class="skill"><p class="skill_name">' + skill + '</p></li>');
        return 0; 
    });
};

let log_works_images = (list) => {
    list.forEach(function(url){
        works.innerHTML += ('<img class="work" src="' + url + '" alt="work"></img>');
    });
};


log_skills1(languaes);
log_skills2(frames);
log_works_images(images_urls);
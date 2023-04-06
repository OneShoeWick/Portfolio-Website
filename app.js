// GRAB ELEMENTS
const bgImg = document.getElementById('header-home'),
      navLinks = document.querySelectorAll('.nav-links'),
      smallText = document.getElementById('small-text'),
      titleText = document.getElementById('title-text'),
      triangle = document.getElementById('triangle'),
      triangleSpan = document.getElementById('triangleSpan'),
      workBtn = document.getElementById('view-work');


triangle.addEventListener('click', function(){

        // Check Current Page Version
        if(triangle.classList == 'front-end') {

            // CHANGE BACKGROUND
            bgImg.style.background = 'url(\'/img/writer_bg.jpg\') center center/cover';

            // CHANGE TEXT
            smallText.innerHTML = 'I write ';
            titleText.innerHTML = 'Direct Response Copy';
            
            // CHANGE COLORS
            titleText.style.color = '#10968E';
            triangleSpan.style.borderLeft = '36px solid #EC2970';
            workBtn.style.background = '#0F645F';

            // CHANGE TRIANGLE CLASS
            triangle.classList = 'copywriter';

        } else {

            // CHANGE BACKGROUND IMAGE
            bgImg.style.background = 'url(\'/img/dev_bg.jpg\') center center/cover';

            // CHANGE TEXT
            smallText.innerHTML = 'I\'m a ';
            titleText.innerHTML = 'Front-End Developer';

            // CHANGE COLORS
            titleText.style.color = '#EC2970';
            triangleSpan.style.borderLeft = '36px solid #10968E';
            workBtn.style.background = '#9E1446';

            // CHANGE TRIANGLE CLASS
            triangle.classList = 'front-end';

        }
});

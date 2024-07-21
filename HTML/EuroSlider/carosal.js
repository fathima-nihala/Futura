

const courses = {
    category1: [
        { title: 'Course 1-1', img: '../images/coffee.jpg' },
        { title: 'Course 1-2', img: '../images/coffee.jpg' },
        { title: 'Course 1-3', img: '../images/coffee.jpg' },
        { title: 'Course 1-1', img: '../images/coffee.jpg' },
        { title: 'Course 1-2', img: '../images/coffee.jpg' },
        { title: 'Course 1-3', img: '../images/coffee.jpg' },
        { title: 'Course 1-4', img: '../images/coffee.jpg' }
    ],
    category2: [
        { title: 'Course 2-1', img: '../images/coffee.jpg' },
        { title: 'Course 2-2', img: '../images/coffee.jpg' },
        { title: 'Course 2-3', img: '../images/coffee.jpg' },
        { title: 'Course 2-4', img: '../images/coffee.jpg' }
    ],
    category: [
        { title: 'Course 3-1', img: '../images/coffee.jpg' },
        { title: 'Course 3-2', img: '../images/coffee.jpg' },
        { title: 'Course 3-3', img: '../images/coffee.jpg' },
        { title: 'Course 3-4', img: '../images/coffee.jpg' }
    ],
    category4: [
        { title: 'Course 4-1', img: '../images/coffee.jpg' },
        { title: 'Course 4-2', img: '../images/coffee.jpg' },
        { title: 'Course 4-3', img: '../images/coffee.jpg' },
        { title: 'Course 4-4', img: '../images/coffee.jpg' }
    ]
};

function filterCourses(category) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    courses[category].forEach(course => {
        const item = document.createElement('div');
        item.className = 'swiper-slide';
        item.innerHTML = `
            <img src="${course.img}" alt="${course.title}">
            <h3>${course.title}</h3>
            <button>Enquire Now</button>
        `;
        carousel.appendChild(item);
    });

    // Re-initialize Swiper
    new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
}

// Initialize with the first category
filterCourses('category1');
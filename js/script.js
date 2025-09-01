document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id], div[id]');
 
    const offset = 250; 

    const changeActiveLink = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - offset) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); 
});



document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.reveal-section');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        sectionObserver.observe(section);
    });

});


document.addEventListener('DOMContentLoaded', function() {

    const navbarCollapse = document.getElementById('navbarSupportedContent');

    // ==========================================================
    //           Tambahkan Tombol Bahasa Secara Dinamis
    // ==========================================================
    if (navbarCollapse) {
        const langToggle = document.createElement('li');
        langToggle.className = 'language-toggle';
        langToggle.id = 'lang-toggle';
        langToggle.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text">EN</span>';
        navbarCollapse.appendChild(langToggle);
    }
    


    // ==========================================================
    //                   Fungsi & Terjemahan
    // ==========================================================
    const translations = {
        'en': {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'hero-title': 'Sofyan_Vb, a PROGRAMMER',
            'hero-subtitle': 'Building digital reality from ideas and constructing a robust technology foundation for future solutions.',
            'hero-subtitle-2': 'Browse my portfolio to see the projects I have worked on.',
            'hero-btn-download': 'Download CV',
            'hero-btn-contact': 'Contact Me',
            'profile-name': 'Sofyan Ibnu Ghazali',
            'profile-desc': 'Passionate about transforming complex problems into elegant and efficient digital solutions.',
            'about-title': 'MY ABOUT',
            'about-text1': 'My name is Sofyan, an aspiring programmer currently studying Informatics Engineering at Madura Islamic University. My interest in technology led me to the world of programming, where I discovered a passion for designing and building web applications. I believe that technology is a powerful tool for positive change, and I want to be a part of that change with my skills. I am always enthusiastic about taking on new challenges and collaborating on projects that can push the boundaries of what is possible in the digital world.',
            'about-text2': 'I am always enthusiastic about taking on new challenges and collaborating on projects that can push the boundaries of what is possible in the digital world. Browse my portfolio to see the projects I have worked on.',
            'skills-title': 'MY SKILLS',
            'projects-title': 'MY PROJECTS',
            'projects-desc': 'A brief description of this project, the challenges faced, and the solutions implemented.',
            'projects-btn': 'View Code',
            'contact-title': 'MY CONTACT',
            'contact-subtitle': 'Have questions or are interested in collaborating? Please fill out the form below.',
            'contact-label-name': 'Full Name *',
            'contact-label-email': 'Email *',
            'contact-label-message': 'Message *',
            'contact-btn': 'Send Message',
            'footer-text': '&copy; 2025 Sofyan Ibnu Ghazali. Created with ❤️ and accompanied by a cup of ☕'
        },
        'id': {
            'nav-home': 'Beranda',
            'nav-about': 'Tentang',
            'nav-skills': 'Kemampuan',
            'nav-projects': 'Proyek',
            'nav-contact': 'Kontak',
            'hero-title': 'Sofyan_Vb, seorang PROGRAMMER',
            'hero-subtitle': 'Membangun realitas digital dari ide dan menciptakan fondasi teknologi yang kokoh untuk solusi di masa depan.',
            'hero-subtitle-2': 'Jelajahi portofolio saya untuk melihat proyek-proyek yang telah saya kerjakan.',
            'hero-btn-download': 'Unduh CV',
            'hero-btn-contact': 'Hubungi Saya',
            'profile-name': 'Sofyan Ibnu Ghazali',
            'profile-desc': 'Bersemangat dalam mengubah masalah kompleks menjadi solusi digital yang elegan dan efisien.',
            'about-title': 'TENTANG SAYA',
            'about-text1': 'Nama saya Sofyan, seorang calon programmer yang saat ini sedang menempuh pendidikan di Teknik Informatika Universitas Islam Madura. Minat saya pada teknologi membawa saya ke dunia pemrograman, di mana saya menemukan gairah untuk merancang dan membangun aplikasi web. Saya percaya bahwa teknologi adalah alat yang kuat untuk perubahan positif, dan saya ingin menjadi bagian dari perubahan itu dengan keterampilan saya. Saya selalu antusias dalam menghadapi tantangan baru dan berkolaborasi dalam proyek-proyek yang dapat mendorong batasan dari apa yang mungkin di dunia digital.',
            'about-text2': 'Saya selalu antusias dalam menghadapi tantangan baru dan berkolaborasi dalam proyek-proyek yang dapat mendorong batasan dari apa yang mungkin di dunia digital. Jelajahi portofolio saya untuk melihat proyek-proyek yang telah saya kerjakan.',
            'skills-title': 'KEMAMPUAN SAYA',
            'projects-title': 'PROYEK SAYA',
            'projects-desc': 'Deskripsi singkat tentang proyek ini, tantangan yang dihadapi, dan solusi yang diimplementasikan.',
            'projects-btn': 'Lihat Kode',
            'contact-title': 'KONTAK SAYA',
            'contact-subtitle': 'Punya pertanyaan atau tertarik berkolaborasi? Silakan isi formulir di bawah ini.',
            'contact-label-name': 'Nama Lengkap *',
            'contact-label-email': 'Email *',
            'contact-label-message': 'Pesan *',
            'contact-btn': 'Kirim Pesan',
            'footer-text': '&copy; 2025 Sofyan Ibnu Ghazali. Dibuat dengan ❤️ dan ditemani secangkir ☕'
        }
    };
    
    let isEnglish = true;



    function updatePageText() {
    const lang = isEnglish ? 'en' : 'id';
    const currentTranslations = translations[lang];
    const highlight = `<span class="highlight-text">`;
    const closeHighlight = `</span>`;

    // Navigasi
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks[0].textContent = currentTranslations['nav-home'];
    navLinks[1].textContent = currentTranslations['nav-about'];
    navLinks[2].textContent = currentTranslations['nav-skills'];
    navLinks[3].textContent = currentTranslations['nav-projects'];
    navLinks[4].textContent = currentTranslations['nav-contact'];

    // Hero Section
    document.querySelector('.hero-content h1').innerHTML = `Sofyan_Vb, a ${highlight}PROGRAMMER${closeHighlight}`;
    document.querySelector('.hero-content p').textContent = currentTranslations['hero-subtitle'];
    document.querySelector('.hero-subtitle').textContent = currentTranslations['hero-subtitle-2'];
    document.querySelector('.btn-cv[download]').innerHTML = `<i class="fas fa-download"></i> ${currentTranslations['hero-btn-download']}`;
    document.querySelector('.hero-btn.btn-cv').innerHTML = `<i class="fas fa-envelope"></i> ${currentTranslations['hero-btn-contact']}`;
    
    // Profile
    document.querySelector('.row.text-center.align-items-center.mt-4 h2').textContent = currentTranslations['profile-name'];
    document.querySelector('.row.text-center.align-items-center.mt-4 p').textContent = currentTranslations['profile-desc'];
    
    // About Section
    const aboutTitle = document.querySelector('#about h2');
    aboutTitle.innerHTML = isEnglish ? `MY ${highlight}ABOUT${closeHighlight}` : `TENTANG ${highlight}SAYA${closeHighlight}`;
    document.querySelector('#about .col-md-6 p:nth-child(1)').textContent = currentTranslations['about-text1'];
    document.querySelector('#about .col-md-6 p:nth-child(2)').textContent = currentTranslations['about-text2'];
    
    // Skills Section
    const skillsTitle = document.querySelector('#skills h2');
    skillsTitle.innerHTML = isEnglish ? `MY ${highlight}SKILLS${closeHighlight}` : `KEMAMPUAN ${highlight}SAYA${closeHighlight}`;
    
    // Projects Section
    const projectsTitle = document.querySelector('#projects h2');
    projectsTitle.innerHTML = isEnglish ? `MY ${highlight}PROJECTS${closeHighlight}` : `PROYEK ${highlight}SAYA${closeHighlight}`;
    document.querySelectorAll('.projects-grid .project-card p').forEach(p => p.textContent = currentTranslations['projects-desc']);
    document.querySelectorAll('.projects-grid .project-card .btn-secondary').forEach(btn => btn.textContent = currentTranslations['projects-btn']);
    
    // Contact Section
    const contactTitle = document.querySelector('#contact h2');
    contactTitle.innerHTML = isEnglish ? `MY ${highlight}CONTACT${closeHighlight}` : `KONTAK ${highlight}SAYA${closeHighlight}`;
    document.querySelector('.contact-subtitle').textContent = currentTranslations['contact-subtitle'];
    document.querySelector('label[for="name"]').innerHTML = `<i class="fas fa-user"></i> ${currentTranslations['contact-label-name']}`;
    document.querySelector('label[for="email"]').innerHTML = `<i class="fas fa-envelope"></i> ${currentTranslations['contact-label-email']}`;
    document.querySelector('label[for="message"]').innerHTML = `<i class="fas fa-envelope-open-text"></i> ${currentTranslations['contact-label-message']}`;
    document.querySelector('.btn-submit').innerHTML = `<i class="fas fa-paper-plane"></i> ${currentTranslations['contact-btn']}`;
    
    // Footer
    document.querySelector('.copyright-text').innerHTML = currentTranslations['footer-text'];
}


    // ==========================================================
    //                   Logika Tombol Bahasa
    // ==========================================================
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const langTextElement = langToggle.querySelector('.lang-text');
        langToggle.addEventListener('click', function() {
            isEnglish = !isEnglish; 
            langTextElement.textContent = isEnglish ? 'EN' : 'IN';
            updatePageText(); 
        });
        updatePageText();
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Fungsi untuk memperbarui ikon berdasarkan tema
    function updateIcon(theme) {
        if (theme === 'light-theme') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Tentukan tema awal saat halaman dimuat
    if (currentTheme === 'light-theme') {
        body.classList.add('light-theme');
        updateIcon('light-theme');
    } else {
        body.classList.remove('light-theme');
        updateIcon('dark-theme');
    }

    // Tangani klik pada tombol
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateIcon('dark-theme');
        } else {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            updateIcon('light-theme');
        }
    });
});
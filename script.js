document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-xmark');
        hamburger.querySelector('i').classList.toggle('fa-bars');
    });

    // Fechar menu ao clicar num link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-xmark');
        });
    });

    // 2. Filtro do Cardápio por Categorias
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover classe ativa dos outros botões
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            menuCards.forEach(card => {
                if (category === 'todos' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Highlight de seção ativa no Scroll (ScrollSpy)
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (sectionsClass) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active');
                } else {
                    sectionsClass.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollActive);

    // 4. Atualizar ano do rodapé automaticamente
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
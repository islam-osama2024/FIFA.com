    // رسالة ترحيب في الكونسول
    console.log("🎮 مرحبًا بك في موقع FIFA!");

    // تمرير ناعم عند النقر على روابط القائمة
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        }
    });
    });

    // تغيير خلفية الناف بار عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });

    // زر العودة لأعلى الصفحة
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑";
    scrollBtn.className = "scroll-top-btn";
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // عند الضغط على زر التحميل
    const downloadBtn = document.querySelector('.btn');
    if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        alert("🚀 سيتم تحميل اللعبة قريبًا!");
    });
    }

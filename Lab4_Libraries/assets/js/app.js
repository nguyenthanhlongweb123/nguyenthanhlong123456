// 1. Kích hoạt AOS (Bài 1)
AOS.init({
    duration: 1000, //
    once: true      //
});

// 2. GSAP Bài 3: Di chuyển đơn giản (Tween)
gsap.to(".gsap-box", { 
    x: 200, 
    opacity: 1, 
    duration: 1.5, 
    ease: "power2.out", 
    delay: 0.5 
}); //

// 3. GSAP Bài 4: Hiệu ứng chuỗi (Timeline) - THÊM PHẦN NÀY CHO ĐỦ BÀI
const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: "power2.out" }
});
tl.from(".title-anim", { y: 50, opacity: 0 }); // Tiêu đề tự động trượt lên sau khi load

// 4. GSAP Bài 5: Hiệu ứng Stagger khi cuộn (Scroll)
window.addEventListener('scroll', () => {
    const section5 = document.querySelector('#bai5');
    if (section5) {
        const pos = section5.getBoundingClientRect().top;
        if (pos < window.innerHeight / 1.3) {
            gsap.to(".card", { 
                opacity: 1, 
                y: 0, 
                stagger: 0.2, 
                ease: "back.out(1.7)" 
            }); //
        }
    }
});
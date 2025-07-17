const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
        
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



 document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelector('.blog-slides');
            const slideItems = document.querySelectorAll('.blog-slide');
            const dots = document.querySelectorAll('.slide-dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            
            let currentIndex = 0;
            const slideCount = slideItems.length;
            let slideInterval;
            
            // Initialize slider
            function initSlider() {
                updateSlider();
                startAutoSlide();
            }
            
            // Update slider position
            function updateSlider() {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Start auto sliding
            function startAutoSlide() {
                slideInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % slideCount;
                    updateSlider();
                }, 5000); // Change slide every 5 seconds
            }
            
            // Reset auto slide timer
            function resetAutoSlide() {
                clearInterval(slideInterval);
                startAutoSlide();
            }
            
            // Next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlider();
                resetAutoSlide();
            }
            
            // Previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlider();
                resetAutoSlide();
            }
            
            // Event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                    resetAutoSlide();
                });
            });
            
            // Initialize the slider
            initSlider();
            
            // Pause on hover
            const slider = document.querySelector('.blog-slider');
            slider.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slider.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
            
            // Touch events for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            
            slides.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(slideInterval);
            }, {passive: true});
            
            slides.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, {passive: true});
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    nextSlide(); // Swipe left
                }
                if (touchEndX > touchStartX + 50) {
                    prevSlide(); // Swipe right
                }
            }
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
        });

//  drapp dawn buton
  function toggleDropdown(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.dropdown-icon');
            
            content.classList.toggle('active');
            
            if (content.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        }



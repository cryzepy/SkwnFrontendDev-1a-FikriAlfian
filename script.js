$(document).ready(function(){

    // Hamburger Toggle
    $(".hamburger").click(function(){
        $(".mobile-menu").toggleClass("active");
    });

    // Mobile Dropdown
    $(".mobile-dropdown > a").click(function(e){
        e.preventDefault();
        $(this).next("ul").slideToggle(200);
    });


    // section sebelum2 dan sesudah 1
    const furnitureList = `
        <ul class="dropdown-menu">
            <li><a href="#">Chair</a></li>
            <li><a href="#">Table</a></li>
            <li><a href="#">Sofa</a></li>
        </ul>
    `;

    // 2. Masukkan ke dalam elemen .dropdown
    $(".dropdown").append(furnitureList);
    $(".dropdown-menu").hide();

    // 3. Logika Hover
    $(".dropdown").hover(
        function() {
            // Saat mouse masuk: Putar panah dan slide down menu
            $(this).find(".arrow-icon").css("transform", "rotate(180deg)");
            $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
        },
        function() {
            // Saat mouse keluar: Balikkan panah dan slide up menu
            $(this).find(".arrow-icon").css("transform", "rotate(0deg)");
            $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
        }
    );



    // 1. Definisikan daftar menu untuk mobile
    const mobileMenuHTML = `
        <ul class="mobile-dropdown-menu" style="display: none;">
            <li><a href="#">Chair</a></li>
            <li><a href="#">Table</a></li>
            <li><a href="#">Sofa</a></li>
        </ul>
    `;

    // 2. Suntikkan menu dan Ikon Panah ke li.mobile-dropdown
    $(".mobile-dropdown").append(mobileMenuHTML);
    $(".mobile-dropdown > a").append(' <i class="fa-solid fa-chevron-down mobile-arrow"></i>');

    // 3. Logika Klik (Toggle)
    $(".mobile-dropdown > a").click(function(e) {
        e.preventDefault(); 
        
        const parent = $(this).parent();
        const menu = parent.find(".mobile-dropdown-menu");
        const arrow = $(this).find(".mobile-arrow");

        // Slide toggle menu
        menu.stop(true, true).slideToggle(300);

        // Putar panah
        if (parent.hasClass("open")) {
            parent.removeClass("open");
            arrow.css("transform", "rotate(0deg)");
        } else {
            parent.addClass("open");
            arrow.css("transform", "rotate(180deg)");
        }
    });



    // 1. Inject Menu 
    if ($(".mobile-dropdown-menu").length === 0) {
        const mobileMenuHTML = `
            <ul class="mobile-dropdown-menu">
                <li><a href="#">Chair</a></li>
                <li><a href="#">Table</a></li>
                <li><a href="#">Sofa</a></li>
            </ul>
        `;
        $(".mobile-dropdown").append(mobileMenuHTML);
    }

    // 2. Sembunyikan awal dengan CSS lewat jQuery agar instan
    $(".mobile-dropdown-menu").css("display", "none");

    // 3. Logika Klik yang Diperbaiki
    $(".mobile-dropdown > a").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation(); 

        const $this = $(this);
        const $subMenu = $this.next(".mobile-dropdown-menu");
        const $arrow = $this.find(".mobile-arrow");


        // Toggle menu yang diklik
        $subMenu.stop(true, true).slideToggle(300, function() {
            // Callback setelah selesai animasi
            if ($subMenu.is(":visible")) {
                $arrow.css("transform", "rotate(180deg)");
            } else {
                $arrow.css("transform", "rotate(0deg)");
            }
        });
    });

    
    // section 2
    $(document).ready(function() {
    $('.category-item').click(function() {
        // 1. Jika yang diklik sudah aktif, jangan lakukan apa-apa
        if ($(this).hasClass('active')) return;

        // 2. Hapus class active dari item sebelumnya
        $('.category-item').removeClass('active');
        
        // 3. Tutup semua paragraf yang sedang terbuka
        $('.category-item p').stop(true, true).slideUp(300);

        // 4. Tambah class active ke item yang diklik
        $(this).addClass('active');

        // 5. Buka paragraf milik item yang diklik
        $(this).find('p').stop(true, true).slideDown(300);
    
    });
});

    // section 3
    let scrollAmount = 0;
    let currentIndex = 0;
    
    const $track = $('.product-track');
    const $cards = $('.product-card');
    const cardWidth = $cards.outerWidth(true); 
    const totalCards = $cards.length;
    
    // Set kartu pertama sebagai aktif saat load
    $cards.eq(0).addClass('active');

    function updateSlider() {
        // Pindah track
        $track.css('transform', `translateX(-${scrollAmount}px)`);
        
        // Update class active
        $cards.removeClass('active');
        $cards.eq(currentIndex).addClass('active');
    }

    $('.next').click(function() {

        if (currentIndex < totalCards - 1) {
            currentIndex++;
            scrollAmount = currentIndex * cardWidth;
            updateSlider();
        }
    });

    $('.prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            scrollAmount = currentIndex * cardWidth;
            updateSlider();
        }
    });

    // section 4
    $('.subscribe-form').on('submit', function(e) {
        e.preventDefault();
        
        const email = $(this).find('input').val();
        
        $(this).fadeOut(300, function() {
            $(this).html('<p style="color: green; font-weight: bold;">Thank you for joining! Check your inbox.</p>').fadeIn();
        });
        
        console.log("Email terdaftar: " + email);
    });
});

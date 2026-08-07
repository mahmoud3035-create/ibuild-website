// ===========================================
// IBuild Engineering Contracting
// Arabic / English Language Switcher
// ===========================================

let currentLanguage = "en";

function changeLanguage() {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.getElementById("nav-home").innerHTML = "الرئيسية";
        document.getElementById("nav-about").innerHTML = "من نحن";
        document.getElementById("nav-services").innerHTML = "خدماتنا";
        document.getElementById("nav-projects").innerHTML = "مشاريعنا";
        document.getElementById("nav-contact").innerHTML = "تواصل معنا";

        document.getElementById("hero-title").innerHTML =
        "نبني مستقبلك بثقة";

        document.getElementById("hero-text").innerHTML =
        "شركة متخصصة في المقاولات الهندسية في أبوظبي - الإمارات العربية المتحدة.";

        document.getElementById("call-btn").innerHTML =
        '<i class="fa-solid fa-phone"></i> اتصل الآن';

        document.getElementById("whatsapp-btn").innerHTML =
        '<i class="fa-brands fa-whatsapp"></i> واتساب';

        document.getElementById("about-title").innerHTML =
        "من نحن";

        document.getElementById("about-text").innerHTML =
        "شركة IBuild Engineering Contracting من الشركات الرائدة في مجال المقاولات الهندسية، وتقدم حلولاً هندسية بأعلى معايير الجودة والسلامة.";

        document.getElementById("services-title").innerHTML =
        "خدماتنا";

        document.getElementById("service1").innerHTML =
        "أعمال السباكة";

        document.getElementById("service2").innerHTML =
        "الأعمال الكهربائية";

        document.getElementById("service3").innerHTML =
        "أنظمة التكييف";

        document.getElementById("service4").innerHTML =
        "أنظمة مكافحة الحريق";

        document.getElementById("projects-title").innerHTML =
        "مشاريعنا";

        document.getElementById("contact-title").innerHTML =
        "تواصل معنا";

        document.getElementById("location-text").innerHTML =
        '<i class="fa-solid fa-location-dot"></i> مصفح - أبوظبي - الإمارات العربية المتحدة';

        document.getElementById("footer-text").innerHTML =
        "© 2026 شركة IBuild Engineering Contracting. جميع الحقوق محفوظة.";

        document.querySelector(".language-btn").innerHTML =
        "🌐 English";

    } else {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("nav-home").innerHTML = "Home";
        document.getElementById("nav-about").innerHTML = "About";
        document.getElementById("nav-services").innerHTML = "Services";
        document.getElementById("nav-projects").innerHTML = "Projects";
        document.getElementById("nav-contact").innerHTML = "Contact";

        document.getElementById("hero-title").innerHTML =
        "Building Your Future With Confidence";

        document.getElementById("hero-text").innerHTML =
        "Professional Engineering Contracting Company Based In Abu Dhabi, UAE.";

        document.getElementById("call-btn").innerHTML =
        '<i class="fa-solid fa-phone"></i> Call Now';

        document.getElementById("whatsapp-btn").innerHTML =
        '<i class="fa-brands fa-whatsapp"></i> WhatsApp';

        document.getElementById("about-title").innerHTML =
        "About Us";

        document.getElementById("about-text").innerHTML =
        "IBuild Engineering Contracting is a leading engineering company in Abu Dhabi providing high-quality engineering solutions with the highest standards of quality, safety and customer satisfaction.";

        document.getElementById("services-title").innerHTML =
        "Our Services";

        document.getElementById("service1").innerHTML =
        "Plumbing Works";

        document.getElementById("service2").innerHTML =
        "Electrical Works";

        document.getElementById("service3").innerHTML =
        "HVAC Systems";

        document.getElementById("service4").innerHTML =
        "Fire Fighting";

        document.getElementById("projects-title").innerHTML =
        "Our Projects";

        document.getElementById("contact-title").innerHTML =
        "Contact Us";

        document.getElementById("location-text").innerHTML =
        '<i class="fa-solid fa-location-dot"></i> Musaffah - Abu Dhabi - UAE';

        document.getElementById("footer-text").innerHTML =
        "© 2026 IBuild Engineering Contracting. All Rights Reserved.";

        document.querySelector(".language-btn").innerHTML =
        "🌐 العربية";

    }

}

console.log("IBuild Website Loaded Successfully");
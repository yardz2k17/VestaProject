jQuery(document).ready(function() {
        
    jQuery(".menu-trigger").click(function() {
        
        jQuery(".main-nav").slideToggle(400, function() {
            jQuery(this).toggleClass("nav-expanded").css('display', '');
        });
        
    });
    
});
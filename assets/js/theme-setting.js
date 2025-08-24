// settings append in body
function tp_settings_append($x){
    var settings = $('body');
    let dark;
    $x == true ? dark = 'd-block' : dark = 'd-none';
    var settings_html = `<div class="tp-theme-settings-area transition-3">
    <div class="tp-theme-wrapper">
       <div class="tp-theme-header text-center">
          <h4 class="tp-theme-header-title">Liko Mode Settings</h4>
       </div>

       <!--  MODE SETTINGS -->
       <div class="tp-theme-dir mb-20">
          <label class="tp-theme-dir-main" for="tp-dir-toggler">
             <span class="tp-theme-dir-rtl">Dark</span>
                <input type="checkbox" id="tp-dir-toggler">
                <i class="tp-theme-dir-slide"></i>
             <span class="tp-theme-dir-ltr active">Light</span>
          </label>
       </div>

       <!--SETTINGS -->
       <div class="tp-theme-settings">
          <div class="tp-theme-settings-wrapper">
             <div class="tp-theme-settings-open">
                <button class="tp-theme-settings-open-btn">
                   <span class="tp-theme-settings-gear">
                      <i class="fa-light fa-gear"></i>
                   </span>
                   <span class="tp-theme-settings-close">
                      <i class="fa-regular fa-xmark"></i>
                   </span>
                </button>
             </div>
          </div>
       </div>
    </div>
 </div>`;

 settings.append(settings_html);
}
tp_settings_append(false); // if want to enable dark light mode then send "true";

// settings open btn
$(".tp-theme-settings-open-btn").on("click", function () {
    $(".tp-theme-settings-area").toggleClass("settings-opened");
});

$(document).on('click', '#tp-dir-toggler', function(){
    if($('html').hasClass('liko-dark-active')){
        $('html').removeClass('liko-dark-active')
    }else{
        $('html').addClass('liko-dark-active')
    }
})
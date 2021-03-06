/**
 * This file is used only on the details page
 *
 * @since 1.0.0
 * @since 1.4.4 Minified
 * @package GeoDirectory
 */

function geodir_get_popup_forms(e, i, r, o) {
    var s = geodir_var.geodir_ajax_url,
        a = i.closest("li");
    i.closest(".geodir-company_info").length > 0 && (a = i.closest(".geodir-company_info"));
    var d = a.find('input[name="geodir_popup_post_id"]').val();
    jQuery.gdmodal('<div id="basic-modal-content" class="clearfix simplemodal-data" style="display: block;"><div class="geodir-modal-loading"><i class="fa fa-refresh fa-spin "></i></div></div>'), jQuery.post(s, {
        popuptype: r,
        post_id: d
    }).done(function(i) {
        a.find(".geodir_display_popup_forms").append(i), e.preventDefault(), jQuery.gdmodal.close(), jQuery("#" + o).gdmodal({
            persist: !0,
            onClose: function() {
                jQuery.gdmodal.close({
                    overlayClose: !0
                }), a.find(".geodir_display_popup_forms").html("")
            }
        })
    })
}

function geodir_popup_validate_field(e) {
    var i = !0;
    switch (erro_msg = "", jQuery(e).attr("field_type")) {
        case "email":
            var r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
            "" == e.value && (erro_msg = geodir_all_js_msg.geodir_field_id_required), "" == e.value || r.test(e.value) || (erro_msg = geodir_all_js_msg.geodir_valid_email_address_msg), "" != e.value && r.test(e.value) && (i = !1);
            break;
        case "text":
        case "textarea":
            "" != e.value ? i = !1 : erro_msg = geodir_all_js_msg.geodir_field_id_required
    }
    return i ? (erro_msg && jQuery(e).closest("div").find("span.message_error2").html(erro_msg), jQuery(e).closest("div").find("span.message_error2").fadeIn(), !1) : (jQuery(e).closest("div").find("span.message_error2").html(""), jQuery(e).closest("div").find("span.message_error2").fadeOut(), !0)
}

function geodir_transliterate(e) {
    var i = {},
        r = "";
    i["Ё"] = "YO", i["Й"] = "I", i["Ц"] = "TS", i["У"] = "U", i["К"] = "K", i["Е"] = "E", i["Н"] = "N", i["Г"] = "G", i["Ш"] = "SH", i["Щ"] = "SCH", i["З"] = "Z", i["Х"] = "H", i["Ъ"] = "'", i["ё"] = "yo", i["й"] = "i", i["ц"] = "ts", i["у"] = "u", i["к"] = "k", i["е"] = "e", i["н"] = "n", i["г"] = "g", i["ш"] = "sh", i["щ"] = "sch", i["з"] = "z", i["х"] = "h", i["ъ"] = "'", i["Ф"] = "F", i["Ы"] = "I", i["В"] = "V", i["А"] = "A", i["П"] = "P", i["Р"] = "R", i["О"] = "O", i["Л"] = "L", i["Д"] = "D", i["Ж"] = "ZH", i["Э"] = "E", i["ф"] = "f", i["ы"] = "i", i["в"] = "v", i["а"] = "a", i["п"] = "p", i["р"] = "r", i["о"] = "o", i["л"] = "l", i["д"] = "d", i["ж"] = "zh", i["э"] = "e", i["Я"] = "YA", i["Ч"] = "CH", i["С"] = "S", i["М"] = "M", i["И"] = "I", i["Т"] = "T", i["Ь"] = "'", i["Б"] = "B", i["Ю"] = "YU", i["я"] = "ya", i["ч"] = "ch", i["с"] = "s", i["м"] = "m", i["и"] = "i", i["т"] = "t", i["ь"] = "'", i["б"] = "b", i["ю"] = "yu";
    for (var o = 0; o < e.length; o++) {
        var s = e.charAt(o);
        r += i[s] || s
    }
    return r
}
jQuery(document).ready(function() {
    // chrome 53 introduced a bug, so we need to repaint the slider when shown.
    jQuery('.geodir-slides').addClass('flexslider-fix-rtl');

    var e = "undefined" != typeof geodir_var.geodir_gd_modal && 1 == parseInt(geodir_var.geodir_gd_modal) ? !0 : !1;
    e || jQuery("#geodir-post-gallery a").lightBox({
        overlayOpacity: .5,
        imageLoading: geodir_var.geodir_plugin_url + "/geodirectory-assets/images/lightbox-ico-loading.gif",
        imageBtnNext: geodir_var.geodir_plugin_url + "/geodirectory-assets/images/lightbox-btn-next.gif",
        imageBtnPrev: geodir_var.geodir_plugin_url + "/geodirectory-assets/images/lightbox-btn-prev.gif",
        imageBtnClose: geodir_var.geodir_plugin_url + "/geodirectory-assets/images/lightbox-btn-close.gif",
        imageBlank: geodir_var.geodir_plugin_url + "/geodirectory-assets/images/lightbox-blank.gif"
    }), jQuery("#geodir_carousel").flexslider({
        animation: "slide",
        namespace: "geodir-",
        selector: ".geodir-slides > li",
        controlNav: !1,
        directionNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 75,
        itemMargin: 5,
        asNavFor: "#geodir_slider",
        rtl: 1 == parseInt(geodir_var.is_rtl) ? !0 : !1
    }), jQuery("#geodir_slider").flexslider({
        animation: "slide",
        selector: ".geodir-slides > li",
        namespace: "geodir-",
        controlNav: !0,
        animationLoop: !0,
        slideshow: !0,
        sync: "#geodir_carousel",
        start: function() {

            // chrome 53 introduced a bug, so we need to repaint the slider when shown.
            jQuery('.geodir-slides').removeClass('flexslider-fix-rtl');

            jQuery(".geodir_flex-loader").hide(), jQuery("#geodir_slider").css({
                visibility: "visible"
            }), jQuery("#geodir_carousel").css({
                visibility: "visible"
            });


        },
        rtl: 1 == parseInt(geodir_var.is_rtl) ? !0 : !1
    }), jQuery("a.b_sendtofriend").click(function(e) {
        geodir_get_popup_forms(e, jQuery(this), "b_sendtofriend", "basic-modal-content")
    }), jQuery("a.b_send_inquiry").click(function(e) {
        geodir_get_popup_forms(e, jQuery(this), "b_send_inquiry", "basic-modal-content2")
    }), jQuery(document).delegate("#agt_mail_agent .is_required:visible,#send_to_frnd .is_required:visible", "blur", function() {
        geodir_popup_validate_field(this)
    }), jQuery(document).delegate("#agt_mail_agent, #send_to_frnd", "submit", function() {
        var e = !0;
        return jQuery(this).find(".is_required:visible").each(function() {
            geodir_popup_validate_field(this) || (e = geodir_popup_validate_field(this))
        }), e ? !0 : !1
    });

    // let the popups open via url param
    if(gdUrlParam('gd_popup')=='send_friend' && jQuery('a.b_sendtofriend').length){
        jQuery('.b_sendtofriend').trigger("click");
    }else if(gdUrlParam('gd_popup')=='send_enquiry' && jQuery('a.b_send_inquiry').length){
        jQuery('.b_send_inquiry').trigger("click");
    }

});
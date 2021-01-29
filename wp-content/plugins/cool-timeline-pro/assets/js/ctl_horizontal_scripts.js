jQuery("document").ready(function(t) {
    t(".cool-timeline-horizontal").find("a[class^='ctl_prettyPhoto']").prettyPhoto({ social_tools: !1 }), t(".cool-timeline-horizontal").find("a[rel^='ctl_prettyPhoto']").prettyPhoto({ social_tools: !1 }), t(".cool-timeline-horizontal.ht-default").each(function(o) {
        var i = "#" + t(this).attr("date-slider"),
            a = "#" + t(this).attr("data-nav"),
            e = t(this).attr("data-rtl"),
            s = t(this).attr("data-autoplay"),
            r = "true" == s,
            l = parseInt(t(this).attr("data-start-on")),
            speed = parseInt(t(this).attr("data-autoplay-speed")),
            n = 3,
            c = "true" === e;
        t(i).slick({ slidesToShow: 1, slidesToScroll: 1,autoplaySpeed:speed, rtl: c, asNavFor: a, arrows: !1, dots: !1, autoplay: r, infinite: !1, initialSlide: l, adaptiveHeight: !0, responsive: [{ breakpoint: 768, settings: { centerPadding: "10px", slidesToShow: 1 } }, { breakpoint: 480, settings: { centerPadding: "10px", slidesToShow: 1 } }] }), t(a).slick({ slidesToShow: n, slidesToScroll: 1, asNavFor: i, dots: !1, infinite: !1, rtl: c, autoplay: r, nextArrow: '<button type="button" class="ctl-slick-next "><i class="far fa-arrow-alt-circle-right"></i></button>', prevArrow: '<button type="button" class="ctl-slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>', focusOnSelect: !0, adaptiveHeight: !0, initialSlide: l, responsive: [{ breakpoint: 768, settings: { arrows: !0, centerPadding: "10px", slidesToShow: 1 } }, { breakpoint: 480, settings: { arrows: !0, centerPadding: "10px", slidesToShow: 1 } }] })
    })
});
jQuery("document").ready(function(t) {
    t(".cool-timeline-horizontal").find("a[class^='ctl_prettyPhoto']").prettyPhoto({ social_tools: !1 }), t(".cool-timeline-horizontal").find("a[rel^='ctl_prettyPhoto']").prettyPhoto({ social_tools: !1 }), t(".cool-timeline-horizontal.ht-design-2").each(function(o) {
        var i = "#" + t(this).attr("date-slider"),
            e = "#" + t(this).attr("data-nav"),
            s = parseInt(t(this).attr("data-items")),
            a = t(this).attr("data-rtl"),
            l = "true" == t(this).attr("data-autoplay"),
            r = parseInt(t(this).attr("data-start-on")),
            speed = parseInt(t(this).attr("data-autoplay-speed")),
            n = "true" === a;
        t(e).slick({ slidesToShow: s, slidesToScroll: 1,autoplaySpeed:speed, asNavFor: i, dots: !1, autoplay: l, rtl: n, initialSlide: r, focusOnSelect: !0, infinite: !1, nextArrow: '<button type="button" class="ctl-slick-next "><i class="far fa-arrow-alt-circle-right"></i></button>', prevArrow: '<button type="button" class="ctl-slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>', responsive: [{ breakpoint: 980, settings: { slidesToShow: 2, slidesToScroll: 2, centerPadding: "10px" } }, { breakpoint: 768, settings: { arrows: !0, centerPadding: "10px", slidesToShow: 1 } }, { breakpoint: 480, settings: { arrows: !0, centerPadding: "10px", slidesToShow: 1 } }] }), t(i).slick({ slidesToShow: s, slidesToScroll: 1, asNavFor: e, arrows: !1, dots: !1, rtl: n, initialSlide: r, infinite: !1, adaptiveHeight: !0, responsive: [{ breakpoint: 980, settings: { slidesToShow: 2, slidesToScroll: 2, centerPadding: "10px" } }, { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: "10px" } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: "10px" } }] })
    })
});
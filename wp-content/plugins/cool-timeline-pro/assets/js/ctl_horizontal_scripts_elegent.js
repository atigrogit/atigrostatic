jQuery("document").ready(function(t) {
    t(".cool-timeline-horizontal").find("a[class^='ctl_prettyPhoto']").prettyPhoto( {
        social_tools: !1
    }
    ), t(".cool-timeline-horizontal").find("a[rel^='ctl_prettyPhoto']").prettyPhoto( {
        social_tools: !1
    }
    ), t(".cool-timeline-horizontal.ht-design-4").each(function(e) {
        var i="#"+t(this).attr("date-slider"), 
        o="#"+t(this).attr("data-nav"),
        s=parseInt(t(this).attr("data-items")),
        a="true"===t(this).attr("data-rtl"),
        r="true"==t(this).attr("data-autoplay"), 
        l=parseInt(t(this).attr("data-start-on"));
        speed=parseInt(t(this).attr("data-autoplay-speed")),

        t(o).slick( {
            slidesToShow:s, slidesToScroll:1, 
            asNavFor:i,autoplaySpeed:speed,
             dots:!1, autoplay:r, focusOnSelect:!0,
              infinite:!1, initialSlide:l
              , rtl:a, nextArrow:'<button type="button" class="ctl-slick-next ctl-flat-left design-4-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>', prevArrow:'<button type="button" class="ctl-slick-prev ctl-flat-right design-4-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>', responsive:[ {
                breakpoint:768, settings: {
                    arrows: !0, centerPadding: "10px", slidesToShow: 1
                }
            }
            , {
                breakpoint:480, settings: {
                    arrows: !0, centerPadding: "10px", slidesToShow: 1
                }
            }
            ]
        }
        ), t(i).slick( {
            slidesToShow:s, slidesToScroll:1,autoplaySpeed:speed, asNavFor:o, arrows:!0, initialSlide:l, dots:!1, rtl:a, infinite:!1, nextArrow:'<button type="button" class="ctl-slick-next ctl-flat-left design-4-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>', prevArrow:'<button type="button" class="ctl-slick-prev ctl-flat-right design-4-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>', responsive:[ {
                breakpoint:980, settings: {
                    slidesToShow: 2, slidesToScroll: 2, centerPadding: "10px"
                }
            }
            , {
                breakpoint:768, settings: {
                    slidesToShow: 1, slidesToScroll: 1, centerPadding: "10px"
                }
            }
            , {
                breakpoint:480, settings: {
                    slidesToShow: 1, slidesToScroll: 1, centerPadding: "10px"
                }
            }
            ]
        }
        )
    }
    )
}

);
/* SORTING */

jQuery(window).load(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 500);
    } else {
    }
    jQuery('.gallery_filter a').on('click', function () {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 800);
    });
});
jQuery(window).resize(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
    } else {
    }
});

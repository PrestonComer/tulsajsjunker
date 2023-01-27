/**
 * Iterates through the main pages and hide them all
 */
function hideAllPages() {
    $(".mainPage").each(function() {
        $(this).hide();
    });
}

/**
 * Attach the click event to navigation links to hide all
 * pages then show the one that matches the link pressed
 */
$('aside.sidebar__sidebar > a').on("click", function() {
    hideAllPages();
    // show the page of the link clicked on
    $(this.dataset.target).show();
})
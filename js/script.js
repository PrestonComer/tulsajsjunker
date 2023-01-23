function hideAllPages() {
    $(".mainPage").each(function() {
        $(this).hide();
    });
}

$('a').on("click", function() {
    hideAllPages();

    // show the page of the link clicked on
    $(this.dataset.target).show();
})
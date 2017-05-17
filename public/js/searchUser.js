$(document).ready(function () {
    let search = $('#search')
        , go = $('#search-btn');

    go.click(function () {
        location.replace('/' + search.val())
    });
});
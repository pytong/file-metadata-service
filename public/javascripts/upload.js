"use strict";


$(() => {

    let files;

    $("input[type=file]").on("change", function(event) {
        files = event.target.files;
    });

    $("form").on("submit", function(event) {
        alert("FILE SIZE: " + files[0].size);
    });

});

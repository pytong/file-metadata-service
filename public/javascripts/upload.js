"use strict";


$(() => {

    let files;

    $("input[type=file]").on("change", function(event) {
        files = event.target.files;
    });

    $("form").on("submit", function(event) {
        event.preventDefault();

        let data = new FormData();
        data.append("the-file", files["0"]);

        $.ajax({
            url: window.location.origin + "/api/filemetadata",
            type: "POST",
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Failed to check file size. Please try again.")
            },
            success: function(data) {
                alert("FILE SIZE: " + data.fileSize);
            }
        });

        document.getElementById("file-form").reset();
    });

});

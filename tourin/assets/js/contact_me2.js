// Contact Form Scripts

// tour 1
$(function() {

    $("#tourForm1").find('textarea,input').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name1").val();
            var email = $("input#email1").val();
            var phone = $("input#phone1").val();
            var message = $("textarea#message1").val();
            var tour = $("input#selectedTour1").val();
            var peopleCount = $("input#tourPeopleCount1").val();
            var tourDate = $("input#tourDate1").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                    tour: tour,
                    tourDate: tourDate,
                    peopleCount: peopleCount,
                    tourDate: tourDate
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#tourSuccess1').html("<div class='alert alert-success'>");
                    $('#tourSuccess1 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess1 > .alert-success')
                        .append("<strong>Your Tour request has been sent. </strong>");
                    $('#tourSuccess1 > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#tourForm1').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#tourSuccess1').html("<div class='alert alert-danger'>");
                    $('#tourSuccess1 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess1 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that the server is not responding. Please try again later!"));
                    $('#tourSuccess1 > .alert-danger').append('</div>');
                    //clear all fields
                    //$('#tourForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


// tour 2
$(function() {

    $("#tourForm2").find('textarea,input').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name2").val();
            var email = $("input#email2").val();
            var phone = $("input#phone2").val();
            var message = $("textarea#message2").val();
            var tour = $("input#selectedTour2").val();
            var peopleCount = $("input#tourPeopleCount2").val();
            var tourDate = $("input#tourDate2").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                    tour: tour,
                    tourDate: tourDate,
                    peopleCount: peopleCount,
                    tourDate: tourDate
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#tourSuccess2').html("<div class='alert alert-success'>");
                    $('#tourSuccess2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess2 > .alert-success')
                        .append("<strong>Your Tour request has been sent. </strong>");
                    $('#tourSuccess2 > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#tourForm2').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#tourSuccess2').html("<div class='alert alert-danger'>");
                    $('#tourSuccess2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess2 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that the server is not responding. Please try again later!"));
                    $('#tourSuccess2 > .alert-danger').append('</div>');
                    //clear all fields
                    //$('#tourForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


// Tour 3
$(function() {

    $("#tourForm3").find('textarea,input').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name3").val();
            var email = $("input#email3").val();
            var phone = $("input#phone3").val();
            var message = $("textarea#message3").val();
            var tour = $("input#selectedTour3").val();
            var peopleCount = $("input#tourPeopleCount3").val();
            var tourDate = $("input#tourDate3").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                    tour: tour,
                    tourDate: tourDate,
                    peopleCount: peopleCount,
                    tourDate: tourDate
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#tourSuccess3').html("<div class='alert alert-success'>");
                    $('#tourSuccess3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess3 > .alert-success')
                        .append("<strong>Your Tour request has been sent. </strong>");
                    $('#tourSuccess3 > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#tourForm3').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#tourSuccess3').html("<div class='alert alert-danger'>");
                    $('#tourSuccess3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#tourSuccess3 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that the server is not responding. Please try again later!"));
                    $('#tourSuccess3 > .alert-danger').append('</div>');
                    //clear all fields
                    //$('#tourForm3').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


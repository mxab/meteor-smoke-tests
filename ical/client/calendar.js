Template.calendar.rendered = function () {

    var $calPopover;

    $("#fullcalendar").fullCalendar({


        weekNumbers: true,
        aspectRatio: 1.25,
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'today month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        /*
         When the user clicks on this form, you probably don't want to the current
         selection to go away. Thus, you should add a class to your form such as
         "my-form", and set the unselectCancel option to ".my-form"
         */
        unselectCancel: '',

        dayClick: function (date, jsEvent, view) {
            console.log(jsEvent);


            if ($calPopover) {
                $calPopover.popover("destroy");
            }


            $(this).popover({
                html: true,
                placement: 'top',
                container: 'body',
                title: 'Choose your event type',
                content: function () {
                    return $("#popover-content").html();
                }
            });


            $calPopover = $(this).popover("show");

            $(this).on("shown.bs.popover", function (ev) {
                $(".popover").css("left", jsEvent.screenY);
                $(".popover").css("top", jsEvent.screenX);
            });


        },
        eventClick: function (event, jsEvent, view) {

        },
        eventMouseover: function (event, jsEvent, view) {

        },
        eventMouseout: function (event, jsEvent, view) {

        }


    });
};
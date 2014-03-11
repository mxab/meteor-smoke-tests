
Router.map(function () {
    this.route('serverRoute', {
        where: 'server',
        path: '/ical',
        action: function () {
            //var filename = this.params.filename;

            var cal = ICAL();
            var events = Events.find();

            cal.setDomain('trainingsplanet.com').setName('Trainingsplanet iCalendar');


            events.forEach(function(event){
                cal.addEvent({
                    start: event.start,
                    end: event.end,
                    summary: event.title,
                    description: event.description,
                    location: event.location,
                    url: 'http://localhost:3000/'
                });
            });




            // some special server side properties are available here
            this.response.writeHead(200, {
                'Content-Type': 'text/calendar',
                'Content-Disposition': 'attachment; filename="calendar.ics"'
            });

            this.response.end(cal.toString());
        }
    });
});
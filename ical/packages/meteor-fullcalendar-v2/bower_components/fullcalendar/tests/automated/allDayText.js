
describe('allDayText', function() {

	beforeEach(function() {
		affix('#cal');
	});

	describe('when allDaySlots is not set', function() {
		describe('in agendaWeek', function() {
			it('should default allDayText to using \'all-day\'', function() {
				var options = {
					defaultView: 'agendaWeek'
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('all-day');
			});
		});
		describe('in agendaDay', function() {
			it('should default allDayText to using \'all-day\'', function() {
				var options = {
					defaultView: 'agendaDay'
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('all-day');
			});
		});
	});

	describe('when allDaySlots is set true', function() {
		describe('in agendaWeek', function() {
			it('should default allDayText to using \'all-day\'', function() {
				var options = {
					defaultView: 'agendaWeek',
					allDaySlot: true
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('all-day');
			});
		});
		describe('in agendaDay', function() {
			it('should default allDayText to using \'all-day\'', function() {
				var options = {
					defaultView: 'agendaDay',
					allDaySlot: true
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('all-day');
			});
		});
	});

	describe('when allDaySlots is set true and allDayText is specified', function() {
		describe('in agendaWeek', function() {
			it('should show specified all day text', function() {
				var options = {
					defaultView: 'agendaWeek',
					allDaySlot: true,
					allDayText: 'axis-phosy'
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('axis-phosy');
			});
		});
		describe('in agendaDay', function() {
			it('should show specified all day text', function() {
				var options = {
					defaultView: 'agendaDay',
					allDayText: 'axis-phosy'
				};
				$('#cal').fullCalendar(options);
				var allDayText = $('.fc-agenda-allday .fc-agenda-axis').text();
				expect(allDayText).toEqual('axis-phosy');
			});
		});
	});
});
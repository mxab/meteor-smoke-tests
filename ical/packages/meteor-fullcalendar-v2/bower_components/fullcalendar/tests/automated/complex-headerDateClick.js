
describe('when header options set with next|prev|prevYear|nextYear|today', function() {

	beforeEach(function() {
		affix('#calendar');
		var options = {
			header: {
				left: 'next,prev,prevYear,nextYear today',
				center: '',
				right: 'title'
			}
		};
		$('#calendar').fullCalendar(options);
	});

	describe('and click next', function() {
		it('should change view to next month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-button-next').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2010-03-01');
		});
	});

	describe('and click prev', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-button-prev').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2010-01-01');
		});
	});

	describe('and click prevYear', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-button-prevYear').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2009-02-01');
		});
	});

	describe('and click nextYear', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-button-nextYear').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2011-02-01');
		});
	});

	describe('and click today', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-button-today').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualNow();
		});
	});
});
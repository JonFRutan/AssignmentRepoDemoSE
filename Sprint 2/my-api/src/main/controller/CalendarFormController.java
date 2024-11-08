import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class CalendarFormController {

	@PostMapping("/submit-form")
	public String handleFormSubmission(@RequestBody ReportLog reportLog) {
		doStuff(reportLog);
		return "Form submission successful.";
	}

	private void doStuff(ReportLog reportLog) {
		// Here we need to implement a connection to our database
	}
}

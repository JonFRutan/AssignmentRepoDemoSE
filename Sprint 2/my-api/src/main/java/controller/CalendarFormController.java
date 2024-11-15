package cmsc.app;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/logs")

public class CalendarFormController {
	@PostMapping("/submit-form")
	public String handleFormSubmission(@RequestBody ReportLog reportLog) {
		doStuff(reportLog);
		return "Form submission successful.";
	}

//FIXME
//Check to see what values are being created in the JSON file, see if the JSON file is being properly filled out,
//And check to see if ReportLog has acceptable getters/setters, and how to handle invalid object setting.

	private void doStuff(ReportLog reportLog) {
		System.out.println("Hello, ReportLog!");
	}
}

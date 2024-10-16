public class emailSender {
    import javax.mail.*;
    import javax.mail.internet.*;
    import java.util.Properties;

    public class emailSender{
        public static void sendEmail(String recipient, String link) {
            properties emailProperties = new Properties();

            //Properties appears to be a dictionary-like class that takes two strings.
            //This section declares a bunch of stuff for our mail server
            emailProperties.put("mail.smtp.auth", "true");
            emailProperties.put("mail.smtp.starttls.enable", "true");
            emailProperties.put("mail.smtp.host", "smtp.gmail.com");
            emailProperties.put("mail.smtp.port", "587");

            final String companyEmail = "INST";         //FIXME
            final String companyEmailPass = "INST";     //FIXME

            Session authenticatedSession = Session.getInstance(emailProperties, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication () {
                    return new PasswordAuthentication(companyEmail, companyEmailPass);
                }
            });

            //Finish
        }
    }
}
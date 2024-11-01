import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

    public class emailSender{
        public static void sendEmail(String customerEmail, String link) {
            Properties emailProperties = new Properties();

            //Properties appears to be a dictionary-like class that takes two strings.
            //This section declares a bunch of stuff for our mail server
            emailProperties.put("mail.smtp.auth", "true");
            emailProperties.put("mail.smtp.starttls.enable", "true");
            emailProperties.put("mail.smtp.host", "smtp.gmail.com");
            emailProperties.put("mail.smtp.port", "587");

            final String companyEmail = "StrictlyEthicalWebservices@gmail.com";
            final String companyEmailPass = "hrhijpimlxqzznul";

            Session authenticatedSession = Session.getInstance(emailProperties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(companyEmail, companyEmailPass);
                }
            });

            try {

                Message confirmationEmail = new MimeMessage(authenticatedSession);
                confirmationEmail.setFrom(new InternetAddress(companyEmail));
                confirmationEmail.setRecipients(Message.RecipientType.TO, InternetAddress.parse(customerEmail));
                //I think parse will take multiple args if you need to send multiple emails?(Check))
                confirmationEmail.setSubject("DO YOU WANT TO MAKE MONEY FAST!?!?");  //FIXME

                String emailContent = link;     //FIXME


                confirmationEmail.setContent(emailContent, "text/html");


                Transport.send(confirmationEmail);
                System.out.println("Sent!");
            }
            catch (Exception e){
                e.printStackTrace();
            }

            //Finish
        }
    }

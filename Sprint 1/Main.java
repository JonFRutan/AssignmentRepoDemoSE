//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class Main {
    public static void main(String[] args) {

        //emailSender email = new emailSender();
        String name = "";
        String password = "";
        String email = "";
        long phoneNumber = 0L;
        String birthday = "";
        User.java user = new User.java(name, password, email, phoneNumber, birthday);
        System.out.println(user.getPassword());


        emailSender.sendEmail("gageswanston@gmail.com", "TEST");


    }
}

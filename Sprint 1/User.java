import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class User {

    // Declare variables
    private String firstName = "";
    private String lastName = "";
    private String password = "";
    private String email = "";
    private long phoneNumber = 0L;
    private String birthday = "";
    private ArrayList<Medication> medsList = new ArrayList<Medication>();
    // private long NPI = 0L; <- not using this anymore

    // Getters and Setters

    User () {

    }

    // User (String firstName, String lastName, String password, String email,long phoneNumber, String birthday) {

    //      this.firstName = firstName;
    //      this.lastName = lastName;
    //      this.password = password;
    //      this.email = email;
    //      this.phoneNumber = phoneNumber;
    //      this.birthday = birthday;

    // }

    // User(String firstName, String lastName, String password, String email, String birthday){

    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.password = password;
    //     this.email = email;
    //     this.birthday = birthday;

    // }


    // User(String firstName, String lastName, String password, long phoneNumber, String birthday){

    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.password = password;
    //     this.phoneNumber = phoneNumber;
    //     this.birthday = birthday;

    // }
    public boolean setPassword(String password){

         if(password != null && password.length() < 30 && password.length() > 10){
             this.password = password;
             return true;
         }

         return false;
    }

    public boolean setFirstName(String Firstname){
        if(firstName == null || firstName.equals("")) {
            return false;
        }
        this.firstName = firstName;
        return true;
    }

    public boolean setLastName(String LastName){
        if(lastName == null || lastName.equals("")) {
            return false;
        }
        this.lastName = lastName;
        return true;
    }

    public boolean setEmail(String email){
         this.email = email;
         return true;
    }

    public boolean setBirthday(String birthday){
         this.birthday = birthday;
         return true;
    }
    public boolean setPhoneNumber(long phoneNumber){

         if(phoneNumber > 9999999999L || phoneNumber < 100000000){
             return false;
         }
         this.phoneNumber = phoneNumber;
         return true;
    }
    public String getPassword(){
         return password;
    }

    public boolean addMedication (String medName, int dosage){
        if (medName == null || medName.equals("")) {
            return false;
        }
        Medication meds = new(medName, dosage);
        medsList.add(meds);
        return true;
    }
    public boolean removeMedication (String medName) {
        return this.medsList.remove(medName);
    }
    public void removeMedication (String name){
        for(int i = 0; )
    }

    public String getFirstName(){
         return firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public String getEmail(){
         return email;
    }
    public String getBirthday(){
         return birthday;
    }
    public long getPhoneNumber(){
         return phoneNumber;
    }
}
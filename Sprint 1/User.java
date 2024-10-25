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
        return;
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

    /**
     *
     * @param password
     * @return
     */
    public boolean setPassword(String password){

         if(password != null && password.length() < 30 && password.length() > 10){
             this.password = password;
             return true;
         }

         return false;
    }

    /**
     *
     * @param Firstname
     * @return
     */
    public boolean setFirstName(String firststName){
        if(firstName == null || firstName.equals("")) {
            return false;
        }

        this.firstName = firstName.trim().substring(0,1).toUpperCase() + firststName.trim().substring(1).toLowerCase();
        return true;
    }

    /**
     *
     * @param LastName
     * @return
     */
    public boolean setLastName(String lastName){
        if(lastName == null || lastName.equals("")) {
            return false;
        }
        this.lastName = lastName.trim().substring(0,1).toUpperCase() + lastName.trim().substring(1).toLowerCase();
        return true;
    }

    /**
     *
     * @param email
     * @return
     */
    public boolean setEmail(String email) {
         this.email = email;
         return true;
    }

    /**
     *
     * @param birthday
     * @return
     */
    public boolean setBirthday(String birthday){
         this.birthday = birthday;
         return true;
    }

    /**
     *
     * @param phoneNumber
     * @return
     */
    public boolean setPhoneNumber(long phoneNumber){
         if(phoneNumber > 9999999999L || phoneNumber < 100000000){
             return false;
         }
         this.phoneNumber = phoneNumber;
         return true;
    }
    public String getPassword() {
        return password;
    }

    /**
     *
     * @param medName
     * @param dosage
     * @return
     */
    public boolean addMedication (String medName, int dosage){
        if (medName == null || medName.equals("")) {
            return false;
        }
        Medication meds = new Medication(medName, dosage);
        medsList.add(meds);
        return true;
    }

    /** public boolean removeMedication (String medName) {
        return this.medsList.remove(medName);

    /**
     * Getters and setters for each
     * @return
     */
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

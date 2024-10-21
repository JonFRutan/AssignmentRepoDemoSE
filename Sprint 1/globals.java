public class globals {
    public static final String emailPattern = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$"; //email regex
    public static final String phonePattern = "^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$"; //phone regex

}
public class Medication {
    private String name;
    private int dosage;

    public Medication(String name, int dosage){
        this.name = name;
        this.dosage = dosage;
    }
    public Medication(String name){
        dosage = 0;
        this.name = name;
    }

    public String getMedicationName() {
        return this.name;
    }

    public int getDosage() {
        return this.dosage.
    }

}
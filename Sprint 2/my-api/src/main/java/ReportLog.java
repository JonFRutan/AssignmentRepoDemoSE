package cmsc.app;
public class ReportLog{
    private int weight = 0; //optional
    private String additionalObservations = ""; //optional
    private int qualityOfLife = 0;
    private int regimenSatisfaction = 0;
    private int socialQuality = 0;

    public ReportLog(){
    
    }

    public boolean ReportLog(int qualityOfLife, int regimenSatisfaction, int socialQuality){
        if(checkMetric(qualityOfLife, regimenSatisfaction, socialQuality)){
            this.socialQuality = socialQuality;
            this.qualityOfLife = qualityOfLife;
            this.regimenSatisfaction = regimenSatisfaction;
            return true;
        } else {
            return false;
        }

    }

    public boolean setQualityOfLife(int qualityOfLife){
        this.qualityOfLife = qualityOfLife;
        return true;
    }

    public boolean setRegimenSatisfaction(int regimenSatisfaction){
        this.regimenSatisfaction = regimenSatisfaction;
        return true;
    }

    public boolean setSocialQuality(int socialQuality){
        this.socialQuality = socialQuality;
        return true;
    }

    public void setAdditionalObservations (String additionalObservations){
        this.additionalObservations = additionalObservations;
        //shouldnt be boolean, optional
    }

    public void setWeight(int weight){
        // checks if the weight is in the range, if not it stays as 0 (optional)
        if(checkWeight(weight) == false){
            this.weight = 0;
    }
        // otherwise sets valid weight to weight
        this.weight = weight;
    }
    
    public boolean checkMetric(int socialQuality, int qualityOfLife, int regimenSatisfaction){
        int[] checkingMetric = {socialQuality, qualityOfLife, regimenSatisfaction};
        for(int i = 0; i < checkingMetric.length; i++){
            if(!(checkingMetric[i] >= 0 && checkingMetric[i] <= 10)){
                return false;
            }
        }
        return true;
    }

    public boolean checkWeight(int weight){
        if(!(weight >= 50 && weight <= 1000)){
            return false;
        }
        return true;
    }

    public String getValues() {
        return "Social: " + this.socialQuality + " QoL:" + this.qualityOfLife + " regSat: " + this.regimenSatisfaction + " Other: " + this.additionalObservations;
    }

}

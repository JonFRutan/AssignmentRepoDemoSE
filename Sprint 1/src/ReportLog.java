public class ReportLog{
    private int weight = 0; //optional
    private String additionalObservations = ""; //optional
    private int qualityOfLife = 0;
    private int regimenSatisfaction = 0;
    private int socialQuality = 0;

    public ReportLog() {

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



    public boolean setAdditionalObservations(String statement){
        if(statement == null){
        return false;
    }
        additionalObservations = statement;
        return true;
    }

    public boolean setWeight(int weight){
        if(checkWeight(weight) == false){
            return false;
    }
        this.weight = weight;
        return true;
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

}

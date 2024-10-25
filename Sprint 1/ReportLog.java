public class ReportLog{
    private int weight = -1; //optional
    private String additionalObservations = "";
    private int qualityOfLife = -1;
    private int regimenSatisfaction = -1;
    private int socialQuality = -1;

    public boolean ReportLog(int weight, String additionalObservations, int qualityOfLife, int regimenSatisfaction, int socialQuality){
        if(checkMetric(qualityOfLife, regimenSatisfaction, socialQuality) && (checkWeight(weight))){
            this.socialQuality = socialQuality;
            this.qualityOfLife = qualityOfLife;
            this.regimenSatisfaction = regimenSatisfaction;
            this.weight = weight;
            this.additionalObservations = additionalObservations;

            return true;
        } else {
            return false;
        }
    }

    public boolean ReportLog(int weight, int qualityOfLife, int regimenSatisfaction, int socialQuality){
        if(checkMetric(qualityOfLife, regimenSatisfaction, socialQuality) && (checkWeight(weight))){
            this.socialQuality = socialQuality;
            this.qualityOfLife = qualityOfLife;
            this.regimenSatisfaction = regimenSatisfaction;
            this.weight = weight;

            return true;
        } else {
            return false;
        }

    }

    public boolean ReportLog(String additionalObservations, int qualityOfLife, int regimenSatisfaction, int socialQuality){
        if(checkMetric(qualityOfLife, regimenSatisfaction, socialQuality)){
            this.socialQuality = socialQuality;
            this.qualityOfLife = qualityOfLife;
            this.regimenSatisfaction = regimenSatisfaction;

            return true;
        } else {
            return false;
        }


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

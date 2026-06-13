export interface HealthScore {

    score: number;

    status:
        | "Excellent"
        | "Good"
        | "Warning"
        | "Critical";

    reasons: string[];

}
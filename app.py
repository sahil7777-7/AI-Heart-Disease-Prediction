from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load Model
model = joblib.load("heart_model.pkl")

# Load Encoders
le_sex = joblib.load("le_sex.pkl")
le_family = joblib.load("le_family.pkl")
le_smoker = joblib.load("le_smoker.pkl")
le_wearable = joblib.load("le_wearable.pkl")
le_chest = joblib.load("le_chest.pkl")

feature_columns = [
    "age",
    "sex",
    "resting_bp_systolic",
    "resting_bp_diastolic",
    "cholesterol_total",
    "hdl",
    "ldl",
    "triglycerides",
    "fasting_blood_sugar",
    "hba1c",
    "bmi",
    "resting_heart_rate",
    "max_heart_rate_achieved",
    "chest_pain_type",
    "exercise_induced_angina",
    "st_depression",
    "family_history",
    "smoker_status",
    "alcohol_units_per_week",
    "exercise_minutes_per_week",
    "sleep_hours",
    "stress_score",
    "wearable_owner",
    "daily_steps",
    "diet_quality_score"
]



@app.route('/',methods=['GET'])
def welcome():
    return "Welcome"



@app.route('/predict',methods=['POST'])
def predict():
    data = request.get_json(force=True)
    df = pd.DataFrame([data])
    
    df["sex"] = le_sex.transform(df["sex"])
    df["family_history"] = le_family.transform(df["family_history"])
    df["smoker_status"] = le_smoker.transform(df["smoker_status"])
    df["wearable_owner"] = le_wearable.transform(df["wearable_owner"])
    df["chest_pain_type"] = le_chest.transform(df["chest_pain_type"])
    df["exercise_induced_angina"] = df["exercise_induced_angina"].astype(int)
    
    
    prediction = model.predict(df)[0]
    problety=model.predict_proba(df)[0]
    
    confidence = round(max(probability) * 100, 2)
    
    return jsonify({
    "prediction": result,
    "confidence": confidence
    })
if __name__=="__main__":
    app.run(debug=True)
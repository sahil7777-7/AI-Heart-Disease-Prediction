import pandas as pd
import numpy as np
import joblib


df = pd.read_csv("heart_disease_risk_2026.csv")

from sklearn.preprocessing import LabelEncoder

le_sex = LabelEncoder()
df["sex"] = le_sex.fit_transform(df["sex"])

le_family = LabelEncoder()
df["family_history"] = le_family.fit_transform(df["family_history"])

le_smoker = LabelEncoder()
df["smoker_status"] = le_smoker.fit_transform(df["smoker_status"])

le_wearable = LabelEncoder()
df["wearable_owner"] = le_wearable.fit_transform(df["wearable_owner"])

le_chest = LabelEncoder()
df["chest_pain_type"] = le_chest.fit_transform(df["chest_pain_type"])


df["exercise_induced_angina"] = df["exercise_induced_angina"].astype(int)


x = df[[
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
]]


y = df["has_heart_disease"]


from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(
    x,
    y,
    test_size=0.2,
    random_state=42
)

# Model
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(x_train, y_train)


# y_pred = model.predict(x_test)


# from sklearn.metrics import accuracy_score

# print("Accuracy :", accuracy_score(y_test, y_pred))


joblib.dump(model, "heart_model.pkl")

joblib.dump(le_sex, "le_sex.pkl")
joblib.dump(le_family, "le_family.pkl")
joblib.dump(le_smoker, "le_smoker.pkl")
joblib.dump(le_wearable, "le_wearable.pkl")
joblib.dump(le_chest, "le_chest.pkl")


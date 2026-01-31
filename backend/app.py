from flask import Flask, jsonify
from flask_cors import CORS   # 👈 import CORS
import pandas as pd
from prophet import Prophet

app = Flask(__name__)   # 👈 pehle app banao
CORS(app)               # 👈 phir CORS enable karo


def train_model():
    df = pd.read_csv("expenses.csv")
    df = df.rename(columns={"date": "ds", "amount": "y"})
    model = Prophet()
    model.fit(df)
    return model

@app.route("/predict", methods=["GET"])
def predict():
    model = train_model()
    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)
    predictions = forecast[["ds", "yhat", "yhat_lower", "yhat_upper"]].tail(30).to_dict(orient="records")
    return jsonify(predictions)

@app.route("/predict/monthly", methods=["GET"])
def predict_monthly():
    model = train_model()
    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)
    avg_monthly = forecast.tail(30)["yhat"].mean()
    return jsonify({"monthly_prediction": avg_monthly})

@app.route("/predict/yearly", methods=["GET"])
def predict_yearly():
    model = train_model()
    future = model.make_future_dataframe(periods=365)
    forecast = model.predict(future)
    yearly_total = forecast.tail(365)["yhat"].sum()
    return jsonify({"yearly_prediction": yearly_total})

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import pandas as pd
from prophet import Prophet
from fpdf import FPDF
import os

app = Flask(__name__)
CORS(app)

# ------------------- ML Model -------------------
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
    predictions = forecast[["ds", "yhat", "yhat_lower", "yhat_upper"]] \
        .tail(30).to_dict(orient="records")
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


# ------------------- Expenses CRUD -------------------
def load_expenses():
    return pd.read_csv("expenses.csv")

def save_expenses(df):
    df.to_csv("expenses.csv", index=False)


@app.route("/expenses", methods=["GET"])
def view_expenses():
    df = load_expenses()
    return jsonify(df.to_dict(orient="records"))


@app.route("/expenses/update", methods=["POST"])
def update_expense():
    data = request.json
    df = load_expenses()

    mask = df["date"] == data["date"]
    if mask.any():
        if "amount" in data:
            df.loc[mask, "amount"] = data["amount"]
        if "category" in data:
            df.loc[mask, "category"] = data["category"]
        save_expenses(df)
        return jsonify({"message": "Expense updated successfully"})
    else:
        return jsonify({"error": "Expense not found"}), 404


# ------------------- PDF EXPORT -------------------
@app.route("/export/pdf", methods=["GET"])
def export_pdf():
    df = pd.read_csv("expenses.csv")

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=10)

    # Title
    pdf.cell(0, 10, "Expense Report", ln=True, align="C")
    pdf.ln(5)

    # Table Header
    for col in df.columns:
        pdf.cell(40, 8, col.upper(), border=1)
    pdf.ln()

    # Table Data
    for _, row in df.iterrows():
        for value in row:
            pdf.cell(40, 8, str(value), border=1)
        pdf.ln()

    file_name = "expenses_report.pdf"
    pdf.output(file_name)

    return send_file(
        file_name,
        as_attachment=True,
        download_name=file_name
    )


# ------------------- Run Server -------------------
if __name__ == "__main__":
    app.run(debug=True)

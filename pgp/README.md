# Cloud Cost Tracker & Anomaly Detector

This project simulates a FinOps scenario where cloud billing data is analyzed to:
- Calculate total and service-wise cost
- Visualize daily trends
- Detect cost anomalies using AI (Isolation Forest)

## Files:
- `billing_data.csv`: Sample cloud billing data
- `cost_analysis.py`: Calculates total cost, service-wise spending & graphs
- `anomaly_detector.py`: Flags unusual cost spikes
- `cost_trend.png`: Graph of daily cost trend

## Technologies Used:
- Python
- Pandas
- Matplotlib
- Scikit-learn

## Output Example:
- Total Cloud Cost: ₹1330
- Highest Service Spend: Compute Engine
- Anomalies Detected on: 4 July (₹500), 10 July (₹550)

import pandas as pd

data_csv = pd.read_csv("Industry_grouping1.csv")

data_csv.to_json("ESG_Industry_Table.json")

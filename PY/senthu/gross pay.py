basic = int(input("basic salary:"))
HRD = 0
DA = 0

if (basic <= 10000):
    HRD = basic*0.20
    DA = basic*0.80
elif (basic <= 20000):
    HRD = basic*0.25
    DA = basic*0.90
else:
    HRD = basic*0.30
    DA = basic*0.95

gross = basic + HRD + DA

print(gross)

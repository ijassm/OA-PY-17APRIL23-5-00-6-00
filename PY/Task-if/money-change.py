money = 5428
output = money
rs2000 = rs500 = rs200 = rs100 = rs50 = rs20 = rs10 = rs5 = rs2 = rs1 = 0

if (money >= 2000):
    rs2000 = money // 2000
    money = money % 2000

if (money >= 500):
    rs500 = money // 500
    money = money % 500


if (money >= 200):
    rs200 = money // 200
    money = money % 200

if (money >= 100):
    rs100 = money // 100
    money = money % 100

if (money >= 50):
    rs50 = money // 50
    money = money % 50


if (money >= 20):
    rs20 = money // 20
    money = money % 20


if (money >= 10):
    rs10 = money // 10
    money = money % 10

if (money >= 5):
    rs5 = money // 5
    money = money % 5


if (money >= 2):
    rs2 = money // 2
    money = money % 2


if (money >= 1):
    rs1 = money // 1
    money = money % 1

print(f"change for Rs{output}")
print(f"Rs 2000  {rs2000}")
print(f"Rs 500   {rs500}")
print(f"Rs 200   {rs200}")
print(f"Rs 100   {rs100}")
print(f"Rs 50    {rs50}")
print(f"Rs 20    {rs20}")
print(f"Rs 10    {rs10}")
print(f"Rs 5     {rs5}")
print(f"Rs 2     {rs2}")
print(f"Rs 1     {rs1}")

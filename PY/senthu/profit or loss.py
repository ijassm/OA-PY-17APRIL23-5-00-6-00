currentamt = int(input("Enter the product price:"))
sellingamt = int(input("Enter the selling price:"))
if (currentamt > sellingamt):
    price = currentamt-sellingamt
    print("your loss is:", price)
elif (sellingamt > currentamt):
    price = sellingamt-currentamt
    print("your profit is:", price)
else:
    print("no profit and no loss")

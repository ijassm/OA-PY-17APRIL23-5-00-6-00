def armstrong():
    number = int(input("Enter the no:"))
    value=0
    temp=number
    while(temp>0):
        digit=temp%10
        value=value+digit**3
        temp=temp//10
    if number == value:
        print("it is armstrong no")
    else:
        print("it is not amstrong no")
armstrong()
        
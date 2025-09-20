for x in range(0, 9 + 1, 1):
    print("Enter " + str(x + 1) + "number of 10")
    number = int(input())
    if x == 0:
        biggestNumber = number
    else:
        if number > biggestNumber:
            biggestNumber = number
print("Biggest number is: " + str(biggestNumber))

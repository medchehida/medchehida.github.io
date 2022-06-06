supposenjib=input("How much in the MB2 : ")
supposenjib2=input("How much in ALGO : ")
algo=16.5
newalgo=(3.6+(float(supposenjib2)*0.6))*2
en=50.2
electro=30
mb=(0.4+1.05+(float(supposenjib)*0.5))*8
prog=53.25
projet=104.56
all=(algo+en+electro+mb+prog+projet)/30
all2=(newalgo+en+electro+mb+prog+projet)/30
print("MOY MB2:")
print(mb/8)
print("MOY ALGO:")
print(newalgo/2)
print("Moy sem2 with only MB2")
print(all)

print("Moy sem2 with MB2 and Algo")
print(all2)
f = open("26-61.txt")

n, smax = [int(x) for x in f.readline().split()]

v = []
k = []

for i in range(n):
    tmp = int(f.readline())
    if tmp > 100:
        v.append(tmp)
    else:
        k.append(tmp)

v.sort()
k.sort()

summ = 0
count_v = 0
count_k = 0

cv = 0
for i in range(len(v)):
    
    summ += v[i]
    #count_v = i  - ошибкa на единицу, нужно увеличивать значение на каждой итерации
    count_v += 1

    if summ > smax / 2:
        break

print("s" , summ)
summ1= 0

for i in range(len(k)):
    if summ + summ1 + k[i] > smax: 
         last = k[i]
         nlast = k[i+1]     # сохранить последний размер фото, который может поместиться в память(76)
         break
    summ1 += k[i]
    count_k += 1
    
main_count = count_v + count_k  #общее кол-во картинок и видеоё 

M = smax - summ - summ1 # кол-во свободных Кбайт (23)

#max_v = max(i for i in k if i <= M + last) # максимальный объём сохранённой картинки
print("nlast: ", nlast)


print("r ", smax // 2 - summ)

print("диск v:", summ, smax // 2, summ - smax // 2)
print("диск k:", summ1, smax // 2, smax - summ - summ1)
print("диск k:", *k[count_k:count_k + 4])
print(count_v + count_k + 2)
print(v[67])


print("smax", smax)
print("summ", summ)

print("summ1", summ1)

print("smax /2", smax // 2)

print("M", (summ - 102) - ((smax // 2) + 102))


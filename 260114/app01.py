# 변수
a = 1
print(a, type(a))

# 자료형
print(type(1))
print(type(1.0))
print(type(""))     # 편집과 특정 값 가져오기
print(type(True))
print(type(None))
print(type({}))
print(type(()))
print(type([]))

# 함수 생성
def fn():
    print("fn()")

def add(a,b): 
    return a + b

print(add(2,5)) # 7
print(add(b=3,a=6)) # 9

# 매개변수 초깃값 설정
def say_myself(name, age=20, man=True): #초기화하고 싶은 매개변수는 항상 뒤쪽에 위치
    print(f"나의 이름은 {name}입니다.")
    print(f"나이는 {age}입니다.")
    if man:
        print("남자입니다.")
    else:
        print("여자입니다.")

say_myself("이름", 33)


# 함수 사용
fn()

# 클래스 선언
class Aclass:
    def __init__(self):
        pass
    def add(self, a, b):
        return a + b
    def sub(self, a, b):
        return a - b
    
ac = Aclass()
print(ac.add(3,5), ac.sub(5,3))


# 제어문
# 조건문 (if, else, elif)
if 5 > 1:
    print("5가 크다.")    
elif 5 < 1:
    pass
else:
    pass

# 반복문 (for)
# for + range(0) [] () "" 모두 반복 안 함
for i in ():
    print(i)
    
arr = [1,2,3,4,5]
for i in range(len(arr)): # 인덱스 0, 1, 2, 3, 4
    print(i, arr[i])
    
arr = [[1, 2], [1], [1, 2, 3]]
for y in arr: # js와 다르게 인덱스가 아닌 값이 나옴
    for x in y:
        print(x, y)
        
for y in range(len(arr)): # 인덱스
    for x in range(len(arr[y])):
        print(y, x, arr[y][x])
        
문자열 = "나는 한국인이다."
print(문자열[3:5])      # 슬라이싱
print(문자열[:4])

arr1 = {}
arr2 = dict()   # 함수 : 형변환 함수
print(type(arr1), type(arr2))

print(type(int("1")))

print(10 == "10") # 거짓
print(10 == int("10")) # 참

obj = {}
obj["key"] = 10
print(obj, type(obj))

arr = [0]
arr[0] = 10
print(arr, type(arr))

arr = [1,2,3,11,32]
arr[0] = 10
print(arr, type(arr))

arr = list()
arr.append(10)
print(arr, type(arr))
arr[0] = 20
print(arr, type(arr))

t = (1,2)
arr = list(t)
arr.append(10)
# t[0] = 10
t = tuple(arr)
print(type(t), t)

arr2 = set(t)
arr3 = set(arr)
print(arr2, arr3)
print(arr2 | arr3)

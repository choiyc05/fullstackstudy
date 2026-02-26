# 260120

    WEB_STUDY/database/study02
    https://mariadb.com/docs/server // 명령어 참고

> `LIMIT` 알아보기

- 문법 1: LIMIT 몇 개
- 문법 2: LIMIT offset, 몇 개
- offset은 **0부터 시작**

```sql
select * from employees limit 3;
```

```sql
select * from employees limit 4, 3; # 5순위부터 3개
```

> `SUBSTR`
- 문자열을 자르는 SUBSTR 함수
```sql
WHERE SUBSTR(hire_date, 1, 4) >= 1986
```
hire_date 컬럼의 데이터(예: '1986-06-26')에서 1번째 글자부터 4글자를 자릅니다.


> Python to mariaDB   
    https://mariadb.com/resources/blog/how-to-connect-python-programs-to-mariadb/

    $ pip3 install mariadb
    
    uv init . 으로 설치 시 
    $ uv add mariadb

    
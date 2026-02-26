# 260119
    참고 : kdata데이터자격검정
## DB
    - 이름 짓기 : 스네이크 주로 사용 ( ex. emp_no)
    - schema / domain 구분
    1. 스키마 (Schema): "전체적인 설계도"
    스키마는 데이터베이스의 구조를 정의한 것입니다. 
    포함 내용: 테이블 이름, 컬럼 이름, 데이터 타입(숫자인지 문자인지), 테이블 간의 관계(FK).
    특징: 한 번 정하면 자주 바뀌지 않는 정적인 뼈대입니다.

    2. 도메인 (Domain): "들어갈 값의 자격"
    도메인은 하나의 속성(Attribute, 컬럼)이 가질 수 있는 원자 값들의 집합입니다. 즉, "이 칸에는 오직 이런 성격의 값들만 들어올 수 있어"라고 지정한 값의 범위입니다.
    포함 내용: 데이터 타입 + 제약 조건(길이, 범위, 기본값 등).
    특징: 데이터의 무결성(정확한 값만 들어오게 함)을 지키기 위한 핵심 개념입니다.

    - 테이블 / 뷰

| 구분 | 테이블(Table) | 뷰 (View)
| :--- | :--- | :--- |
|실체|물리적인 저장소 (진짜 상자)|저장된 SQL 쿼리 (거울/창문)|
|데이터 저장|실제로 저장함|저장하지 않음|
|저장 공간|하드디스크 용량 차지함|거의 차지하지 않음 (쿼리 텍스트만큼)|
|독립성|독자적으로 존재 가능|기반이 되는 테이블이 있어야 존재|
|주요 용도|데이터의 실제 보관|"보안, 복잡한 쿼리 단순화, 사용자 편의"|

    보안 (Security) : 예: 인사 테이블에 [이름, 주소, 급여, 주민번호]가 있을 때, 일반 사원은 [이름, 주소]만 볼 수 있도록 뷰를 만들어 공개합니다. 민감한 정보(급여, 주민번호)를 숨길 수 있습니다.
    단순성 (Simplicity): 테이블 5개를 조인(Join)해야 하는 복잡한 쿼리를 미리 뷰로 만들어 두면, 나중에는 SELECT * FROM 뷰이름 한 줄로 결과를 바로 볼 수 있습니다.
    독립성: 원본 테이블의 구조가 살짝 바뀌어도 뷰의 쿼리만 수정하면 사용자에게는 똑같은 화면을 보여줄 수 있어 편리합니다.

    - 프로시저 (procedure) : 절차
    프로시저: 특정 로직을 '수행'하는 것이 주 목적 (반환값이 없을 수도 있음)
    함수: 계산된 결과값을 '리턴'하는 것이 주 목적 (반환값이 반드시 있음)

    - SQL ( Structuered Query Language )


## DB 연습

```sql
USE edu;

-- 전체 사용 가져오기
SELECT * FROM edu.employees;

-- 1. 사원의 이름, 성별 정보 추출
SELECT first_name, last_name, gender
	FROM edu.employees;
	
-- 2. 부서의 부서번호, 부서명 추출
SELECT dept_no, dept_name # departments에 dept_no, dept_name만 있으므로 *만해도 결과는 동일
	FROM edu.departments;
	
-- 3. 사원의 사원번호, 연봉 추출
SELECT emp_no, salary
	FROM edu.salaries;
	
-- 4. 사원의 이름과 연봉 추출
-- employyes, salaries
SELECT e.first_name,
		 e.last_name,
		 s.salary
	FROM edu.employees AS e
	inner join edu.salaries AS s
	ON (e.emp_no = s.emp_no)
;

-- 5. 사원 중 남자의 연봉 추출
SELECT e.first_name,
		 e.last_name,
		 e.gender,
		 s.salary
	FROM edu.employees AS e
	inner join edu.salaries AS s
	ON (e.emp_no = s.emp_no)
WHERE e.gender <> 'M'		# 조건 추가 / !=, <> 모두 부정
;

-- 6. 여성 사원 중 연봉이 7만 이상인 사원 추출	
SELECT e.emp_no,
		 e.first_name,
		 e.last_name,
		 e.gender,
		 s.salary
	FROM edu.employees AS e
	inner join edu.salaries AS s
	ON (e.emp_no = s.emp_no)
    WHERE e.gender = 'F'
	AND s.salary >= 70000 # 7만 이상
	AND s.to_date = '9999-01-01'
;

-- 7. 여성 사원 중 연봉 협상이 가장 많은 사원 추출
SELECT e.first_name,e.last_name,s.emp_no,e.gender, COUNT(s.emp_no) AS cnt
	FROM edu.salaries AS s
	INNER JOIN edu.employees AS e
	ON (s.emp_no = e.emp_no)
	WHERE e.gender = 'f'
	GROUP BY emp_no
	ORDER BY 5 DESC, 1;


```	


## db 연결

1. docker compose up -d (환경 실행)
	docker compose: 여러 개의 컨테이너를 정의하고 실행하는 도구인 'Docker Compose'를 사용하겠다는 의미입니다.
	up: docker-compose.yml 파일에 작성된 설정대로 컨테이너를 생성하고 실행합니다.
	-d: **Detached mode(백그라운드 실행)**를 뜻합니다. 이 옵션이 없으면 터미널에 로그가 계속 출력되어 다른 작업을 할 수 없지만, -d를 붙이면 컨테이너가 뒤에서 조용히 돌아가게 됩니다.

2. docker compose down (환경 종료 및 삭제)
	down: 실행 중인 컨테이너를 멈추고, 생성되었던 컨테이너와 네트워크를 완전히 삭제합니다.
	주의: 컨테이너 내부에 임시로 저장했던 설정이나 파일이 삭제될 수 있으므로, 데이터는 보통 'Volume' 설정을 통해 보존합니다.

3. docker exec -it mariadb /bin/bash (컨테이너 접속)
	이 명령어는 마치 실행 중인 가상 컴퓨터(컨테이너) 안으로 직접 들어가는 것과 같습니다.
	docker exec: 실행 중인(Running) 컨테이너에 특정 명령을 내리겠다는 선언입니다.

	-it: -i(interactive)와 -t(tty)의 조합입니다. 사용자가 컨테이너와 키보드로 대화(입력)할 수 있는 표준 입출력 상태를 만들어 줍니다. (이게 없으면 명령만 던지고 바로 빠져나오게 됩니다.)
	mariadb: 접속하려는 컨테이너의 이름입니다. (docker-compose.yml에서 설정한 이름)
	/bin/bash: 컨테이너 안에서 실행할 프로그램입니다. 여기서는 'Bash 쉘'을 실행하여 리눅스 터미널 환경으로 접속하라는 뜻입니다.

4. 컨테이너 내부 상태 확인 명령어
	whoami: "내가 누구인가?"를 묻는 명령어입니다. 현재 리눅스 시스템에 로그인된 사용자 계정 이름을 출력합니다. (도커 기본 설정이면 보통 root라고 나옵니다.)
	cd samples: samples라는 이름의 폴더(디렉토리)로 이동하라는 뜻입니다. (cd = Change Directory)
	ls -l: 현재 폴더 안에 있는 파일 목록을 상세하게(-l) 보여달라는 명령어입니다. 여기서 덤프 파일(.sql) 등이 있는지 확인하려는 용도입니다.

5. MariaDB 접속 및 데이터 확인
	mariadb -u root -p edu: MariaDB 엔진에 접속하는 명령어입니다.
	-u root: root 계정으로 접속하겠다.
	-p: 비밀번호를 입력하겠다.
	edu: 접속하자마자 **'edu'라는 이름의 데이터베이스(DB)**를 사용하겠다는 뜻입니다.
	password = 컴포즈 파일의 패스워드: 명령어 실행 후 비밀번호를 입력하라고 나오면, docker-compose.yml 파일 내 MYSQL_ROOT_PASSWORD에 적어둔 그 비밀번호를 입력하면 됩니다.
	show tables ;: 현재 접속한 DB(edu) 안에 들어있는 테이블(표)들의 목록을 보여달라는 SQL 명령어입니다.

6. 샘플즈폴더 - 덤프 파일 내용을 한 줄씩 실행
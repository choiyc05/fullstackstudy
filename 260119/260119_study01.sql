salarieseduemployeesUSE edu;

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
WHERE e.gender <> 'M'		# 조건 추가 / !=, <> : 아닌 것, =
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
	AND s.to_date = '9999-01-01' # 최근의 연봉
;

-- 7. 여성 사원 중 연봉 협상이 가장 많은 사원 추출
SELECT e.first_name,e.last_name,s.emp_no,e.gender, COUNT(s.emp_no) AS cnt
	FROM edu.salaries AS s
	INNER JOIN edu.employees AS e
	ON (s.emp_no = e.emp_no)
	WHERE e.gender = 'f'
	GROUP BY emp_no
	ORDER BY 5 DESC, 1;

SELECT e.emp_no, e.first_name, COUNT(s.emp_no) AS cnt
	FROM edu.employees AS e
INNER JOIN edu.salaries AS s
ON (e.emp_no = s.emp_no AND s.to_date != '9999-01-01' )
WHERE e.gender = 'F'
GROUP BY e.emp_no, e.first_name
ORDER BY 3 DESC, 1
LIMIT 5,5
;

SELECT emp_no, COUNT(emp_no) AS cnt
FROM edu.salaries
GROUP BY emp_no
HAVING cnt >= 18;

SELECT 
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1986-06-26') + # 서브 커리의 일종
(SELECT salary FROM edu.salaries WHERE emp_no = 10001 AND from_date = '1987-06-26') AS 합
;
 	
SELECT emp_no, salary, from_date FROM edu.salaries WHERE from_date = '1986-06-26';

SELECT emp_no, salary, from_date FROM edu.salaries WHERE from_date = '1987-06-26';

SELECT s.emp_no, s.from_date,
 (SELECT salary FROM edu.salaries WHERE from_date = '1986-06-26' AND emp_no = s.emp_no) AS y1986,
 (SELECT salary FROM edu.salaries WHERE from_date = '1987-06-26' AND emp_no = s.emp_no) AS y1987
 FROM edu.salaries AS s WHERE s.from_date = '1986-06-26';
 
SELECT s.emp_no, s.from_date,
 IFNULL((SELECT salary FROM edu.salaries WHERE from_date = '1986-06-26' AND emp_no = s.emp_no),0) AS y1986,
 (SELECT salary FROM edu.salaries WHERE from_date = '1987-06-26' AND emp_no = s.emp_no) AS y1987
 FROM edu.salaries AS s WHERE s.from_date = '1987-06-26';

SELECT emp_no, salary, salary + 10 as '10증가 값' from salaries;

SELECT emp_no, salary, salary * 1.1 as '10% 인상' from salaries  LIMIT 10;

SELECT distinct dept_no from dept_manager ORDER BY 1; 

SELECT dept_no from dept_manager WHERE dept_no NOT IN ('d001','d002','d003'); 

SELECT * FROM edu.employees WHERE first_name LIKE '__a%';

SELECT * FROM
(
SELECT NULL AS txt, '홍길동' AS NAME
UNION ALL
SELECT '가수' AS txt, 'IU' AS NAME
) AS t
WHERE t.txt IS NOT NULL
;

# 사번이 10001인 직원의 사번과 이름 조회
select emp_no, first_name from employees WHERE emp_no = 10001
;

# [문제 1] d005 부서 매니저의 사원번호, 부서번호 추출하시오.
select emp_no, dept_no from dept_manager WHERE dept_no = 'd005'
;

# [문제 2] d003 부서 소속(담당)이 아닌 매니저들의 사원번호, 부서번호 추출하시오.
select emp_no, dept_no from dept_manager WHERE dept_no <> 'd003'
;

# [문제 3] 연봉이 150,000 이상인 사원들의 사원번호, 연봉 추출하시오.
select emp_no, salary from salaries WHERE salary >= 150000
;

# [문제 4] 1986년 이후에 입사한 사원의 사원번호, 입사일, 이름 추출하시오.
select emp_no, hire_date, first_name from employees WHERE hire_date >= '1986-01-01'
;

# [문제 5] 1990년 이후부터 매니저로 근무하고 있는 사원들의 사원번호, 부서번호, 매니저 시작날짜 추출하시오.
select emp_no, dept_no, from_date from dept_manager WHERE from_date >= '1990-01-01'
;

# [문제 6] 1990년 이전 입사한 사원들의 사원번호, 입사일 추출하시오.
select emp_no, hire_date from employees WHERE hire_date < '1990-01-01'
;

# [문제 7] 1990년 이후 입사한 남자 사원의 사원번호, 성별, 입사일 추출
select emp_no, gender, hire_date from employees WHERE hire_date >= '1990-01-01' AND gender = 'M'
;

# [문제 8] 1990년 이후부터 연봉을 60,000 이상 받는 사원의 사원번호, 연봉, 연봉 시작일 추출
select emp_no, salary, from_date from salaries WHERE from_date >= '1990-01-01' AND salary >= 60000
;

# [문제 9] d001 부서와 d002 부서 매니저의 사원번호, 부서번호 추출
SELECT emp_no, dept_no FROM dept_manager WHERE dept_no IN ('d001', 'd002')
;

# [문제 10] 직책이 staff이거나 engineer인 사원의 사원번호, 직책 추출
select emp_no, title from titles WHERE title IN ('staff', 'engineer')
;

# [문제 11] d003 부서 소속(담당)이 아닌 매니저의 사원번호, 부서번호 추출
select emp_no, dept_no from dept_manager WHERE dept_no <> 'd003'
;

# [문제 12] 연봉이 60,000 이상 70,000 이하인 사원의 사번, 연봉 추출
select emp_no, salary from salaries WHERE salary BETWEEN 60000 AND 70000
;

# [문제 13] d001 부서와 d002 부서 매니저의 사번, 부서번호 추출
SELECT emp_no, dept_no FROM dept_manager WHERE dept_no IN ('d001', 'd002')
;

# [문제 14] d001 부서와 d002 부서가 아닌 매니저의 사번, 부서번호 추출
SELECT emp_no, dept_no FROM dept_manager WHERE dept_no NOT IN ('d001', 'd002')
;

# [문제 15] 이름이 B로 시작하는 사원의 사번, 이름 조회
SELECT emp_no, first_name FROM employees WHERE first_name LIKE 'B%'
;

# [문제 16] 이름의 두 번째 글자가 r인 사원의 사번, 이름 조회
SELECT emp_no, first_name FROM employees WHERE first_name LIKE '_r%'
;

# [문제 17] 이름이 i로 끝나는 사원의 사번, 이름 조회
SELECT emp_no, first_name FROM employees WHERE first_name LIKE '%i'
;

# [문제 18] 이름이 B로 시작하지 않는 사원의 사번, 이름 조회
SELECT emp_no, first_name FROM employees WHERE first_name NOT LIKE 'B%'
;
 
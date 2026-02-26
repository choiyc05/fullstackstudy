# [그룹함수] 집계함수

# 실습

# [문제 1] 총 사원(직원) 수
SELECT COUNT(emp_no) AS cnt FROM edu.employees;

# [문제 2] 직원들 연봉 전체 합, 최고 연봉, 최저 연봉
SELECT SUM(salary) AS 전체연봉합, MAX(salary) AS 최고연봉, MIN(salary) AS 최저연봉 FROM edu.salaries;

# [문제 3] 사원의 성별 수
SELECT gender, COUNT(gender) AS 수
	FROM edu.employees
	GROUP BY gender
	;

# [문제 4] 직책별 직원 수
SELECT title, COUNT(emp_no) AS 수 
	FROM titles
	GROUP BY title
	;

# [문제 5] d001, d002, d009 각 부서의 인원 수
SELECT dept_no, COUNT(dept_no) AS 수 
	FROM edu.dept_emp
	WHERE dept_no IN ('d001','d002','d009')
	GROUP BY dept_no
	;


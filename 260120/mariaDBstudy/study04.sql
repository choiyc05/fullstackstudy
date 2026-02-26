# join 실습

# [문제 1] 부서의 현재 매니저 정보만 조회
SELECT * FROM edu.departments WHERE dept_no = 'd001';
SELECT * FROM edu.dept_manager WHERE dept_no = 'd001';

SELECT d.dept_name, dm.emp_no
	FROM edu.dept_manager AS dm
	INNER JOIN edu.departments AS d
	ON (dm.dept_no = d.dept_no)
	WHERE dm.to_date = '9999-01-01'
;


# [문제 2] 사원의 사번, 이름, 직책 조회 단, 현재 직책만 조회
SELECT * FROM edu.employees;
SELECT * FROM edu.titles;

SELECT e.emp_no, e.first_name, e.last_name, t.title
	FROM edu.employees AS e
	INNER JOIN edu.titles AS t
	ON (e.emp_no = t.emp_no AND t.to_date = '9999-01-01')
;

# [문제 3] 1960년 이후 태어난 사원들의 사원 번호, 부서 번호 조회
SELECT * FROM edu.employees;
SELECT * FROM edu.dept_emp;

SELECT e.emp_no, de.dept_no, e.birth_date, SUBSTR(e.birth_date, 1, 4) AS 연도
	FROM edu.employees AS e
	INNER JOIN edu.dept_emp AS de
	ON (e.emp_no = de.emp_no) 
	where SUBSTR(e.birth_date, 1, 4) >= 1960
	ORDER BY 3;
;
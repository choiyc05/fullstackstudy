# DDL, DML, DCL

COMMIT;

ROLLBACK;

# 테이블 생성 CREATE
CREATE TABLE test(
	`no`			INT			NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name`		VARCHAR(20)	NOT NULL,
	`regdata`	DATETIME 	NOT NULLtest
);

DROP TABLE edu.test;		# AUTO_INCREMENT 초기화하려면 DROP 필요

TRUNCATE edu.test;		# TABLE이 있을 때만 DROP > CREATE 한 번에 처리

SELECT * FROM edu.test;

INSERT INTO edu.test
	(`name`, `regdate`)
VALUE 
	('이름',NOW());
	
# UPDATE
UPDATE edu.test 
SET `name` = '됐다'
WHERE `no` = 4
;test

# DELETE
DELETE FROM edu.test
WHERE `no` = 1
;

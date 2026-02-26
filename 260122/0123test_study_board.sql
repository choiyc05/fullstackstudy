COMMIT;

SELECT b.no , b.title, b.detail , u.`name`, b.regDate, b.modDate
FROM edu.ywboard AS b
INNER JOIN edu.ywuser AS u
ON (b.userNo = u.no)
WHERE b.detail = 0
;

SELECT * FROM team2.`user`;

INSERT INTO team2.`user`
(`name`,`email`,`password`,`gender`)
VALUE 
('윤우','ad@ad',1234,1)
;


USE edu;

CREATE TABLE study(
    `id`          INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `word`      VARCHAR(255)  NOT NULL,
    `regDate` DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM edu.study;

INSERT INTO edu.study
	(`word`)
VALUE ('테스트');

UPDATE edu.study
SET `word` = ''
WHERE `id` = ''
;

DELETE FROM edu.study
WHERE `id` = 13
;

COMMIT;

TRUNCATE edu.study;
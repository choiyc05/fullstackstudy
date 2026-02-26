-- CREATE TABLE `edu`.`user`(
--     `no`       INT             NOT NULL COMMENT '번호' AUTO_INCREMENT PRIMARY KEY,
--     `name`     VARCHAR(20)     NOT NULL COMMENT '이름',
--     `email`    VARCHAR(255)    NOT NULL COMMENT '이메일',
--     `password` VARCHAR(255)    NOT NULL COMMENT '비밀번호',
--     `gender`   BOOLEAN         NULL     COMMENT '성별(0:여자, 1:남자)',
--     `delYn`    BOOLEAN         NOT NULL COMMENT '탈퇴여부(0:회원, 1: 탈퇴)`' DEFAULT FALSE,
--     `regDate`  DATETIME        NOT NULL COMMENT '회원등록일자' DEFAULT CURRENT_TIMESTAMP,
--     `modDate`  DATETIME        NOT NULL COMMENT '회원정보수정일자' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE edu.board(
-- 	`no`			INT 				NOT NULL COMMENT '번호' AUTO_INCREMENT PRIMARY KEY,
-- 	`title`		VARCHAR(40)		NOT NULL	COMMENT '제목',
-- 	`detail` 	VARCHAR(255)	NULL 		COMMENT '내용',
-- 	`delYn`		BOOLEAN			NULL 		COMMENT '삭제여부(T,F)' DEFAULT FALSE,
-- 	`userNo`		INT				NOT NULL COMMENT '작성자번호',
-- 	`regDate`	DATETIME			NOT NULL COMMENT '회원등록일자' DEFAULT CURRENT_TIMESTAMP,
-- 	`modDate`	DATETIME 		NOT NULL COMMENT '회원정보수정일자' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	
-- 	CONSTRAINT FK_user_board FOREIGN KEY (`userNo`) REFERENCES `edu`.`user`(`no`)
-- );

-- INSERT INTO edu.ywuser
-- 	(`name`,`email`,`password`,`gender`)
-- VALUE ('이름','ad@ad','1234',1)
-- ;

-- COMMIT;


USE team2;

CREATE TABLE `user`(
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(150)  NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `gender` BOOL NULL,
    `delYn` BOOL NOT NULL DEFAULT FALSE,
    `regDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `post` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(40) NOT NULL,
    `content` VARCHAR(255) NULL,
    `delYn` BOOL NOT NULL DEFAULT FALSE,
    `user_no`INT NOT NULL,
    `regDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    CONSTRAINT `fk_post_user_no` FOREIGN KEY (`user_no`) REFERENCES `user` (`no`)

);
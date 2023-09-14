-- 12_Table_Alter_Exam.sql
-- 테이블 구조(설계:디자인) 연습문제
-- 1) DEPT 테이블을 생성하세요.
-- 단 , DEPT 이 있으면 삭제하고(DROP TABLE ~) 재생성하세요.
-- 컬럼명 : DNO   NUMBER(2)
--         DNAME VARCHAR2(14)
--         LOC   VARCHAR2(13)
DROP TABLE DEPT;
CREATE TABLE DEPT
AS
SELECT * FROM DEPARTMENT
WHERE 1=2;


-- 2) EMP 테이블을 생성하세요.
-- 단, EMP 테이블이 있으면 삭제하고(DROP TABLE ~) 재생성하세요.
-- 컬럼명 : ENO   NUMBER(4)
--         ENAME VARCHAR2(10)
--         DNO   NUMBER(2)
DROP TABLE EMP;
CREATE TABLE EMP
AS
SELECT * FROM EMPLOYEE
WHERE 1=2;

-- 3) EMP 테이블을 수정하세요.(ENAME 컬럼 크기)
-- 컬럼명 : ENO   NUMBER(4)
--         ENAME VARCHAR2(25)
--         DNO   NUMBER(2)
ALTER TABLE EMP MODIFY DNO NUMBER(4);
ALTER TABLE EMP MODIFY ENAME VARCHAR2(25);
ALTER TABLE EMP MODIFY DNO NUMBER(2);

DESC EMP;

-- 4) EMPLOYEE 테이블을 복사해서 EMPLOYEE2 테이블을 생성하되
--    사원번호, 이름, 급여, 부서번호 컬럼만 복사하고,
--    새로 생성된 테이블의 컬럼명은 각각 
--    EMP_ID, NAME, SAL, DEPT_ID로 지정하세요.
--   (데이터도 복사)
DROP TABLE EMP;
CREATE TABLE EMPLOYEE2(EMP_ID, NAME, SAL, DEPT_ID)
AS
SELECT ENO, ENAME, SALARY, DNO FROM EMPLOYEE;

-- 5) EMP 테이블을 삭제하세요.
DROP TABLE EMP;
-- 6) EMPLOYEE2란 이름을 EMP로 변경하세요.
RENAME EMPLOYEE2 TO EMP;
DESC EMP;
-- 7) DEPT 테이블에서 DNAME 컬럼을 제거하세요.
ALTER TABLE DEPT DROP COLUMN DNAME;
DESC DEPT;

-- 09_Table_CUD_2.sql
-- UPDATE(수정)
-- 대상 : DEPT_COPY 실습
SELECT * FROM DEPT_COPY;
-- 예제 1) 10 번 부서의 이름 수정하기 : 'ACCOUNTING' -> 'PROGRAMMING'
-- 사용법) UPDATE 테이블명
--        SET
--           컬럼명 = 변경할값
--        WHERE 컬러명 = 값; (조건)
UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING'
WHERE DNO = 10;

COMMIT;

-- 연습 1) 20번 부서 이름(DNAME) 수정하기 : 'HR'  (인력팀)
UPDATE DEPT_COPY
SET
    DNAME = 'HR'
WHERE DNO = 20;
SELECT * FROM DEPT_COPY; -- 결과 확인
COMMIT;  -- 영구반영

-- 연습(응용) 2) 컬럼 값을 여러개 수정하기
--        10 번 부서의 부서명을 'PROGRAMMING2', 부서위치를 'SEOUL' 로 수정하세요
-- 힌트) SET 컬럼명 = 값 , 컬럼명2 = 값2 ...
SELECT * FROM DEPT_COPY;
UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING2',
    LOC = 'SEOUL'
WHERE DNO = 10;
COMMIT;

-- 전체 부서에 대해서 수정하기
UPDATE DEPT_COPY
SET
    DNAME = 'PROGRAMMING2'
   ,LOC   = 'SEOUL';
ROLLBACK; -- 취소

-- 예제 4) 10번 부서의 지역명을 (20번 부서의 지역명)으로 수정하기
-- 힌트) 서브쿼리로 수정하기
-- 1) 20번 부서의(DNO) 지역명(LOC)
SELECT LOC FROM DEPT_COPY WHERE DNO = 20; -- DALLAS
-- 2) UPDATE
UPDATE DEPT_COPY
SET
    LOC = (SELECT LOC FROM DEPT_COPY WHERE DNO = 20)
WHERE DNO = 10;
SELECT * FROM DEPT_COPY; -- 결과 확인
COMMI0T; -- 영구 반영

-- 연습 3) 10 번 부서의 부서명, 지역명을 30번 부서의 부서명, 지역명으로 변경하기
-- 힌트) 서브쿼리
-- 1) 30번 부서의 부서명(DNAME), 지역명(LOC)
SELECT DNAME FROM DEPT_COPY WHERE DNO = 30; -- SALES
SELECT LOC FROM DEPT_COPY WHERE DNO = 30; -- CHICAGO

-- 2) update 
UPDATE DEPT_COPY
SET
    DNAME = (SELECT DNAME FROM DEPT_COPY WHERE DNO = 30)
    ,LOC = (SELECT LOC FROM DEPT_COPY WHERE DNO = 30)
WHERE DNO = 10;
SELECT * FROM DEPT_COPY;

-- 다른 풀이 : 결과 같음
UPDATE DEPT_COPY
SET
    (DNAME, LOC) = (SELECT DNAME, LOC FROM DEPT_COPY WHERE DNO = 30)
WHERE DNO = 10;


-- 연습 1) 영업부에(SALES) 에 근무하는 사원(DNO) 삭제하기
-- 힌트) 서브쿼리 사용해서 삭제
-- 1) 영업부에(SALES)에 해당하는 부서번호를 찾고 : 30
SELECT DNO FROM DEPT_COPY WHERE DNAME = 'SALES';
-- 2) 30 부서번호를 가진 사원을 삭제하기
DELETE DEPT_COPY
WHERE DNO = (SELECT DNO FROM DEPT_COPY WHERE DNAME = 'SALES');

-- 취소
ROLLBACK;
-- 영구 반영
COMMIT;
SELECT * FROM DEPT_COPY;

-- 기타 명령어
-- 테이블 설계구조 보기 : DESC 테이블명
DESC DEPT_COPY;




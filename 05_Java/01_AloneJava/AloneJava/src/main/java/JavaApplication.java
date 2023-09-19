import chap01.Sec0101;
import chap02.Sec0201;
import chap02.Sec0202;
import chap02.Sec0203;
import chap02.Sec0204;
import chap03.Sec0301;
import chap03.Verify03;
import chap04.Sec0401;
import chap04.Sec0402;
import chap04.Verify04;
import chap05.Sec0501;
import chap05.Sec0502;
import chap05.Sec0503;
import chap05.Verify05;

/**
 * packageName : PACKAGE_NAME
 * fileName : JavaApplication
 * author : GGG
 * date : 2023-09-18
 * description : 실행 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-18         GGG          최초 생성
 */
public class JavaApplication {
    public static void main(String[] args) {
//        객체 생성
//      사용법: 클래스명 객체변수 = new 생성자함수();
//      객체지향 코딩 : 아래처럼 코딩하는 것
//        주석 단축키 : ctrl + /
//        줄복사 : ctrl + d
//        Sec0101 sec0101 = new Sec0101();
////        sec0101.exam01(); // Hello World
//        sec0101.exam02(); // Hello World

//        객체지향 코딩 : 객체 생성해서 함수/변수 호출하는 코딩
//        Sec0201 sec0201 = new Sec0201();
//        sec0201.exam01(); //
//        sec0201.exam02(); //

//        Sec0202 sec0202 = new Sec0202();
////        sec0202.exam01();
////        sec0202.exam03();
////        sec0202.exam04(); // A
////        sec0202.exam05(); //
////        sec0202.exam06();
//        sec0202.exam07();

//        Sec0203 sec0203 = new Sec0203();
////        sec0203.exam01();
////        sec0203.exam02();
////        sec0203.exam06();
//        sec0203.exam07();
//
//        Sec0204 sec0204 = new Sec0204();
//        sec0204.exam05();

        Sec0301 sec0301 = new Sec0301();
//        sec0301.exam01();
//        sec0301.exam03();
//        sec0301.exam04();
//        sec0301.exam05();
//        sec0301.exam06();
//        sec0301.exam07();
//        sec0301.exam09();
//        sec0301.exam10();

        /**
         * 연습문제
         */
//        Verify03 verify03 = new Verify03();
////        verify03.exam01();
////        verify03.exam02();  // 314.0
////        verify03.exam03();

        /**
         * 섹션 4-1장 : 조건문
         */
//        Sec0401 sec0401 = new Sec0401();
////        sec0401.exam01();
////        sec0401.exam04();
//        sec0401.exam08();

        /**
         * 4-2장 : 반복문
         */
//        Sec0402 sec0402 = new Sec0402();
////        sec0402.exam01();
////        sec0402.exam02();  // 5050
////        sec0402.exam08();  // 5050
////        sec0402.exam09();  // 5050
//        sec0402.exam10();  // 5050

        /**
         * 4장 연습문제 : 조건문/반복문
         */
//        Verify04 verify04 = new Verify04();
////        verify04.exam02();  // 1683
////        verify04.exam03();
////        verify04.exam04();
//        verify04.exam05();

        /**
         * 5장 자바 메모리
         */
//        Sec0501 sec0501 = new Sec0501();
//        sec0501.stringEqualExam();

        /**
         * 5-2장 배열
         */
//        Sec0502 sec0502 = new Sec0502();
////        sec0502.getStudent();
////        sec0502.arrayFunc();
////        sec0502.arrayTwo();
////        sec0502.copyArray();
////        sec0502.AdvancedExam();'

        /**
         * 5-3 열거형
         */
        Sec0503 sec0503 = new Sec0503();
//        sec0503.EnumWeek();

        Verify05 verify05 = new Verify05();
//        verify05.exam04();
        verify05.exam05();

    }
}
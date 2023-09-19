package chap04;

import java.util.Scanner;

/**
 * packageName : chap04
 * fileName : Sec0402
 * author : GGG
 * date : 2023-09-19
 * description : 반복문
 * 요약 :
 * for(초기화식; 조건식; 증감식) {반복문;}
 * => 조건식이 true 일때만 반복문 실행
 * while문 : 초기화식;
 * while(조건식) {
 * 반복문;
 * 증감식;
 * }
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Sec0402 {

    /**
     * 예제 1 : 1 ~ 10까지 숫자를 화면에 출력하세요
     * 단, 반복문 이용
     */
    public void exam01() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }

    /**
     * 예제 2 : 1 ~ 100까지 합을 출력 : 반복문 이용
     */
    public void exam02() {
        int result = 0;
        for (int i = 1; i <= 100; i++) {
            result += i;
        }
        System.out.println(result);
    }

    /**
     * 예제 : 주사위 2편 : 주사위를 던져서 나오는 숫자를 계속 화면에 출력하되
     * 6이 나오면 반복문을 중단하고 빠져나오세요
     * 단, 빠져 나올때 프로그램종료 라고 출력하세요
     * 랜덤함수 : int num = (int)(Math.random()*6) + 1;
     * 힌트 : 무한루프 코딩후에 6이 나오면 break 빠져나오기
     */
    public void exam08() {
        while (true) {
            int num = (int) (Math.random() * 6) + 1;
            if (num != 6) {
                System.out.println(num + "입니다.");
            } else {
                System.out.println(num + "입니다.");
                break;
            }
            System.out.println();
//            if (num == 1) {
//                System.out.println("1 입니다.");
//            } else if (num == 2) {
//                System.out.println("2 입니다.");
//            } else if (num == 3) {
//                System.out.println("3 입니다.");
//            } else if (num == 4) {
//                System.out.println("4 입니다.");
//            } else if (num == 5) {
//                System.out.println("5 입니다.");
//            } else {
//                System.out.println("6 입니다. \n프로그램 종료");
//                break;
//            }
//            System.out.println();

        }
    }

    /**
     * 예제 9: 1 ~ 10 사이의 수 중에서 짝수만 출력하는 코드 : continue 문 사용하기
     * 힌트 : continue : 아래 실행을 skip하고 반복문 계속 진행시키기
     */
    public void exam09() {
//        TODO: fori : for 문 단축키
        for (int i = 1; i <= 10; i++) {
//            홀수는 출력 안함
            if(i%2 == 1) {
                continue; // 밑에 출력 명령문이 실행 안됨
            }
            System.out.println(i); // 출력
        }
    }

    /**
     * 새로나온 사용법 : 반복문의 라벨
     */

    public void exam10() {
        Outter:
        for (char upper = 'A'; upper <= 'Z'; upper++) {
            for (char lower = 'a'; lower <= 'z'; lower++) {
                System.out.println(upper + "-" + lower); // 화면 출력
//                g 가 나오면 (안쪽/바깥쪽 모두) 반복문 중단
                if(lower == 'g') {
                    break Outter; // 2중 반복문이 모두 중단됨
                }
            }
        }
        System.out.println("프로그램 종료");
    }

//    public String solution(String str1, String str2) {
//        Scanner scanner = new Scanner(System.in);
//        str1 = scanner.next();
//        str2 = scanner.next();
//        String answer = "";
//        for (String i = str1; i : str2 ; i++) {
//
//        }
//        return answer;
//    }
}


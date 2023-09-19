package chap04;

/**
 * packageName : chap04
 * fileName : Verify04
 * author : GGG
 * date : 2023-09-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-19         GGG          최초 생성
 */
public class Verify04 {

    /**
     * for문을 이용해서 1부터 100까지의 정수 중에서
     * 3의 배수의 총합을 구하는 코드를 작성해 보세요
     */
    public void exam02() {
        int result = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                result += i;
            }
        }
        System.out.println(result);
    }

    /**
     * while문과 Math.random() 함수를 이용해서 2개의 주사위를 던졌을 때
     * 나오는 눈을(눈1, 눈2) 형태로 출력하고,
     * 눈의 합이 5가 아니면 계속 주사위를 던지고,
     * 눈의 합이 5이면 실행을 멈추는 코드를 작성해 보세요.
     */
    public void exam03() {
        while (true) {
            int num = (int) (Math.random() * 6) + 1;
            int num2 = (int) (Math.random() * 6) + 1;
            if (num + num2 == 5) {
                System.out.println(num + " + " + num2 + " = " + (num + num2) + " 탈출");
                break;
            } else {
                System.out.println(num + " + " + num2 + " = " + (num + num2));
            }
        }
    }

    /**
     * 중첩 for문을 이용하여 방정식 4x + 5y = 60의 모든 해를 구해서 (x, y) 형태로 출력해 보세요.
     * 단, x와 y는 10 이하의 자연수입니다.
     */
    public void exam04() {
        for (int x = 1; x <= 10; x++) {
            for (int y = 1; y <= 10; y++) {
                if (4 * x + 5 * y == 60) {
                    System.out.println("(x, y) = (" + x + ", " + y + ")");
                }
            }
        }

    }

    /**
     * for문을 이용해서 다음과 같이 *를 출력하는 코드를 작성해 보세요.
     * 출력 : *
     *       **
     *       ***
     *       ****
     */
    public void exam05() {
        String result = "";
        for (int i = 0; i < 5; i++) {
            result += "*";
            System.out.println(result);
        }

    }

}



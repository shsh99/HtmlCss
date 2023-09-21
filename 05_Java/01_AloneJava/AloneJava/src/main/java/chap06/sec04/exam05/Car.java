package chap06.sec04.exam05;

/**
 * packageName : chap06.sec04.exam05
 * fileName : Car
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class Car {
    int speed = 10;
    void keyTurnOn() {
        System.out.println("키를 돌립니다.");
    }

    void run(int speed) {
        for (int i = 10; i <= speed; i=i+10) {
            System.out.println("달립니다.(시속:" + i + "km/h)");
        }

    }

    public int getSpeed(int speed) {
        return speed;
    }
}

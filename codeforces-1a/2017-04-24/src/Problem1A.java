import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;

public class Problem1A {

    public static long calculateFlagstonesNeeded(int n, int m, int a) {
        long numberOfFullFlagstonesInRow = n / a;
        long numberOfFullFlagstonesInColumn = m / a;
        long numberOfSplitFlagstonesInRow = (n % a > 0 ? 1 : 0);
        long numberOfSplitFlagstonesInColumn = (m % a > 0 ? 1 : 0);

        return (numberOfFullFlagstonesInColumn + numberOfSplitFlagstonesInColumn) *
                (numberOfFullFlagstonesInRow + numberOfSplitFlagstonesInRow);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));

        String line;
        while ((line = r.readLine()) != null) {
            String[] parts = line.split(" ");
            System.out.println(Long.toString(calculateFlagstonesNeeded(Integer.parseInt(parts[0]), Integer.parseInt(parts[1]), Integer.parseInt(parts[2]))));
        }
    }
}

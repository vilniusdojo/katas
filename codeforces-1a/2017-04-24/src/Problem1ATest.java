import org.junit.Test;

import java.io.*;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

public class Problem1ATest {

    @Test
    public void testExample() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(6, 6, 4);

        assertThat(flagstones, equalTo(4l));
    }

    @Test
    public void testTrivial() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(1, 1,1);

        assertThat(flagstones, equalTo(1l));
    }

    @Test
    public void testExtreme() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(1000000000, 1000000000,1);

        assertThat(flagstones, equalTo(1000000000000000000l));
    }

    @Test
    public void testSplitHorizontally() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(3, 2,2);

        assertThat(flagstones, equalTo(2l));
    }

    @Test
    public void testSplitVertically() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(2, 3,2);

        assertThat(flagstones, equalTo(2l));
    }

    @Test
    public void testSplitVerticallyAndHorizontally() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(3, 3,2);

        assertThat(flagstones, equalTo(4l));
    }

    @Test
    public void testNarrow() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(2, 6,2);

        assertThat(flagstones, equalTo(3l));
    }

    @Test
    public void testWide() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(6, 2,2);

        assertThat(flagstones, equalTo(3l));
    }

    @Test
    public void testWideSplit() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(5, 2,2);

        assertThat(flagstones, equalTo(3l));
    }

    @Test
    public void testNarrowSplit() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(2, 5,2);

        assertThat(flagstones, equalTo(3l));
    }

    @Test
    public void testNarrowSplitBoth() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(3, 5,2);

        assertThat(flagstones, equalTo(6l));
    }

    @Test
    public void testWideSplitBoth() {
        long flagstones = Problem1A.calculateFlagstonesNeeded(5, 3,2);

        assertThat(flagstones, equalTo(6l));
    }

    @Test
    public void testCodeforcesInterface() throws Exception {
        InputStream input = new ByteArrayInputStream("1 1 1\n1 1 1\n".getBytes());
        OutputStream os = new ByteArrayOutputStream();
        PrintStream output = new PrintStream(os);

        InputStream originalInput = System.in;
        PrintStream originalOutput = System.out;
        System.setIn(input);
        System.setOut(output);
        Problem1A.main(new String[] {});
        System.setIn(originalInput);
        System.setOut(originalOutput);

        assertThat(os.toString(), equalTo("1\n1\n"));
    }

}
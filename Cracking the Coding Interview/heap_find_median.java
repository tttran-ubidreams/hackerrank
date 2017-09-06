
//https://www.hackerrank.com/challenges/ctci-find-the-running-median/
        

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] a = new int[n];

        Queue<Integer> heap1 = new PriorityQueue<>();
        Queue<Integer> heap2 = new PriorityQueue<>(Comparator.reverseOrder());

        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();

            if(heap1.size() <= heap2.size()){
                heap2.add(a[a_i]);
                heap1.add(heap2.poll());
            } else {
                heap1.add(a[a_i]);
                heap2.add(heap1.poll());
            }

            System.out.println(a_i%2 == 0 ? (float)heap1.peek() : (float)(heap1.peek()+heap2.peek())/2);
        }
    }
}

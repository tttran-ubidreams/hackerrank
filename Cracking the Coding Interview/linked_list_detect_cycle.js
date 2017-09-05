// https://www.hackerrank.com/challenges/ctci-linked-list-cycle

boolean hasCycle(Node head) {
    if (head == null)
        return false;

    Node a = head;
    Node b = head.next;

    while (b != null && b.next != null) {
        if (a == b)
            return true;
        a = a.next;
        b = b.next.next;
    }
    return false;
}
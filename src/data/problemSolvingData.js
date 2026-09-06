// No global quickMemoryCards — each topic contains its own relevant memory tips.

export const problemCategories = [
  {
    id: 'numbers',
    title: 'Numbers',
    memoryTips: [
      { symbol: '% 10', meaning: 'Last digit' },
      { symbol: '/ 10', meaning: 'Remove last digit' },
      { symbol: 'n % 2 == 0', meaning: 'Even' },
      { symbol: 'n % 2 != 0', meaning: 'Odd' }
    ],
    items: [
      { label: 'Last digit', code: 'n % 10' },
      { label: 'Remove last digit', code: 'n / 10' },
      { label: 'Even check', code: 'n % 2 == 0' },
      { label: 'Odd check', code: 'n % 2 != 0' },
      { label: 'Digit extraction', code: 'int digit = n % 10;' },
      { label: 'Reverse number', code: 'rev = rev * 10 + digit;' },
      { label: 'Absolute value', code: 'Math.abs(x);' },
      { label: 'Maximum', code: 'Math.max(a, b);' },
      { label: 'Minimum', code: 'Math.min(a, b);' }
    ]
  },
  {
    id: 'arrays',
    title: 'Arrays',
    items: [
      { label: 'Array length', code: 'arr.length' },
      { label: 'Last index', code: 'arr.length - 1' },
      { label: 'First index', code: '0' },
      { label: 'Middle (overflow-safe)', code: 'left + (right - left) / 2' },
      { label: 'Sort ascending', code: 'Arrays.sort(arr);' },
      { label: 'Reverse traversal', code: 'for(int i = arr.length - 1; i >= 0; i--)' },
      { label: 'Fill array', code: 'Arrays.fill(arr, 0);' },
      { label: 'Copy array', code: 'int[] copy = Arrays.copyOf(arr, arr.length);' }
    ]
  },
  {
    id: 'strings',
    title: 'Strings',
    memoryTips: [
      { symbol: 's.equals(t)', meaning: 'Correct string comparison (NOT ==)' }
    ],
    items: [
      { label: 'Length', code: 's.length()' },
      { label: 'Character at index', code: 's.charAt(i)' },
      { label: 'Substring', code: 's.substring(start, end)' },
      { label: 'Character array', code: 's.toCharArray()' },
      { label: 'Compare content', code: 's.equals(t)' },
      { label: 'Compare ignore case', code: 's.equalsIgnoreCase(t)' },
      { label: 'Contains substring', code: 's.contains("abc")' },
      { label: 'Find index', code: "s.indexOf('a')" },
      { label: 'To lowercase', code: 's.toLowerCase()' },
      { label: 'Trim whitespace', code: 's.trim()' },
      { label: 'String to int', code: 'Integer.parseInt(s)' },
      { label: 'Int to string', code: 'String.valueOf(n)' }
    ]
  },
  {
    id: 'characters',
    title: 'Characters',
    items: [
      {
        label: 'Character to alphabet index',
        code: "c - 'a'",
        hint: "'a' → 0,  'b' → 1,  'c' → 2"
      },
      {
        label: 'Digit character to integer',
        code: "c - '0'",
        hint: "'5' - '0' = 5"
      },
      {
        label: 'Is letter',
        code: 'Character.isLetter(c)'
      },
      {
        label: 'Is digit',
        code: 'Character.isDigit(c)'
      },
      {
        label: 'To uppercase',
        code: 'Character.toUpperCase(c)'
      },
      {
        label: 'To lowercase',
        code: 'Character.toLowerCase(c)'
      }
    ]
  },
  {
    id: 'loops',
    title: 'Loops',
    items: [
      { label: 'Forward traversal', code: 'for(int i = 0; i < n; i++)' },
      { label: 'Backward traversal', code: 'for(int i = n - 1; i >= 0; i--)' },
      { label: 'While loop', code: 'while(condition) {\n    // body\n}' },
      { label: 'Nested loop', code: 'for(int i = 0; i < n; i++) {\n    for(int j = 0; j < m; j++) {\n        // O(n*m)\n    }\n}' },
      { label: 'Frequency count', code: 'int[] freq = new int[26];\nfor(char c : s.toCharArray()) freq[c - \'a\']++;' }
    ]
  },
  {
    id: 'two-pointer',
    title: 'Two Pointer',
    think: 'Sorted array / pair / opposite ends',
    usually: 'O(n)',
    memoryTips: [
      { symbol: 'Two Pointer', meaning: 'Two ends moving inward' },
      { symbol: 'Sorted input', meaning: 'Usually a prerequisite' }
    ],
    items: [
      {
        label: 'Basic template',
        code: 'int left = 0;\nint right = n - 1;\nwhile(left < right) {\n    // process ends\n    left++;\n    right--;\n}'
      },
      {
        label: 'Pair sum = target',
        code: 'while(left < right) {\n    int sum = arr[left] + arr[right];\n    if(sum == target) return;\n    else if(sum < target) left++;\n    else right--;\n}'
      }
    ]
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    think: 'Subarray / substring / continuous range',
    usually: 'O(n)',
    memoryTips: [
      { symbol: 'Sliding Window', meaning: 'Continuous range / subarray' }
    ],
    items: [
      {
        label: 'Basic expand-shrink template',
        code: 'int left = 0;\nfor(int right = 0; right < n; right++) {\n    // expand with arr[right]\n    while(/* condition invalid */) {\n        // shrink with arr[left++]\n    }\n}'
      },
      {
        label: 'Fixed window size k',
        code: 'for(int right = 0; right < n; right++) {\n    // add arr[right]\n    if(right >= k) {\n        // remove arr[right - k]\n    }\n}'
      }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    think: 'Sorted data / search space / monotonic condition',
    usually: 'O(log n)',
    memoryTips: [
      { symbol: 'Binary Search', meaning: 'Sorted / monotonic' },
      { symbol: 'mid overflow', meaning: 'Use left + (right-left)/2' }
    ],
    items: [
      {
        label: 'Overflow-safe middle',
        code: 'int mid = left + (right - left) / 2;'
      },
      {
        label: 'Standard template',
        code: 'while(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == target) return mid;\n    else if(arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n}'
      },
      {
        label: 'Find leftmost / lower bound',
        code: 'while(left < right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] < target) left = mid + 1;\n    else right = mid;\n}'
      }
    ]
  },
  {
    id: 'prefix-sum',
    title: 'Prefix Sum',
    think: 'Range sum / subarray sum / static queries',
    items: [
      {
        label: 'Build prefix array',
        code: 'int[] prefix = new int[n + 1];\nfor(int i = 0; i < n; i++) {\n    prefix[i + 1] = prefix[i] + arr[i];\n}'
      },
      {
        label: 'Subarray sum [L, R]',
        code: 'sum(L, R) = prefix[R + 1] - prefix[L];'
      }
    ]
  },
  {
    id: 'stack',
    title: 'Stack',
    think: 'Next greater element / valid brackets / previous element / monotonic',
    memoryTips: [
      { symbol: 'Stack', meaning: 'LIFO — Last In, First Out' }
    ],
    items: [
      { label: 'Operations', code: 'push(x);  // add on top\npop();    // remove top\npeek();   // view top\nisEmpty();' },
      {
        label: 'Valid brackets pattern',
        code: 'Deque<Character> stack = new ArrayDeque<>();\nfor(char c : s.toCharArray()) {\n    if(c == \'(\') stack.push(c);\n    else if(!stack.isEmpty()) stack.pop();\n    else return false;\n}\nreturn stack.isEmpty();'
      }
    ]
  },
  {
    id: 'queue',
    title: 'Queue',
    think: 'FIFO / Level-order traversal / BFS',
    memoryTips: [
      { symbol: 'Queue', meaning: 'FIFO — First In, First Out' }
    ],
    items: [
      { label: 'Operations', code: 'offer(x); // add to back\npoll();   // remove from front\npeek();   // view front\nisEmpty();' },
      {
        label: 'BFS skeleton',
        code: 'Queue<Integer> q = new LinkedList<>();\nq.offer(start);\nwhile(!q.isEmpty()) {\n    int curr = q.poll();\n    // process curr\n}'
      }
    ]
  },
  {
    id: 'heap',
    title: 'Heap (PriorityQueue)',
    think: 'Top K / smallest / largest repeatedly',
    memoryTips: [
      { symbol: 'PriorityQueue', meaning: 'Min Heap by default' },
      { symbol: 'reverseOrder()', meaning: 'Max Heap' }
    ],
    items: [
      {
        label: 'Min Heap (default)',
        code: 'PriorityQueue<Integer> pq = new PriorityQueue<>();\n// Smallest element comes first'
      },
      {
        label: 'Max Heap',
        code: 'PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());\n// Largest element comes first'
      },
      {
        label: 'Operations',
        code: 'pq.offer(x); // add\npq.poll();   // remove top\npq.peek();   // view top'
      }
    ]
  },
  {
    id: 'trees',
    title: 'Trees',
    think: 'Root / Left / Right / Hierarchical',
    items: [
      {
        label: 'DFS — Tree Traversal',
        think: 'Inorder / Preorder / Postorder',
        code: 'void dfs(TreeNode root) {\n    if(root == null) return;\n    // preorder: process root here\n    dfs(root.left);\n    // inorder: process root here\n    dfs(root.right);\n    // postorder: process root here\n}'
      },
      {
        label: 'Tree Height / Max Depth',
        think: '1 + max(left, right)',
        code: 'int maxDepth(TreeNode root) {\n    if(root == null) return 0;\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}'
      },
      {
        label: 'BFS Level Order',
        code: 'Queue<TreeNode> q = new LinkedList<>();\nq.offer(root);\nwhile(!q.isEmpty()) {\n    int size = q.size();\n    for(int i = 0; i < size; i++) {\n        TreeNode node = q.poll();\n        if(node.left != null) q.offer(node.left);\n        if(node.right != null) q.offer(node.right);\n    }\n}'
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    think: 'Vertices / Edges / Visited tracking',
    memoryTips: [
      { symbol: 'BFS', meaning: 'Level by level / shortest path' },
      { symbol: 'DFS', meaning: 'Explore deep branch' }
    ],
    items: [
      {
        label: 'BFS (Breadth First Search)',
        think: 'Level by level / Shortest path',
        code: 'Queue<Integer> q = new LinkedList<>();\nboolean[] visited = new boolean[n];\nq.offer(start);\nvisited[start] = true;\nwhile(!q.isEmpty()) {\n    int curr = q.poll();\n    for(int nxt : adj.get(curr)) {\n        if(!visited[nxt]) {\n            visited[nxt] = true;\n            q.offer(nxt);\n        }\n    }\n}'
      },
      {
        label: 'DFS (Depth First Search)',
        think: 'Explore deep branch with visited array',
        code: 'void dfs(int u, List<List<Integer>> adj, boolean[] visited) {\n    visited[u] = true;\n    for(int v : adj.get(u)) {\n        if(!visited[v]) dfs(v, adj, visited);\n    }\n}'
      }
    ]
  },
  {
    id: 'recursion',
    title: 'Recursion',
    items: [
      {
        label: 'Core mental model',
        code: 'Base case\n    ↓\nRecursive call\n    ↓\nProgress toward base case'
      },
      {
        label: 'Template',
        code: 'int solve(int n) {\n    if(n <= 0) return 0; // base case\n    return n + solve(n - 1); // recursive case\n}'
      }
    ]
  },
  {
    id: 'backtracking',
    title: 'Backtracking',
    memoryTips: [
      { symbol: 'Backtracking', meaning: 'Choose → Explore → Undo' }
    ],
    items: [
      {
        label: 'Core mental model',
        code: 'Choose\n    ↓\nExplore\n    ↓\nUndo (backtrack)'
      },
      {
        label: 'Template',
        code: 'void backtrack(List<Integer> path, ...) {\n    if(/* done */) {\n        result.add(new ArrayList<>(path));\n        return;\n    }\n    for(int choice : choices) {\n        path.add(choice);    // Choose\n        backtrack(path, ...); // Explore\n        path.remove(path.size() - 1); // Undo\n    }\n}'
      }
    ]
  },
  {
    id: 'greedy',
    title: 'Greedy',
    items: [
      {
        label: 'Core rule',
        code: 'Make the best local choice at each step.'
      },
      {
        label: 'Common use cases',
        code: '// Interval scheduling → sort by end time\n// Minimum coins → largest coin first\n// Activity selection → always pick soonest end'
      }
    ]
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    think: 'Optimal substructure + Overlapping subproblems',
    usually: 'O(n) to O(n²)',
    items: [
      {
        label: '1D DP (Tabulation / Bottom-Up)',
        code: 'int[] dp = new int[n + 1];\ndp[0] = base;\nfor(int i = 1; i <= n; i++) {\n    dp[i] = dp[i - 1] + ...;\n}'
      },
      {
        label: 'Memoization (Top-Down)',
        code: 'Integer[] memo = new Integer[n + 1];\nint solve(int i) {\n    if(i <= 0) return 0;\n    if(memo[i] != null) return memo[i];\n    return memo[i] = solve(i - 1) + ...;\n}'
      },
      {
        label: '2D DP',
        code: 'int[][] dp = new int[m + 1][n + 1];\nfor(int i = 1; i <= m; i++) {\n    for(int j = 1; j <= n; j++) {\n        dp[i][j] = ...;\n    }\n}'
      }
    ]
  },
  {
    id: 'kadane',
    title: "Kadane's Algorithm",
    usually: 'O(n) time, O(1) space',
    think: 'Maximum subarray sum',
    items: [
      {
        label: 'Core formulas',
        code: 'current = Math.max(x, current + x);\nanswer = Math.max(answer, current);'
      },
      {
        label: 'Full implementation',
        code: 'int maxSubArray(int[] arr) {\n    int current = arr[0];\n    int answer = arr[0];\n    for(int i = 1; i < arr.length; i++) {\n        current = Math.max(arr[i], current + arr[i]);\n        answer = Math.max(answer, current);\n    }\n    return answer;\n}'
      }
    ]
  },
  {
    id: 'time-complexity',
    title: 'Time Complexity',
    visualTable: true,
    items: [
      { complexity: 'O(1)', name: 'Constant', example: 'Array index access, HashMap get/put (avg)' },
      { complexity: 'O(log n)', name: 'Logarithmic', example: 'Binary Search, Balanced BST lookup' },
      { complexity: 'O(n)', name: 'Linear', example: 'Single loop traversal, String length scan' },
      { complexity: 'O(n log n)', name: 'Linearithmic', example: 'Merge Sort, Dual-Pivot Quicksort, HeapSort' },
      { complexity: 'O(n²)', name: 'Quadratic', example: 'Nested loops, Bubble sort, Matrix operations' },
      { complexity: 'O(2^n)', name: 'Exponential', example: 'Subsets generation, recursion without memo' },
      { complexity: 'O(n!)', name: 'Factorial', example: 'All permutations of n elements' }
    ]
  }
];

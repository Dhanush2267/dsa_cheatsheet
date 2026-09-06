export const inbuiltFunctions = [
  // ================= ARRAYS =================
  {
    id: 'arr-sort',
    topic: 'Arrays',
    name: 'sort()',
    syntax: 'Arrays.sort(arr);',
    meaning: 'Sorts array in ascending order',
    memory: 'Dual-pivot Quicksort O(n log n)'
  },
  {
    id: 'arr-binarySearch',
    topic: 'Arrays',
    name: 'binarySearch()',
    syntax: 'Arrays.binarySearch(arr, key);',
    meaning: 'Searches key in sorted array',
    memory: 'Array MUST be sorted first O(log n)'
  },
  {
    id: 'arr-fill',
    topic: 'Arrays',
    name: 'fill()',
    syntax: 'Arrays.fill(arr, val);',
    meaning: 'Assigns value to each element',
    memory: 'Great for DP memoization table init'
  },
  {
    id: 'arr-copyOf',
    topic: 'Arrays',
    name: 'copyOf()',
    syntax: 'Arrays.copyOf(arr, newLength);',
    meaning: 'Copies array with new length',
    memory: 'Truncates or pads with zeros / nulls'
  },
  {
    id: 'arr-equals',
    topic: 'Arrays',
    name: 'equals()',
    syntax: 'Arrays.equals(arr1, arr2);',
    meaning: 'Checks if both arrays have same elements',
    memory: 'Useful for frequency / anagram checks'
  },
  {
    id: 'arr-toString',
    topic: 'Arrays',
    name: 'toString()',
    syntax: 'Arrays.toString(arr);',
    meaning: 'Returns string representation of 1D array',
    memory: 'For quick debugging (use deepToString for 2D)'
  },

  // ================= STRING =================
  {
    id: 'str-length',
    topic: 'String',
    name: 'length()',
    syntax: 's.length();',
    meaning: 'Number of characters',
    memory: 'Has parentheses (), unlike arr.length'
  },
  {
    id: 'str-charAt',
    topic: 'String',
    name: 'charAt()',
    syntax: 's.charAt(i);',
    meaning: 'Get character at index i',
    memory: '0-indexed; O(1) access'
  },
  {
    id: 'str-substring',
    topic: 'String',
    name: 'substring()',
    syntax: 's.substring(start, end);',
    meaning: 'Extract substring from start to end - 1',
    memory: 'end is exclusive [start, end)'
  },
  {
    id: 'str-indexOf',
    topic: 'String',
    name: 'indexOf()',
    syntax: 's.indexOf(ch);',
    meaning: 'First occurrence index (-1 if not found)',
    memory: 'Can also take substring: s.indexOf("abc")'
  },
  {
    id: 'str-contains',
    topic: 'String',
    name: 'contains()',
    syntax: 's.contains(seq);',
    meaning: 'Check if string contains sequence',
    memory: 'Returns boolean true / false'
  },
  {
    id: 'str-equals',
    topic: 'String',
    name: 'equals()',
    syntax: 's.equals(t);',
    meaning: 'Content equality check',
    memory: 'NEVER use == for string content comparison'
  },
  {
    id: 'str-equalsIgnoreCase',
    topic: 'String',
    name: 'equalsIgnoreCase()',
    syntax: 's.equalsIgnoreCase(t);',
    meaning: 'Case-insensitive equality check',
    memory: 'Treats "A" and "a" as equal'
  },
  {
    id: 'str-toCharArray',
    topic: 'String',
    name: 'toCharArray()',
    syntax: 's.toCharArray();',
    meaning: 'Converts string to char array',
    memory: 'Essential for in-place swaps & sorting'
  },
  {
    id: 'str-split',
    topic: 'String',
    name: 'split()',
    syntax: 's.split(regex);',
    meaning: 'Splits string around regex matches',
    memory: 'Use "\\\\s+" to split on multiple spaces'
  },
  {
    id: 'str-replace',
    topic: 'String',
    name: 'replace()',
    syntax: 's.replace(oldChar, newChar);',
    meaning: 'Replaces all occurrences of target',
    memory: 'Returns a new string (immutable)'
  },
  {
    id: 'str-trim',
    topic: 'String',
    name: 'trim()',
    syntax: 's.trim();',
    meaning: 'Removes leading and trailing whitespace',
    memory: 'Handy for cleaning input strings'
  },

  // ================= STRINGBUILDER =================
  {
    id: 'sb-append',
    topic: 'StringBuilder',
    name: 'append()',
    syntax: 'sb.append(val);',
    meaning: 'Appends data to the end',
    memory: 'O(1) amortized; avoids string creation overhead'
  },
  {
    id: 'sb-insert',
    topic: 'StringBuilder',
    name: 'insert()',
    syntax: 'sb.insert(offset, val);',
    meaning: 'Inserts data at specified index',
    memory: 'Shifts rightward characters O(n)'
  },
  {
    id: 'sb-delete',
    topic: 'StringBuilder',
    name: 'delete()',
    syntax: 'sb.delete(start, end);',
    meaning: 'Removes characters from start to end - 1',
    memory: 'End index is exclusive'
  },
  {
    id: 'sb-deleteCharAt',
    topic: 'StringBuilder',
    name: 'deleteCharAt()',
    syntax: 'sb.deleteCharAt(index);',
    meaning: 'Removes single char at index',
    memory: 'Crucial for backtracking string paths'
  },
  {
    id: 'sb-reverse',
    topic: 'StringBuilder',
    name: 'reverse()',
    syntax: 'sb.reverse();',
    meaning: 'Reverses character sequence in place',
    memory: 'Fast palindrome and reverse problems'
  },
  {
    id: 'sb-charAt',
    topic: 'StringBuilder',
    name: 'charAt()',
    syntax: 'sb.charAt(i);',
    meaning: 'Get character at index i',
    memory: '0-indexed O(1)'
  },
  {
    id: 'sb-setCharAt',
    topic: 'StringBuilder',
    name: 'setCharAt()',
    syntax: 'sb.setCharAt(i, ch);',
    meaning: 'Modifies character at index i in place',
    memory: 'Fast in-place mutation without recreating string'
  },
  {
    id: 'sb-length',
    topic: 'StringBuilder',
    name: 'length()',
    syntax: 'sb.length();',
    meaning: 'Current character count',
    memory: 'Use sb.setLength(0) to quickly clear'
  },
  {
    id: 'sb-toString',
    topic: 'StringBuilder',
    name: 'toString()',
    syntax: 'sb.toString();',
    meaning: 'Converts buffer back to String',
    memory: 'Call once when building is finished'
  },

  // ================= ARRAYLIST =================
  {
    id: 'al-add',
    topic: 'ArrayList',
    name: 'add()',
    syntax: 'list.add(val);',
    meaning: 'Appends element to the end',
    memory: 'O(1) amortized; list.add(i, val) is O(n)'
  },
  {
    id: 'al-get',
    topic: 'ArrayList',
    name: 'get()',
    syntax: 'list.get(i);',
    meaning: 'Returns element at index i',
    memory: 'Random access O(1)'
  },
  {
    id: 'al-set',
    topic: 'ArrayList',
    name: 'set()',
    syntax: 'list.set(i, val);',
    meaning: 'Replaces element at index i',
    memory: 'Returns previous element'
  },
  {
    id: 'al-remove',
    topic: 'ArrayList',
    name: 'remove()',
    syntax: 'list.remove(i);',
    meaning: 'Removes element at index (or object)',
    memory: 'For Integer list, list.remove(Integer.valueOf(x)) removes by value'
  },
  {
    id: 'al-contains',
    topic: 'ArrayList',
    name: 'contains()',
    syntax: 'list.contains(val);',
    meaning: 'Checks if element exists',
    memory: 'Linear scan O(n)'
  },
  {
    id: 'al-size',
    topic: 'ArrayList',
    name: 'size()',
    syntax: 'list.size();',
    meaning: 'Number of elements in the list',
    memory: 'O(1) operation'
  },
  {
    id: 'al-isEmpty',
    topic: 'ArrayList',
    name: 'isEmpty()',
    syntax: 'list.isEmpty();',
    meaning: 'Returns true if size is 0',
    memory: 'Preferred over list.size() == 0'
  },
  {
    id: 'al-clear',
    topic: 'ArrayList',
    name: 'clear()',
    syntax: 'list.clear();',
    meaning: 'Removes all elements',
    memory: 'Resets size to 0'
  },

  // ================= LINKEDLIST =================
  {
    id: 'll-add',
    topic: 'LinkedList',
    name: 'add()',
    syntax: 'list.add(val);',
    meaning: 'Appends element to end of list',
    memory: 'O(1) doubly-linked list tail insertion'
  },
  {
    id: 'll-addFirst',
    topic: 'LinkedList',
    name: 'addFirst()',
    syntax: 'list.addFirst(val);',
    meaning: 'Inserts at the beginning',
    memory: 'O(1) prepend operation'
  },
  {
    id: 'll-addLast',
    topic: 'LinkedList',
    name: 'addLast()',
    syntax: 'list.addLast(val);',
    meaning: 'Appends at the end',
    memory: 'O(1) append operation'
  },
  {
    id: 'll-getFirst',
    topic: 'LinkedList',
    name: 'getFirst()',
    syntax: 'list.getFirst();',
    meaning: 'Returns first element',
    memory: 'Throws NoSuchElementException if empty'
  },
  {
    id: 'll-getLast',
    topic: 'LinkedList',
    name: 'getLast()',
    syntax: 'list.getLast();',
    meaning: 'Returns last element',
    memory: 'O(1) tail access'
  },
  {
    id: 'll-removeFirst',
    topic: 'LinkedList',
    name: 'removeFirst()',
    syntax: 'list.removeFirst();',
    meaning: 'Removes and returns head element',
    memory: 'Essential for queue / deque FIFO behavior'
  },
  {
    id: 'll-removeLast',
    topic: 'LinkedList',
    name: 'removeLast()',
    syntax: 'list.removeLast();',
    meaning: 'Removes and returns tail element',
    memory: 'Essential for stack LIFO behavior'
  },
  {
    id: 'll-contains',
    topic: 'LinkedList',
    name: 'contains()',
    syntax: 'list.contains(val);',
    meaning: 'Checks presence of element',
    memory: 'Linear traversal O(n)'
  },
  {
    id: 'll-size',
    topic: 'LinkedList',
    name: 'size()',
    syntax: 'list.size();',
    meaning: 'Number of elements',
    memory: 'O(1) tracked count'
  },

  // ================= HASHSET =================
  {
    id: 'hs-add',
    topic: 'HashSet',
    name: 'add()',
    syntax: 'set.add(val);',
    meaning: 'Adds element if not already present',
    memory: 'Returns false if already exists; O(1) avg'
  },
  {
    id: 'hs-contains',
    topic: 'HashSet',
    name: 'contains()',
    syntax: 'set.contains(val);',
    meaning: 'Checks if element exists in set',
    memory: 'Fast O(1) avg lookup'
  },
  {
    id: 'hs-remove',
    topic: 'HashSet',
    name: 'remove()',
    syntax: 'set.remove(val);',
    meaning: 'Removes element from set',
    memory: 'Returns true if removed'
  },
  {
    id: 'hs-size',
    topic: 'HashSet',
    name: 'size()',
    syntax: 'set.size();',
    meaning: 'Count of unique elements',
    memory: 'O(1) size'
  },
  {
    id: 'hs-isEmpty',
    topic: 'HashSet',
    name: 'isEmpty()',
    syntax: 'set.isEmpty();',
    meaning: 'Checks if set has no elements',
    memory: 'size == 0'
  },
  {
    id: 'hs-clear',
    topic: 'HashSet',
    name: 'clear()',
    syntax: 'set.clear();',
    meaning: 'Removes all elements from set',
    memory: 'Wipes lookup table'
  },

  // ================= LINKEDHASHSET =================
  {
    id: 'lhs-add',
    topic: 'LinkedHashSet',
    name: 'add()',
    syntax: 'set.add(val);',
    meaning: 'Adds element while preserving insertion order',
    memory: 'Unique values + deterministic iteration order'
  },
  {
    id: 'lhs-contains',
    topic: 'LinkedHashSet',
    name: 'contains()',
    syntax: 'set.contains(val);',
    meaning: 'Checks existence of element',
    memory: 'O(1) avg hash lookup'
  },
  {
    id: 'lhs-remove',
    topic: 'LinkedHashSet',
    name: 'remove()',
    syntax: 'set.remove(val);',
    meaning: 'Removes element and unlinks node',
    memory: 'O(1) avg'
  },
  {
    id: 'lhs-size',
    topic: 'LinkedHashSet',
    name: 'size()',
    syntax: 'set.size();',
    meaning: 'Number of unique elements',
    memory: 'O(1)'
  },

  // ================= TREESET =================
  {
    id: 'ts-add',
    topic: 'TreeSet',
    name: 'add()',
    syntax: 'set.add(val);',
    meaning: 'Inserts element in sorted Red-Black tree',
    memory: 'O(log n) insertion'
  },
  {
    id: 'ts-contains',
    topic: 'TreeSet',
    name: 'contains()',
    syntax: 'set.contains(val);',
    meaning: 'Searches for element in balanced BST',
    memory: 'O(log n) lookup'
  },
  {
    id: 'ts-remove',
    topic: 'TreeSet',
    name: 'remove()',
    syntax: 'set.remove(val);',
    meaning: 'Deletes element from tree',
    memory: 'O(log n) deletion'
  },
  {
    id: 'ts-first',
    topic: 'TreeSet',
    name: 'first()',
    syntax: 'set.first();',
    meaning: 'Returns the lowest (minimum) element',
    memory: 'O(log n) or O(1) cached minimum'
  },
  {
    id: 'ts-last',
    topic: 'TreeSet',
    name: 'last()',
    syntax: 'set.last();',
    meaning: 'Returns the highest (maximum) element',
    memory: 'O(log n) maximum lookup'
  },
  {
    id: 'ts-higher',
    topic: 'TreeSet',
    name: 'higher()',
    syntax: 'set.higher(val);',
    meaning: 'Smallest element strictly > val',
    memory: 'Strictly greater (> val)'
  },
  {
    id: 'ts-lower',
    topic: 'TreeSet',
    name: 'lower()',
    syntax: 'set.lower(val);',
    meaning: 'Greatest element strictly < val',
    memory: 'Strictly smaller (< val)'
  },
  {
    id: 'ts-ceiling',
    topic: 'TreeSet',
    name: 'ceiling()',
    syntax: 'set.ceiling(val);',
    meaning: 'Smallest element >= val',
    memory: 'Greater or equal (>= val)'
  },
  {
    id: 'ts-floor',
    topic: 'TreeSet',
    name: 'floor()',
    syntax: 'set.floor(val);',
    meaning: 'Greatest element <= val',
    memory: 'Less or equal (<= val)'
  },

  // ================= HASHMAP =================
  {
    id: 'hm-put',
    topic: 'HashMap',
    name: 'put()',
    syntax: 'map.put(key, value);',
    meaning: 'Insert / update value for key',
    memory: 'O(1) average time'
  },
  {
    id: 'hm-get',
    topic: 'HashMap',
    name: 'get()',
    syntax: 'map.get(key);',
    meaning: 'Get value associated with key',
    memory: 'Returns null if key is not present'
  },
  {
    id: 'hm-getOrDefault',
    topic: 'HashMap',
    name: 'getOrDefault()',
    syntax: 'map.getOrDefault(key, 0);',
    meaning: 'Get value or default if absent',
    memory: 'Gold standard for frequency counting'
  },
  {
    id: 'hm-containsKey',
    topic: 'HashMap',
    name: 'containsKey()',
    syntax: 'map.containsKey(key);',
    meaning: 'Check whether key exists',
    memory: 'Fast lookup O(1) avg'
  },
  {
    id: 'hm-containsValue',
    topic: 'HashMap',
    name: 'containsValue()',
    syntax: 'map.containsValue(value);',
    meaning: 'Check whether value exists',
    memory: 'Linear scan across buckets O(n)'
  },
  {
    id: 'hm-remove',
    topic: 'HashMap',
    name: 'remove()',
    syntax: 'map.remove(key);',
    meaning: 'Delete key-value entry',
    memory: 'Returns deleted value'
  },
  {
    id: 'hm-size',
    topic: 'HashMap',
    name: 'size()',
    syntax: 'map.size();',
    meaning: 'Number of key-value pairs',
    memory: 'O(1) count'
  },
  {
    id: 'hm-isEmpty',
    topic: 'HashMap',
    name: 'isEmpty()',
    syntax: 'map.isEmpty();',
    meaning: 'Checks if map has no entries',
    memory: 'size == 0'
  },
  {
    id: 'hm-keySet',
    topic: 'HashMap',
    name: 'keySet()',
    syntax: 'map.keySet();',
    meaning: 'Returns Set of all keys',
    memory: 'for(K key : map.keySet())'
  },
  {
    id: 'hm-values',
    topic: 'HashMap',
    name: 'values()',
    syntax: 'map.values();',
    meaning: 'Returns Collection of all values',
    memory: 'for(V val : map.values())'
  },
  {
    id: 'hm-entrySet',
    topic: 'HashMap',
    name: 'entrySet()',
    syntax: 'map.entrySet();',
    meaning: 'Returns Set of Map.Entry<K, V> pairs',
    memory: 'Fastest iteration: e.getKey(), e.getValue()'
  },
  {
    id: 'hm-clear',
    topic: 'HashMap',
    name: 'clear()',
    syntax: 'map.clear();',
    meaning: 'Removes all entries',
    memory: 'Resets map'
  },

  // ================= LINKEDHASHMAP =================
  {
    id: 'lhm-put',
    topic: 'LinkedHashMap',
    name: 'put()',
    syntax: 'map.put(key, value);',
    meaning: 'Inserts key-value while recording insertion order',
    memory: 'Maintains doubly-linked list of entries'
  },
  {
    id: 'lhm-get',
    topic: 'LinkedHashMap',
    name: 'get()',
    syntax: 'map.get(key);',
    meaning: 'Retrieves value by key',
    memory: 'O(1) average lookup'
  },
  {
    id: 'lhm-getOrDefault',
    topic: 'LinkedHashMap',
    name: 'getOrDefault()',
    syntax: 'map.getOrDefault(key, defaultVal);',
    meaning: 'Retrieves value or default fallback',
    memory: 'Order-preserving frequency maps'
  },
  {
    id: 'lhm-containsKey',
    topic: 'LinkedHashMap',
    name: 'containsKey()',
    syntax: 'map.containsKey(key);',
    meaning: 'Checks if key exists',
    memory: 'O(1) average lookup'
  },
  {
    id: 'lhm-remove',
    topic: 'LinkedHashMap',
    name: 'remove()',
    syntax: 'map.remove(key);',
    meaning: 'Removes entry and unlinks from sequence',
    memory: 'Basis of LRU Cache implementation'
  },
  {
    id: 'lhm-keySet',
    topic: 'LinkedHashMap',
    name: 'keySet()',
    syntax: 'map.keySet();',
    meaning: 'Keys in predictable insertion order',
    memory: 'Iterates in insertion order'
  },
  {
    id: 'lhm-entrySet',
    topic: 'LinkedHashMap',
    name: 'entrySet()',
    syntax: 'map.entrySet();',
    meaning: 'Entry set in predictable order',
    memory: 'e.getKey(), e.getValue()'
  },

  // ================= TREEMAP =================
  {
    id: 'tm-put',
    topic: 'TreeMap',
    name: 'put()',
    syntax: 'map.put(key, value);',
    meaning: 'Inserts entry in sorted key order',
    memory: 'O(log n) balanced Red-Black tree'
  },
  {
    id: 'tm-get',
    topic: 'TreeMap',
    name: 'get()',
    syntax: 'map.get(key);',
    meaning: 'Gets value for key via BST search',
    memory: 'O(log n)'
  },
  {
    id: 'tm-containsKey',
    topic: 'TreeMap',
    name: 'containsKey()',
    syntax: 'map.containsKey(key);',
    meaning: 'Checks key presence',
    memory: 'O(log n)'
  },
  {
    id: 'tm-remove',
    topic: 'TreeMap',
    name: 'remove()',
    syntax: 'map.remove(key);',
    meaning: 'Removes key and rebalances tree',
    memory: 'O(log n)'
  },
  {
    id: 'tm-firstKey',
    topic: 'TreeMap',
    name: 'firstKey()',
    syntax: 'map.firstKey();',
    meaning: 'Lowest (minimum) key',
    memory: 'O(log n) min key'
  },
  {
    id: 'tm-lastKey',
    topic: 'TreeMap',
    name: 'lastKey()',
    syntax: 'map.lastKey();',
    meaning: 'Highest (maximum) key',
    memory: 'O(log n) max key'
  },
  {
    id: 'tm-higherKey',
    topic: 'TreeMap',
    name: 'higherKey()',
    syntax: 'map.higherKey(key);',
    meaning: 'Smallest key strictly > key',
    memory: 'Strictly greater key (> key)'
  },
  {
    id: 'tm-lowerKey',
    topic: 'TreeMap',
    name: 'lowerKey()',
    syntax: 'map.lowerKey(key);',
    meaning: 'Greatest key strictly < key',
    memory: 'Strictly smaller key (< key)'
  },
  {
    id: 'tm-ceilingKey',
    topic: 'TreeMap',
    name: 'ceilingKey()',
    syntax: 'map.ceilingKey(key);',
    meaning: 'Smallest key >= key',
    memory: 'Greater or equal key (>= key)'
  },
  {
    id: 'tm-floorKey',
    topic: 'TreeMap',
    name: 'floorKey()',
    syntax: 'map.floorKey(key);',
    meaning: 'Greatest key <= key',
    memory: 'Less or equal key (<= key)'
  },
  {
    id: 'tm-entrySet',
    topic: 'TreeMap',
    name: 'entrySet()',
    syntax: 'map.entrySet();',
    meaning: 'Entries sorted in ascending key order',
    memory: 'In-order traversal'
  },

  // ================= STACK =================
  {
    id: 'st-push',
    topic: 'Stack',
    name: 'push()',
    syntax: 'stack.push(val);',
    meaning: 'Pushes element onto the top',
    memory: 'LIFO (Last In First Out); O(1)'
  },
  {
    id: 'st-pop',
    topic: 'Stack',
    name: 'pop()',
    syntax: 'stack.pop();',
    meaning: 'Removes and returns top element',
    memory: 'Throws EmptyStackException if empty'
  },
  {
    id: 'st-peek',
    topic: 'Stack',
    name: 'peek()',
    syntax: 'stack.peek();',
    meaning: 'Looks at top element without removing',
    memory: 'Examine current head'
  },
  {
    id: 'st-empty',
    topic: 'Stack',
    name: 'empty()',
    syntax: 'stack.empty();',
    meaning: 'Tests if stack is empty',
    memory: 'While(!stack.empty()) loop condition'
  },

  // ================= QUEUE =================
  {
    id: 'q-offer',
    topic: 'Queue',
    name: 'offer()',
    syntax: 'queue.offer(val);',
    meaning: 'Inserts element at tail (returns false on fail)',
    memory: 'FIFO (First In First Out); preferred over add()'
  },
  {
    id: 'q-poll',
    topic: 'Queue',
    name: 'poll()',
    syntax: 'queue.poll();',
    meaning: 'Removes and returns head (null if empty)',
    memory: 'Preferred over remove() because it won\'t throw'
  },
  {
    id: 'q-peek',
    topic: 'Queue',
    name: 'peek()',
    syntax: 'queue.peek();',
    meaning: 'Retrieves head without removing (null if empty)',
    memory: 'Safe inspection of front element'
  },
  {
    id: 'q-isEmpty',
    topic: 'Queue',
    name: 'isEmpty()',
    syntax: 'queue.isEmpty();',
    meaning: 'Tests if queue has no items',
    memory: 'Standard BFS loop guard'
  },
  {
    id: 'q-size',
    topic: 'Queue',
    name: 'size()',
    syntax: 'queue.size();',
    meaning: 'Number of elements in queue',
    memory: 'Critical for level-by-level BFS loops'
  },

  // ================= DEQUE =================
  {
    id: 'dq-addFirst',
    topic: 'Deque',
    name: 'addFirst()',
    syntax: 'deque.addFirst(val);',
    meaning: 'Inserts at the front',
    memory: 'Double-ended queue front push'
  },
  {
    id: 'dq-addLast',
    topic: 'Deque',
    name: 'addLast()',
    syntax: 'deque.addLast(val);',
    meaning: 'Inserts at the end',
    memory: 'Double-ended queue back push'
  },
  {
    id: 'dq-removeFirst',
    topic: 'Deque',
    name: 'removeFirst()',
    syntax: 'deque.removeFirst();',
    meaning: 'Removes and returns front element',
    memory: 'Throws exception if empty'
  },
  {
    id: 'dq-removeLast',
    topic: 'Deque',
    name: 'removeLast()',
    syntax: 'deque.removeLast();',
    meaning: 'Removes and returns last element',
    memory: 'Sliding window maximum popping smaller elements'
  },
  {
    id: 'dq-peekFirst',
    topic: 'Deque',
    name: 'peekFirst()',
    syntax: 'deque.peekFirst();',
    meaning: 'Examines front element without removing',
    memory: 'Returns null if empty'
  },
  {
    id: 'dq-peekLast',
    topic: 'Deque',
    name: 'peekLast()',
    syntax: 'deque.peekLast();',
    meaning: 'Examines last element without removing',
    memory: 'Returns null if empty'
  },

  // ================= ARRAYDEQUE =================
  {
    id: 'ad-offerFirst',
    topic: 'ArrayDeque',
    name: 'offerFirst()',
    syntax: 'deque.offerFirst(val);',
    meaning: 'Inserts element at front',
    memory: 'Faster than Stack & LinkedList; no nulls allowed'
  },
  {
    id: 'ad-offerLast',
    topic: 'ArrayDeque',
    name: 'offerLast()',
    syntax: 'deque.offerLast(val);',
    meaning: 'Inserts element at tail',
    memory: 'Standard FIFO enqueue'
  },
  {
    id: 'ad-pollFirst',
    topic: 'ArrayDeque',
    name: 'pollFirst()',
    syntax: 'deque.pollFirst();',
    meaning: 'Removes and returns front (null if empty)',
    memory: 'Standard FIFO dequeue'
  },
  {
    id: 'ad-pollLast',
    topic: 'ArrayDeque',
    name: 'pollLast()',
    syntax: 'deque.pollLast();',
    meaning: 'Removes and returns tail (null if empty)',
    memory: 'Stack pop equivalent'
  },
  {
    id: 'ad-peekFirst',
    topic: 'ArrayDeque',
    name: 'peekFirst()',
    syntax: 'deque.peekFirst();',
    meaning: 'Examines front element (null if empty)',
    memory: 'Safe queue head check'
  },
  {
    id: 'ad-peekLast',
    topic: 'ArrayDeque',
    name: 'peekLast()',
    syntax: 'deque.peekLast();',
    meaning: 'Examines tail element (null if empty)',
    memory: 'Safe stack top check'
  },

  // ================= PRIORITYQUEUE =================
  {
    id: 'pq-offer',
    topic: 'PriorityQueue',
    name: 'offer()',
    syntax: 'pq.offer(val);',
    meaning: 'Inserts element into binary heap',
    memory: 'O(log n) heap bubble-up'
  },
  {
    id: 'pq-add',
    topic: 'PriorityQueue',
    name: 'add()',
    syntax: 'pq.add(val);',
    meaning: 'Inserts element into priority queue',
    memory: 'Same as offer(); throws if full (rare)'
  },
  {
    id: 'pq-poll',
    topic: 'PriorityQueue',
    name: 'poll()',
    syntax: 'pq.poll();',
    meaning: 'Extracts minimum (or maximum) root element',
    memory: 'O(log n) heap bubble-down'
  },
  {
    id: 'pq-remove',
    topic: 'PriorityQueue',
    name: 'remove()',
    syntax: 'pq.remove(val);',
    meaning: 'Removes specific element from heap',
    memory: 'Linear search O(n) + rebalance'
  },
  {
    id: 'pq-peek',
    topic: 'PriorityQueue',
    name: 'peek()',
    syntax: 'pq.peek();',
    meaning: 'Looks at top element without removing',
    memory: 'O(1) instant access to root'
  },
  {
    id: 'pq-isEmpty',
    topic: 'PriorityQueue',
    name: 'isEmpty()',
    syntax: 'pq.isEmpty();',
    meaning: 'Checks if heap is empty',
    memory: 'Loop sentinel condition'
  },
  {
    id: 'pq-size',
    topic: 'PriorityQueue',
    name: 'size()',
    syntax: 'pq.size();',
    meaning: 'Number of elements in heap',
    memory: 'Keep <= k for Top-K smallest / largest problems'
  },

  // ================= COLLECTIONS =================
  {
    id: 'col-sort',
    topic: 'Collections',
    name: 'sort()',
    syntax: 'Collections.sort(list);',
    meaning: 'Sorts list in ascending natural order',
    memory: 'TimSort O(n log n); use (list, (a,b) -> b - a) for desc'
  },
  {
    id: 'col-reverse',
    topic: 'Collections',
    name: 'reverse()',
    syntax: 'Collections.reverse(list);',
    meaning: 'Reverses the order of elements in list',
    memory: 'O(n) linear in-place reverse'
  },
  {
    id: 'col-max',
    topic: 'Collections',
    name: 'max()',
    syntax: 'Collections.max(list);',
    meaning: 'Returns maximum element according to natural order',
    memory: 'O(n) single pass'
  },
  {
    id: 'col-min',
    topic: 'Collections',
    name: 'min()',
    syntax: 'Collections.min(list);',
    meaning: 'Returns minimum element',
    memory: 'O(n) single pass'
  },
  {
    id: 'col-frequency',
    topic: 'Collections',
    name: 'frequency()',
    syntax: 'Collections.frequency(list, val);',
    meaning: 'Counts occurrences of element in collection',
    memory: 'O(n) count of target'
  },
  {
    id: 'col-binarySearch',
    topic: 'Collections',
    name: 'binarySearch()',
    syntax: 'Collections.binarySearch(list, key);',
    meaning: 'Binary search on sorted list',
    memory: 'List MUST be sorted first O(log n)'
  },
  {
    id: 'col-swap',
    topic: 'Collections',
    name: 'swap()',
    syntax: 'Collections.swap(list, i, j);',
    meaning: 'Swaps elements at indexes i and j',
    memory: 'O(1) for random access lists'
  },

  // ================= MATH =================
  {
    id: 'math-max',
    topic: 'Math',
    name: 'max()',
    syntax: 'Math.max(a, b);',
    meaning: 'Returns the greater of two values',
    memory: 'Supports int, long, float, double'
  },
  {
    id: 'math-min',
    topic: 'Math',
    name: 'min()',
    syntax: 'Math.min(a, b);',
    meaning: 'Returns the smaller of two values',
    memory: 'Supports int, long, float, double'
  },
  {
    id: 'math-abs',
    topic: 'Math',
    name: 'abs()',
    syntax: 'Math.abs(x);',
    meaning: 'Absolute positive value',
    memory: 'Watch out for Integer.MIN_VALUE overflow'
  },
  {
    id: 'math-pow',
    topic: 'Math',
    name: 'pow()',
    syntax: 'Math.pow(base, exp);',
    meaning: 'Returns base raised to power of exp',
    memory: 'Returns double; cast to (long) or (int) if needed'
  },
  {
    id: 'math-sqrt',
    topic: 'Math',
    name: 'sqrt()',
    syntax: 'Math.sqrt(x);',
    meaning: 'Square root of a number',
    memory: 'Returns double; useful for prime checking up to sqrt(n)'
  },
  {
    id: 'math-ceil',
    topic: 'Math',
    name: 'ceil()',
    syntax: 'Math.ceil(x);',
    meaning: 'Rounds up to the nearest mathematical integer',
    memory: 'Integer division ceil: (a + b - 1) / b'
  },
  {
    id: 'math-floor',
    topic: 'Math',
    name: 'floor()',
    syntax: 'Math.floor(x);',
    meaning: 'Rounds down to nearest mathematical integer',
    memory: 'Standard integer division / already floors positive numbers'
  }
];

export const INBUILT_TOPICS = [
  'Arrays',
  'String',
  'StringBuilder',
  'ArrayList',
  'LinkedList',
  'HashSet',
  'LinkedHashSet',
  'TreeSet',
  'HashMap',
  'LinkedHashMap',
  'TreeMap',
  'Stack',
  'Queue',
  'Deque',
  'ArrayDeque',
  'PriorityQueue',
  'Collections',
  'Math'
];

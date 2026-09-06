import React from 'react';

const SORTING_DATA = [
  { name: 'Bubble Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
  { name: 'Selection Sort', best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
  { name: 'Insertion Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
  { name: 'Merge Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)' },
  { name: 'Quick Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)' },
  { name: 'Heap Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)' },
  { name: 'Counting Sort', best: 'O(n+k)', avg: 'O(n+k)', worst: 'O(n+k)', space: 'O(n+k)' },
  { name: 'Radix Sort', best: 'O(nk)', avg: 'O(nk)', worst: 'O(nk)', space: 'O(n+k)' },
];

const SEARCHING_DATA = [
  { name: 'Linear Search', best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
  { name: 'Binary Search', best: 'O(1)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(1)' },
  { name: 'HashMap Search', best: 'O(1)', avg: 'O(1)', worst: 'O(n)', space: 'O(n)' },
  { name: 'HashSet Search', best: 'O(1)', avg: 'O(1)', worst: 'O(n)', space: 'O(n)' },
  { name: 'TreeMap Search', best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
  { name: 'TreeSet Search', best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
];

const DATA_STRUCTURES_DATA = [
  { name: 'Array', access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)' },
  { name: 'ArrayList', access: 'O(1)', search: 'O(n)', insert: 'O(1)*', delete: 'O(n)' },
  { name: 'LinkedList', access: 'O(n)', search: 'O(n)', insert: 'O(1)*', delete: 'O(1)*' },
  { name: 'Stack', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)' },
  { name: 'Queue', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)' },
  { name: 'HashMap', access: '-', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*' },
  { name: 'HashSet', access: '-', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*' },
  { name: 'TreeMap', access: '-', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)' },
  { name: 'TreeSet', access: '-', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)' },
  { name: 'PriorityQueue', access: '-', search: 'O(n)', insert: 'O(log n)', delete: 'O(log n)' },
];

const BIG_O_MEMORY = [
  { complexity: 'O(1)', meaning: 'Constant' },
  { complexity: 'O(log n)', meaning: 'Binary Search' },
  { complexity: 'O(n)', meaning: 'Linear Scan' },
  { complexity: 'O(n log n)', meaning: 'Efficient Sorting' },
  { complexity: 'O(n²)', meaning: 'Nested Loop' },
  { complexity: 'O(2ⁿ)', meaning: 'Recursion / Subsets' },
  { complexity: 'O(n!)', meaning: 'Permutations' },
];

const FAST_REVISION = [
  { algo: 'Binary Search', complexity: 'O(log n)' },
  { algo: 'Merge Sort', complexity: 'O(n log n)' },
  { algo: 'Quick Sort', complexity: 'O(n log n) average' },
  { algo: 'HashMap', complexity: 'O(1) average' },
  { algo: 'TreeMap', complexity: 'O(log n)' },
  { algo: 'PriorityQueue', complexity: 'O(log n) insert/remove' },
];

export default function ComplexitySection() {
  return (
    <div className="complexity-cheat-sheet" aria-label="Sorting and Searching Complexity">
      <div className="complexity-divider" />

      {/* Main Header */}
      <div className="complexity-header">
        <h3 className="complexity-main-title">SORTING & SEARCHING COMPLEXITY</h3>
        <p className="complexity-subtitle">Quick revision for Time & Space Complexity</p>
      </div>

      {/* Table 1: Sorting Algorithms */}
      <div className="complexity-block">
        <h4 className="complexity-group-title">SORTING ALGORITHMS</h4>
        <div className="complexity-table-scroll-wrapper">
          <table className="complexity-table">
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
                <th>Space</th>
              </tr>
            </thead>
            <tbody>
              {SORTING_DATA.map((row, idx) => (
                <tr key={idx}>
                  <td className="col-algo-name">{row.name}</td>
                  <td className="col-complexity">{row.best}</td>
                  <td className="col-complexity">{row.avg}</td>
                  <td className="col-complexity">{row.worst}</td>
                  <td className="col-complexity">{row.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: Searching Algorithms */}
      <div className="complexity-block">
        <h4 className="complexity-group-title">SEARCHING ALGORITHMS</h4>
        <div className="complexity-table-scroll-wrapper">
          <table className="complexity-table">
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
                <th>Space</th>
              </tr>
            </thead>
            <tbody>
              {SEARCHING_DATA.map((row, idx) => (
                <tr key={idx}>
                  <td className="col-algo-name">{row.name}</td>
                  <td className="col-complexity">{row.best}</td>
                  <td className="col-complexity">{row.avg}</td>
                  <td className="col-complexity">{row.worst}</td>
                  <td className="col-complexity">{row.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 3: Data Structure Complexity */}
      <div className="complexity-block">
        <h4 className="complexity-group-title">DATA STRUCTURE COMPLEXITY</h4>
        <div className="complexity-table-scroll-wrapper">
          <table className="complexity-table">
            <thead>
              <tr>
                <th>Data Structure</th>
                <th>Access</th>
                <th>Search</th>
                <th>Insert</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {DATA_STRUCTURES_DATA.map((row, idx) => (
                <tr key={idx}>
                  <td className="col-algo-name">{row.name}</td>
                  <td className="col-complexity">{row.access}</td>
                  <td className="col-complexity">{row.search}</td>
                  <td className="col-complexity">{row.insert}</td>
                  <td className="col-complexity">{row.delete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="complexity-note">* Average/amortized complexity where applicable.</p>
      </div>

      {/* Quick Memory Card */}
      <div className="complexity-block">
        <div className="complexity-quick-memory-card">
          <h4 className="qm-card-title">QUICK MEMORY</h4>
          
          <div className="qm-card-content">
            <div className="qm-sub-block">
              <div className="qm-items-list">
                {BIG_O_MEMORY.map((item, idx) => (
                  <div key={idx} className="qm-line-row">
                    <span className="qm-code">{item.complexity}</span>
                    <span className="qm-sep">→</span>
                    <span className="qm-desc">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="qm-sub-block qm-fast-revision-block">
              <h5 className="qm-fast-title">FAST REVISION:</h5>
              <div className="qm-items-list">
                {FAST_REVISION.map((item, idx) => (
                  <div key={idx} className="qm-line-row">
                    <span className="qm-algo-name">{item.algo}</span>
                    <span className="qm-sep">→</span>
                    <span className="qm-code">{item.complexity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

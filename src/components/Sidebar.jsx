import React from 'react';
import {
  Network,
  Code2,
  Lightbulb,
  Grid,
  Type,
  FileCode,
  List,
  Link2,
  Hash,
  Star,
  Binary,
  Layers,
  Disc,
  ArrowUpDown,
  Calculator,
  ChevronRight,
  X
} from 'lucide-react';

const MAIN_SECTIONS = [
  { id: 'collections',     title: 'Collections Map',    icon: Network   },
  { id: 'functions',       title: 'Inbuilt Functions',  icon: Code2     },
  { id: 'problem-solving', title: 'Problem Solving',    icon: Lightbulb }
];

const FUNCTION_TOPICS = [
  { id: 'Arrays',        label: 'Arrays',        icon: Grid        },
  { id: 'String',        label: 'String',        icon: Type        },
  { id: 'StringBuilder', label: 'StringBuilder', icon: FileCode    },
  { id: 'ArrayList',     label: 'ArrayList',     icon: List        },
  { id: 'LinkedList',    label: 'LinkedList',    icon: Link2       },
  { id: 'HashSet',       label: 'HashSet',       icon: Hash        },
  { id: 'LinkedHashSet', label: 'LinkedHashSet', icon: Star        },
  { id: 'TreeSet',       label: 'TreeSet',       icon: Binary      },
  { id: 'HashMap',       label: 'HashMap',       icon: Grid        },
  { id: 'LinkedHashMap', label: 'LinkedHashMap', icon: Grid        },
  { id: 'TreeMap',       label: 'TreeMap',       icon: Binary      },
  { id: 'Stack',         label: 'Stack',         icon: Layers      },
  { id: 'Queue',         label: 'Queue',         icon: Disc        },
  { id: 'Deque',         label: 'Deque',         icon: ArrowUpDown },
  { id: 'ArrayDeque',    label: 'ArrayDeque',    icon: Disc        },
  { id: 'PriorityQueue', label: 'PriorityQueue', icon: Star        },
  { id: 'Collections',   label: 'Collections',   icon: Layers      },
  { id: 'Math',          label: 'Math',          icon: Calculator  }
];

const PROBLEM_TOPICS = [
  { id: 'numbers',             label: 'Numbers',             icon: Calculator  },
  { id: 'arrays',              label: 'Arrays',              icon: Grid        },
  { id: 'strings',             label: 'Strings',             icon: Type        },
  { id: 'characters',          label: 'Characters',          icon: Type        },
  { id: 'loops',               label: 'Loops',               icon: ArrowUpDown },
  { id: 'two-pointer',         label: 'Two Pointer',         icon: ArrowUpDown },
  { id: 'sliding-window',      label: 'Sliding Window',      icon: Disc        },
  { id: 'binary-search',       label: 'Binary Search',       icon: Binary      },
  { id: 'prefix-sum',          label: 'Prefix Sum',          icon: List        },
  { id: 'stack',               label: 'Stack',               icon: Layers      },
  { id: 'queue',               label: 'Queue',               icon: Disc        },
  { id: 'heap',                label: 'Heap',                icon: Star        },
  { id: 'trees',               label: 'Trees',               icon: Binary      },
  { id: 'graphs',              label: 'Graphs',              icon: Network     },
  { id: 'recursion',           label: 'Recursion',           icon: ArrowUpDown },
  { id: 'backtracking',        label: 'Backtracking',        icon: ArrowUpDown },
  { id: 'greedy',              label: 'Greedy',              icon: Star        },
  { id: 'dynamic-programming', label: 'Dynamic Programming', icon: Calculator  },
  { id: 'kadane',              label: "Kadane's Algorithm",  icon: Calculator  },
  { id: 'time-complexity',     label: 'Time Complexity',     icon: Calculator  }
];

export default function Sidebar({
  activeSection,
  onSelectSection,
  selectedTopic,
  onSelectTopic,
  drawerOpen,
  onClose
}) {
  const isFunctions  = activeSection === 'functions';
  const isProblem    = activeSection === 'problem-solving';
  const topicsList   = isFunctions ? FUNCTION_TOPICS : isProblem ? PROBLEM_TOPICS : [];
  const sectionLabel = isFunctions ? 'INBUILT FUNCTIONS' : isProblem ? 'PROBLEM SOLVING' : '';

  return (
    <aside
      className={`app-sidebar${drawerOpen ? ' drawer-open' : ''}`}
      aria-label="Main Navigation"
    >
      {/* ── Sidebar header row ────────────────── */}
      <div className="sidebar-brand">
        <span className="sidebar-brand-text">DSA REVISION</span>
        {/* Close button — only visible on mobile */}
        <button
          type="button"
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* ── 3 Compact Section Nav Buttons ──────── */}
      <nav className="sidebar-sections" role="tablist" aria-label="Sections">
        {MAIN_SECTIONS.map((sec) => {
          const Icon = sec.icon;
          const active = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`sidebar-section-btn${active ? ' active' : ''}`}
              onClick={() => onSelectSection(sec.id)}
            >
              <Icon size={16} className="section-btn-icon" />
              <span className="section-btn-label">{sec.title}</span>
              <ChevronRight size={13} className="section-btn-chevron" />
            </button>
          );
        })}
      </nav>

      {/* ── Topic list (functions / problem-solving only) ── */}
      {topicsList.length > 0 && (
        <div className="sidebar-topics-wrap">
          <div className="sidebar-divider" />
          <p className="sidebar-topics-heading">{sectionLabel}</p>

          <nav className="sidebar-topics-nav" aria-label={`${sectionLabel} topics`}>
            {topicsList.map((item) => {
              const Icon = item.icon;
              const active =
                selectedTopic?.toLowerCase() === item.id.toLowerCase() ||
                selectedTopic?.toLowerCase() === item.label.toLowerCase();
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`sidebar-item${active ? ' active' : ''}`}
                  onClick={() => onSelectTopic(item.id)}
                  aria-current={active ? 'true' : undefined}
                >
                  <div className="sidebar-item-left">
                    <Icon size={14} className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                  </div>
                  <ChevronRight size={12} className="sidebar-chevron" />
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </aside>
  );
}

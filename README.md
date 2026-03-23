# LinkedList TypeScript Implementation

A generic, fully-featured **singly linked list** implementation in TypeScript with comprehensive methods for insertion, deletion, traversal, and manipulation operations.

## Features

✨ **Generic Type Support** - Works with any data type
- Insert at beginning, end, or specific index
- Delete from beginning, end, or by value/index
- Search and retrieve elements
- Reverse entire list or specific range
- Get middle element
- Detect cycles (Floyd's cycle detection)
- Convert to array
- Check if element exists

## Installation

1. Clone or download the repository
2. Include `linkedlist.ts` in your TypeScript project
3. Compile with TypeScript compiler

```bash
tsc linkedlist.ts
```

## Usage

### Basic Setup

```typescript
import { LinkedList } from './linkedlist';

// Create a LinkedList for numbers
const list = new LinkedList<number>();

// Create a LinkedList for strings
const stringList = new LinkedList<string>();
```

### Insertion Methods

```typescript
const list = new LinkedList<number>();

// Insert at end
list.insert(10);
list.insert(20);
list.insert(30);

// Insert at beginning
list.insertBegining(5);

// Insert at specific index
list.insertAtIndex(1, 15);
```

### Deletion Methods

```typescript
// Delete by value
list.delete(20);

// Delete at beginning
list.deleteBegining();

// Delete at end
list.deleteEnd();

// Delete at specific index
list.deleteAtIndex(2);
```

### Retrieval & Search

```typescript
// Get element by index (0-based)
const element = list.getByIndex(1); // Returns element at index 1

// Get node by index
const node = list.getNode(0);

// Find index of element
const index = list.findByElement(20); // Returns index or -1 if not found

// Check if element exists
const exists = list.contains(30); // Returns boolean

// Get size
const size = list.Size;
```

### Traversal & Display

```typescript
// Print all elements
list.printList();

// Convert to array
const arr = list.toArray();
```

### Advanced Operations

```typescript
// Find middle element
const middle = list.findMiddle();

// Reverse entire list
list.reverse();

// Reverse specific range (indices inclusive)
list.reversePiece(1, 3);

// Alternative reverse range method
list.ReversePiece(1, 3);

// Detect cycle in list
const hasCycle = list.detectCycle(); // Returns boolean

// Update element at index
list.setNode(2, 100);
```

## API Reference

### LinkedList Class

#### Constructor
- `constructor()` - Initializes an empty linked list

#### Properties
- `head: node<T> | null` - Reference to the first node
- `Size: number` - Returns current number of elements (getter)

#### Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `insert(data)` | `T` | `void` | Insert element at end |
| `insertBegining(data)` | `T` | `void` | Insert element at beginning |
| `insertAtIndex(index, data)` | `number, T` | `void` | Insert at specific index |
| `delete(data)` | `T` | `void` | Delete by value |
| `deleteBegining()` | - | `void` | Delete first element |
| `deleteEnd()` | - | `void` | Delete last element |
| `deleteAtIndex(index)` | `number` | `void` | Delete at specific index |
| `getByIndex(index)` | `number` | `T` | Get element at index |
| `getNode(index)` | `number` | `node<T>` | Get node at index |
| `setNode(index, data)` | `number, T` | `void` | Update element at index |
| `findByElement(element)` | `T` | `number` | Find index of element (-1 if not found) |
| `contains(data)` | `T` | `boolean` | Check if element exists |
| `findMiddle()` | - | `T \| null` | Get middle element |
| `reverse()` | - | `void` | Reverse entire list |
| `reversePiece(index1, index2)` | `number, number` | `void` | Reverse range (inclusive) |
| `ReversePiece(left, right)` | `number, number` | `void` | Alternative range reverse |
| `toArray()` | - | `T[]` | Convert to array |
| `detectCycle()` | - | `boolean` | Detect if list has cycle |
| `printList()` | - | `void` | Print all elements to console |

## Example

```typescript
const list = new LinkedList<number>();

// Build list
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

console.log(list.Size); // 5

// Search
console.log(list.findByElement(30)); // 2
console.log(list.contains(40)); // true

// Modify
list.insertBegining(5);
list.deleteEnd();
list.reverse();

// Output
list.printList(); // 40, 30, 20, 10, 5

// Convert to array
const arr = list.toArray(); // [40, 30, 20, 10, 5]
```

## Error Handling

The implementation includes error handling for edge cases:
- Accessing elements in an empty list throws an error
- Out of bounds index access throws an error
- Missing elements return -1 or false (depending on method)

```typescript
try {
  list.getByIndex(100); // Throws "Index out of bounds"
} catch (e) {
  console.error(e.message);
}
```

## Time Complexity

| Operation | Complexity |
|-----------|-----------|
| Insert at end | O(n) |
| Insert at beginning | O(1) |
| Insert at index | O(n) |
| Delete by value | O(n) |
| Search (find) | O(n) |
| Access by index | O(n) |
| Reverse | O(n) |
| Detect cycle | O(n) |

## Space Complexity
- **O(n)** where n is the number of elements in the list

## Requirements

- TypeScript 3.5+
- Node.js (for execution)

## License

MIT License - Feel free to use this in your projects.

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Author Notes**: This is a complete implementation suitable for learning data structures and algorithms in TypeScript.

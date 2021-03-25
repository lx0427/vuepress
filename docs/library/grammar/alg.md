```java
package com.mj;

public class ArrayList {

	private int size = 0;
	private int[] elements;

	private static final int DEFAULT_CAPATICY = 10;
	private static final int ELEMENT_NOT_FOUND = -1;

	public ArrayList(int capaticy) {
		capaticy = capaticy > DEFAULT_CAPATICY ? capaticy : DEFAULT_CAPATICY;
		elements = new int[capaticy];
	}

	public ArrayList() {
		this(DEFAULT_CAPATICY);
	}

	public void add(int element) {
		this.add(size, element);
	}

	public void add(int index, int element) {
		this.outOfBoundsForAdd(index);
		this.ensureCapacity(size + 1);
		for (int i = size++; i > index; i--) {
			elements[i] = elements[i - 1];
		}
		elements[index] = element;
	}

	public int get(int index) {
		this.outOfBounds(index);
		return elements[index];
	}

	public int set(int index, int element) {
		this.outOfBounds(index);
		int old = elements[index];
		elements[index] = element;
		return old;
	}

	public int remove(int index) {
		int old = elements[index];
		this.outOfBounds(index);
		for (int i = index; i < size; i++) {
			elements[i] = elements[i + 1];
		}
		size--;
		return old;
	}

	public int indexOf(int element) {
		for (int i = 0; i < size; i++) {
			if (elements[i] == element) {
				return i;
			}
		}
		return ELEMENT_NOT_FOUND;
	}

	public boolean contains(int element) {
		return this.indexOf(element) > -1;
	}

	public boolean isEmpty() {
		return size == 0;
	}

	public void clear() {
		size = 0;
	}

	// 打印
	public String toString() {
		// 拼接字符串
		StringBuilder string = new StringBuilder();
		string.append("size=" + size + " [");
		for (int i = 0; i < size; i++) {
			if (i != 0)
				string.append(", ");
			string.append(elements[i]);

		}
		string.append("]");
		return string.toString();
	}

	private void ensureCapacity(int capaticy) {
		int oldCapaticy = elements.length;
		if (oldCapaticy >= capaticy)
			return;
		int newCapaticy = oldCapaticy + (oldCapaticy >> 1);
		int newElements[] = new int[newCapaticy];
		// 将原数组值搬迁至扩容后数组
		for (int i = 0; i < size; i++) {
			newElements[i] = elements[i];
		}
		elements = newElements;
	}

	// 下标越界
	private void outOfBounds(int index) {
		if (index < 0 || index >= size) {
			throw new IndexOutOfBoundsException("size: " + size + ", index: " + index);
		}
	}

	private void outOfBoundsForAdd(int index) {
		if (index < 0 || index > size) {
			throw new IndexOutOfBoundsException("size: " + size + ", index: " + index);
		}
	}

}
```

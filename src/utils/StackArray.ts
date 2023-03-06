/**
 * 栈
 */

interface Obj {
    [index: number]: any
}

class StackArray {
    private items: Array<any>;
    constructor() {
        // 创建一个数组用于保存栈
        this.items = [];
    };

    // 添加元素到栈顶
    push(element: any) {
        this.items.push(element);
    };

    // 移除栈顶元素, 并返回值
    pop() {
        return this.items.pop()
    };

    // 返回栈顶元素, 不做任何操作
    peek() {
        return this.items[this.items.length - 1]
    };

    // 判断栈中是否有元素, 如果没有，就返回 true 否则返回 false
    isEmpty() {
        return this.items.length === 0
    };

    // 清空栈中元素
    clear() {
        this.items = []
    };

    // 反回栈的长度
    size() {
        return this.items.length;
    };
}

class StackObject {
    private items: Obj;
    private count: number;

    constructor() {
        // 保存栈
        this.items = {};
        // 记录栈的长度
        this.count = 0;
    };

    isEmpty() {
        return this.count === 0
    }

    push(element: any) {
        this.items[this.count++] = element;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[--this.count]
        delete this.items[this.count]

        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined
        }

        return this.items[this.count - 1]
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size() {
        return this.count
    }
}

export const stack = new StackArray();
export const stackObj = new StackObject();
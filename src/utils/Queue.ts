/**
 * 队列
 */

interface ItemObject {
    [index: number]: any
}


class Queue {
    count: number; // 记录队尾
    lowestCount: number; // 记录队头
    items: ItemObject;

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // 返回队列长度
    size() {
        return this.count - this.lowestCount;
    }

    // 判断队列是否为空
    isEmpty() {
        return this.size() === 0;
    }

    // 向队尾添加一个新元素
    enqueue(element: any) {
        this.items[this.count] = element;
        this.count++;
    }

    // 移除队列头部的元素
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // 返回头部内容
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}

export const queue = new Queue();
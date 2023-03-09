<template>
  <div class="about">
    <div class="frist-div">我是第一个div</div>
    <div class="box">
      <p class="brother-node">兄弟节点</p>
      <span class="text" src="123" data-test="我是自定义属性">文本</span>
      <p>最后一个元素</p>
      <div><span>被包裹的span标签</span></div>
    </div>
    <div class="cycle-box">
      <div v-for="item in 5" :key="item" :class="`item-box`">{{ item }}</div>
    </div>
    <div>123456789</div>
    <el-button v-for="item in list" :key="item.id" @click="traversal">{{ item.name }}</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, h } from "vue"

import {stack, stackObj} from '../utils/StackArray.js';

export default defineComponent({
  name: "AboutComponent",
  setup(props, ctx) {
    // const { attrs, slots, emit, expose } = ctx
    console.log("ctx", ctx);
    console.log("props", props);
    const list = reactive([
      {
        id: 1000,
        name: 1,
      },{
        id: 2000,
        name: 2
      },{
        id: 3000,
        name: 3
      }, {
        id: 4000,
        name: 4
      },
      {
        id: 2000,
        name: 5
      }
    ]);

    const arrList = [
    {
        "id": "1",
        "pId": null,
        "title": "长期",
        "ywid": true,
        "origin": null,
        "parentId": null,
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "金期",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "1",
        "value": "1",
        "key": "1",
        "pid": null,
        "isLeaf": true
    },
    {
        "id": "2",
        "pId": null,
        "title": "国金",
        "ywid": true,
        "origin": null,
        "parentId": null,
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "国金",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "2",
        "value": "2",
        "key": "2",
        "pid": null,
        "isLeaf": false
    },
    {
        "id": "3",
        "pId": null,
        "title": "利用金",
        "ywid": true,
        "origin": null,
        "parentId": null,
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "利用金",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "3",
        "value": "5",
        "key": "5",
        "pid": null,
        "isLeaf": true
    },
    {
        "id": "4",
        "pId": null,
        "title": "其他金",
        "ywid": true,
        "origin": null,
        "parentId": null,
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "其他金",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "4",
        "value": "6",
        "key": "6",
        "pid": null,
        "isLeaf": true
    },
    {
        "id": "5",
        "pId": "1",
        "title": "短期",
        "origin": null,
        "parentId": "1",
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "长贷",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "1.1",
        "value": "3",
        "key": "3",
        "pid": "1",
        "isLeaf": false
    },
    {
        "id": "6",
        "pId": "1",
        "title": "短期",
        "origin": null,
        "parentId": "1",
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "短期",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "1.2",
        "value": "4",
        "key": "4",
        "pid": "1",
        "isLeaf": false
    },
    {
        "id": "7",
        "pId": "2",
        "title": "长期",
        "origin": null,
        "parentId": "2",
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "长期",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "2.1",
        "value": "3",
        "key": "3",
        "pid": "2",
        "isLeaf": false
    },
    {
        "id": "8",
        "pId": "2",
        "title": "短期",
        "origin": null,
        "parentId": "2",
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "短期",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "2.2",
        "value": "4",
        "key": "4",
        "pid": "2",
        "isLeaf": false
    },
    {
        "id": "9",
        "pId": "3",
        "title": "长期",
        "origin": null,
        "parentId": "3",
        "projectId": "1BD75301A441F0419098AEFA0129A9B4",
        "state": "0",
        "name": "长期",
        "financeType": null,
        "shareholderName": "魅力公司",
        "shareholderType": "0",
        "ownershipRatio": null,
        "expectedTotalAmount": 1000,
        "planTotalAmount": 900,
        "remark": "备注",
        "isAllowDel": "0",
        "orderNo": "2.1",
        "value": "3",
        "key": "3",
        "pid": "3",
        "isLeaf": false
    }
]

    let treeData = [
		{
			"id": "1",
			"pId": null,
			"title": "长期",
			"ywid": true,
			"children": [
				{
					"id": "5",
					"pId": "1",
					"title": "短期",
					"children": [],
					"origin": null,
					"parentId": "1",
					"projectId": "1BD75301A441F0419098AEFA0129A9B4",
					"state": "0",
					"name": "长贷",
					"financeType": null,
					"shareholderName": "魅力公司",
					"shareholderType": "0",
					"ownershipRatio": null,
					"expectedTotalAmount": 1000,
					"planTotalAmount": 900,
					"remark": "备注",
					"isAllowDel": "0",
					"orderNo": "1.1",
					"value": "3",
					"key": "3",
					"pid": "1",
					"isLeaf": false
				},
				{
					"id": "6",
					"pId": "1",
					"title": "短期",
					"children": [],
					"origin": null,
					"parentId": "1",
					"projectId": "1BD75301A441F0419098AEFA0129A9B4",
					"state": "0",
					"name": "短期",
					"financeType": null,
					"shareholderName": "魅力公司",
					"shareholderType": "0",
					"ownershipRatio": null,
					"expectedTotalAmount": 1000,
					"planTotalAmount": 900,
					"remark": "备注",
					"isAllowDel": "0",
					"orderNo": "1.2",
					"value": "4",
					"key": "4",
					"pid": "1",
					"isLeaf": false
				}
			],
			"origin": null,
			"parentId": null,
			"projectId": "1BD75301A441F0419098AEFA0129A9B4",
			"state": "0",
			"name": "金期",
			"financeType": null,
			"shareholderName": "魅力公司",
			"shareholderType": "0",
			"ownershipRatio": null,
			"expectedTotalAmount": 1000,
			"planTotalAmount": 900,
			"remark": "备注",
			"isAllowDel": "0",
			"orderNo": "1",
			"value": "1",
			"key": "1",
			"pid": null,
			"isLeaf": true,

		},
		{
			"id": "2",
			"pId": null,
			"title": "国金",
			"ywid": true,
			"children": [
				{
					"id": "7",
					"pId": "2",
					"title": "长期",
					"children": [],
					"origin": null,
					"parentId": "2",
					"projectId": "1BD75301A441F0419098AEFA0129A9B4",
					"state": "0",
					"name": "长期",
					"financeType": null,
					"shareholderName": "魅力公司",
					"shareholderType": "0",
					"ownershipRatio": null,
					"expectedTotalAmount": 1000,
					"planTotalAmount": 900,
					"remark": "备注",
					"isAllowDel": "0",
					"orderNo": "2.1",
					"value": "3",
					"key": "3",
					"pid": "2",
					"isLeaf": false
				},
				{
					"id": "8",
					"pId": "2",
					"title": "短期",
					"children": [],
					"origin": null,
					"parentId": "2",
					"projectId": "1BD75301A441F0419098AEFA0129A9B4",
					"state": "0",
					"name": "短期",
					"financeType": null,
					"shareholderName": "魅力公司",
					"shareholderType": "0",
					"ownershipRatio": null,
					"expectedTotalAmount": 1000,
					"planTotalAmount": 900,
					"remark": "备注",
					"isAllowDel": "0",
					"orderNo": "2.2",
					"value": "4",
					"key": "4",
					"pid": "2",
					"isLeaf": false
				}
			],
			"origin": null,
			"parentId": null,
			"projectId": "1BD75301A441F0419098AEFA0129A9B4",
			"state": "0",
			"name": "国金",
			"financeType": null,
			"shareholderName": "魅力公司",
			"shareholderType": "0",
			"ownershipRatio": null,
			"expectedTotalAmount": 1000,
			"planTotalAmount": 900,
			"remark": "备注",
			"isAllowDel": "0",
			"orderNo": "2",
			"value": "2",
			"key": "2",
			"pid": null,
			"isLeaf": false
		},
		{
			"id": "3",
			"pId": null,
			"title": "利用金",
			"ywid": true,
			"children": [
				{
					"id": "9",
					"pId": "3",
					"title": "长期",
					"children": [],
					"origin": null,
					"parentId": "3",
					"projectId": "1BD75301A441F0419098AEFA0129A9B4",
					"state": "0",
					"name": "长期",
					"financeType": null,
					"shareholderName": "魅力公司",
					"shareholderType": "0",
					"ownershipRatio": null,
					"expectedTotalAmount": 1000,
					"planTotalAmount": 900,
					"remark": "备注",
					"isAllowDel": "0",
					"orderNo": "2.1",
					"value": "3",
					"key": "3",
					"pid": "3",
					"isLeaf": false
				}
			],
			"origin": null,
			"parentId": null,
			"projectId": "1BD75301A441F0419098AEFA0129A9B4",
			"state": "0",
			"name": "利用金",
			"financeType": null,
			"shareholderName": "魅力公司",
			"shareholderType": "0",
			"ownershipRatio": null,
			"expectedTotalAmount": 1000,
			"planTotalAmount": 900,
			"remark": "备注",
			"isAllowDel": "0",
			"orderNo": "3",
			"value": "5",
			"key": "5",
			"pid": null,
			"isLeaf": true
		},
		{
			"id": "4",
			"pId": null,
			"title": "其他金",
			"ywid": true,
			"children": [],
			"origin": null,
			"parentId": null,
			"projectId": "1BD75301A441F0419098AEFA0129A9B4",
			"state": "0",
			"name": "其他金",
			"financeType": null,
			"shareholderName": "魅力公司",
			"shareholderType": "0",
			"ownershipRatio": null,
			"expectedTotalAmount": 1000,
			"planTotalAmount": 900,
			"remark": "备注",
			"isAllowDel": "0",
			"orderNo": "4",
			"value": "6",
			"key": "6",
			"pid": null,
			"isLeaf": true
		}
	  ]

    // 树结构转 扁平数组
    const flatTreeData = (list: any, targetName: string, sort: boolean = true) => {
		  const res: any = [];

      if( !list.length || !targetName ||  !Array.isArray(list)){
        return [];
      }

      function getData(list: any, targetName: string) {
        Array.from(list).forEach((item: any) => {
          if (item[targetName]) {
            getData(item[targetName], targetName)
          }
          delete item[targetName]
          res.push(item);
        })
      }
      getData(list, targetName)

      let result = sort ? res.sort((a:any, b:any) => a.id < b.id ? -1 : 1) : res
      return result
    }

	// const a = flatTreeData(treeData, 'children')
	// console.log(a,"数据扁平化1")

  const flatDataToTree = (list: any) => {
    let result: any = [];

    for(let i = 0; i < list.length; i++) {
      
    }

    list.map((item: any) => {
        if(!item.pId){
          result.push(item)
        } else {
          result.push({
            [item.pId]: item
          })
        }
    })

    return result;
  }

  const a = flatDataToTree(arrList)
  console.log(a, "flatTreeData")

    
    stackObj.push(1)
    stackObj.push(2)
    stackObj.push(3)
    stackObj.push(4)
    

    stack.push(1);
    stack.size();

    // console.log(stack.size());

    // console.log(stack);
    // console.log(stackObj);

    // console.log(stackObj.peek())
    // console.log(stackObj.pop())
    // console.log(stackObj.size())
    

    function timeConsuming(inputVal: number, time = 0){
      const timerId = setTimeout(() => {
        console.log(inputVal)
      }, time)
    }
    
    function traversal(){
      for(let i = 0; i < 5; i++){
        let timer = i === 4 ? 2500 : i * 1000;
        timeConsuming(i, timer)
      }
    }

    return {list, traversal}
    // 渲染函数
    // return () => h('div', {id: 'foo', class: 'bar', innerHTML: 'hello'});
  }
})
</script>

<style>
.cycle-box {
  margin-right: 10px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    
  }
  .box {
    margin-right: 20px;
  }
}
</style>

<style>
.frist-div + div {
  background-color: pink;
}

.item-box {
  
}
</style>

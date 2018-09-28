/**
 * 作者： 孙尊路
 * 创建时间： 2018/08/21 13:27:09
 * 版本： [1.0, 2018/08/21]
 * 版权： 江苏国泰新点软件有限公司
 * 描述：  日历组件示例
 */

"use strict";
var chooseday
var customBiz = {
	init: function() {
		var self = this;
		// 初始化日历

		var calendar = new Calendar({
			// swiper滑动容器
			container: "#calendar",
			// 上一月节点
			pre: ".pre",
			// 下一月节点
			next: ".next",
			// 回到今天
			backToToday: ".backToday",
			// 业务数据改变
			dataRequest: function(currdate, callback, _this) {
				// 无日程安排
				var data = [];
				callback && callback(data);
			},
			// 点击日期事件
			onItemClick: function(item) {
				var defaultDate = item.date;
				// 设置标题
				setTitle(defaultDate);
				chooseday = defaultDate;
				console.log(chooseday); 
				console.log('点击了');
//				var date = new Date(defaultDate);
//				var time1 = date.getTime();
//				console.log(time1)
//				var page={
//					'url':'class/editClass',
//					'title':'none',
//					'param':'{dataId:'+parseInt(time1)+'}' 
//				}
//				App.open(page)
			},
			// 滑动回调
			swipeCallback: function(item) {
				var defaultDate = item.date;
				// 设置标题
				setTitle(defaultDate);
				
				// 动态新增点击样式
				calendar.addActiveStyleFordate(defaultDate);
				
			},
			// 调试
			isDebug: false
		});
		// 设置标题
		var titleNode = document.querySelector('.mid span');
		
		function setTitle(date) {
			titleNode.innerText = date;
		}
	}
}

// 初始化
customBiz.init();
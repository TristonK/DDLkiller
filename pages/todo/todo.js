Page({
    data:{
        todayTask:[],
        todo1:[],
        todo2:[],
        todo3:[],
        todo4:[],
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
    },
    setTodayT(todayTask){
        this.setData({
            todayTask
        });
    },
    setTodo1(todo1){
        this.setData({
            todo1
        });
    },
    setTodo2(todo2){
        this.setData({
            todo2
        });
    },
    setTodo3(todo3){
        this.setData({
            todo3
        });
    },
    setTodo4(todo4){
        this.setData({
            todo4
        });
    },
    inputTodayHandle: function (e) {
        this.setData({ input1: e.detail.value })
    },
    input2Handle: function (e) {
        this.setData({ input2: e.detail.value })
    },
    input3Handle: function (e) {
        this.setData({ input3: e.detail.value })
    },
    input4Handle: function (e) {
        this.setData({ input4: e.detail.value })
    },
    input5Handle: function (e) {
        this.setData({ input5: e.detail.value })
    },
    addToDayHandle: function (e) {
        if (!this.data.input1 || !this.data.input1.trim()) return
        var nowdate = new Date();
        var todayDate = nowdate.getDate();
        var lastdate = qq.getStorageSync('lastDATE');
        if(lastdate!='' && lastdate!=nowdate){
            this.setTodayT([{task:this.data.input1, status:0,date:todayDate}]);
            q.setStorageSync('lastDATE',todayDate);
        }
        else{
            this.setTodayT([...this.data.todayTask,{task:this.data.input1, status:0,date:todayDate}]);
        }
        this.setData({input1:''});
        qq.setStorageSync('todayTask',this.data.todayTask);
    },
    add1Handle: function (e) {
        if (!this.data.input2 || !this.data.input2.trim()) return
        this.setTodo1([...this.data.todo1,{task:this.data.input2, status:0}]);
        this.setData({input2:''});
        qq.setStorageSync('todo1',this.data.todo1);
    },
    add2Handle: function (e) {
        if (!this.data.input3 || !this.data.input3.trim()) return
        this.setTodo2([...this.data.todo2,{task:this.data.input3, status:0}]);
        this.setData({input3:''});
        qq.setStorageSync('todo2',this.data.todo2);
    },
    add3Handle: function (e) {
        if (!this.data.input4 || !this.data.input4.trim()) return
        this.setTodo3([...this.data.todo3,{task:this.data.input4, status:0}]);
        this.setData({input4:''});
        qq.setStorageSync('todo3',this.data.todo3);
    },
    add4Handle: function (e) {
        if (!this.data.input5 || !this.data.input5.trim()) return
        this.setTodo4([...this.data.todo4,{task:this.data.input5, status:0}]);
        this.setData({input5:''});
        qq.setStorageSync('todo1',this.data.todo4);
    },
    removeTodoHandle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todayTask.splice(index,1);
        qq.setStorageSync('todayTask',this.data.todayTask);
        this.onLoad();
    },
    removeTodo1Handle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todo1.splice(index,1);
        qq.setStorageSync('todo1',this.data.todo1);
        this.onLoad();
    },
    removeTodo2Handle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todo2.splice(index,1);
        qq.setStorageSync('todo2',this.data.todo2);
        this.onLoad();
    },
    removeTodo3Handle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todo3.splice(index,1);
        qq.setStorageSync('todo3',this.data.todo3);
        this.onLoad();
    },
    removeTodo4Handle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todo4.splice(index,1);
        qq.setStorageSync('todo4',this.data.todo4);
        this.onLoad();
    },
    toggleTodoHandle: function(e){
        var index = e.currentTarget.dataset.index;
        this.data.todayTask[index].status ^= 1;
        qq.setStorageSync('todayTask',this.data.todayTask);
        this.onLoad();
    },
    onLoad(options) {
        this.setData({todayTask: (qq.getStorageSync('todayTask')||[])});
        this.setData({todo1: (qq.getStorageSync('todo1')||[])});
        this.setData({todo2: (qq.getStorageSync('todo2')||[])});
        this.setData({todo3: (qq.getStorageSync('todo3')||[])});
        this.setData({todo4: (qq.getStorageSync('todo4')||[])});
        // Do some initialize when page load.
    },
    onReady() {
        // Do something when page ready.
    },
    onShow() {
        // Do something when page show.
    },
    onHide() {
        // Do something when page hide.
    },
    onUnload() {
        // Do something when page close.
    },
    //onPullDownRefresh() {
        // Do something when pull down.
    //},
    onReachBottom() {
        // Do something when page reach bottom.
    },
    onShareAppMessage() {
        // return custom share data when user share.
    },
    onPageScroll() {
        // Do something when page scroll
    },
    onResize() {
        // Do something when page resize
    },
    onTabItemTap(item) {
        console.log(item.index)
        console.log(item.pagePath)
        console.log(item.text)
    },
})
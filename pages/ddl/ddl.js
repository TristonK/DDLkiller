Page({
    data:{
        ddls: [],
        message:"shitddl",
        name: '',
        time: '',
        content: '',
        date:''
    },
    setDdls(ddls){
        this.setData({
            ddls
        });
    },
    inputNameHandle: function(e){
        this.setData({ name: e.detail.detail.value })
    },
    inputContentHandle: function(e){
        this.setData({ content: e.detail.detail.value })
    },
    inputTimeHandle: function(e){
        this.setData({ time: e.detail.detail.value })
    },
    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function(e) {
        this.setData({
            time: e.detail.value
        })
    },
    addTodo(){
        if(this.data.name){
            this.setDdls([...this.data.ddls,{name:this.data.name, content:this.data.content,date:this.data.date, time:this.data.time,progress:0,status:0}]);
            this.setData({name:'',time:'',content:'',date:''});
            qq.setStorageSync('ddls', this.data.ddls)
        }
    },
    addrate: function(event){
        var shit = event.currentTarget.dataset.index;
        if(this.data.ddls[shit].progress<100){ 
            this.data.ddls[shit].progress+=5;
        }
        qq.setStorageSync('ddls', this.data.ddls);
        this.onLoad();
    },
    deleteddl: function(event){
        var shit = event.currentTarget.dataset.index;
        this.data.ddls.splice(shit,1);
        qq.setStorageSync('ddls', this.data.ddls);
        this.onLoad();
    },
    onLoad(options) {
        this.setData({
          ddls: (qq.getStorageSync('ddls') || [])
        });
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
    // Event handler.
    viewTap() {
        this.setData({
        text: 'Set some data for updating view.'
        }, function () {
        // this is setData callback
        })
    },
    customData: {
        hi: 'MINA'
    }
})
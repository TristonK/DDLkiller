<view class="header">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
</view>
<view class="container">
<p>劝君莫惜金缕衣</p>
<p>劝君惜取少年时</p>
<p>花开堪折直须折</p>
<p>莫待无花空折枝</p>
</view>
<view class="footer">
  <view style="margin-top: 45px;">
    <i-button bind:click="handleOpen1">意见反馈</i-button>
  </view>
  <i-modal title="联系我" visible="{{ visible1 }}" bind:ok="handleClose1" bind:cancel="handleClose1">
    <view>Mail: kuangsl@foxmail.com</view>
    <view>期待您的意见</view>
  </i-modal>


</view>

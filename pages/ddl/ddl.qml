<block qq:if="{{ ddls.length }}">
    <view qq:for="{{ddls}}">
        <view qq:if="{{item.progress==100}}">
          <i-card title="{{item.name}}" extra="已完成">
          <view slot="content">{{item.content}}</view>
            <view slot="footer">
              已在{{item.date}} {{item.time}}前完成ddl
              <i-button bind:click="deleteddl" type="error" inline="true" size="small" data-index="{{index}}">删除ddl</i-button>
            </view>
          </i-card>
        </view>
        <view qq:else>
          <i-card title="{{item.name}}" extra="{{item.date}}  {{item.time}}">
            <view slot="content">{{item.content}}</view>
            <view slot="footer">
              <view class="progress-item">
              <i-progress percent="{{item.progress}}"></i-progress>
              </view>
              <i-button bind:click="addrate" type="info" inline="true" size="small" data-index="{{index}}">增加进度</i-button>
              <i-button bind:click="deleteddl" type="error" inline="true" size="small" data-index="{{index}}">删除ddl</i-button>
            </view>
          </i-card>
         </view>
    </view>
</block>
  <block qq:else>
    <i-card title="没有ddl辣">
      <view slot="content">休息一下吧</view>
      <view slot="footer">
      </view>
    </i-card>
  </block>

<i-divider content="又有新的ddl了5555"></i-divider>

<i-card title="添加ddl">
      <view slot="content">
      <i-panel title="添加DDL">
                  <i-input  value="{{ name }}" type="textarea" title="ddl名称" autofocus placeholder="名字" bind:change="inputNameHandle" />
                  <i-input value="{{ content }}" type="textarea" title="详细内容" placeholder="请输入ddl内容" bind:change="inputContentHandle"/>
                  <picker mode="date" value="{{date}}" start="2019-05-01" end="2022-12-30" bindchange="bindDateChange">
                <i-button class="weui-btn" type="default">截止日期 {{date}}</i-button>
                </picker>
                <picker mode="time" value="{{time}}"  start="00:00" end="23:59" bindchange="bindTimeChange">
                <i-button class="weui-btn" type="default">截止时间 {{time}}</i-button>
                 </picker>
                <i-button bind:click="addTodo" type="primary">提交</i-button>
                </i-panel>
      </view>
</i-card>
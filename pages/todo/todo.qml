<i-panel class="cell-panel-demo" title="今日安排 (每日24点清空)">
   <view class="header">
    <i-icon type="createtask" size="27" class="plus"/>
    <input class="new-todo" value="{{ input1 }}" placeholder="今日安排" auto-focus bindinput="inputTodayHandle" bindconfirm="addToDayHandle"/>
    </view>
    <block qq:if="{{ todayTask.length }}">
    <view class="todos">
      <view class="item{{ item.status==1 ? ' completed' : '' }}" qq:for="{{ todayTask }}" qq:key="{{ index }}" bindtap="toggleTodoHandle" data-index="{{ index }}">
        <!-- completed: success, todo: circle -->
        <i-icon qq:if="{{item.status==1}}" class="checkbox" type="success_fill" color="#2b8ea5" size="17"/>
        <icon qq:if="{{item.status!=1}}" class="checkbox" type="circle" size="16"/>
        <text class="name">{{ item.task }}</text>
        <icon class="remove" type="clear" size="16" catchtap="removeTodoHandle" data-index="{{ index }}"/>
      </view>
    </view>
    </block>
</i-panel>

<view class="important-yes">
    <input class="new-todo" value="{{ input2 }}" placeholder="紧急且重要的事情" auto-focus bindinput="input2Handle" bindconfirm="add1Handle"/>
    <block qq:if="{{ todo1.length }}">
    <view class="todos">
      <view class="item" qq:for="{{ todo1 }}" qq:key="{{ index }}" bindtap="toggleTodoHandle" data-index="{{ index }}">
        <!-- completed: success, todo: circle -->
        <text class="name">{{ item.task }}</text>
        <icon class="remove" type="clear" size="16" catchtap="removeTodo1Handle" data-index="{{ index }}"/>
      </view>
    </view>
    </block>
</view>

<view class="important-no">
    <input class="new-todo" value="{{ input3 }}" placeholder="不紧急但重要的事情" auto-focus bindinput="input3Handle" bindconfirm="add2Handle"/>
    <block qq:if="{{ todo2.length }}">
    <view class="todos">
      <view class="item" qq:for="{{ todo2 }}" qq:key="{{ index }}" data-index="{{ index }}">
        <!-- completed: success, todo: circle -->
        <text class="name">{{ item.task }}</text>
        <icon class="remove" type="clear" size="16" catchtap="removeTodo2Handle" data-index="{{ index }}"/>
      </view>
    </view>
    </block>
</view>

<view class="unimportant-yes">
    <input class="new-todo" value="{{ input4 }}" placeholder="紧急但不重要的事情" auto-focus bindinput="input4Handle" bindconfirm="add3Handle"/>
    <block qq:if="{{ todo3.length }}">
    <view class="todos">
      <view class="item" qq:for="{{ todo3 }}" qq:key="{{ index }}" data-index="{{ index }}">
        <!-- completed: success, todo: circle -->
        <text class="name">{{ item.task }}</text>
        <icon class="remove" type="clear" size="16" catchtap="removeTodo3Handle" data-index="{{ index }}"/>
      </view>
    </view>
    </block>
</view>

<view class="unimportant-no">
    <input class="new-todo" value="{{ input5 }}" placeholder="不紧急且不重要的事情" auto-focus bindinput="input5Handle" bindconfirm="add4Handle"/>
    <block qq:if="{{ todo4.length }}">
    <view class="todos">
      <view class="item" qq:for="{{ todo4 }}" qq:key="{{ index }}" data-index="{{ index }}">
        <!-- completed: success, todo: circle -->
        <text class="name">{{ item.task }}</text>
        <icon class="remove" type="clear" size="16" catchtap="removeTodo4Handle" data-index="{{ index }}"/>
      </view>
    </view>
    </block>
</view>
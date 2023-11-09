# 规则
  + 寻找项目中的性能损耗严重的子树
  + 在子树的根节点使用性能优化API
  + 子树中运用变与不变分离原则
  

+  把不变的和变的分开
+  当父组件满足性能优化条件 子孙组件才可能命中性能优化
   props state 与 context 都不发生变化，所以这里将ExpensiveCpn 在InputWrapper时, 
  // ExpensiveCpn 对应的props.children, 而props.children它的state, props都是 props.children
  // 平级中对应的属性，而不是当前InputWrapper中的props、state属性，所以没有发生变化


// 该如何比较props ? 
// 全等比较 -- 高效, 但不易命中 (默认)
// 浅比较 -- 不高效, 但易命中
// 当使用memo 包裹后，react 会改用浅比较
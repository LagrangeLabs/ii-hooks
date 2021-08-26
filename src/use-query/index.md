---
title: useQuery
nav:
  title: Hooks
  path: /hooks
group:
  title: Data
  path: /data
---

# useQuery

获取页面 query 参数

## 代码演示

### 基础用法

## API

```typescript
// location.search = https://ai-indeed.com?id=11
const { id } = useQuery<{ id: string }>()
console.log(id) // 11
```

```typescript
// location.search = https://ai-indeed.com
const { id } = useQuery<{ id: string }>()
console.log(id) // undefined
```

```typescript
const { id } = useQuery<{ id: string }>(`https://ai-indeed.com?id=12`)
console.log(id) // 12
```

### 参数

| 参数 | 说明       | 类型   | 默认值            | 返回值 |
| ---- | ---------- | ------ | ----------------- | ------ |
| url  | 地址栏 url | string | `location.search` | `{}`   | `Partial<T>` |

# zyidc API 文档

## 海外IP列表接口

### 接口说明

该接口用于获取海外IP地址列表，返回格式为以逗号分隔的IP地址字符串。

### 请求地址

```
https://api.cnae.top/zyidc/overseas/
```

### 请求方法

GET

### 请求参数

无

### 返回示例

```
1.1.1.1,2.2.2.2,3.3.3.3
```

### 返回格式说明

- 返回类型：纯文本 (text/plain)
- 数据格式：以逗号分隔的IP地址列表
- 每个IP地址格式：IPv4格式，如 `1.1.1.1`

### 使用示例

#### cURL

```bash
curl https://api.cnae.top/zyidc/overseas/
```

#### JavaScript

```javascript
fetch('https://api.cnae.top/zyidc/overseas/')
  .then(response => response.text())
  .then(data => {
    const ipList = data.split(',');
    console.log('IP列表:', ipList);
  })
  .catch(error => console.error('错误:', error));
```

#### Python

```python
import requests
import json

response = requests.get('https://api.cnae.top/zyidc/overseas/')
ip_list = response.text.split(',')
print('IP列表:', ip_list)
```

### 错误处理

| 状态码 | 描述 |
| :--- | :--- |
| 200 | 请求成功，返回IP列表 |
| 404 | 接口不存在 |
| 500 | 服务器内部错误 |

### 注意事项

- 该接口返回的IP地址列表可能会定期更新
- 请根据实际需求对返回的IP列表进行处理和使用
- 建议添加适当的缓存机制，减少频繁请求
# ejs Snippet

| Snippet→ | Output                                                                                             |
| :------- | :------------------------------------------------------------------------------------------------- |
| ejs→     | <%= %> - Outputs HTML tag                                                                          |
| ejsout→  | <% %> - No output value                                                                            |
| ejsesc→  | <%- %> - Outputs unescaped                                                                         |
| ejscom→  | <%# %> - Comment tag                                                                               |
| ejslit→  | <%% %> - Outputs Literal <%                                                                        |
| ejsinc→  | include statement                                                                                  |
| ejsfor→  | for Javascript Loop                                                                                |
| ejseach→ | forEach Javascript Loop                                                                            |
| ejsif→   | if Statement with condition                                                                        |
| ejselif→ | else if Statement - Middle section only. Assumes you have already written the first if statement.  |
| ejselse→ | else Statement - Middle section only. Assumes you have already written the first if statement. --> |

## 配置文件

```json
{
  "ejs": {
    "prefix": "ejs",
    "body": ["<%= $1 %>"],
    "description": "<%= %>"
  },
  "ejsout": {
    "prefix": "ejsout",
    "body": ["<% $1 %>"],
    "description": "<% %>"
  },
  "ejsesc": {
    "prefix": "ejsesc",
    "body": ["<%- $1 %>"],
    "description": "<%- %>"
  },
  "ejscom": {
    "prefix": "ejscom",
    "body": ["<%# $1 %>"],
    "description": "<%# %>"
  },
  "ejsinc": {
    "prefix": "ejsinc",
    "body": ["include('$1')"],
    "description": "include('')"
  },
  "ejsfor": {
    "prefix": "ejsfor",
    "body": ["<% for(var i = 0; i < list.length; i++){ %>", "<% var item = list[i] %>", "<%= item.$1 %>", "<% } %>"],
    "description": "ejsfor"
  },
  "ejsif": {
    "prefix": "ejsif",
    "body": ["<% if ($1) { %>", "<% } %>"],
    "description": "ejsif"
  },
  "ejselseif": {
    "prefix": "ejselseif",
    "body": ["<% } else if ($1) { %>"],
    "description": "ejselseif"
  },
  "ejselse": {
    "prefix": "ejselse",
    "body": ["<% } else { %>"],
    "description": "ejselse"
  }
}
```

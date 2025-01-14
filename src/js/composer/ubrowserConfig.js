// ubrowser 浏览器操作配置
export const ubrowserOperationConfigs = [
  {
    value: "wait",
    label: "等待",
    config: [
      {
        key: "type",
        label: "等待类型",
        type: "button-toggle",
        options: [
          { label: "等待时间", value: "time" },
          { label: "等待元素", value: "selector" },
          { label: "等待条件", value: "function" },
        ],
        defaultValue: "time",
      },
      {
        key: "time",
        label: "等待时间(ms)",
        icon: "timer",
        type: "numInput",
        width: 12,
        showWhen: "type",
        showValue: "time",
      },
      {
        key: "selector",
        label: "等待元素的CSS选择器",
        icon: "find_in_page",
        type: "varInput",
        width: 12,
        showWhen: "type",
        showValue: "selector",
      },
      {
        key: "function",
        label: "等待条件(返回 true 时结束等待)",
        icon: "code",
        type: "function-with-params",
        width: 12,
        showWhen: "type",
        showValue: "function",
      },
      {
        key: "timeout",
        label: "超时时间(ms)",
        icon: "timer_off",
        type: "numInput",
        width: 12,
        defaultValue: 60000,
        showWhen: "type",
        showValue: ["selector", "function"],
      },
    ],
    icon: "timer",
  },
  {
    value: "click",
    label: "点击",
    config: [
      {
        key: "selector",
        label: "点击元素的CSS选择器",
        icon: "mouse",
        type: "varInput",
      },
    ],
    icon: "mouse",
  },
  {
    value: "css",
    label: "注入CSS",
    config: [
      {
        key: "value",
        label: "注入的CSS样式",
        icon: "style",
        type: "varInput",
      },
    ],
    icon: "style",
  },
  {
    value: "press",
    label: "按键",
    config: [
      {
        key: "key",
        label: "按键",
        icon: "keyboard",
        type: "varInput",
        width: 5,
      },
      {
        key: "modifiers",
        label: "修饰键",
        type: "checkbox-group",
        options: [
          { label: "Ctrl", value: "ctrl" },
          { label: "Shift", value: "shift" },
          { label: "Alt", value: "alt" },
          { label: "Meta", value: "meta" },
        ],
        defaultValue: [],
        width: 7,
      },
    ],
    icon: "keyboard",
  },
  {
    value: "paste",
    label: "粘贴",
    config: [
      {
        key: "text",
        label: "粘贴内容",
        icon: "content_paste",
        type: "varInput",
      },
    ],
    icon: "content_paste",
  },
  {
    value: "viewport",
    label: "视窗",
    config: [
      {
        key: "width",
        label: "视窗宽度",
        icon: "width",
        type: "numInput",
        width: 6,
      },
      {
        key: "height",
        label: "视窗高度",
        icon: "height",
        type: "numInput",
        width: 6,
      },
    ],
    icon: "crop",
  },
  {
    value: "screenshot",
    label: "截图",
    config: [
      { key: "selector", label: "元素选择器", icon: "crop", type: "varInput" },
      {
        key: "rect.x",
        label: "X坐标",
        icon: "drag_handle",
        type: "numInput",
        width: 3,
      },
      {
        key: "rect.y",
        label: "Y坐标",
        icon: "drag_handle",
        type: "numInput",
        width: 3,
      },
      {
        key: "rect.width",
        label: "宽度",
        icon: "width",
        type: "numInput",
        width: 3,
      },
      {
        key: "rect.height",
        label: "高度",
        icon: "height",
        type: "numInput",
        width: 3,
      },
      { key: "savePath", label: "保存路径", icon: "save", type: "varInput" },
    ],
    icon: "picture_as_pdf",
  },
  {
    value: "pdf",
    label: "导出PDF",
    config: [
      {
        key: "options.marginsType",
        label: "边距类型",
        type: "select",
        options: [
          { label: "默认边距", value: 0 },
          { label: "无边距", value: 1 },
          { label: "最小边距", value: 2 },
        ],
        width: 6,
      },
      {
        key: "options.pageSize",
        label: "页面大小",
        type: "select",
        options: ["A3", "A4", "A5", "Legal", "Letter", "Tabloid"],
        width: 6,
      },
      { key: "savePath", label: "保存路径", icon: "save", type: "varInput" },
    ],
    icon: "devices",
  },
  {
    value: "device",
    label: "模拟设备",
    config: [
      {
        key: "type",
        label: "设备类型",
        type: "button-toggle",
        options: [
          { label: "特定设备", value: "preset" },
          { label: "自定义设备", value: "custom" },
        ],
        defaultValue: "preset",
      },
      {
        key: "deviceName",
        label: "设备名称",
        icon: "smartphone",
        type: "varInput",
        width: 12,
        showWhen: "type",
        showValue: "preset",
      },
      {
        key: "size",
        label: "设备尺寸",
        type: "device-size",
        width: 12,
        showWhen: "type",
        showValue: "custom",
      },
      {
        key: "useragent",
        label: "User-Agent",
        icon: "devices",
        type: "varInput",
        width: 12,
        showWhen: "type",
        showValue: "custom",
      },
    ],
    icon: "phone_iphone",
  },
  {
    value: "cookies",
    label: "获取Cookie",
    config: [
      {
        key: "name",
        label: "Cookie名称",
        icon: "cookie",
        type: "varInput",
        width: 12,
      },
    ],
    icon: "cookie",
  },
  {
    value: "setCookies",
    label: "设置Cookie",
    config: [{ key: "items", label: "Cookie列表", type: "cookie-list" }],
    icon: "cookie",
  },
  {
    value: "removeCookies",
    label: "删除Cookie",
    config: [
      { key: "name", label: "Cookie名称", icon: "cookie", type: "varInput" },
    ],
    icon: "cookie",
  },
  {
    value: "clearCookies",
    label: "清空Cookie",
    config: [
      { key: "url", label: "URL(可选)", icon: "link", type: "varInput" },
    ],
    icon: "cookie",
  },
  {
    value: "evaluate",
    label: "执行代码",
    config: [
      {
        key: "function",
        label: "执行的代码",
        icon: "code",
        type: "function-with-params",
        width: 12,
      },
    ],
    icon: "code",
  },
  {
    value: "when",
    label: "条件判断",
    config: [
      {
        key: "type",
        label: "条件类型",
        type: "button-toggle",
        options: [
          { label: "等待元素", value: "selector" },
          { label: "等待条件", value: "function" },
        ],
        defaultValue: "selector",
      },
      {
        key: "selector",
        label: "等待元素的CSS选择器",
        icon: "find_in_page",
        type: "varInput",
        width: 12,
        showWhen: "type",
        showValue: "selector",
      },
      {
        key: "function",
        label: "等待条件(返回 true 时结束等待)",
        icon: "code",
        type: "function-with-params",
        width: 12,
        showWhen: "type",
        showValue: "function",
      },
      {
        key: "timeout",
        label: "超时时间(ms)",
        icon: "timer_off",
        type: "numInput",
        width: 12,
        defaultValue: 60000,
        showWhen: "type",
        showValue: ["selector", "function"],
      },
    ],
    icon: "rule",
  },
  {
    value: "end",
    label: "结束条件",
    config: [],
    icon: "stop",
  },
  {
    value: "mousedown",
    label: "按下鼠标",
    config: [
      {
        key: "selector",
        label: "按下元素选择器",
        icon: "mouse",
        type: "varInput",
      },
    ],
    icon: "mouse",
  },
  {
    value: "mouseup",
    label: "释放鼠标",
    config: [
      {
        key: "selector",
        label: "释放元素选择器",
        icon: "mouse",
        type: "varInput",
      },
    ],
    icon: "mouse",
  },
  {
    value: "file",
    label: "上传文件",
    config: [
      {
        key: "selector",
        label: "文件输入框选择器",
        icon: "upload_file",
        type: "varInput",
      },
      { key: "files", label: "文件列表", type: "file-list", width: 12 },
    ],
    icon: "upload_file",
  },
  {
    value: "value",
    label: "设置值",
    config: [
      {
        key: "selector",
        label: "元素选择器",
        icon: "varInput",
        type: "varInput",
        width: 6,
      },
      {
        key: "value",
        label: "设置的值",
        icon: "edit",
        type: "varInput",
        width: 6,
      },
    ],
    icon: "check_box",
  },
  {
    value: "check",
    label: "设置选中",
    config: [
      {
        key: "selector",
        label: "复选框/选框选择器",
        icon: "check_box",
        type: "varInput",
        width: 8,
      },
      {
        key: "checked",
        label: "选中状态",
        type: "boolean-toggle",
        defaultValue: false,
        width: 4,
      },
    ],
    icon: "center_focus_strong",
  },
  {
    value: "focus",
    label: "聚焦元素",
    config: [
      {
        key: "selector",
        label: "元素选择器",
        icon: "center_focus_strong",
        type: "varInput",
      },
    ],
    icon: "swap_vert",
  },
  {
    value: "scroll",
    label: "滚动",
    config: [
      {
        key: "type",
        label: "滚动类型",
        type: "button-toggle",
        options: [
          { label: "滚动到元素", value: "element" },
          { label: "滚动到坐标", value: "position" },
        ],
        defaultValue: "element",
      },
      {
        key: "selector",
        label: "目标元素选择器",
        icon: "swap_vert",
        type: "varInput",
        width: 12,
        showWhen: "type",
        showValue: "element",
      },
      {
        key: "x",
        label: "X坐标",
        icon: "drag_handle",
        type: "numInput",
        width: 6,
        showWhen: "type",
        showValue: "position",
      },
      {
        key: "y",
        label: "Y坐标",
        icon: "drag_handle",
        type: "numInput",
        width: 6,
        showWhen: "type",
        showValue: "position",
      },
    ],
    icon: "download",
  },
  {
    value: "download",
    label: "下载",
    config: [
      {
        key: "url",
        label: "下载URL",
        icon: "link",
        type: "varInput",
        width: 6,
      },
      {
        key: "savePath",
        label: "保存路径",
        icon: "save",
        type: "varInput",
        width: 6,
      },
    ],
    icon: "download",
  },
  {
    value: "devTools",
    label: "开发工具",
    config: [
      {
        key: "mode",
        label: "开发工具位置",
        type: "button-toggle",
        options: [
          { label: "右侧", value: "right" },
          { label: "底部", value: "bottom" },
          { label: "独立", value: "undocked" },
          { label: "分离", value: "detach" },
        ],
        defaultValue: "right",
      },
    ],
    icon: "developer_board",
  },
  {
    value: "hide",
    label: "隐藏",
    config: [],
    icon: "visibility_off",
  },
  {
    value: "show",
    label: "显示",
    config: [],
    icon: "visibility",
  },
];

// 添加默认运行配置
const defaultUBrowserRunConfigs = {
  show: true,
  width: 1280,
  height: 800,
  center: true,
  minWidth: 800,
  minHeight: 600,
  resizable: true,
  movable: true,
  minimizable: true,
  maximizable: true,
  alwaysOnTop: false,
  fullscreen: false,
  fullscreenable: true,
  enableLargerThanScreen: false,
  opacity: 1,
};

// ubrowser 默认配置 基础参数-浏览器操作-运行参数
export const defaultUBrowserConfigs = {
  // 基础参数
  goto: {
    url: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    headers: {
      Referer: {
        value: "",
        isString: true,
        __varInputVal__: true,
      },
      userAgent: {
        value: "",
        isString: true,
        __varInputVal__: true,
      },
    },
    timeout: 60000,
  },
  // 浏览器操作
  wait: {
    value: "",
    timeout: 60000,
  },
  click: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  css: {
    value: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  press: {
    key: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    modifiers: [],
  },
  paste: {
    text: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  screenshot: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    rect: { x: 0, y: 0, width: 0, height: 0 },
    savePath: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  pdf: {
    options: {
      marginsType: 0,
      pageSize: "A4",
    },
    savePath: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  device: {
    size: { width: 1280, height: 800 },
    useragent: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  cookies: {
    name: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  setCookies: {
    items: [
      {
        name: {
          value: "",
          isString: true,
          __varInputVal__: true,
        },
        value: {
          value: "",
          isString: true,
          __varInputVal__: true,
        },
      },
    ],
  },
  removeCookies: {
    name: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  clearCookies: {
    url: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  evaluate: {
    function: "",
    params: [],
  },
  when: {
    condition: {
      value: "",
      isString: false,
      __varInputVal__: true,
    },
  },
  mousedown: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  mouseup: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  file: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    files: [],
  },
  value: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    value: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  check: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    checked: false,
  },
  focus: {
    selector: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  scroll: {
    target: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    x: 0,
    y: 0,
  },
  download: {
    url: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
    savePath: {
      value: "",
      isString: true,
      __varInputVal__: true,
    },
  },
  // 运行参数
  run: defaultUBrowserRunConfigs,
};

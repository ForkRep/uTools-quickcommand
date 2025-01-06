import { validateVariableName } from "js/common/variableValidator";

/**
 * 生成随机后缀
 * @param {number} varCount - 当前变量数量
 * @returns {string} 随机后缀
 */
function generateRandomSuffix(varCount) {
  // 根据变量数量决定后缀长度
  let length = 1; // 默认1位
  if (varCount >= 100) {
    length = 3;
  } else if (varCount >= 10) {
    length = 2;
  }

  return (
    "_" +
    Math.random()
      .toString(36)
      .substring(2, 2 + length)
  );
}

/**
 * 解析变量名
 * @param {string} value - 变量表达式
 * @returns {string[]} 解析出的所有变量名
 */
export function parseVariables(value) {
  if (!value) return [];

  const destructured = extractDestructuredVars(value);
  if (!destructured) {
    return [value.trim()];
  }

  // 处理解构变量
  return destructured.vars.map((name) => {
    // 处理重命名格式 (key:value)
    const parts = name.split(":").map((p) => p.trim());
    return parts[parts.length - 1]; // 返回实际的变量名
  });
}

/**
 * 生成有效的变量名
 * @param {string} baseName - 基础变量名
 * @param {string[]} existingVars - 已存在的变量列表
 * @param {string} [currentName] - 当前的变量名（如果有）
 * @returns {string} 有效的变量名
 */
function generateValidVarName(baseName, existingVars, currentName = null) {
  // 如果当前名称有效且不重复，直接返回
  if (
    currentName &&
    validateVariableName(currentName).isValid &&
    !existingVars.includes(currentName)
  ) {
    return currentName;
  }

  // 如果变量名无效，生成一个随机变量名
  if (!validateVariableName(baseName).isValid) {
    baseName = "var" + generateRandomSuffix(existingVars.length);
  }

  // 如果变量名重复，添加随机后缀直到不重复
  let finalName = baseName;
  while (existingVars.includes(finalName)) {
    let suffix;
    do {
      suffix = generateRandomSuffix(existingVars.length);
    } while (existingVars.includes(baseName + suffix));
    finalName = baseName + suffix;
  }

  return finalName;
}

/**
 * 处理变量更新
 * @param {Object} params - 参数对象
 * @param {string} params.value - 新的变量名
 * @param {string[]} params.existingVars - 当前已存在的变量列表
 * @returns {Object} - 处理结果
 */
export function processVariable({ value, existingVars }) {
  if (!value) {
    return { isValid: true, processedValue: value };
  }

  const destructured = extractDestructuredVars(value);

  if (!destructured) {
    // 处理单个变量
    const processedVar = generateValidVarName(value, existingVars);
    return {
      isValid: true,
      processedValue: processedVar,
      warning:
        processedVar !== value ? `变量名已被修改为: ${processedVar}` : null,
    };
  }

  // 处理解构变量
  const processedVars = destructured.vars.map((name) => {
    const parts = name.split(":").map((p) => p.trim());
    const key = parts.length > 1 ? parts[0] : parts[0];
    const varName = parts[parts.length - 1];
    const processedName = generateValidVarName(varName, existingVars, varName);

    return {
      key,
      processedName,
      needsRename: processedName !== varName,
    };
  });

  // 如果有变量需要重命名，使用对象解构格式
  if (processedVars.some((v) => v.needsRename)) {
    const pairs = processedVars.map((v) =>
      v.needsRename ? `${v.key}:${v.processedName}` : v.key
    );
    const format = `{${pairs.join(", ")}}`;
    return {
      isValid: true,
      processedValue: format,
      warning: `变量名已被修改为: ${format}`,
    };
  }

  // 保持原始格式
  const format =
    destructured.format === "array"
      ? `[${processedVars.map((v) => v.key).join(", ")}]`
      : `{${processedVars.map((v) => v.key).join(", ")}}`;

  return {
    isValid: true,
    processedValue: format,
  };
}

/**
 * 提取解构变量
 * @param {string} value - 输入的变量名
 * @returns {Object|null} - 解构的变量数组和格式，如果不是解构模式则返回null
 */
export function extractDestructuredVars(value) {
  if (!value) return null;
  value = value.trim();

  // 检查是否是数组解构模式 [a, b, c]
  if (value.startsWith("[") && value.endsWith("]")) {
    return {
      vars: value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim()),
      format: "array",
    };
  }

  // 检查是否是对象解构模式 {a, b, c}
  if (value.startsWith("{") && value.endsWith("}")) {
    return {
      vars: value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim()),
      format: "object",
    };
  }

  return null;
}
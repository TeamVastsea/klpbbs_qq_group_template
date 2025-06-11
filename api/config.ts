/**
 * API配置文件
 */

// API基础URL
export const API_BASE_URL = '/api';

// API超时时间（毫秒）
export const API_TIMEOUT = 5000;

// 模拟延迟时间（毫秒）
export const MOCK_DELAY = 300;

// ID配置
export const ID_CONFIG = {
  // ID前缀
  PREFIX: 'group_',
  // 是否使用UUID
  USE_UUID: false,
};

// 群号配置
export const GROUP_NUMBER_CONFIG = {
  // 是否显示群号
  SHOW_GROUP_NUMBER: true,
  // 群号显示格式（可选：'numeric'数字格式, 'hidden'隐藏格式, 'mixed'混合格式）
  DISPLAY_FORMAT: 'mixed',
  // 隐藏群号的替代文本
  HIDDEN_TEXT: '隐藏',
  // 需要隐藏群号的群组ID列表
  HIDDEN_GROUP_IDS: ['10'],
};

/**
 * 获取格式化的群号
 * @param groupId 群组ID
 * @param groupNumber 原始群号
 * @returns 格式化后的群号
 */
export function getFormattedGroupNumber(groupId: string, groupNumber: string): string {
  // 如果配置为不显示群号，则返回隐藏文本
  if (!GROUP_NUMBER_CONFIG.SHOW_GROUP_NUMBER) {
    return GROUP_NUMBER_CONFIG.HIDDEN_TEXT;
  }
  
  // 如果当前群组ID在隐藏列表中，则返回隐藏文本
  if (GROUP_NUMBER_CONFIG.HIDDEN_GROUP_IDS.includes(groupId)) {
    return GROUP_NUMBER_CONFIG.HIDDEN_TEXT;
  }
  
  // 根据显示格式返回相应的群号
  switch (GROUP_NUMBER_CONFIG.DISPLAY_FORMAT) {
    case 'numeric':
      return groupNumber.replace(/[^0-9]/g, ''); // 只保留数字
    case 'hidden':
      return GROUP_NUMBER_CONFIG.HIDDEN_TEXT;
    case 'mixed':
    default:
      return groupNumber; // 原样返回
  }
}

/**
 * 生成新的群组ID
 * @returns 新的群组ID
 */
export function generateGroupId(): string {
  if (ID_CONFIG.USE_UUID) {
    // 简易UUID生成
    return ID_CONFIG.PREFIX + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  } else {
    // 使用时间戳
    return ID_CONFIG.PREFIX + Date.now().toString();
  }
}
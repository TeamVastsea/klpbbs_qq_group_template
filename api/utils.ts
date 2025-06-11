/**
 * API工具函数
 */
import { ApiResponse } from '@/types';
import { API_TIMEOUT } from './config';

/**
 * 错误类型
 */
export enum ErrorType {
  TIMEOUT = 'TIMEOUT',
  NETWORK = 'NETWORK',
  SERVER = 'SERVER',
  UNKNOWN = 'UNKNOWN',
}

/**
 * API错误
 */
export class ApiError extends Error {
  type: ErrorType;
  status?: number;
  
  constructor(message: string, type: ErrorType = ErrorType.UNKNOWN, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.type = type;
    this.status = status;
  }
}

/**
 * 创建API响应
 * @param code 状态码
 * @param message 消息
 * @param data 数据
 * @returns API响应对象
 */
export function createApiResponse<T>(code: number, message: string, data: T): ApiResponse<T> {
  return {
    code,
    message,
    data,
  };
}

/**
 * 处理API错误
 * @param error 错误对象
 * @returns API错误
 */
export function handleApiError(error: any): ApiError {
  if (error instanceof ApiError) {
    return error;
  }
  
  if (error.name === 'AbortError') {
    return new ApiError('请求超时', ErrorType.TIMEOUT);
  }
  
  if (error instanceof TypeError && error.message.includes('Network')) {
    return new ApiError('网络错误', ErrorType.NETWORK);
  }
  
  if (error.status >= 500) {
    return new ApiError('服务器错误', ErrorType.SERVER, error.status);
  }
  
  return new ApiError(error.message || '未知错误', ErrorType.UNKNOWN);
}

/**
 * 创建请求超时控制器
 * @param timeout 超时时间（毫秒）
 * @returns AbortController
 */
export function createTimeoutController(timeout: number = API_TIMEOUT): AbortController {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  // 清除超时计时器
  const originalAbort = controller.abort;
  controller.abort = function(reason?: any) {
    clearTimeout(timeoutId);
    return originalAbort.call(this, reason);
  };
  
  return controller;
}

/**
 * 延迟函数
 * @param ms 延迟时间（毫秒）
 * @returns Promise
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 重试函数
 * @param fn 要重试的函数
 * @param retries 重试次数
 * @param delayMs 重试延迟（毫秒）
 * @returns Promise
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    
    await delay(delayMs);
    return retry(fn, retries - 1, delayMs);
  }
}
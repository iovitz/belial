import { logger } from '@/utils/logger'

export function useLogger(scope?: string) {
  if (scope) {
    return logger.getLogger(scope)
  }
  return logger
}

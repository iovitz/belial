import { Rule, RuleType } from '@midwayjs/validate'

export class CreateFollowingDTO {
  @Rule(RuleType.string().max(18).min(18).required())
  id: string
}

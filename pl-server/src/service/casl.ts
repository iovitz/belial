import { Provide } from '@midwayjs/core'
import { AbilityBuilder, buildMongoQueryMatcher, createMongoAbility } from '@casl/ability'
import { allInterpreters, allParsingInstructions } from '@ucast/mongo2js'

const conditionsMatcher = buildMongoQueryMatcher(allParsingInstructions, allInterpreters)

export type ActionStr = 'read' | 'update' | 'create' | 'delete'

interface Ability {
  action: ActionStr | ActionStr[]
  cannot?: boolean
  fields?: string[]
  conditions?: Record<string, any>
}

@Provide()
export class CaslService {
  buildAbilitiesFor(subject: string, _abilities: Array<Ability | null | undefined>) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility)
    _abilities.forEach((ability) => {
      if (!ability) {
        return
      }

      const { action, cannot: cannotDoThis, fields, conditions } = ability
      return (cannotDoThis ? cannot : can)(action, subject, fields, conditions)
    })

    return build({ conditionsMatcher, detectSubjectType: () => subject })
  }
}

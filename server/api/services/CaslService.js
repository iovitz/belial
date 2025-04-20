/**
 * CaslService
 *
 * @description :: casl service
 * @usage       :: CaslService.[methodName]()
 */
const { AbilityBuilder, buildMongoQueryMatcher, createMongoAbility } = require('@casl/ability')
const { allInterpreters, allParsingInstructions } = require('@casl/mongoose')

const conditionsMatcher = buildMongoQueryMatcher(allParsingInstructions, allInterpreters)

const Service = {

  buildAbilitiesFor(subject, _abilities) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility)
    _abilities.forEach((ability) => {
      if (!ability) {
        return
      }

      const { action, cannot: cannotDoThis, fields, conditions } = ability
      return (cannotDoThis ? cannot : can)(action, subject, fields, conditions)
    })

    return build({ conditionsMatcher, detectSubjectType: () => subject })
  },

}

// For LSP
globalThis.CaslService = Service

module.exports = Service

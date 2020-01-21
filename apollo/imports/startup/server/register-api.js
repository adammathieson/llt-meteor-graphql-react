import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionResolvers from '../../api/resolutions/resolvers'
import UsersResolvers from '../../api/users/resolvers'
import UsersSchema from '../../api/users/User.graphql'
// hii

const typeDefs =  [
    ResolutionsSchema,
    UsersSchema,
]

const resolvers = merge(
    ResolutionResolvers,
    UsersResolvers,
)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })

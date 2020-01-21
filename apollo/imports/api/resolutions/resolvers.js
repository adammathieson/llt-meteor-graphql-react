import Resolutions from './resolutions'

// Resolutions.insert({
//     name: "Test Res",
// })

// const res = Resolutions.find({}).fetch()
// console.log(res)

export default {
    Query: {
        resolutions(obj, args, { userId}) {
            console.log("---->",userId)
            return Resolutions.find({
                userId
            }).fetch()
        }
    },

    Mutation: {
        createResolution(obj, { name, userId }, context) {
            const resolutionId = Resolutions.insert({
                name,
                userId
            })
            return Resolutions.findOne(resolutionId)
        }
    }
}


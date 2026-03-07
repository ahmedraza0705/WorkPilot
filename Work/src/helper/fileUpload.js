// import contentful from 'contentful-management'
import { createClient } from 'contentful-management'

const client = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export const uploadFiles = async (files) => {
    const fileUpload = await client
        .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID) // production
        // .getSpace('wn8ncefheaee')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createAssetFromFiles({
            fields: {
                title: {
                    'en-US': 'Asset title'
                },
                description: {
                    'en-US': 'Asset description'
                },
                // file: file.file
                file: {
                    'en-US': {
                        contentType: files.type,
                        fileName: files.name,
                        file: files
                    }
                }
            }
        })
        )
        .then((asset) => asset.processForAllLocales())
        .then((asset) => asset.publish())
        .catch(console.error)

    return await fileUpload.fields.file['en-US']
}


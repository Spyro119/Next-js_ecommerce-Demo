import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '22q6wi4a',
    dataset: 'production',
    apiVersion: '2023-09-01',
    useCdn: true,
    token: process.env.NEXT_SANIT_PUBLIC_TOKEN
})

export const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
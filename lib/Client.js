import sanityClient from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'i5zhzdoc',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_SANITY_SANITY_CLIENT
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
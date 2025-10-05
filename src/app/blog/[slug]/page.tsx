

export default async function BlogPostPage({params} : {params: {slug: string}}) {
    return (
        <>
        <h1>{params.slug}</h1>
        </>
    )
}
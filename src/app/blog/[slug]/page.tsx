

export default async function BlogPostPage({params} : {params: Promise<{slug: string}>}) {
   const {slug} = await params;
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <h1>{slug}</h1>
            </div>
        </>
    )
}
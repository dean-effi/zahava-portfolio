export default async function page({
  params,
}: {
  params: Promise<{ projectName: string }>
}) {
  const projectName = decodeURIComponent((await params).projectName)
  return <div>{projectName}</div>
}

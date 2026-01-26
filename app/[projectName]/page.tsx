export default async function page({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectName = decodeURIComponent((await params).projectName);
  return (
    <div className="bg-neutral-50 text-neutral-950">
      {projectName}
    </div>
  );
}

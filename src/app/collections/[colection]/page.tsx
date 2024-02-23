export default function CollectionPage({
  params,
}: {
  params: { collectionId: string };
}) {
  return (
    <div>
      <h1>Collection: {params.collectionId}</h1>
    </div>
  );
}

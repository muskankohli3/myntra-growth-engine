import Card from "./ui/Card";

function LivePreview() {
  return (
    <Card>
      <div className="flex h-96 items-center justify-center rounded-xl bg-gray-100">
        <p className="text-xl text-gray-500">
          🎥 Camera Preview
        </p>
      </div>
    </Card>
  );
}

export default LivePreview;
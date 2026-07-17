import Card from "./ui/Card";

function LiveVideo() {
  return (
    <Card>
      <div className="flex h-[500px] items-center justify-center rounded-xl bg-gray-200">
        <p className="text-2xl text-gray-500">
          🎥 Live Video Stream
        </p>
      </div>
    </Card>
  );
}

export default LiveVideo;
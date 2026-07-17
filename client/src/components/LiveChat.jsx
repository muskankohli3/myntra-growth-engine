import Card from "./ui/Card";

function LiveChat() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold">
        Live Chat
      </h2>

      <div className="space-y-4">
        <p>
          <strong>Riya:</strong> Is XL available?
        </p>

        <p>
          <strong>Aman:</strong> Does it shrink?
        </p>

        <p>
          <strong>Neha:</strong> Any discount?
        </p>
      </div>
    </Card>
  );
}

export default LiveChat;
import Card from "./ui/Card";

function LiveComments() {
  return (
    <Card>
      <h2 className="text-xl font-bold">
        Live Comments
      </h2>

      <div className="mt-5 space-y-5">
        <div>
          <p className="font-semibold">
            Riya
          </p>

          <p>Does this shrink after wash?</p>
        </div>

        <div className="rounded-xl bg-pink-50 p-4">
          <p className="font-semibold text-pink-600">
            AI Reply Suggestion
          </p>

          <p className="mt-2">
            Explain that the fabric is pre-shrunk and recommend following the washing instructions.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Aman
          </p>

          <p>Is XL available?</p>
        </div>
      </div>
    </Card>
  );
}

export default LiveComments;
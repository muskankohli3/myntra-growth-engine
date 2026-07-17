import Card from "./ui/Card";

function MetricCard({
    title,
    value,
    color,
    change = "+12%"
}) {
    return (
        <Card>
            <p className="text-sm text-gray-500">
                {title}
            </p>

            <h2 className={`mt-2 text-3xl font-bold ${color}`}>
                {value}
            </h2>

            <p className="mt-2 text-sm text-green-600 font-medium">
                ↑ {change}
            </p>
        </Card>
    );
}

export default MetricCard;
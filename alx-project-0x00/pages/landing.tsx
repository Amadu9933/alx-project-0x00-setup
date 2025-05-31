import Card from "@/components/Card"
import Button from "@/components/Button"

const buttonVariants = [
    { title: "Small Rounded-sm", styles: "text-xs rounded-sm" },
    { title: "Medium Rounded-md", styles: "text-base rounded-md" },
    { title: "Large Rounded-full", styles: "text-lg rounded-full" },
];

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <div className="flex gap-4 mb-6">
                {buttonVariants.map((btn, idx) => (
                    <Button key={idx} title={btn.title} styles={btn.styles + " bg-blue-600 text-white"} />
                ))}
            </div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Landing
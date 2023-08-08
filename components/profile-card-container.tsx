import Card from "./profile-card";
// import articles from "../pages/dummyData";

interface CardContainerProps {
    articles: any[]
}

const CardContainer: React.FC<CardContainerProps> = ({articles}: CardContainerProps) => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-7">
                {articles.map((article) => (
                    <Card
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        image={article.image}
                        content={article.content}
                        link={article.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
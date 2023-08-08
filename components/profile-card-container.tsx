import Card from "./profile-card";
import { Article } from "../lib/strapi/article";
import { getImageURL } from "../lib/strapi/helper";

interface CardContainerProps {
  articles: Article[];
}

const CardContainer: React.FC<CardContainerProps> = ({ articles }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-7">
        {Array.isArray(articles) ? (
          articles.map((article: Article) => (
            <Card
              key={article.id}
              id={article.id}
              title={article.title}
              image={getImageURL(article.image)}
              content={article.content}
              // link={`/article/${article.id}`}
              link=""
            />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;

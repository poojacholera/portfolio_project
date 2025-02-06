import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
//@ts-ignore
export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container">
            <h2 className="title">Chef Devi Recommends: </h2>
            <Markdown className="markdown" remarkPlugins={[remarkGfm]}>{props.recipe}</Markdown>
            
        </section>
    )
}
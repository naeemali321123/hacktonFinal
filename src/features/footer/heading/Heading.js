// CSS
import './Heading.css';


export default function WhiteHeading(prose) {
    return (
        <div className="whiteHeading">
            <h1>
                {prose.heading}
            </h1>
        </div>
    )
}
export function RedHeading(prose) {
    return (
        <div id="redHeading" className="whiteHeading">
            <h1>
                {prose.heading}
            </h1>
        </div>
    )
}
import './LinkList.css';

export default function LinkList(props) {
    return (
        <div id="about">
            <>{props.heading}</>
            <ul>
                <li>
                    <a href={props.link}> {props.item}</a>
                </li>
                <li>
                    <a href={props.link1}> {props.item1}</a>
                </li>
                <li>
                    <a href={props.link2}> {props.item2}</a>
                </li>
                <li>
                    <a href={props.link3}> {props.item3}</a>
                </li>
                <li>
                    <a href={props.link4}> {props.item4}</a>
                </li>
            </ul>
        </div>
    )
}
LinkList.defaultProps = {
    link: "#"
}
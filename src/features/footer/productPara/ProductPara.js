import './ProductPara.css';

export default function WhitePara(prose) {
    return (
        <div className="whitePara">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
            </p>
        </div>
    )
}
export function RedPara(prose) {
    return (
        <div className="whitePara" id="redPara">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
            </p>
        </div>
    )
}
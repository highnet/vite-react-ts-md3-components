import Badge from "../Badge";

/*  
    Badges come in different sizes and numbers, and are small circular indicators that can be used to show counts, statuses, or notifications 
    on other elements. The Badge component takes a configuration prop to specify the size of the badge,
    an xOffset and yOffset prop to adjust the position of the badge relative to its parent element,
    and an optional label prop to display a number on the badge.
*/

function BadgesFrame() {
    return (<div
        className="component-display-section-row-trmd3"
    >
        {/* BADGES */}
        <div
            className="text text-label text-label-small"
        >
            Small
        </div>
        <div
            className="badge-box-trmd3"
        >
            <Badge
                configuration={"small"}
                xOffset={95}
                yOffset={-2}
            >
            </Badge>
        </div>
        <div
            className="text text-label text-label-small"
        >
            Single Digit
        </div>
        <div
            className="badge-box-trmd3"
        >
            <Badge
                configuration={"single-digit"}
                xOffset={93}
                yOffset={-4}
                label={"3"}
            >
            </Badge>
        </div>
        <div
            className="text text-label text-label-small"
        >
            Multiple Digits
        </div>
        <div
            className="badge-box-trmd3"
        >
            <Badge
                configuration={"multiple-digits"}
                xOffset={93}
                yOffset={-4}
                label={"123"}
            >
            </Badge>
        </div>
    </div>);
}

export default BadgesFrame;
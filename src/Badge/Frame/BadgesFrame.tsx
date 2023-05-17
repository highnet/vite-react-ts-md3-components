import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet";
import Typography from "../../Typography/Typography";
import Badge from "../Badge";

/*  
	1	
	1682360238
	
	This function returns a React component called "BadgesFrame" which displays
	a set of badges of different configurations.

	The component first gets the preferred theme from local storage or the user's
	system preferences and applies it to the class name of the component.

	The component then displays three badges of different configurations: small,
	single-digit, and multiple-digits. The badges are displayed inside a div with
	the class "badge-box-trmd3". Each badge has its own label and offsets for
	positioning.

	The HTML code for each badge is also displayed below each badge using the "pre"
	and "code" elements with the "language-html" class.
*/

const BadgesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("badges-frame-trmd3")
		.add("badges-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* BADGES */}
			<div className="section-title-container-trmd3">
				<Typography
					id="badges-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					📛 Badges 📛
				</Typography>
			</div>
			<div>
				<div>
					<Typography variant={"text-label-small"}>Small</Typography>
					<div className="badge-box-trmd3">
						<Badge configuration={"small"} xOffset={95} yOffset={-2} />
					</div>
				</div>
				<CodeSnippet>
					{'<Badge configuration={"small"} xOffset={95} yOffset={-2} />'}
				</CodeSnippet>

				<div>
					<Typography variant={"text-label-small"}>Single Digit</Typography>
					<div className="badge-box-trmd3">
						<Badge configuration={"single-digit"} xOffset={93} yOffset={-4}>
							3
						</Badge>
					</div>
				</div>
				<CodeSnippet>
					{
						'<Badge configuration={"single-digit"} xOffset={93} yOffset={-4}>3</Badge>'
					}
				</CodeSnippet>
				<div>
					<Typography variant={"text-label-small"}>Multiple Digits</Typography>
					<div className="badge-box-trmd3">
						<Badge configuration={"multiple-digits"} xOffset={93} yOffset={-4}>
							123
						</Badge>
					</div>
				</div>
				<CodeSnippet>
					{
						'<Badge configuration={"multiple-digits"} xOffset={93} yOffset={-4}>123</Badge>'
					}
				</CodeSnippet>
			</div>
		</div>
	);
};

export default BadgesFrame;

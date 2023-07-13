import React, { useState } from "react";
import Button from "../../Button/Button";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import SnackBar from "../../SnackBars/SnackBar";
import { activateSnackBarId } from "../../Gizmos/Modals";

const SnackBarsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("snackbars-frame-trmd3")
		.add("snackbars-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="snackbars-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🍦
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-snackbars">
				SnackBars
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>One Line</Typography>
			<SnackBar
				className="snackbar-on-frame-trmd3"
				action={() => {
					alert("HI");
				}}
				message="Lorem ipsum dolor sit amet."
				dismissable={true}
			/>

			<SnackBar id={"snackbar-0"} />
			<Button
				onClick={() =>
					activateSnackBarId(
						"snackbar-0",
						3,
						"Lorem ipsum dolor sit amet.",
						() => {
							alert("HI");
						},
						"Action",
						true
					)
				}
			>
				One Line
			</Button>
			<CodeSnippet>{`
<SnackBar 
	id={"snackbar-0"} 
/>
<Button
	onClick={() =>
		activateSnackBarId(
			"snackbar-0",
			3,
			"Lorem ipsum dolor sit amet.",
			() => {
				alert("HI");
			},
			"Action",
			true
			)
		}
>
	One Line
</Button>`}</CodeSnippet>
		</div>
	);
};
export default SnackBarsFrame;

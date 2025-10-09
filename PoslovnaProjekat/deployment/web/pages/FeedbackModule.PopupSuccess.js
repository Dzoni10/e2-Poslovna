import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import * as ImageWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Image, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Image, Text, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
<<<<<<< HEAD
    <$Div key="p9.FeedbackModule.PopupSuccess.layoutGrid1"
        $widgetId="p9.FeedbackModule.PopupSuccess.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p9.FeedbackModule.PopupSuccess.layoutGrid1$row0"
                $widgetId="p9.FeedbackModule.PopupSuccess.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p9.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0"
                        $widgetId="p9.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p9.FeedbackModule.PopupSuccess.dataView1"
                                $widgetId="p9.FeedbackModule.PopupSuccess.dataView1"
=======
    <$Div key="p.FeedbackModule.PopupSuccess.layoutGrid1"
        $widgetId="p.FeedbackModule.PopupSuccess.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.FeedbackModule.PopupSuccess.layoutGrid1$row0"
                $widgetId="p.FeedbackModule.PopupSuccess.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0"
                        $widgetId="p.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.FeedbackModule.PopupSuccess.dataView1"
                                $widgetId="p.FeedbackModule.PopupSuccess.dataView1"
>>>>>>> feat/sales-domain
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
<<<<<<< HEAD
                                    "dataSourceId": "p9.10",
=======
                                    "dataSourceId": "p.10",
>>>>>>> feat/sales-domain
                                    "scope": "$Response",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
<<<<<<< HEAD
                                    <$Container key="p9.FeedbackModule.PopupSuccess.container1"
                                        $widgetId="p9.FeedbackModule.PopupSuccess.container1"
=======
                                    <$Container key="p.FeedbackModule.PopupSuccess.container1"
                                        $widgetId="p.FeedbackModule.PopupSuccess.container1"
>>>>>>> feat/sales-domain
                                        class={"mx-name-container1"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
<<<<<<< HEAD
                                            <$Image key="p9.FeedbackModule.PopupSuccess.image1"
                                                $widgetId="p9.FeedbackModule.PopupSuccess.image1"
=======
                                            <$Image key="p.FeedbackModule.PopupSuccess.image1"
                                                $widgetId="p.FeedbackModule.PopupSuccess.image1"
>>>>>>> feat/sales-domain
                                                datasource={"image"}
                                                imageObject={WebStaticImageProperty({
                                                    "image": { "uri": "img/FeedbackModule$Images$Success.png" }
                                                })}
                                                defaultImageDynamic={undefined}
                                                imageUrl={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                imageIcon={undefined}
                                                isBackgroundImage={false}
                                                children={undefined}
                                                onClickType={"action"}
                                                onClick={undefined}
                                                alternativeText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                widthUnit={"auto"}
                                                width={100}
                                                heightUnit={"pixels"}
                                                height={240}
                                                iconSize={14}
                                                displayAs={"fullImage"}
                                                responsive={true}
                                                class={"mx-name-image1 img-center"}
                                                style={undefined}
                                                tabIndex={undefined} />,
<<<<<<< HEAD
                                            <$Text key="p9.FeedbackModule.PopupSuccess.text1"
                                                $widgetId="p9.FeedbackModule.PopupSuccess.text1"
=======
                                            <$Text key="p.FeedbackModule.PopupSuccess.text1"
                                                $widgetId="p.FeedbackModule.PopupSuccess.text1"
>>>>>>> feat/sales-domain
                                                class={"mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom-medium"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Thanks for sharing your feedback with us!" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h3"} />,
<<<<<<< HEAD
                                            <$ActionButton key="p9.FeedbackModule.PopupSuccess.actionButton2"
                                                $widgetId="p9.FeedbackModule.PopupSuccess.actionButton2"
                                                buttonId={"p9.FeedbackModule.PopupSuccess.actionButton2"}
=======
                                            <$ActionButton key="p.FeedbackModule.PopupSuccess.actionButton2"
                                                $widgetId="p.FeedbackModule.PopupSuccess.actionButton2"
                                                buttonId={"p.FeedbackModule.PopupSuccess.actionButton2"}
>>>>>>> feat/sales-domain
                                                class={"mx-name-actionButton2 d-block center-block"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "View your feedback" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "openLink", "argMap": { "$object": { "widget": "$Response", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "FeedbackModule.ResponseHelper/URL" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={true}
                                footer={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Feedback Submitted"
]);

export const classes = "";

export const autofocus = "desktopOnly";
export const cancelChangesOperationId = "Qftq/07u8F6jmY36FV5EHg";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};

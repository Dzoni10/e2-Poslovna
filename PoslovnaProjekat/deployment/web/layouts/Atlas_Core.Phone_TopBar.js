import { createElement } from "react";
const React = { createElement };

import { ExpressionProperty } from "mendix/ExpressionProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Header } from "mendix/widgets/web/Header";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { Title } from "mendix/widgets/web/Title";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Header, $Title, $Placeholder } = asPluginWidgets({ ScrollContainer, Header, Title, Placeholder });

const region$Main = [
<<<<<<< HEAD
    <$ScrollContainer key="l26.Atlas_Core.Phone_TopBar.scrollContainer1"
        $widgetId="l26.Atlas_Core.Phone_TopBar.scrollContainer1"
=======
    <$ScrollContainer key="l.Atlas_Core.Phone_TopBar.scrollContainer1"
        $widgetId="l.Atlas_Core.Phone_TopBar.scrollContainer1"
>>>>>>> feat/sales-domain
        class={"mx-name-scrollContainer1"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
<<<<<<< HEAD
                <$Header key="l26.Atlas_Core.Phone_TopBar.header1"
                    $widgetId="l26.Atlas_Core.Phone_TopBar.header1"
                    class={"mx-name-header1"}
                    style={undefined}
                    content={[
                        <$Title key="l26.4"
                            $widgetId="l26.4"
=======
                <$Header key="l.Atlas_Core.Phone_TopBar.header1"
                    $widgetId="l.Atlas_Core.Phone_TopBar.header1"
                    class={"mx-name-header1"}
                    style={undefined}
                    content={[
                        <$Title key="l.4"
                            $widgetId="l.4"
>>>>>>> feat/sales-domain
                            class={""}
                            style={undefined}
                            caption={ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "pageTitle" }, "args": {} }
                            })} />
                    ]}
                    leftWidgets={[
<<<<<<< HEAD
                        <$Placeholder key="l26.Atlas_Core.Phone_TopBar.HeaderLeft"
                            $widgetId="l26.Atlas_Core.Phone_TopBar.HeaderLeft"
=======
                        <$Placeholder key="l.Atlas_Core.Phone_TopBar.HeaderLeft"
                            $widgetId="l.Atlas_Core.Phone_TopBar.HeaderLeft"
>>>>>>> feat/sales-domain
                            content={PlaceholderProperty({
                                "id": "Atlas_Core.Phone_TopBar.HeaderLeft"
                            })} />
                    ]}
                    rightWidgets={[
<<<<<<< HEAD
                        <$Placeholder key="l26.Atlas_Core.Phone_TopBar.HeaderRight"
                            $widgetId="l26.Atlas_Core.Phone_TopBar.HeaderRight"
=======
                        <$Placeholder key="l.Atlas_Core.Phone_TopBar.HeaderRight"
                            $widgetId="l.Atlas_Core.Phone_TopBar.HeaderRight"
>>>>>>> feat/sales-domain
                            content={PlaceholderProperty({
                                "id": "Atlas_Core.Phone_TopBar.HeaderRight"
                            })} />
                    ]} />
            ],
            "sizeMode": "auto",
            "class": "region-topbar"
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
<<<<<<< HEAD
                <$Placeholder key="l26.Atlas_Core.Phone_TopBar.Main"
                    $widgetId="l26.Atlas_Core.Phone_TopBar.Main"
=======
                <$Placeholder key="l.Atlas_Core.Phone_TopBar.Main"
                    $widgetId="l.Atlas_Core.Phone_TopBar.Main"
>>>>>>> feat/sales-domain
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Phone_TopBar.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};

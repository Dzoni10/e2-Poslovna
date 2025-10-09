import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SimpleMenuBar } from "mendix/widgets/web/SimpleMenuBar";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $SimpleMenuBar, $Placeholder } = asPluginWidgets({ ScrollContainer, SimpleMenuBar, Placeholder });

const region$Main = [
<<<<<<< HEAD
    <$ScrollContainer key="l20.Atlas_Core.Tablet_BottomBar.layoutContainer"
        $widgetId="l20.Atlas_Core.Tablet_BottomBar.layoutContainer"
=======
    <$ScrollContainer key="l.Atlas_Core.Tablet_BottomBar.layoutContainer"
        $widgetId="l.Atlas_Core.Tablet_BottomBar.layoutContainer"
>>>>>>> feat/sales-domain
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"sidebar"}
        top={{
            "enabled": false
        }}
        bottom={{
            "enabled": true,
            "content": [
<<<<<<< HEAD
                <$SimpleMenuBar key="l20.Atlas_Core.Tablet_BottomBar.simpleMenuBar1"
                    $widgetId="l20.Atlas_Core.Tablet_BottomBar.simpleMenuBar1"
=======
                <$SimpleMenuBar key="l.Atlas_Core.Tablet_BottomBar.simpleMenuBar1"
                    $widgetId="l.Atlas_Core.Tablet_BottomBar.simpleMenuBar1"
>>>>>>> feat/sales-domain
                    class={"mx-name-simpleMenuBar1 bottom-nav-text-icons"}
                    style={undefined}
                    menu={[
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Home"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-home" }
                            }),
                            "action": undefined
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Layouts"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-layout-2" }
                            }),
                            "action": undefined
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Templates"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-notes-paper-text" }
                            }),
                            "action": undefined
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Widgets"
                                ])
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-cog" }
                            }),
                            "action": undefined
                        }
                    ]}
                    orientation={"horizontal"} />
            ],
            "sizeMode": "auto",
            "class": "region-bottombar"
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
                <$Placeholder key="l20.Atlas_Core.Tablet_BottomBar.Main"
                    $widgetId="l20.Atlas_Core.Tablet_BottomBar.Main"
=======
                <$Placeholder key="l.Atlas_Core.Tablet_BottomBar.Main"
                    $widgetId="l.Atlas_Core.Tablet_BottomBar.Main"
>>>>>>> feat/sales-domain
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Tablet_BottomBar.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};

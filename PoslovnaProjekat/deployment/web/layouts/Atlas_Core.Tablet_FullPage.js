import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });

const region$Main = [
<<<<<<< HEAD
    <$ScrollContainer key="l15.Atlas_Core.Tablet_FullPage.layoutContainer"
        $widgetId="l15.Atlas_Core.Tablet_FullPage.layoutContainer"
=======
    <$ScrollContainer key="l.Atlas_Core.Tablet_FullPage.layoutContainer"
        $widgetId="l.Atlas_Core.Tablet_FullPage.layoutContainer"
>>>>>>> feat/sales-domain
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"sidebar"}
        top={{
            "enabled": false
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
                <$Placeholder key="l15.Atlas_Core.Tablet_FullPage.Main"
                    $widgetId="l15.Atlas_Core.Tablet_FullPage.Main"
=======
                <$Placeholder key="l.Atlas_Core.Tablet_FullPage.Main"
                    $widgetId="l.Atlas_Core.Tablet_FullPage.Main"
>>>>>>> feat/sales-domain
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Tablet_FullPage.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};

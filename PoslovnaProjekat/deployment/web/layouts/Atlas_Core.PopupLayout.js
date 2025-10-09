import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });

const region$Main = [
<<<<<<< HEAD
    <$ScrollContainer key="l18.Atlas_Core.PopupLayout.scrollContainer1"
        $widgetId="l18.Atlas_Core.PopupLayout.scrollContainer1"
=======
    <$ScrollContainer key="l.Atlas_Core.PopupLayout.scrollContainer1"
        $widgetId="l.Atlas_Core.PopupLayout.scrollContainer1"
>>>>>>> feat/sales-domain
        class={"mx-name-scrollContainer1"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"headline"}
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
                <$Placeholder key="l18.Atlas_Core.PopupLayout.Main"
                    $widgetId="l18.Atlas_Core.PopupLayout.Main"
=======
                <$Placeholder key="l.Atlas_Core.PopupLayout.Main"
                    $widgetId="l.Atlas_Core.PopupLayout.Main"
>>>>>>> feat/sales-domain
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.PopupLayout.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};

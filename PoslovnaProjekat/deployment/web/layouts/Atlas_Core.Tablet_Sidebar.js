import { createElement } from "react";
const React = { createElement };

import { ExpressionProperty } from "mendix/ExpressionProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { Container } from "mendix/widgets/web/Container";
import { Header } from "mendix/widgets/web/Header";
import * as ImageWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { NavigationTree } from "mendix/widgets/web/NavigationTree";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SidebarToggle } from "mendix/widgets/web/SidebarToggle";
import { Text } from "mendix/widgets/web/Text";
import { Title } from "mendix/widgets/web/Title";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Header, $Title, $SidebarToggle, $Placeholder, $Container, $Image, $Text, $NavigationTree } = asPluginWidgets({ ScrollContainer, Header, Title, SidebarToggle, Placeholder, Container, Image, Text, NavigationTree });

const region$Main = [
<<<<<<< HEAD
    <$ScrollContainer key="l21.Atlas_Core.Tablet_Sidebar.layoutContainer"
        $widgetId="l21.Atlas_Core.Tablet_Sidebar.layoutContainer"
=======
    <$ScrollContainer key="l.Atlas_Core.Tablet_Sidebar.layoutContainer"
        $widgetId="l.Atlas_Core.Tablet_Sidebar.layoutContainer"
>>>>>>> feat/sales-domain
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={true}
        layoutMode={"sidebar"}
        top={{
            "enabled": true,
            "content": [
<<<<<<< HEAD
                <$Header key="l21.Atlas_Core.Tablet_Sidebar.header1"
                    $widgetId="l21.Atlas_Core.Tablet_Sidebar.header1"
                    class={"mx-name-header1"}
                    style={undefined}
                    content={[
                        <$Title key="l21.6"
                            $widgetId="l21.6"
=======
                <$Header key="l.Atlas_Core.Tablet_Sidebar.header1"
                    $widgetId="l.Atlas_Core.Tablet_Sidebar.header1"
                    class={"mx-name-header1"}
                    style={undefined}
                    content={[
                        <$Title key="l.6"
                            $widgetId="l.6"
>>>>>>> feat/sales-domain
                            class={""}
                            style={undefined}
                            caption={ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "pageTitle" }, "args": {} }
                            })} />
                    ]}
                    leftWidgets={[
<<<<<<< HEAD
                        <$SidebarToggle key="l21.Atlas_Core.Tablet_Sidebar.sidebarToggle3"
                            $widgetId="l21.Atlas_Core.Tablet_Sidebar.sidebarToggle3"
                            buttonId={"l21.Atlas_Core.Tablet_Sidebar.sidebarToggle3"}
=======
                        <$SidebarToggle key="l.Atlas_Core.Tablet_Sidebar.sidebarToggle3"
                            $widgetId="l.Atlas_Core.Tablet_Sidebar.sidebarToggle3"
                            buttonId={"l.Atlas_Core.Tablet_Sidebar.sidebarToggle3"}
>>>>>>> feat/sales-domain
                            renderType={"link"}
                            buttonClass={"btn-default"}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                            ])}
                            tooltip={TextProperty({
                                "value": t([
                                    "Toggle Menu"
                                ])
                            })}
                            icon={WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                            })}
                            class={"mx-name-sidebarToggle3 toggle-btn"}
                            style={undefined}
                            tabIndex={-1} />
                    ]}
                    rightWidgets={[
<<<<<<< HEAD
                        <$Placeholder key="l21.Atlas_Core.Tablet_Sidebar.HeaderRight"
                            $widgetId="l21.Atlas_Core.Tablet_Sidebar.HeaderRight"
=======
                        <$Placeholder key="l.Atlas_Core.Tablet_Sidebar.HeaderRight"
                            $widgetId="l.Atlas_Core.Tablet_Sidebar.HeaderRight"
>>>>>>> feat/sales-domain
                            content={PlaceholderProperty({
                                "id": "Atlas_Core.Tablet_Sidebar.HeaderRight"
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
            "enabled": true,
            "content": [
<<<<<<< HEAD
                <$Container key="l21.Atlas_Core.Tablet_Sidebar.container1"
                    $widgetId="l21.Atlas_Core.Tablet_Sidebar.container1"
=======
                <$Container key="l.Atlas_Core.Tablet_Sidebar.container1"
                    $widgetId="l.Atlas_Core.Tablet_Sidebar.container1"
>>>>>>> feat/sales-domain
                    class={"mx-name-container1 sidebar-heading row-left spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
<<<<<<< HEAD
                        <$Image key="l21.Atlas_Core.Tablet_Sidebar.image1"
                            $widgetId="l21.Atlas_Core.Tablet_Sidebar.image1"
=======
                        <$Image key="l.Atlas_Core.Tablet_Sidebar.image1"
                            $widgetId="l.Atlas_Core.Tablet_Sidebar.image1"
>>>>>>> feat/sales-domain
                            datasource={"image"}
                            imageObject={WebStaticImageProperty({
                                "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
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
                            widthUnit={"pixels"}
                            width={28}
                            heightUnit={"auto"}
                            height={100}
                            iconSize={14}
                            displayAs={"fullImage"}
                            responsive={true}
                            class={"mx-name-image1 spacing-outer-right"}
                            style={undefined}
                            tabIndex={undefined} />,
<<<<<<< HEAD
                        <$Text key="l21.Atlas_Core.Tablet_Sidebar.text1"
                            $widgetId="l21.Atlas_Core.Tablet_Sidebar.text1"
=======
                        <$Text key="l.Atlas_Core.Tablet_Sidebar.text1"
                            $widgetId="l.Atlas_Core.Tablet_Sidebar.text1"
>>>>>>> feat/sales-domain
                            class={"mx-name-text1 text-white text-bold"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Mendix" }, "args": {} }
                                })
                            ])}
                            renderMode={"span"} />
                    ]}
                    ariaHidden={false} />,
<<<<<<< HEAD
                <$NavigationTree key="l21.Atlas_Core.Tablet_Sidebar.navigationTree3"
                    $widgetId="l21.Atlas_Core.Tablet_Sidebar.navigationTree3"
=======
                <$NavigationTree key="l.Atlas_Core.Tablet_Sidebar.navigationTree3"
                    $widgetId="l.Atlas_Core.Tablet_Sidebar.navigationTree3"
>>>>>>> feat/sales-domain
                    class={"mx-name-navigationTree3"}
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
                    ]} />
            ],
            "sizeMode": "pixels",
            "sizeValue": 280,
            "class": "region-sidebar",
            "toggleMode": "shrink",
            "initiallyOpen": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
<<<<<<< HEAD
                <$Placeholder key="l21.Atlas_Core.Tablet_Sidebar.Main"
                    $widgetId="l21.Atlas_Core.Tablet_Sidebar.Main"
=======
                <$Placeholder key="l.Atlas_Core.Tablet_Sidebar.Main"
                    $widgetId="l.Atlas_Core.Tablet_Sidebar.Main"
>>>>>>> feat/sales-domain
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Tablet_Sidebar.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};

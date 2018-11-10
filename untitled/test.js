if (window.addEventListener && typeof mmLoaded == "undefined") {
    var newMenu = false;
    var schemaJSON = [{
            "position": 0,
            "icon": "",
            "name": "Sneakers",
            "link": "no-link",
            "id": "31117508673",
            "type": "simple",
            "items": [{
                "position": 0,
                "name": "Nike",
                "link": "link-list-image",
                "id": "34240888897",
                "items": [{
                    "position": 0,
                    "name": "All Nike",
                    "link": "collection",
                    "id": "34240888897",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/800283_1.jpg?v=1523015082"
                }, {
                    "position": 1,
                    "name": "Nike Off-White",
                    "link": "collection",
                    "id": "33964195905",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/801781_01.jpg?v=1522834278"
                }, {
                    "position": 2,
                    "name": "Nike air Yeezy",
                    "link": "collection",
                    "id": "34240593985",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/nike-air-yeezy-2-sp-red-october-red-red-090148_1.jpg?v=1523015046"
                }, {
                    "position": 3,
                    "name": "Air max 1",
                    "link": "collection",
                    "id": "33956167745",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Nike-Air-Max-1-Parra-Patta-Cherrywood.jpg?v=1523014480"
                }, {
                    "position": 4,
                    "name": "Air max 90",
                    "link": "collection",
                    "id": "33956364353",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/052089_1_1_1.jpg?v=1523014546"
                }, {
                    "position": 5,
                    "name": "Air Max 97",
                    "link": "collection",
                    "id": "33962197057",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/801906_1.jpg?v=1523014588"
                }, {
                    "position": 6,
                    "name": "Air Max 98",
                    "link": "collection",
                    "id": "33962262593",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/63597794542-nike-air-max-98-supreme-supreme-sail-white-rflct-silver-white-052985_1.jpg?v=1522767873"
                }]
            }, {
                "position": 1,
                "name": "Adidas",
                "link": "link-list-image",
                "items": [{
                    "position": 0,
                    "name": "All Adidas",
                    "link": "collection",
                    "id": "34251112513",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/803319_01.jpg?v=1523026282"
                }, {
                    "position": 1,
                    "name": "Yeezy",
                    "link": "collection",
                    "id": "33955184705",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Adidas-Yeezy-Boost-350-V2-Beluga-2pt0.jpg?v=1523014757"
                }, {
                    "position": 2,
                    "name": "Pharrell Human Race",
                    "link": "collection",
                    "id": "33955840065",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Adidas-Human-Race-NMD-Pharrell-Cream.jpg?v=1523014784"
                }, {
                    "position": 3,
                    "name": "NMD",
                    "link": "collection",
                    "id": "33956102209",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/0fa7f2bf7518a030c54be7411b69971b.jpg?v=1523015543"
                }, {
                    "position": 4,
                    "name": "UltraBoost",
                    "link": "collection",
                    "id": "33964687425",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Adidas-Ultra-Boost-SNS-Tee-Time.jpg?v=1523015574"
                }]
            }, {
                "position": 2,
                "name": "Jordan",
                "link": "link-list-image",
                "items": [{
                    "position": 0,
                    "name": "All Jordan",
                    "link": "collection",
                    "id": "34242363457",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/012264_1.jpg?v=1523016139"
                }, {
                    "position": 1,
                    "name": "Air Jordan 1",
                    "link": "collection",
                    "id": "34047131713",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/803295_01.jpg?v=1522834252"
                }, {
                    "position": 2,
                    "name": "Air Jordan 3",
                    "link": "collection",
                    "id": "34047230017",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/803111_01.jpg?v=1522834042"
                }, {
                    "position": 3,
                    "name": "Air Jordan 4",
                    "link": "collection",
                    "id": "34047328321",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Air-Jordan-4-Retro-White-Cement-2016.jpg?v=1523015967"
                }, {
                    "position": 4,
                    "name": "Air Jordan 5",
                    "link": "collection",
                    "id": "34047983681",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/011410_1.jpg?v=1523015989"
                }, {
                    "position": 5,
                    "name": "Air Jordan 6",
                    "link": "collection",
                    "id": "34048737345",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/011109_01.jpg?v=1523016010"
                }, {
                    "position": 6,
                    "name": "Air Jordan 11",
                    "link": "collection",
                    "id": "34048933953",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/63611742997-air-jordan-11-retro-concord-2011-release-white-black-dark-concord-011518_1.jpg?v=1522835550"
                }, {
                    "position": 7,
                    "name": "Air Jordan 12",
                    "link": "collection",
                    "id": "34049065025",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/012394_1.jpg?v=1523016043"
                }, {
                    "position": 8,
                    "name": "Air Jordan 13",
                    "link": "collection",
                    "id": "34242854977",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/011449_01.jpg?v=1523016555"
                }]
            }, {
                "position": 3,
                "name": "Balenciaga",
                "link": "link-list-image",
                "items": [{
                    "position": 0,
                    "name": "All Balenciaga",
                    "link": "collection",
                    "id": "34293547073",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Balenciaga-Triple-S-Grey-Red-Blue.jpg?v=1523016908"
                }, {
                    "position": 1,
                    "name": "Triple S",
                    "link": "collection",
                    "id": "34243084353",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Balenciaga-Triple-S-Grey-Red-Blue.jpg?v=1523016908"
                }, {
                    "position": 2,
                    "name": "Speed Trainer",
                    "link": "collection",
                    "id": "34243051585",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Balenciaga-Speed-Trainer-Black-White.jpg?v=1523016880"
                }]
            }, {
                "position": 4,
                "name": "Others Brands",
                "link": "link-list-image",
                "items": [{"position": 0, "name": "All others", "link": "collection", "id": "34293743681"}, {
                    "position": 1,
                    "name": "Vans",
                    "link": "collection",
                    "id": "34250227777",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Vans-Era-95-DX-Fear-Of-God-White-Black.jpg?v=1523025449"
                }, {
                    "position": 2,
                    "name": "Gucci",
                    "link": "collection",
                    "id": "34250293313",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/456230_A38G0_9064_002_100_0000_Light.jpg?v=1523025464"
                }, {
                    "position": 3,
                    "name": "Asics",
                    "link": "collection",
                    "id": "34250424385",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Asics-Gel-Lyte-III-025_1.jpg?v=1523025495"
                }, {
                    "position": 4,
                    "name": "Puma",
                    "link": "collection",
                    "id": "34250489921",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/s-l300.jpg?v=1523025555"
                }]
            }]
        }, {
            "position": 1,
            "icon": "",
            "name": "Clothes",
            "link": "no-link",
            "id": "",
            "type": "simple",
            "items": [{
                "position": 0,
                "name": "Jackets",
                "link": "collection",
                "id": "34049753153",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Supreme-The-North-Face-Mountain-Parka.jpg?v=1522836402"
            }, {
                "position": 1,
                "name": "T-Shirts",
                "link": "collection",
                "id": "34055061569",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/440103_X3F05_9045_001_100_0000_Light-Washed-T-shirt-with-Gucci-Logo.jpg?v=1523024027"
            }, {
                "position": 2,
                "name": "Hoodie",
                "link": "collection",
                "id": "34055913537",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/7fe93bc0de9740fe98b40dc214fb7605_sqr.jpg?v=1523023720"
            }, {
                "position": 3,
                "name": "Pants",
                "link": "collection",
                "id": "34055749697",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/pant.jpg?v=1522849878"
            }, {
                "position": 4,
                "name": "Top\/Sweaters",
                "link": "collection",
                "id": "34056208449",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Supreme-Box-Logo-Crewneck-Black.jpg?v=1522843361"
            }]
        }, {
            "position": 2,
            "icon": "",
            "name": "Accesories",
            "link": "collection",
            "id": "31161516097",
            "type": "simple",
            "items": [{
                "position": 0,
                "name": "Supreme",
                "link": "link-list-image",
                "items": [{
                    "position": 0,
                    "name": "Bags",
                    "link": "collection",
                    "id": "34249015361",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/XYV9H2gOSAU1.jpg?v=1523024441"
                }, {
                    "position": 1,
                    "name": "Home Accessories",
                    "link": "collection",
                    "id": "34249113665",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/supreme-2017-fall-winter-accessories-supreme-box-40.jpg?v=1523024566"
                }, {
                    "position": 2,
                    "name": "Heat Accessories",
                    "link": "collection",
                    "id": "34249179201",
                    "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/Fender_Supreme_strat.jpg?v=1523024621"
                }]
            }, {
                "position": 1,
                "name": "Kaws",
                "link": "collection",
                "id": "34248917057",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/kaws-open-edition-companion-black.jpg?v=1523024381"
            }, {
                "position": 2,
                "name": "Bearbrick",
                "link": "collection",
                "id": "34248949825",
                "image": "https:\/\/cdn.shopify.com\/s\/files\/1\/0006\/4353\/0817\/collections\/3480814255361129355.jpg?v=1523024404"
            }]
        }, {
            "position": 3,
            "icon": "",
            "name": "Personal Shopping",
            "link": "page",
            "id": "5617287233",
            "type": "simple"
        }, {
            "position": 4,
            "icon": "",
            "name": "Sell",
            "link": "page",
            "id": "6251446337",
            "type": "tree",
            "items": [{"position": 0, "name": "Consignment", "link": "page", "id": "6286999617"}, {
                "position": 1,
                "name": "Direct cash out",
                "link": "page",
                "id": "6287032385"
            }]
        }, {
            "position": 5,
            "icon": "",
            "name": "About us",
            "link": "no-link",
            "type": "tree",
            "items": [{"position": 0, "name": "Authenticity & Reviews", "link": "page", "id": "5471862849"}, {
                "position": 1,
                "name": "Frequently Asked Questions (FAQ)",
                "link": "page",
                "id": "5611880513"
            }, {"position": 2, "name": "Contact us", "link": "page", "id": "5587566657"}, {
                "position": 3,
                "name": "Terms",
                "link": "page",
                "id": "5471305793"
            }, {"position": 4, "name": "Shipping", "link": "frontpage"}]
        }], schemaLinksJSON = {
            "collection": {
                "34240888897": "\/collections\/others",
                "33964195905": "\/collections\/nike-off-white",
                "34240593985": "\/collections\/nike-air-yeezy",
                "33956167745": "\/collections\/air-max-1",
                "33956364353": "\/collections\/air-max-90",
                "33962197057": "\/collections\/air-max-91",
                "33962262593": "\/collections\/air-max-98",
                "34251112513": "\/collections\/others-adidas",
                "33955184705": "\/collections\/yeezy",
                "33955840065": "\/collections\/pharrell-human-race",
                "33956102209": "\/collections\/nmd",
                "33964687425": "\/collections\/ultraboost",
                "34242363457": "\/collections\/air-jordan-13",
                "34047131713": "\/collections\/air-jordan-1",
                "34047230017": "\/collections\/air-jordan-3",
                "34047328321": "\/collections\/air-jordan-4",
                "34047983681": "\/collections\/air-jordan-5",
                "34048737345": "\/collections\/air-jordan-6",
                "34048933953": "\/collections\/air-jordan-11",
                "34049065025": "\/collections\/air-jordan-12",
                "34242854977": "\/collections\/air-jordan-14",
                "34293547073": "\/collections\/other-balenciaga",
                "34243084353": "\/collections\/triple-s",
                "34243051585": "\/collections\/speed-trainer",
                "34293743681": "\/collections\/other-sneakers",
                "34250227777": "\/collections\/vans",
                "34250293313": "\/collections\/gucci",
                "34250424385": "\/collections\/asics",
                "34250489921": "\/collections\/puma",
                //"31161483329": "\/collections\/streetwear",
                "34049753153": "\/collections\/jackets",
                "34055061569": "\/collections\/t-shirts",
                "34055913537": "\/collections\/hoodie",
                "34055749697": "\/collections\/pants",
                "34056208449": "\/collections\/top-sweaters",
                //"31161516097": "\/collections\/accessories",
                "34249015361": "\/collections\/bags",
                "34249113665": "\/collections\/home-accessories",
                "34249179201": "\/collections\/heat-accessories",
                "34248917057": "\/collections\/kaws",
                "34248949825": "\/collections\/bearbrick"
            },
            "page": {
                "5617287233": "\/pages\/personnal-shopping",
                "6251446337": "\/pages\/sell",
                "6286999617": "\/pages\/consignment",
                "6287032385": "\/pages\/direct-cash-out",
                "5471862849": "\/pages\/authenticity-customers-reviews",
                "5611880513": "\/pages\/q-a",
                "5587566657": "\/pages\/contact-us",
                "5471305793": "\/pages\/terms"
            },
            "frontpage": "\/"
        }, schemaDesignJSON = [{"action": "menu-select", "value": "main-menu"}, {
            "action": "design",
            "setting": "font_size",
            "value": "17px"
        }, {"action": "design", "setting": "vertical_font_size", "value": "16px"}, {
            "action": "design",
            "setting": "vertical_text_color",
            "value": "#a1a1a1"
        }, {"action": "design", "setting": "font_family", "value": "Roboto"}, {
            "action": "design",
            "setting": "button_text_color",
            "value": "#ffffff"
        }, {"action": "design", "setting": "button_text_hover_color", "value": "#ffffff"}, {
            "action": "design",
            "setting": "background_color",
            "value": "#ffffff"
        }, {"action": "design", "setting": "background_hover_color", "value": "#f9f9f9"}, {
            "action": "design",
            "setting": "link_color",
            "value": "#4e4e4e"
        }, {"action": "design", "setting": "button_background_color", "value": "#0da19a"}, {
            "action": "design",
            "setting": "button_background_hover_color",
            "value": "#0d8781"
        }, {"action": "design", "setting": "tree_sub_direction", "value": "set_tree_right"}, {
            "action": "design",
            "setting": "vertical_link_hover_color",
            "value": "#cbcccc"
        }, {"action": "design", "setting": "link_hover_color", "value": "#cacaca"}, {
            "action": "design",
            "setting": "text_color",
            "value": "#a1a1a1"
        }, {"action": "design", "setting": "vertical_link_color", "value": "#a1a1a1"}], mmLoaded = true, undo = [],
        redo = [], action = "", tempMenuObject = {}, changedMenu = true, submenuToggled = true, changingPage = false,
        saving = false, panelOpened = false, verticalMenuMaxWidth = 10000, selectedMenu, clicked, touched, burgerIcon,
        disableOnClick = false, globalTouch = true, onClickOnlyReinit = true, disableOnScroll = false,
        mobileMenuMilliseconds = 350, ulPaths = [], customHeaderOffset = false, fontSize = 0, storeUlCount = 0,
        storeNavCount = 0, loadMegaMenuTries = 100, customMenuUls, setTreeDirection, defaultFontSelected = false,
        forceMobile = false, activateMegaMenu = true, previewPanelLoaded = false, allowMainMenuRecalibration = true,
        readyStateCheckInterval;

    /* INITIALIZE MENU FUNCTIONS */
    function loadBuddhaMegaMenu() { /* in case the first load didn't work, because the wireframe didn't fully load in the dom, try again after 10 milliseconds */
        readyStateCheckInterval = setInterval(function () {
            if (jQueryBuddha.isReady && !newMenu) {
                initBuddhaMegaMenu();
            }
        }, 10);
        setTimeout(function () {
            clearInterval(readyStateCheckInterval);
        }, 3000);
        /* load buddha mega menu for the first time */
        initBuddhaMegaMenu();
    }

    function initBuddhaMegaMenu() { /* check if wireframe loaded */
        if (jQueryBuddha(".buddha-hidden-wireframe").length > 0) {
            newMenu = jQueryBuddha(".buddha-hidden-wireframe").first().html();
            clearInterval(readyStateCheckInterval);
        } else {
            return false;
        }
        /* check it mega menu app is installed */
        var installed = false;
        jQueryBuddha("script").each(function () {
            if (jQueryBuddha(this).text().indexOf("mm-init.js?") != -1 && jQueryBuddha(this).text().indexOf("asyncLoad") != -1 && jQueryBuddha(this).text().indexOf("initSchema") == -1) {
                installed = true;
            }
        });
        /* jQueryBuddha("html").html().indexOf("assets\/mm-init.js?")!=-1 */
        if (installed) {
            var iterations = 0;
            /* bundle app by smar7 apps fix */
            var bundleAppMutations = setInterval(function () {
                iterations++;
                if (typeof mutationExceptions !== "undefined") {
                    mutationExceptions[mutationExceptions.length] = ".buddha-menu-item";
                    clearInterval(bundleAppMutations);
                }
                if (iterations > 10) {
                    clearInterval(bundleAppMutations);
                }
            }, 1000);
            initSchema();
            /* remove shopify fixed top bar (keep verifying in case you navigate with mobile view, then resize) */
            if (window.self !== window.top || getParameterByName("buddha_preview") !== null) {
                jQueryBuddha("#admin_bar_iframe").remove();
                jQueryBuddha("html").css("padding-top", "0px");
                setInterval(function () {
                    jQueryBuddha("*").each(function () {
                        if (jQueryBuddha(this).css("top") == "40px" && jQueryBuddha(this).css("position") == "fixed") {
                            jQueryBuddha(this).css("top", "0");
                        }
                    });
                }, 1000);
            }
            var reinitTimeout;
            var windowWidth = jQueryBuddha(window).width();
            jQueryBuddha(window).resize(function () {
                if (windowWidth != jQueryBuddha(window).width()) {
                    jQueryBuddha(".mm-hovering").removeClass("mm-hovering");
                    jQueryBuddha(".submenu-opened").hide().removeClass("submenu-opened");
                    jQueryBuddha(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
                    clearTimeout(reinitTimeout);
                    reinitTimeout = setTimeout(function () {
                        applyMegaMenu();
                        applyOnClick();
                        windowWidth = jQueryBuddha(window).width();
                    }, 300);
                }
            });
            if (!disableOnScroll) { /* DEPRECATED var reinitScrollTimeout; jQueryBuddha(window).scroll(function(){ clearTimeout(reinitScrollTimeout); reinitScrollTimeout = setTimeout(function(){ var submenuVisible = false; jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function(){ if (parseInt(jQueryBuddha(this).css("top"))>0) { setSubmenuBoundries(jQueryBuddha(this).parent()); } }); },10); }); */
                /* if static main menu, add overflow */
                var reinitScrollTimeout;
                setInterval(function () {
                    jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function () {
                        if (parseInt(jQueryBuddha(this).css("top")) > 0) {
                            var li = jQueryBuddha(this).parent();
                            if (li.find(">ul.mm-submenu.simple").length > 0 || li.find(">ul.mm-submenu.tabbed").length > 0) {
                                var hasPositionStatic = false;
                                li.parent().parents().each(function () {
                                    if (jQueryBuddha(this).css("position") == "fixed") {
                                        hasPositionStatic = true;
                                    }
                                });
                                if (li.find(">ul.mm-submenu.simple").length > 0) {
                                    var submenu = li.find(">ul.mm-submenu.simple");
                                } else {
                                    var submenu = li.find(">ul.mm-submenu.tabbed");
                                }
                                if (hasPositionStatic) {
                                    var maxHeight = jQueryBuddha(window).height() - 100;
                                    if ((jQueryBuddha(window).height() - 50) < submenu.height()) {
                                        submenu.css({
                                            "max-height": maxHeight + "px",
                                            "overflow": "scroll",
                                            "overflow-x": "hidden"
                                        });
                                    }
                                    /* in case there is little content on a page and the main menu is fixed */
                                } else if ((jQueryBuddha(document).height() - 200) <= jQueryBuddha(window).height()) {
                                    var maxHeight = jQueryBuddha(document).height() - 250;
                                    submenu.css({
                                        "max-height": maxHeight + "px",
                                        "overflow": "scroll",
                                        "overflow-x": "hidden"
                                    });
                                } else {
                                    submenu.css({"max-height": "none", "overflow": "hidden"});
                                }
                            }
                        }
                    });
                }, 1000);
            }
            var loadMegaMenuCount = 1;
            if (storeUlCount != jQueryBuddha("ul").length || storeNavCount != jQueryBuddha("nav").length) {
                storeUlCount = jQueryBuddha("ul").length;
                storeNavCount = jQueryBuddha("nav").length;
                applyMegaMenu();
                /* when a certain element is clicked, reinit the menus and reset the simple submenu width, in case the side menu is hidden */
                applyOnClick();
            }
            clearInterval(loadMegaMenu);
            var loadMegaMenu = setInterval(function () {
                loadMegaMenuCount++;
                if (loadMegaMenuCount > loadMegaMenuTries) {
                    clearInterval(loadMegaMenu);
                }
                if (storeUlCount != jQueryBuddha("ul").length || storeNavCount != jQueryBuddha("nav").length) {
                    storeUlCount = jQueryBuddha("ul").length;
                    storeNavCount = jQueryBuddha("nav").length;
                    applyMegaMenu();
                    /* when a certain element is clicked, reinit the menus and reset the simple submenu width, in case the side menu is hidden */
                    applyOnClick();
                }
            }, 100);
        } else if (typeof hideOriginalMenuInterval !== "undefined") {
            jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
            jQueryBuddha("link").each(function () {
                if (jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") !== -1) {
                    jQueryBuddha(this).remove();
                }
            });
            clearInterval(hideOriginalMenuInterval);
        } else {
            jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
            jQueryBuddha("link").each(function () {
                if (jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") !== -1) {
                    jQueryBuddha(this).remove();
                }
            });
        }
        jQueryBuddha(window).on("beforeunload", function () {
            if ((window.self !== window.top || getParameterByName("buddha_preview") !== null) && (undo.length > 0 || changedMenu) && !saving) {
                return "You might have unsaved changes.";
            }
        });
        /* jQueryBuddha(window).on("unload", function() { changingPage = true; if (window.self!==window.top) { var preview = parent; if (typeof parent.postMessage === "undefined") { preview = top; } preview.postMessage("startLoader", "*" ); } }); */
    }

    /* when a certain element is clicked, reinit the menus and reset the simple submenu width, in case the side menu is hidden */
    function applyOnClick() {
        if (!disableOnClick) {
            clicked = false;
            if (jQueryBuddha(burgerIcon).length == 0) {
                burgerIcon = false;
            }
            jQueryBuddha(burgerIcon || "*").unbind("click.apply-mm");
            jQueryBuddha(burgerIcon || "*").bind("click.apply-mm", function () {
                var element = jQueryBuddha(this);
                if (!clicked && !touched) {
                    clicked = true;
                    setTimeout(function () {
                        if (!changingPage && element.closest(".buddha-menu-item").length == 0 && element.closest(".vertical-mega-menu").length == 0 && element.closest(".horizontal-mega-menu").length == 0 && !element.hasClass("vertical-mega-menu") && !element.hasClass("horizontal-mega-menu")) {
                            if (onClickOnlyReinit) {
                                jQueryBuddha.each(ulPaths, function (index, value) {
                                    reinitMenus(value);
                                });
                            } else {
                                applyMegaMenu();
                            }
                        }
                    }, mobileMenuMilliseconds);
                }
                setTimeout(function () {
                    clicked = false;
                }, (mobileMenuMilliseconds + 50));
            });
        }
    }

    function initSchema() {
        if (typeof schemaJSON == "string") {
            schemaJSON = JSON.parse(schemaJSON);
        }
        if (typeof schemaLinksJSON == "string") {
            schemaLinksJSON = JSON.parse(schemaLinksJSON);
        }
        if (typeof schemaDesignJSON == "string") {
            schemaDesignJSON = JSON.parse(schemaDesignJSON);
        }
        /* apply custom design */
        recreateDesign();
        action = "";
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        }
    }

    function iframeReady() {
        previewPanelLoaded = true;
        document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
    }

    function reloadPreview() {
        location.reload();
    }

    function applyMegaMenu(menu) { /* bundle app by smar7 apps fix */
        if (typeof mutationExceptions !== "undefined") {
            mutationExceptions[mutationExceptions.length] = "ul";
        }
        if (typeof hideOriginalMenuInterval !== "undefined") {
            clearInterval(hideOriginalMenuInterval);
        }
        if (menu != undefined) {
            var newSchemaDesign = [];
            selectedMenu = menu;
            jQueryBuddha.each(schemaDesignJSON, function (key, item) {
                if (item.action != "menu-select") {
                    newSchemaDesign.push(item);
                }
            });
            schemaDesignJSON = newSchemaDesign;
            changedMenu = true;
        } else {
            jQueryBuddha.each(schemaDesignJSON, function (key, item) {
                if (item.action == "menu-select") {
                    selectedMenu = item.value;
                }
            });
        }
        jQueryBuddha(".vertical-mega-menu").removeClass("vertical-mega-menu");
        jQueryBuddha(".horizontal-mega-menu").removeClass("horizontal-mega-menu");
        jQueryBuddha(".buddha-disabled").removeClass("buddha-disabled");
        jQueryBuddha(".buddha-menu-item").remove();
        jQueryBuddha("#themeScript").remove();
        var links = [];
        jQueryBuddha.each(linkLists, function (key, item) {
            if (selectedMenu == key) {
                links = item.items;
                return false;
            }
        });
        if (window.self !== window.top || getParameterByName("buddha_preview") !== null) {
            console.log(links);
        }
        if (activateMegaMenu == false) {
            selectedMenu = "none";
        }
        if (selectedMenu != undefined && selectedMenu != "none" && links.length > 0) {
            jQueryBuddha(customMenuUls || "ul,nav").each(function () {
                var forceMenu = false;
                var elementFits = 0;
                var skipCheck = false;
                tempMenuObject = {};
                tempMenuObject.ul = jQueryBuddha(this);
                if (!skipCheck) {
                    jQueryBuddha(this).children("li").each(function () {
                        var li = jQueryBuddha(this);
                        var a = li.find("a").first();
                        var href = a.attr("href");
                        if ((href == undefined || (href != undefined && (href.substr(0, 1) == "#" || href == ""))) && li.find("a:nth-child(2)").length > 0) {
                            a = li.find("a:nth-child(2)");
                            href = a.attr("href");
                        } else if ((href == undefined || (href != undefined && (href.substr(0, 1) == "#" || href == ""))) && li.find("a>a").length > 0) {
                            a = li.find("a>a");
                            href = a.attr("href");
                        }
                        /*if (typeof href !== "undefined") { href = href.replace("http://"+buddhaMegaMenuShop,"").replace("https://"+buddhaMegaMenuShop,""); }*/
                        if (links[elementFits] != undefined && href == links[elementFits]) {
                            if (tempMenuObject.liClasses == undefined) {
                                tempMenuObject.liClasses = "";
                            }
                            tempMenuObject.liClasses = concatClasses(li.attr("class"), tempMenuObject.liClasses);
                            if (tempMenuObject.aClasses == undefined) {
                                tempMenuObject.aClasses = [];
                            }
                            tempMenuObject.aClasses = concatClasses(a.attr("class"), tempMenuObject.aClasses);
                            if (tempMenuObject.liItems == undefined) {
                                tempMenuObject.liItems = [];
                            }
                            if (jQueryBuddha.inArray(li, tempMenuObject.liItems) == -1) {
                                tempMenuObject.liItems[tempMenuObject.liItems.length] = li;
                            }
                            li.addClass("buddha-transparent");
                            elementFits++;
                        } else if (elementFits > 0 && elementFits != links.length) {
                            elementFits = 0;
                            tempMenuObject.liItems = [];
                            jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent");
                            if (href == links[0]) {
                                elementFits = 1;
                                tempMenuObject.liItems[tempMenuObject.liItems.length] = li;
                                li.addClass("buddha-transparent");
                            }
                        }
                    });
                }
                if ((elementFits > 0 && elementFits == links.length) || forceMenu) {
                    var liClasses = getSpecificClasses(tempMenuObject.liClasses);
                    var aClasses = getSpecificClasses(tempMenuObject.aClasses);
                    jQueryBuddha.each(tempMenuObject.liItems, function (key, item) {
                        jQueryBuddha(item).removeClass("buddha-transparent").addClass("buddha-disabled");
                    });
                    if (newMenu) {
                        jQueryBuddha(this).prepend(newMenu);
                        jQueryBuddha(this).find(".buddha-menu-item").addClass(liClasses["common"]);
                        jQueryBuddha(this).find(".buddha-menu-item").find(">a").attr("class", aClasses["common"]);
                        /* Add Colection Images */
                        jQueryBuddha(".get-collection-image").each(function () {
                            var element = jQueryBuddha(this);
                            var dataId = element.data("id");
                            if (collectionImages[dataId] != undefined && collectionImages[dataId].indexOf("no-image") == -1) {
                                element.attr("src", collectionImages[dataId]);
                            }
                        });
                        /* Add Product Images */
                        jQueryBuddha(".get-product-image").each(function () {
                            var element = jQueryBuddha(this);
                            var dataId = element.data("id");
                            if (productImages[dataId] != undefined && productImages[dataId].indexOf("no-image") == -1) {
                                element.attr("src", productImages[dataId]);
                            }
                        });
                        /* Add Product Prices */
                        jQueryBuddha(".get-mega-menu-prices").each(function () {
                            var element = jQueryBuddha(this);
                            var dataId = element.data("id");
                            if (prices[dataId] != undefined) {
                                element.html(prices[dataId]);
                            }
                        });
                    }
                    if (newMenu === false || newMenu == '' || newMenu == 'undefined' || newMenu === null) {
                        jQueryBuddha.each(schemaJSON.reverse(), function (key, item) {
                            var firstLi = tempMenuObject.ul.find(">li").first();
                            if (firstLi.find("a").length == 0 && firstLi.next().find("a").length > 0) {
                                var clone = firstLi.next().clone();
                            } else {
                                var clone = firstLi.clone();
                            }
                            var insertedClone = clone.prependTo(tempMenuObject.ul).removeAttr("class").addClass("buddha-menu-item " + liClasses["common"]);
                            var customA = false;
                            if (item.link == "no-link") {
                                var dataHref = "no-link";
                                var href = "javascript:void(0);";
                            } else if (item.link == "http") {
                                var dataHref = item.http;
                                var href = item.http;
                            } else {
                                var dataHref = (item.id != undefined && schemaLinksJSON[item.link] != undefined && schemaLinksJSON[item.link][item.id] != undefined) ? schemaLinksJSON[item.link][item.id] : schemaLinksJSON[item.link];
                                var href = (item.id != undefined && schemaLinksJSON[item.link] != undefined && schemaLinksJSON[item.link][item.id] != undefined) ? schemaLinksJSON[item.link][item.id] : schemaLinksJSON[item.link];
                            }
                            var icon = "";
                            if (item.icon != undefined && item.icon != "" && item.icon != "none") {
                                icon = "<i class=\"fa fa-" + item.icon + "\" aria-hidden=\"true\"></i> ";
                            }
                            var aContent = icon + item.name.replace(/&quot;/g, '"');
                            if (insertedClone.find("a").first().find(">:first-child").length > 0 && insertedClone.find("a").first().find(">:first-child").prop("tagName").toLowerCase() == "span" && insertedClone.find("a").first().find("span").first().text().trim() == insertedClone.find("a").first().text().trim()) {
                                var spanClass = insertedClone.find("a").first().find(">:first-child").attr("class");
                                if (spanClass != "undefined") {
                                    aContent = "<span class=\"" + spanClass + "\">" + aContent + "</span>";
                                } else {
                                    aContent = "<span>" + aContent + "</span>";
                                }
                            }
                            var useOnClick = "";
                            if (window.self === window.top || (window.self !== window.top && window.name == "mega-menu-iframe")) {
                                useOnClick = "onclick=\"return toggleSubmenu(this)\"";
                            }
                            if (customA) {
                                var aHtml = customA;
                            } else {
                                var aHtml = "<a class=\"" + aClasses["common"] + "\" href=\"" + href + "\" data-href=\"" + dataHref + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(item.name.replace(/&quot;/g, '"')).text() + "\" data-no-instant>" + aContent + "</a>";
                            }
                            var submenuHtml = addSubMenus(item);
                            insertedClone.html(aHtml + submenuHtml);
                            if (item.type == "contact") {
                                jQueryBuddha("#mm-contact").clone().appendTo(insertedClone).show().removeAttr("id");
                            }
                        });
                        /* add arrow to main menu items that have submenus */
                        tempMenuObject.ul.find(">li").each(function () {
                            if (jQueryBuddha(this).find("ul.mm-submenu").length > 0) {
                                if (jQueryBuddha(this).find(">a>span").length > 0) {
                                    jQueryBuddha(this).find(">a>span").append("&nbsp;<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>");
                                } else {
                                    jQueryBuddha(this).find(">a").append("&nbsp;<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>");
                                }
                            }
                        });
                        /* add toggle submenu button for vertical menu */
                        tempMenuObject.ul.find(" ul.mm-submenu").each(function () {
                            if (jQueryBuddha(this).parent().find(">a>span").length > 0) {
                                jQueryBuddha(this).parent().find(">a>span").append(" <button class=\"toggle-menu-btn\" style=\"display:none;\" onclick=\"return toggleSubmenu(this)\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></button>");
                            } else {
                                jQueryBuddha(this).parent().find(">a").append(" <button class=\"toggle-menu-btn\" style=\"display:none;\" onclick=\"return toggleSubmenu(this)\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></button>");
                            }
                        });
                    }
                    schemaJSON.reverse();
                    if (liClasses["first"] || aClasses["first"] || liClasses["last"] || aClasses["last"]) {
                        tempMenuObject.ul.find(".buddha-menu-item").first().addClass(liClasses["first"]);
                        tempMenuObject.ul.find(".buddha-menu-item").last().addClass(liClasses["last"]);
                        tempMenuObject.ul.find(".buddha-menu-item").first().find("a").first().addClass(aClasses["first"]);
                        tempMenuObject.ul.find(".buddha-menu-item").last().find("a").first().addClass(aClasses["last"]);
                    }
                    /* set menu item as active */
                    if (liClasses["active"] || aClasses["active"]) {
                        tempMenuObject.ul.find(">.buddha-menu-item").each(function () {
                            var a = jQueryBuddha(this).find("a").first();
                            if (a.attr("data-href") == window.location.pathname) {
                                a.addClass(aClasses["active"]);
                                jQueryBuddha(this).addClass(liClasses["active"]);
                            }
                        });
                    }
                    tempMenuObject = {};
                    /* add theme specific scripts if mega menu added */
                    /* FIXES START */
                    /* fix for any dl-menu */
                    if (jQueryBuddha(".dl-menu").length > 0) {
                        setTimeout(function () {
                            jQueryBuddha(".toggle-menu-btn").click(function () {
                                setTimeout(function () {
                                    jQueryBuddha(".dl-menu").addClass("dl-menuopen");
                                }, 1);
                            });
                        }, 100);
                    }
                    /* Supply Theme more menu fix (for when people have theme_store_id 0) */
                    if (typeof timber !== "undefined" && typeof timber.alignMenu !== "undefined") {
                        timber.alignMenu = function () {
                        };
                    }
                    /* FIXES END */
                    var ulPath = getUlPath(jQueryBuddha(this));
                    var isSubmenuOfPreviousUlPath = false;
                    if (jQueryBuddha.inArray(ulPath, ulPaths) == -1 && !jQueryBuddha(this).hasClass("buddha-hidden-wireframe") && ulPath.indexOf(".buddha-hidden-wireframe") == -1) {
                        jQueryBuddha.each(ulPaths, function (index, value) {
                            if (ulPath.indexOf(value) !== -1) {
                                isSubmenuOfPreviousUlPath = true;
                            }
                        });
                        if (!isSubmenuOfPreviousUlPath) {
                            ulPaths[ulPaths.length] = ulPath;
                        }
                    }
                } else {
                    jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent");
                }
            });
            jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
            jQueryBuddha.each(ulPaths, function (index, value) {
                reinitMenus(value);
            });
        }
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        } else if (previewPanelLoaded) {
            document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        }
        /* bundle app by smar7 apps fix */
        setTimeout(function () {
            if (typeof mutationExceptions !== "undefined") {
                mutationExceptions.pop();
            }
        }, 100);
    }

    /* determines if menu should be vertical or horizontal */
    function reinitMenus(ulPath) { /* if(!jQueryBuddha(ulPath).is(":visible") && (typeof jQueryBuddha(ulPath).attr("style")===typeof undefined || jQueryBuddha(ulPath).attr("style").replace(/ /g, "").indexOf("display:none")==-1 || (jQueryBuddha(ulPath).attr("style").replace(/ /g, "").indexOf("display:none")!=-1 && jQueryBuddha(ulPath).css("display")=="none"))) { return; } */
        jQueryBuddha(".submenu-opened").hide();
        var previousItemTop;
        /* var horizontal = true; */
        var verticalItemsNr = 1;
        jQueryBuddha(ulPath + ">.buddha-menu-item>a").each(function () { /* .offset() is relative to document */
            var currentItemTop = jQueryBuddha(this).offset().top;
            /* menuitems are positioned one below each other -> mobile rendering */
            previousItemTop = (previousItemTop == undefined) ? currentItemTop : previousItemTop;
            if ((currentItemTop > (previousItemTop + 5) ) || (currentItemTop < (previousItemTop - 5))) {
                verticalItemsNr++;
            }
            previousItemTop = currentItemTop;
        });
        /* var oldYPosition = 0; var oldXPosition = 0; var increment = 0; jQueryBuddha(ulPath+">.buddha-menu-item").each(function() { var positionY = jQueryBuddha(this).position().top; var positionX = jQueryBuddha(this).position().left; var differenceY = positionY - oldYPosition; var differenceX = positionX - oldXPosition; if(increment>0){ if(differenceY>3 || differenceX<3) { verticalItemsNr++; } } oldYPosition = positionY; oldXPosition = positionX; increment++; }); */
        if ((verticalItemsNr != jQueryBuddha(ulPath + ">.buddha-menu-item").length || (verticalItemsNr == 1 && jQueryBuddha("body").width() > verticalMenuMaxWidth)) && forceMobile == false) { /* if ( verticalItemsNr==1 && forceMobile==false ) { */
            jQueryBuddha(ulPath).addClass("horizontal-mega-menu").removeClass("vertical-mega-menu");
            jQueryBuddha(ulPath + " ul.mm-submenu").removeAttr("style");
            jQueryBuddha(ulPath + " .fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
            jQueryBuddha(ulPath + " .submenu-opened").removeClass("submenu-opened");
            jQueryBuddha(ulPath + " .toggle-menu-btn").hide();
            jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item").off();
            setTimeout(function () {
                jQueryBuddha(ulPath).find(".buddha-menu-item").each(function () {
                    setSubmenuBoundries(jQueryBuddha(this));
                    setContactSubmenuBoundries(jQueryBuddha(this));
                });
            }, 1);
            jQueryBuddha(ulPath).find(".buddha-menu-item").unbind("onmouseover.simpleContactSubmenuResize");
            jQueryBuddha(ulPath).find(".buddha-menu-item").bind("onmouseover.simpleContactSubmenuResize", function () {
                setSubmenuBoundries(jQueryBuddha(this));
                setContactSubmenuBoundries(jQueryBuddha(this));
            });
            jQueryBuddha(ulPath).find("ul.mm-submenu.tabbed>li").each(function () {
                if (jQueryBuddha(this).parent().find(".tab-opened").length == 0) { /* jQueryBuddha(this).parent().find(".tab-opened").removeClass("tab-opened"); */
                    jQueryBuddha(this).addClass("tab-opened");
                    setTabbedSubmenuBoundries(jQueryBuddha(this));
                } else if (jQueryBuddha(this).hasClass("tab-opened")) {
                    setTabbedSubmenuBoundries(jQueryBuddha(this));
                }
            });
            jQueryBuddha(ulPath).find("ul.mm-submenu.tabbed>li").unbind();
            jQueryBuddha(ulPath).find("ul.mm-submenu.tabbed>li").hover(function () {
                jQueryBuddha(this).parent().find(".tab-opened").removeClass("tab-opened");
                jQueryBuddha(this).addClass("tab-opened");
                setTabbedSubmenuBoundries(jQueryBuddha(this));
            });
            /* set first tab of every tabbed submenu be opened */
            jQueryBuddha(ulPath).find("ul.mm-submenu.tabbed>li:first-child").each(function () {
                if (jQueryBuddha(this).parent().find(".tab-opened").length == 0) {
                    jQueryBuddha(this).addClass("tab-opened");
                    setTabbedSubmenuBoundries(jQueryBuddha(this));
                }
            });
            jQueryBuddha(ulPath).find(".buddha-menu-item").unbind("mouseenter.resizeSubmenus");
            jQueryBuddha(ulPath).find(".buddha-menu-item").bind("mouseenter.resizeSubmenus", function () {
                setSubmenuBoundries(jQueryBuddha(this));
                setContactSubmenuBoundries(jQueryBuddha(this));
                if (jQueryBuddha(this).find(".tab-opened").length > 0) {
                    setTabbedSubmenuBoundries(jQueryBuddha(this).find(".tab-opened"));
                }
            });
        } else {
            if (activateMegaMenu) {
                jQueryBuddha(".mega-hover").removeClass("mega-hover");
                jQueryBuddha(".buddha-menu-item.disabled").removeClass("disabled");
                jQueryBuddha(ulPath).addClass("vertical-mega-menu").removeClass("horizontal-mega-menu");
                jQueryBuddha(ulPath + " .toggle-menu-btn").show();
                jQueryBuddha(ulPath).find("li.buddha-menu-item").off();
                jQueryBuddha(ulPath).find("li.buddha-menu-item a").off();
                var iconDistance = parseInt(jQueryBuddha(ulPath + ">li>a").css("font-size"));
                var totalPaddingLeft = parseInt(jQueryBuddha(ulPath + ">li").css("padding-left")) + parseInt(jQueryBuddha(ulPath + ">li>a").css("padding-left"));
                var paddingLeftSubSubmenus = totalPaddingLeft;
                if (totalPaddingLeft > 15) {
                    paddingLeftSubSubmenus = 15;
                }
                var totalPaddingTop = parseInt(jQueryBuddha(ulPath + ">li").css("padding-top")) + parseInt(jQueryBuddha(ulPath + ">li>a").css("padding-top"));
                jQueryBuddha("#verticalMenuSpacing").remove();
                var styleSheet = '<style id="verticalMenuSpacing" type="text/css">';
                styleSheet += ulPath + '.vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
                styleSheet += ulPath + '.vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:' + paddingLeftSubSubmenus + 'px !important;padding-right:' + paddingLeftSubSubmenus + 'px !important;}';
                styleSheet += ulPath + '.vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
                styleSheet += ulPath + '.vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
                styleSheet += ulPath + '.vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:' + paddingLeftSubSubmenus + 'px !important;padding-right:' + paddingLeftSubSubmenus + 'px !important;}';
                styleSheet += ulPath + '.vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
                styleSheet += "</style>";
                jQueryBuddha("head").append(styleSheet);
                /* remove tab-opened classes */
                jQueryBuddha(ulPath).find(".tab-opened").removeClass("tab-opened");
                jQueryBuddha(ulPath).find(".buddha-menu-item>a>.toggle-menu-btn").unbind("click.resizeSubmenus");
                jQueryBuddha(ulPath).find(".buddha-menu-item>a>.toggle-menu-btn").bind("click.resizeSubmenus", function () {
                    setSubmenuBoundries(jQueryBuddha(this).parent().parent());
                    setContactSubmenuBoundries(jQueryBuddha(this).parent().parent());
                });
                jQueryBuddha(ulPath).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").unbind("click.resizeTabbedSubmenu");
                jQueryBuddha(ulPath).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").bind("click.resizeTabbedSubmenu", function () {
                    if (jQueryBuddha(this).parent().parent().hasClass("mm-hovering")) {
                        setTabbedSubmenuBoundries(jQueryBuddha(this).parent().parent());
                    }
                });
                forceMobile = false;
            }
        }
        jQueryBuddha(".submenu-opened").show();
        addTouch();
        if (panelOpened) {
            jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").unbind("mouseenter.addMegaHoverClass");
            jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").bind("mouseenter.addMegaHoverClass", function () {
                jQueryBuddha(".mega-hover").removeClass("mega-hover");
                if (panelOpened) {
                    jQueryBuddha(this).addClass("mega-hover");
                }
            });
        } else {
            jQueryBuddha(".mega-hover").removeClass("mega-hover");
        }
    }

    function renderMobileMenuForce(ulPathCustom) {
        jQueryBuddha(".mega-hover").removeClass("mega-hover");
        jQueryBuddha(".buddha-menu-item.disabled").removeClass("disabled");
        jQueryBuddha(ulPathCustom).addClass("vertical-mega-menu").removeClass("horizontal-mega-menu");
        jQueryBuddha(ulPathCustom + " .toggle-menu-btn").show();
        jQueryBuddha(ulPathCustom).find("li.buddha-menu-item").off();
        jQueryBuddha(ulPathCustom).find("li.buddha-menu-item a").off();
        var iconDistance = parseInt(jQueryBuddha(ulPathCustom + ">li>a").css("font-size"));
        var totalPaddingLeft = parseInt(jQueryBuddha(ulPathCustom + ">li").css("padding-left")) + parseInt(jQueryBuddha(ulPathCustom + ">li>a").css("padding-left"));
        var paddingLeftSubSubmenus = totalPaddingLeft;
        if (totalPaddingLeft > 15) {
            paddingLeftSubSubmenus = 15;
        }
        var totalPaddingTop = parseInt(jQueryBuddha(ulPathCustom + ">li").css("padding-top")) + parseInt(jQueryBuddha(ulPathCustom + ">li>a").css("padding-top"));
        jQueryBuddha("#verticalMenuSpacing").remove();
        var styleSheet = '<style id="verticalMenuSpacing" type="text/css">';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:' + paddingLeftSubSubmenus + 'px !important;padding-right:' + paddingLeftSubSubmenus + 'px !important;}';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:' + paddingLeftSubSubmenus + 'px !important;padding-right:' + paddingLeftSubSubmenus + 'px !important;}';
        styleSheet += ulPathCustom + '.vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:' + totalPaddingLeft + 'px !important;padding-right:' + totalPaddingLeft + 'px !important;}';
        styleSheet += "</style>";
        jQueryBuddha("head").append(styleSheet);
        jQueryBuddha(ulPathCustom).find(".tab-opened").removeClass("tab-opened");
        jQueryBuddha(ulPathCustom).find(".buddha-menu-item>a>.toggle-menu-btn").unbind("click.resizeSubmenus");
        jQueryBuddha(ulPathCustom).find(".buddha-menu-item>a>.toggle-menu-btn").bind("click.resizeSubmenus", function () {
            setSubmenuBoundries(jQueryBuddha(this).parent().parent());
            setContactSubmenuBoundries(jQueryBuddha(this).parent().parent());
        });
        jQueryBuddha(ulPathCustom).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").unbind("click.resizeTabbedSubmenu");
        jQueryBuddha(ulPathCustom).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").bind("click.resizeTabbedSubmenu", function () {
            if (jQueryBuddha(this).parent().parent().hasClass("mm-hovering")) {
                setTabbedSubmenuBoundries(jQueryBuddha(this).parent().parent());
            }
        });
    }

    /* GENERATE MENU FUNCTIONS */
    function concatClasses(newClasses, oldClasses) {
        if (oldClasses != "") {
            classes = oldClasses.split(" ");
        } else {
            classes = [];
        }
        if (newClasses != undefined && newClasses != "") {
            newClasses = newClasses.split(" ");
            jQueryBuddha.each(newClasses, function (key, item) {
                if (jQueryBuddha.inArray(item, classes) == -1) {
                    classes[classes.length] = item;
                }
            });
        }
        return classes.join(" ");
    }

    function getSpecificClasses(classes) {
        var specificClasses = [];
        if (classes != undefined) {
            classes = classes.split(" ");
            var commonClasses = "";
            jQueryBuddha.each(classes, function (key, item) {
                if (item.indexOf("active") != -1 || item.indexOf("selected") != -1 || item.indexOf("current") != -1) {
                    specificClasses["active"] = item;
                } else if (item.indexOf("focus") != -1) {
                    specificClasses["focus"] = item;
                } else if (item.indexOf("first") != -1) {
                    specificClasses["first"] = item;
                } else if (item.indexOf("last") != -1) {
                    specificClasses["last"] = item;
                } else if (item.indexOf("buddha") == -1 && item.indexOf("dropdown") == -1 && item.indexOf("mm-subopen") == -1 && item.indexOf("hidden") == -1 && item.indexOf("hide") == -1) {
                    commonClasses += " " + item;
                }
            });
            specificClasses["common"] = commonClasses.trim();
        }
        return specificClasses;
    }

    /* used to generate submenus */
    function addSubMenus(parentItem, isSubTree) {
        var submenuHtml = "";
        if (parentItem.items != undefined && parentItem.items.length > 0) {
            if (parentItem.type == "link-list-image") {
                submenuHtml += "<ul class=\"mm-product-list\">";
                jQueryBuddha.each(parentItem.items, function (pos, subitem) {
                    var href = (subitem.id != undefined && schemaLinksJSON[subitem.link] && schemaLinksJSON[subitem.link][subitem.id]) ? schemaLinksJSON[subitem.link][subitem.id] : schemaLinksJSON[subitem.link];
                    var useOnClick = "";
                    if (window.self == window.top || (window.self !== window.top && window.name == "mega-menu-iframe")) {
                        useOnClick = "onclick=\"return toggleSubmenu(this)\"";
                    }
                    if (subitem.link == "product" || subitem.link == "collection" || subitem.link == "article") {
                        var image = "";
                        if (subitem.link == "product" && productImages[subitem.id] != undefined && productImages[subitem.id].indexOf("no-image") == -1) {
                            image = "<div class=\"mm-list-image\"><a data-href=\"" + href + "\" href=\"" + href + "\" " + useOnClick + "\"><img src=\"" + productImages[subitem.id] + "\"></a></div>";
                        } else if (subitem.link == "collection" && collectionImages[subitem.id] != undefined && collectionImages[subitem.id].indexOf("no-image") == -1) {
                            image = "<div class=\"mm-list-image\"><a data-href=\"" + href + "\" href=\"" + href + "\" " + useOnClick + "\"><img src=\"" + collectionImages[subitem.id] + "\"></a></div>";
                            "<div class=\"mm-list-image\"><img src=\"" + collectionImages[subitem.id] + "\"></div>";
                        } else if (subitem.image != undefined) {
                            if (subitem.link == "article" && subitem.image.indexOf("/articles/") !== -1 && subitem.image.indexOf("_240x") == -1) {
                                subitem.image = subitem.image.replace(".jpg", "_240x.jpg").replace(".png", "_240x.png");
                            }
                            image = "<div class=\"mm-list-image\"><a data-href=\"" + href + "\" href=\"" + href + "\" " + useOnClick + "\"><img src=\"" + subitem.image + "\"></a></div>";
                        } else {
                            image = "<div class=\"mm-list-image\"></div>";
                        }
                        var listInfo = "";
                        if (jQueryBuddha.trim(subitem.name) != "") {
                            listInfo = "<div class=\"mm-list-info\"><a data-href=\"" + href + "\" class=\"mm-product-name\" href=\"" + href + "\">" + subitem.name.replace(/&quot;/g, '"') + "</a><br>";
                        }
                        if (subitem.link == "product" && subitem.id != undefined && prices[subitem.id] != undefined) {
                            listInfo += "<div class=\"mega-menu-prices\">" + prices[subitem.id] + "</div>";
                        }
                        submenuHtml += "<li>" + image + listInfo + "</div>";
                    }
                    submenuHtml += "</li>";
                });
                submenuHtml += "</ul>";
            } else {
                var subMenuType = (parentItem.type != undefined) ? " " + parentItem.type : "";
                submenuHtml += "<ul class=\"mm-submenu" + subMenuType + "\">";
                jQueryBuddha.each(parentItem.items, function (pos, subitem) {
                    if (subitem.link == "no-link") {
                        var dataHref = "no-link";
                        var href = "#";
                    } else if (subitem.link == "http") {
                        var dataHref = subitem.http;
                        var href = subitem.http;
                    } else {
                        var dataHref = (subitem.id != undefined && schemaLinksJSON[subitem.link] && schemaLinksJSON[subitem.link][subitem.id]) ? schemaLinksJSON[subitem.link][subitem.id] : schemaLinksJSON[subitem.link];
                        var href = (subitem.id != undefined && schemaLinksJSON[subitem.link] && schemaLinksJSON[subitem.link][subitem.id]) ? schemaLinksJSON[subitem.link][subitem.id] : schemaLinksJSON[subitem.link];
                    }
                    var useOnClick = "";
                    if (window.self == window.top || (window.self !== window.top && window.name == "mega-menu-iframe")) {
                        useOnClick = "onclick=\"return toggleSubmenu(this)\"";
                    }
                    if (parentItem.type == "simple") {
                        if (subitem.link == "best-sellers") {
                            submenuHtml += "<li><div class=\"mega-menu-item-container\"><div class=\"mm-list-name\"><span>" + subitem.name.replace(/&quot;/g, '"') + "</span></div>" + bestSellersHTML + "</div>";
                        } else if (subitem.link == "newest-products") {
                            submenuHtml += "<li><div class=\"mega-menu-item-container\"><div class=\"mm-list-name\"><span>" + subitem.name.replace(/&quot;/g, '"') + "</span></div>" + newestProductsHTML + "</div>";
                        } else if (subitem.link == "link-list") {
                            subitem.type = "link-list";
                            var linkList = addSubMenus(subitem);
                            submenuHtml += "<li><div class=\"mega-menu-item-container\"><div class=\"mm-list-name\"><span>" + subitem.name.replace(/&quot;/g, '"') + "</span></div>" + linkList + "</div>";
                        } else if (subitem.link == "link-list-image") {
                            subitem.type = "link-list-image";
                            var linkListImage = addSubMenus(subitem);
                            submenuHtml += "<li><div class=\"mega-menu-item-container\"><div class=\"mm-list-name\"><span class=\"name\">" + subitem.name.replace(/&quot;/g, '"') + "</span></div>" + linkListImage + "</div>";
                        } else {
                            var image = "";
                            if (subitem.link == "product" && productImages[subitem.id] != undefined && productImages[subitem.id].indexOf("no-image") == -1) {
                                image = "<div class=\"mm-image-container\"><div class=\"mm-image\"><a data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\"><img src=\"" + productImages[subitem.id] + "\"></a></div></div>";
                            } else if (subitem.link == "collection" && collectionImages[subitem.id] != undefined && collectionImages[subitem.id].indexOf("no-image") == -1) {
                                image = "<div class=\"mm-image-container\"><div class=\"mm-image\"><a data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\"><img src=\"" + collectionImages[subitem.id] + "\"></a></div></div>";
                            } else if (subitem.image != undefined) {
                                if (subitem.link == "article" && subitem.image.indexOf("/articles/") !== -1 && subitem.image.indexOf("_240x") == -1) {
                                    subitem.image = subitem.image.replace(".jpg", "_240x.jpg").replace(".png", "_240x.png");
                                }
                                image = "<div class=\"mm-image-container\"><div class=\"mm-image\"><a data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\"><img src=\"" + subitem.image + "\"></a></div></div>";
                            }
                            var pricesHTML = "";
                            if (subitem.link == "product" && subitem.id != undefined && prices[subitem.id] != undefined) {
                                pricesHTML = "<div class=\"mega-menu-prices\">" + prices[subitem.id] + "</div>";
                            }
                            var nameHtml = "";
                            if (jQueryBuddha.trim(subitem.name) != "") {
                                nameHtml += "<a class=\"mm-featured-title\" data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\">" + subitem.name.replace(/&quot;/g, '"') + "</a>";
                            }
                            submenuHtml += "<li><div class=\"mega-menu-item-container\">" + image + nameHtml + pricesHTML + "</div>";
                        }
                    } else if (parentItem.type == "tree" || isSubTree) {
                        submenuHtml += "<li data-href=\"" + dataHref + "\" " + useOnClick + "><a data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\">" + subitem.name.replace(/&quot;/g, '"') + "</a>";
                    } else {
                        submenuHtml += "<li><a data-href=\"" + dataHref + "\" href=\"" + href + "\" " + useOnClick + " aria-label=\"" + jQueryBuddha("<div/>").html(subitem.name.replace(/&quot;/g, '"')).text() + "\">" + subitem.name.replace(/&quot;/g, '"') + "</a>";
                    }
                    /* set the simple menu type for each tab child */
                    if (parentItem.type == "tabbed") {
                        subitem.type = "simple";
                    }
                    if (subitem.link != "link-list" && subitem.link != "link-list-image") {
                        if (parentItem.type == "tree" || isSubTree) {
                            submenuHtml += addSubMenus(subitem, true);
                        } else {
                            submenuHtml += addSubMenus(subitem, false);
                        }
                    }
                    submenuHtml += "</li>";
                });
                submenuHtml += "</ul>";
            }
        }
        return submenuHtml;
    }

    /* TOOLTIP FUNCTIONS */
    function undoAction() { /*if (getParameterByName("buddha_preview")!==null) {*/
        currentUndo = undo[undo.length - 1];
        if (currentUndo.action == "design") {
            redo.unshift(currentUndo);
            schemaDesignJSON.splice(-1, 1);
            undo.splice(-1, 1);
            recreateDesign();
        }
        reinitMenus();
        /* if no mega menu present, remove theme scripts */
        if (jQueryBuddha(".buddha-menu-item").length == 0) {
            jQueryBuddha("#themeScript").remove();
        }
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        } else if (previewPanelLoaded) {
            document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        }
        /*}*/
    }

    function redoAction() { /*if (getParameterByName("buddha_preview")!==null) {*/
        tempMenuObject = {};
        jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent");
        action = redo[0].action;
        if (action == "design") {
            schemaDesignJSON.push(redo[0]);
            undo.push(redo[0]);
            recreateDesign();
        }
        redo.splice(0, 1);
        reinitMenus();
        /* if no mega menu present, remove theme scripts */
        if (jQueryBuddha(".buddha-menu-item").length == 0) {
            jQueryBuddha("#themeScript").remove();
        }
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        } else if (previewPanelLoaded) {
            document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        }
        /*}*/
    }

    function clearAction() { /*if (getParameterByName("buddha_preview")!==null) {*/
        jQueryBuddha.each(undo, function (key, item) {
            undoAction();
        });
        redo = [];
        /* if no mega menu present, remove theme scripts */
        if (jQueryBuddha(".buddha-menu-item").length == 0) {
            jQueryBuddha("#themeScript").remove();
        }
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        } else if (previewPanelLoaded) {
            document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        }
        /*}*/
    }

    /* DESIGN */
    /* .vertical-mega-menu li a ,.vertical-mega-menu li.fa */
    /* var propSettings = {"background_color":{element:".horizontal-mega-menu ul.mm-submenu, .horizontal-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu li,.horizontal-mega-menu li.buddha-menu-item:hover ul.mm-submenu.simple li:hover, .horizontal-mega-menu li.buddha-menu-item.mega-hover ul.mm-submenu.simple li:hover",attribute:"background"},"background_hover_color":{element:".horizontal-mega-menu ul.mm-submenu.tree li:hover, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened",attribute:"background"},"text_color":{element:".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li,.horizontal-mega-menu ul.mm-submenu h3",attribute:"color"},"link_color":{element:".horizontal-mega-menu ul.mm-submenu li a,.horizontal-mega-menu ul.mm-submenu li.fa",attribute:"color"},"link_hover_color":{element:".horizontal-mega-menu ul.mm-submenu.tree li:hover>a, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .horizontal-mega-menu ul.mm-submenu li a:hover, .horizontal-mega-menu ul.mm-submenu.tree li.fa:hover:before, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover.fa:before, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened.fa:before",attribute:"color"},"font_size":{element:".horizontal-mega-menu ul.mm-submenu",attribute:"font-size"},"button_background_color":{element:"ul.mm-submenu li.mm-contact-column button",attribute:"background"},"button_background_hover_color":{element:"ul.mm-submenu li.mm-contact-column button:hover",attribute:"background"},"button_text_color":{element:"ul.mm-submenu li.mm-contact-column button",attribute:"color"},"button_text_hover_color":{element:"ul.mm-submenu li.mm-contact-column button:hover",attribute:"color"},"vertical_text_color":{element:".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu h3",attribute:"color"},"vertical_link_color":{element:".vertical-mega-menu ul.mm-submenu li a, .vertical-mega-menu ul.mm-submenu>li>a>.toggle-menu-btn>.fa",attribute:"color"},"vertical_link_hover_color":{element:".vertical-mega-menu ul.mm-submenu>li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a, .vertical-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .vertical-mega-menu ul.mm-submenu li a:hover, .vertical-mega-menu ul.mm-submenu.tree li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu li.mm-hovering>a",attribute:"color"},"vertical_font_size":{element:".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu.simple>li ul.mm-product-list>li .mm-list-info",attribute:"font-size"!!}; */
    var propSettings = {
        "background_color": {
            element: ".horizontal-mega-menu ul.mm-submenu, .horizontal-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu li,.horizontal-mega-menu li.buddha-menu-item:hover ul.mm-submenu.simple li:hover, .horizontal-mega-menu li.buddha-menu-item.mega-hover ul.mm-submenu.simple li:hover",
            attribute: "background"
        },
        "background_hover_color": {
            element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened",
            attribute: "background"
        },
        "text_color": {
            element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li,.horizontal-mega-menu ul.mm-submenu h3",
            attribute: "color"
        },
        "link_color": {
            element: ".horizontal-mega-menu ul.mm-submenu li a,.horizontal-mega-menu ul.mm-submenu li.fa, .horizontal-mega-menu ul.mm-submenu.tree li:hover>a[data-href=\"no-link\"], .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a[data-href=\"no-link\"], .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a[data-href=\"no-link\"], .horizontal-mega-menu ul.mm-submenu li a[data-href=\"no-link\"]:hover",
            attribute: "color"
        },
        "link_hover_color": {
            element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover>a, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .horizontal-mega-menu ul.mm-submenu li a:hover, .horizontal-mega-menu ul.mm-submenu.tree li.fa:hover:before, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover.fa:before, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened.fa:before",
            attribute: "color"
        },
        "font_size": {
            element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu a",
            attribute: "font-size"
        },
        "button_background_color": {element: "ul.mm-submenu li.mm-contact-column button", attribute: "background"},
        "button_background_hover_color": {
            element: "ul.mm-submenu li.mm-contact-column button:hover",
            attribute: "background"
        },
        "button_text_color": {element: "ul.mm-submenu li.mm-contact-column button", attribute: "color"},
        "button_text_hover_color": {element: "ul.mm-submenu li.mm-contact-column button:hover", attribute: "color"},
        "vertical_text_color": {
            element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu h3",
            attribute: "color"
        },
        "vertical_link_color": {
            element: ".vertical-mega-menu ul.mm-submenu li a, .vertical-mega-menu ul.mm-submenu>li>a>.toggle-menu-btn>.fa",
            attribute: "color"
        },
        "vertical_link_hover_color": {
            element: ".vertical-mega-menu ul.mm-submenu>li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a, .vertical-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .vertical-mega-menu ul.mm-submenu li a:hover, .vertical-mega-menu ul.mm-submenu.tree li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu li.mm-hovering>a",
            attribute: "color"
        },
        "vertical_font_size": {
            element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu.simple>li ul.mm-product-list>li .mm-list-info",
            attribute: "font-size"
        },
        "font_family": {
            element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li a,ul.mm-submenu a,.vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu li a,ul.mm-submenu li.mm-contact-column h3",
            attribute: "font-family"
        }
    };

    function liveDesign(setting, value) { /*if (getParameterByName("buddha_preview")!==null) {*/
        /* jQueryBuddha(propSettings[setting].element).css(propSettings[setting].attribute,value); */
        jQueryBuddha("#tempStyle").remove();
        var styleSheet = '<style id="tempStyle" type="text/css">';
        styleSheet += propSettings[setting].element + '{' + propSettings[setting].attribute + ':' + value + ' !important; }';
        styleSheet += "</style>";
        jQueryBuddha("head").append(styleSheet);
        /*}*/
    }

    var reinitAfterDesignTimeout;

    function updateDesign(setting, value) { /*if (getParameterByName("buddha_preview")!==null) {*/
        jQueryBuddha("#tempStyle").remove();
        item = {};
        item.action = "design";
        item.setting = setting;
        item.value = value;
        defaultFontSelected = false;
        if (item.setting == "font_family" && item.value == "Default") {
            defaultFontSelected = true;
        }
        schemaDesignJSON.push(item);
        undo.push(item);
        /* jQueryBuddha(propSettings[setting].element).css(propSettings[setting].attribute,""); */
        recreateDesign();
        if (setting == "font_size" || setting == "font_family") {
            jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function () {
                if (parseInt(jQueryBuddha(this).css("top")) > 0) {
                    setSubmenuBoundries(jQueryBuddha(this).parent());
                    setContactSubmenuBoundries(jQueryBuddha(this).parent());
                    if (jQueryBuddha(this).hasClass("tabbed")) {
                        setTabbedSubmenuBoundries(jQueryBuddha(this).find(">li.tab-opened"));
                    }
                }
            });
        }
        clearTimeout(reinitAfterDesignTimeout);
        reinitAfterDesignTimeout = setTimeout(function () {
            reinitMenus();
        }, 100);
        redo = [];
        if (window.self !== window.top) {
            var preview = parent;
            if (typeof parent.postMessage === "undefined") {
                preview = top;
            }
            preview.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*");
        } else if (previewPanelLoaded) {
            document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        }
        /*}*/
    }

    function recreateDesign() {
        jQueryBuddha("#previewStyle").remove();
        var styleSheet = '<style id="previewStyle" type="text/css">';
        jQueryBuddha.each(schemaDesignJSON, function (key, item) {
            if (item.action == "design" && propSettings[item.setting] != undefined) {
                if (item.setting == "font_size") {
                    fontSize = parseInt(item.value);
                } else if (item.setting == "font_family") {
                    jQueryBuddha("#googleFontDesign").remove();
                    if (item.value != "Default" && item.value != "Arial" && item.value != "Georgia" && item.value != "Tahoma" && item.value != "Trebuchet MS" && item.value != "Times New Roman" && item.value != "Verdana") {
                        var googleStyleSheet = '<link href="//fonts.googleapis.com/css?family=' + item.value + '" id="googleFontDesign" rel="stylesheet" type="text/css">';
                        jQueryBuddha("head").append(googleStyleSheet);
                    }
                }
                if (item.setting != "font_family" || (item.setting == "font_family" && !defaultFontSelected && item.value != "Default")) {
                    styleSheet += propSettings[item.setting].element + '{' + propSettings[item.setting].attribute + ':' + item.value + ' !important; }';
                }
            } else if (item.action == "design" && item.setting == "tree_sub_direction") {
                setTreeDirection = item.value;
                jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu.tree").each(function () {
                    setSubmenuBoundries(jQueryBuddha(this).parent());
                });
            }
        });
        styleSheet += "</style>";
        jQueryBuddha("head").append(styleSheet);
    }

    function designPanelOpened() {
        panelOpened = true;
        if (jQueryBuddha("ul.mm-submenu.tabbed").length > 0) {
            jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tabbed").each(function () {
                jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover");
                return false;
            });
        } else if (jQueryBuddha("ul.mm-submenu.simple").length > 0) {
            jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.simple").each(function () {
                jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover");
                return false;
            });
        } else if (jQueryBuddha("ul.mm-submenu.contact").length > 0) {
            jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.contact").each(function () {
                jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover");
                return false;
            });
        } else if (jQueryBuddha("ul.mm-submenu.tree").length > 0) {
            jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tree").each(function () {
                jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover");
                return false;
            });
        }
        setSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover"));
        setContactSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover"));
        if (jQueryBuddha("ul.mm-submenu.tabbed").length > 0) {
            setTabbedSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover>ul.mm-submenu.tabbed>li:first-child"));
        }
        jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").hover(function () {
            jQueryBuddha(".mega-hover").removeClass("mega-hover");
            if (panelOpened) {
                jQueryBuddha(this).addClass("mega-hover");
            }
        });
    }

    function designPanelClosed() {
        panelOpened = false;
        jQueryBuddha(".mega-hover").removeClass("mega-hover");
    }

    window.addEventListener("message", function (event) { /* if (window.self!==window.top) { */
        if (~event.origin.indexOf("megamenu.buddhaapps.com")) {
            if (typeof event.data == "object") {
                if (event.data[0] == "applyMegaMenu") {
                    window[event.data[0]](event.data[1]);
                } else if (jQueryBuddha.inArray(event.data[0], ["undoAction", "redoAction", "clearAction", "initSaving", "designPanelOpened", "designPanelClosed"]) !== -1) {
                    window[event.data[0]]();
                } else if (jQueryBuddha.inArray(event.data[0], ["liveDesign", "updateDesign"]) !== -1) {
                    window[event.data[0]](event.data[1], event.data[2]);
                }
            } else {
                window[event.data]();
            }
        }
    });

    /* PAGE UNLOADING FUNCTIONS */
    function initSaving() {
        jQueryBuddha(".buddha-loader-wrapper").show();
        jQueryBuddha(".buddha-loader-text").show();
        saving = true;
    }

    /* STORE FRONT FUNCTIONS */

    /* used to open/close the vertical menu */
    function toggleSubmenu(element) {
    }

    function mmGoToPage(element) {
        console.log('ok')
        console.log(element.nextSibling)
        if (element.nextSibling.getAttribute("style") == "display:none!important") {
            element.nextSibling.setAttribute("style", "display:block!important");
        }
        else {
            element.nextSibling.setAttribute("style", "display:none!important");
        }
    }

    /* set the boundries of the submenus */
    function setSubmenuBoundries(li) {
        var bodyWidth = jQueryBuddha("body").width();
        var headerOffset = 1000;
        if (jQueryBuddha(li).find(">ul.mm-submenu.simple").length > 0 || jQueryBuddha(li).find(">ul.mm-submenu.tabbed").length > 0) {
            if (jQueryBuddha(li).closest(".horizontal-mega-menu").length > 0) { /* get header offset */
                /* IF YOU REMOVE .parent(). IT WILL AFFECT THE MENU FROM alex-woo-jewelry.myshopify.com */
                jQueryBuddha(li).parent().parents().each(function () {
                    var offsetLeft = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left"));
                    if (offsetLeft < headerOffset && offsetLeft > 0) {
                        headerOffset = offsetLeft;
                    }
                });
                if (headerOffset == 1000 || bodyWidth <= 768) {
                    headerOffset = 0;
                }
                /* if (customHeaderOffset && customHeaderOffset<bodyWidth) { headerOffset = (bodyWidth-customHeaderOffset)/2; } MADE THE BELOW MODIFICATION FOR CLIENT https://www.mwfundraising.com/ */
                if (customHeaderOffset) {
                    if (customHeaderOffset < bodyWidth) {
                        headerOffset = (bodyWidth - customHeaderOffset) / 2;
                    } else {
                        headerOffset = 0;
                    }
                }
                /* set menu width */
                if (jQueryBuddha(li).find(">ul.mm-submenu.simple").length > 0) {
                    var submenu = jQueryBuddha(li).find(">ul.mm-submenu.simple");
                } else {
                    var submenu = jQueryBuddha(li).find(">ul.mm-submenu.tabbed");
                }
                submenu.css({"width": "auto", "left": "auto", "right": "auto"});
                /*submenu.removeAttr("style"); submenu.find(">li").removeAttr("style");*/
                if (headerOffset * 2 > bodyWidth) {
                    headerOffset = 0;
                }
                var headerWidth = bodyWidth - headerOffset * 2;
                /*if (getParameterByName("buddha_preview")!==null) { headerWidth -= 320; }*/
                var itemsPerRow = 5;
                if (headerWidth >= 1020) { /* submenu.attr("columns",5).css("width",headerWidth+"px"); */
                    var style = submenu.attr("columns", 5).attr("style");
                    style += "width:" + headerWidth + "px !important;";
                    submenu.attr("style", style);
                    itemsPerRow = 5;
                } else if (headerWidth >= 816) {
                    var style = submenu.attr("columns", 4).attr("style");
                    style += "width:" + headerWidth + "px !important;";
                    submenu.attr("style", style);
                    itemsPerRow = 4;
                } else if (headerWidth >= 612) {
                    var style = submenu.attr("columns", 3).attr("style");
                    style += "width:" + headerWidth + "px !important;";
                    submenu.attr("style", style);
                    itemsPerRow = 3;
                } else {
                    var style = submenu.attr("columns", 2).attr("style");
                    style += "width:" + headerWidth + "px !important;";
                    submenu.attr("style", style);
                    itemsPerRow = 2;
                }
                if (jQueryBuddha(li).find(">ul.mm-submenu.tabbed").length > 0) {
                    --itemsPerRow;
                }
                /* set simple submenu boundry */
                var offsetLeft = jQueryBuddha(li).offset().left + jQueryBuddha(li).outerWidth() / 2;
                if (offsetLeft < (bodyWidth / 2)) {
                    var left = bodyWidth - (bodyWidth - jQueryBuddha(li).offset().left) - headerOffset;
                    submenu.css("left", -left + "px");
                } else {
                    var right = bodyWidth - jQueryBuddha(li).offset().left - jQueryBuddha(li).outerWidth() - headerOffset;
                    submenu.css("right", -right + "px");
                }
                /* set min height for each element */
                jQueryBuddha(li).find("ul.mm-submenu.simple>li").removeAttr("style");
                jQueryBuddha(li).find(".mm-list-name").removeAttr("style");
                /* if simple menu */
                if (jQueryBuddha(li).find(">ul.mm-submenu.simple").length > 0) {
                    var rowMinHeight = 0;
                    var mmListNameHeight = 0;
                    jQueryBuddha(li).find("ul.mm-submenu.simple>li").each(function (i, item) {
                        if (i % itemsPerRow == 0) {
                            rowMinHeight = 0;
                            mmListNameHeight = 0;
                        }
                        if (jQueryBuddha(this).find(".mm-list-name").length > 0) {
                            if (jQueryBuddha(this).find(".mm-list-name").height() > mmListNameHeight) {
                                mmListNameHeight = jQueryBuddha(this).find(".mm-list-name").height();
                                jQueryBuddha(this).find(".mm-list-name").css("height", mmListNameHeight);
                                var previousItems = i;
                                if (previousItems % itemsPerRow != 0) {
                                    while (previousItems % itemsPerRow != 0) {
                                        jQueryBuddha(li).find("ul.mm-submenu.simple").find(">li:nth-child(" + previousItems + ")").find(".mm-list-name").css("height", mmListNameHeight);
                                        previousItems--;
                                    }
                                }
                            } else {
                                jQueryBuddha(this).find(".mm-list-name").css("height", mmListNameHeight);
                            }
                        }
                        if (jQueryBuddha(this).outerHeight() > rowMinHeight) {
                            if (fontSize <= 14) {
                                fontSize = 8;
                            } else if (fontSize > 14 && fontSize <= 18) {
                                fontSize += 6;
                            } else if (fontSize > 18 && fontSize <= 20) {
                                fontSize += 10;
                            }
                            rowMinHeight = jQueryBuddha(this).outerHeight() + fontSize;
                            jQueryBuddha(this).css("min-height", rowMinHeight);
                            var previousItems = i;
                            if (previousItems % itemsPerRow != 0) {
                                while (previousItems % itemsPerRow != 0) {
                                    jQueryBuddha(li).find("ul.mm-submenu.simple").find(">li:nth-child(" + previousItems + ")").css("min-height", rowMinHeight);
                                    previousItems--;
                                }
                            }
                        } else {
                            jQueryBuddha(this).css("min-height", rowMinHeight);
                        }
                    });
                    /* if tabbed menu */
                } else {
                    jQueryBuddha(li).find("ul.mm-submenu.tabbed>li").each(function (i, tab) {
                        var rowMinHeight = 0;
                        var mmListNameHeight = 0;
                        jQueryBuddha(tab).find("ul.mm-submenu.simple>li").each(function (j, item) {
                            if (j % itemsPerRow == 0) {
                                rowMinHeight = 0;
                                mmListNameHeight = 0;
                            }
                            if (jQueryBuddha(this).find(".mm-list-name").length > 0) {
                                if (jQueryBuddha(this).find(".mm-list-name").height() > mmListNameHeight) {
                                    mmListNameHeight = jQueryBuddha(this).find(".mm-list-name").height();
                                    jQueryBuddha(this).find(".mm-list-name").css("height", mmListNameHeight);
                                    var previousItems = j;
                                    if (previousItems % itemsPerRow != 0) {
                                        while (previousItems % itemsPerRow != 0) {
                                            jQueryBuddha(this).parent().find(">li:nth-child(" + previousItems + ")").find(".mm-list-name").css("height", mmListNameHeight);
                                            previousItems--;
                                        }
                                    }
                                } else {
                                    jQueryBuddha(this).find(".mm-list-name").css("height", mmListNameHeight);
                                }
                            }
                            if (jQueryBuddha(this).outerHeight() > rowMinHeight) {
                                if (fontSize <= 14) {
                                    fontSize = 6;
                                } else if (fontSize > 14 && fontSize <= 18) {
                                    fontSize += 2;
                                } else if (fontSize > 18 && fontSize <= 20) {
                                    fontSize += 6;
                                }
                                rowMinHeight = jQueryBuddha(this).outerHeight() + fontSize;
                                jQueryBuddha(this).css("min-height", rowMinHeight);
                                var previousItems = j;
                                if (previousItems % itemsPerRow != 0) {
                                    while (previousItems % itemsPerRow != 0) {
                                        jQueryBuddha(tab).find(">ul.mm-submenu.simple").find(">li:nth-child(" + previousItems + ")").css("min-height", rowMinHeight);
                                        previousItems--;
                                    }
                                }
                            } else {
                                jQueryBuddha(this).css("min-height", rowMinHeight);
                            }
                        });
                    });
                    /* add arrows */
                    jQueryBuddha(li).find("ul.mm-submenu.tabbed>li").addClass("fa fa-angle-right");
                }
            } else {
                jQueryBuddha(li).find("ul.mm-submenu.tabbed").css({"left": "auto", "right": "auto"});
                var currentStyle = jQueryBuddha(li).find("ul.mm-submenu.tabbed").attr("style");
                var newStyle = "";
                if (currentStyle != undefined) {
                    newStyle += currentStyle + ";height:auto !important;width:auto !important";
                } else {
                    newStyle += "height:auto !important;width:auto !important";
                }
                jQueryBuddha(li).find("ul.mm-submenu.tabbed").attr("style", newStyle);
                jQueryBuddha(li).find("ul.mm-submenu.simple").css({"left": "auto", "right": "auto"});
                var currentStyle = jQueryBuddha(li).find("ul.mm-submenu.simple").attr("style");
                var newStyle = "";
                if (currentStyle != undefined) {
                    newStyle += currentStyle + ";width:auto !important";
                } else {
                    newStyle += ";width:auto !important";
                }
                jQueryBuddha(li).find("ul.mm-submenu.simple").attr("style", newStyle);
                jQueryBuddha(li).find("ul.mm-submenu.simple>li").removeAttr("style");
                if (jQueryBuddha(li).width() >= 700) {
                    jQueryBuddha(li).find("ul.mm-submenu.simple").attr("columns", 3);
                    jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2);
                } else if (jQueryBuddha(li).width() >= 500) {
                    jQueryBuddha(li).find("ul.mm-submenu.simple").attr("columns", 2);
                    jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2);
                } else {
                    jQueryBuddha(li).find("ul.mm-submenu.simple").removeAttr("columns");
                    jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").removeAttr("columns");
                }
            }
        } else if (jQueryBuddha(li).find("ul.mm-submenu.tree").length > 0) {
            jQueryBuddha(li).find("ul.mm-submenu").removeAttr("style");
            /* tree direction var start if(setTreeDirection == "set_tree_right") { jQueryBuddha(li).find("ul.mm-submenu").removeClass("tree-open-left"); jQueryBuddha(li).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"); jQueryBuddha(li).find("ul.mm-submenu.tree li").each(function(){ if (jQueryBuddha(this).find("ul.mm-submenu").length>0) { jQueryBuddha(this).addClass("fa fa-angle-right"); } }); } else if(setTreeDirection == "set_tree_left") { jQueryBuddha(li).find("ul.mm-submenu").addClass("tree-open-left"); jQueryBuddha(li).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"); jQueryBuddha(li).find("ul.mm-submenu.tree li").each(function(){ if (jQueryBuddha(this).find("ul.mm-submenu").length>0) { jQueryBuddha(this).addClass("fa fa-angle-left"); } }); } else if(setTreeDirection == "set_tree_auto") { tree direction var end */
            var offsetLeft = jQueryBuddha(li).offset().left + jQueryBuddha(li).outerWidth() / 2;
            if ((offsetLeft < (bodyWidth / 2) && (setTreeDirection == "set_tree_auto" || setTreeDirection == undefined)) || setTreeDirection == "set_tree_right") {
                jQueryBuddha(li).find("ul.mm-submenu").removeClass("tree-open-left");
                jQueryBuddha(li).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left");
                jQueryBuddha(li).find("ul.mm-submenu.tree li").each(function () {
                    if (jQueryBuddha(this).find("ul.mm-submenu").length > 0) {
                        jQueryBuddha(this).addClass("fa fa-angle-right");
                    }
                });
            } else {
                jQueryBuddha(li).find("ul.mm-submenu").addClass("tree-open-left");
                jQueryBuddha(li).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left");
                jQueryBuddha(li).find("ul.mm-submenu.tree li").each(function () {
                    if (jQueryBuddha(this).find("ul.mm-submenu").length > 0) {
                        jQueryBuddha(this).addClass("fa fa-angle-left");
                    }
                });
            }
        }
    }

    /* when you hover over the tabs of the tabbed submenu, open their submenu + readjust the height of the tabbed submenu */
    function setTabbedSubmenuBoundries(li) {
        if (jQueryBuddha(li).closest(".horizontal-mega-menu").length > 0) { /* reset the boundries of the simple submenu, because it wasn"t visible before */
            if (allowMainMenuRecalibration) {
                setSubmenuBoundries(jQueryBuddha(li).closest(".buddha-menu-item"));
            }
            /* set the tabbed submenu height */
            var currentLi = jQueryBuddha(li).parent().find(">li").index(jQueryBuddha(li));
            if (jQueryBuddha(li).find(">ul.mm-submenu").length > 0) {
                jQueryBuddha(li).find(">ul.mm-submenu").removeAttr("style");
                var tabbedSubmenuHeight = jQueryBuddha(li).find(">ul.mm-submenu").outerHeight();
                var tabsHeight = 0;
                jQueryBuddha(li).parent().find(">li").each(function () {
                    tabsHeight += jQueryBuddha(this).outerHeight();
                });
                if (tabsHeight > tabbedSubmenuHeight) { /* jQueryBuddha(li).parent().css("height",tabsHeight+"px"); */
                    var currentStyle = jQueryBuddha(li).parent().attr("style");
                    var newStyle = "";
                    if (currentStyle != undefined) {
                        newStyle += currentStyle + ";height:" + tabsHeight + "px !important";
                    } else {
                        newStyle += "height:" + tabsHeight + "px !important";
                    }
                    jQueryBuddha(li).parent().attr("style", newStyle);
                    /* jQueryBuddha(li).find(">ul.mm-submenu").css("height",tabsHeight+"px"); */
                    var currentStyle = jQueryBuddha(li).find(">ul.mm-submenu").attr("style");
                    var newStyle = "";
                    if (currentStyle != undefined) {
                        newStyle += currentStyle + ";height:" + tabsHeight + "px !important";
                    } else {
                        newStyle += "height:" + tabsHeight + "px !important";
                    }
                    jQueryBuddha(li).find(">ul.mm-submenu").attr("style", newStyle);
                } else { /* jQueryBuddha(li).parent().css("height",tabbedSubmenuHeight+"px"); */
                    var currentStyle = jQueryBuddha(li).parent().attr("style");
                    var newStyle = "";
                    if (currentStyle != undefined) {
                        newStyle += currentStyle + ";height:" + tabbedSubmenuHeight + "px !important";
                    } else {
                        newStyle += "height:" + tabbedSubmenuHeight + "px !important";
                    }
                    jQueryBuddha(li).parent().attr("style", newStyle);
                }
            } else {
                jQueryBuddha(li).parent().css("height", "auto");
            }
            /* set the simple submenu top */
            var top = jQueryBuddha(li).parent().find(">li:nth-child(" + (currentLi + 1) + ")").position().top;
            var currentStyle = jQueryBuddha(li).find(">ul.mm-submenu").attr("style");
            var newStyle = "";
            if (currentStyle != undefined) {
                newStyle += currentStyle + ";top:-" + top + "px !important";
            } else {
                newStyle += "top:-" + top + "px !important";
            }
            jQueryBuddha(li).find(">ul.mm-submenu").attr("style", newStyle);
        } else {
            jQueryBuddha(li).closest(".vertical-mega-menu").find(".tab-opened").removeClass("tab-opened");
            /* jQueryBuddha(".tab-opened").removeClass("tab-opened"); */
        }
    }

    /* set the boundries of the contact submenus */
    function setContactSubmenuBoundries(li) {
        var bodyWidth = jQueryBuddha("body").width();
        var headerOffset = 1000;
        if (jQueryBuddha(li).find(">ul.mm-submenu.mm-contact").length > 0 && jQueryBuddha(li).closest(".horizontal-mega-menu").length > 0) { /* get header offset */
            jQueryBuddha(li).parent().parents().each(function () {
                var offsetLeft = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left"));
                if (offsetLeft < headerOffset && offsetLeft > 0) {
                    headerOffset = offsetLeft;
                }
            });
            if (headerOffset == 1000) {
                headerOffset = 0;
            }
            if (headerOffset * 2 > bodyWidth) {
                headerOffset = 0;
            }
            if (customHeaderOffset) {
                if (customHeaderOffset < bodyWidth) {
                    headerOffset = (bodyWidth - customHeaderOffset) / 2;
                } else {
                    headerOffset = 0;
                }
            }
            /* set menu width */
            var submenu = jQueryBuddha(li).find(">ul.mm-submenu.mm-contact");
            var headerWidth = bodyWidth - headerOffset * 2;
            /*if (getParameterByName("buddha_preview")!==null) { headerWidth -= 320; }*/
            submenu.css({"width": headerWidth + "px", "left": "auto", "right": "auto"});
            /* set simple submenu boundry */
            var offsetLeft = jQueryBuddha(li).offset().left + jQueryBuddha(li).outerWidth() / 2;
            if (offsetLeft < (bodyWidth / 2)) {
                var left = bodyWidth - (bodyWidth - jQueryBuddha(li).offset().left) - headerOffset;
                submenu.css("left", -left + "px");
            } else {
                var right = bodyWidth - jQueryBuddha(li).offset().left - jQueryBuddha(li).outerWidth() - headerOffset;
                submenu.css("right", -right + "px");
            }
        } else {
            jQueryBuddha(li).find("ul.mm-submenu.mm-contact").css({
                "left": "auto",
                "right": "auto",
                "width": "auto",
                "height": "auto"
            });
            if (jQueryBuddha(li).find(">ul.mm-submenu.mm-contact").width() <= 480) {
                jQueryBuddha(li).find(">ul.mm-submenu.mm-contact").addClass("one-column");
            }
        }
    }

    function addTouch() { /* when touching outside close the submenu */
        touched = false;
        if (globalTouch) {
            jQueryBuddha("*").off("touchend.mm-all-dom-elements");
            jQueryBuddha("*").on("touchend.mm-all-dom-elements", function (e) {
                if (jQueryBuddha(this).closest(".buddha-menu-item").length == 0) {
                    jQueryBuddha(".mega-hover").removeClass("mega-hover");
                }
            });
        }
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item").off("touchend.mm-horizontal-li");
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item").on("touchend.mm-horizontal-li", function (e) {
            "use strict";
            var li = jQueryBuddha(this);
            if (li.find("ul.mm-submenu").length > 0) {
                if (li.hasClass("mega-hover")) {
                    return true;
                } else {
                    e.preventDefault();
                    jQueryBuddha(".mega-hover").removeClass("mega-hover");
                    li.addClass("mega-hover");
                    setSubmenuBoundries(li);
                    setContactSubmenuBoundries(li);
                    if (li.find(".tab-opened").length > 0) {
                        setTabbedSubmenuBoundries(li.find(".tab-opened"));
                    }
                    return false;
                }
            } else {
                return true;
            }
        });
        var elementTouched = false;
        jQueryBuddha(".vertical-mega-menu li").off("touchstart.mm-vertical-li");
        jQueryBuddha(".vertical-mega-menu li").on("touchstart.mm-vertical-li", function (e) {
            elementTouched = false;
        });
        jQueryBuddha(".vertical-mega-menu li").off("touchmove.mm-vertical-li");
        jQueryBuddha(".vertical-mega-menu li").on("touchmove.mm-vertical-li", function (e) {
            elementTouched = true;
        });
        jQueryBuddha(".vertical-mega-menu li").off("touchend.mm-vertical-li");
        jQueryBuddha(".vertical-mega-menu li").on("touchend.mm-vertical-li", function (e) {
            "use strict";
            if (!elementTouched) {
                elementTouched = true;
                setTimeout(function () {
                    elementTouched = false;
                }, 300);
                var li = jQueryBuddha(this);
                if (li.find("ul.mm-submenu").length > 0) {
                    if (li.hasClass("mm-hovering")) {
                        return true;
                    } else {
                        e.preventDefault();
                        if (li.find(">a>.toggle-menu-btn").length > 0) {
                            li.find(">a>.toggle-menu-btn").click();
                        } else if (li.find(">a>span>.toggle-menu-btn").length > 0) {
                            li.find(">a>span>.toggle-menu-btn").click();
                        }
                        return false;
                    }
                } else {
                    setTimeout(function () {
                        if (!changingPage) {
                            li.find("a").first().click();
                        }
                    }, 200);
                    return true;
                }
            }
        });
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item>ul.mm-submenu.tabbed>li").off("touchend.mm-tab");
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item>ul.mm-submenu.tabbed>li").on("touchend.mm-tab", function (e) {
            "use strict";
            var li = jQueryBuddha(this);
            if (li.find("ul.mm-submenu").length > 0) {
                if (li.hasClass("tab-opened")) {
                    return true;
                } else {
                    e.preventDefault();
                    li.parent().find(">li").removeClass("tab-opened");
                    li.addClass("tab-opened");
                    setTabbedSubmenuBoundries(li);
                    setSubmenuBoundries(li.parent().parent());
                    return false;
                }
            } else {
                return true;
            }
        });
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item>ul.mm-submenu.tree li").off("touchend.mm-tree");
        jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item>ul.mm-submenu.tree li").on("touchend.mm-tree", function (e) {
            "use strict";
            var li = jQueryBuddha(this);
            if (li.find("ul.mm-submenu").length > 0) {
                if (li.hasClass("mega-hover")) {
                    return true;
                } else {
                    e.preventDefault();
                    li.parent().find(">li").removeClass("mega-hover");
                    li.addClass("mega-hover");
                    li.find(".mega-hover").removeClass("mega-hover");
                    jQueryBuddha.each(li.parents(), function () {
                        if (jQueryBuddha(this).prop("tagName").toLowerCase() == "li") {
                            jQueryBuddha(this).addClass("mega-hover");
                        }
                    });
                    setSubmenuBoundries(li);
                    return false;
                }
            } else {
                return true;
            }
        });
    }

    function getUlPath(element) {
        var path, node = element;
        var firstNode = true;
        while (node.length) {
            var realNode = node[0], name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();
            var parent = node.parent();
            var nthChild = "";
            var sameTagSiblings = parent.children(name);
            if (sameTagSiblings.length > 1) {
                allSiblings = parent.children();
                var index = allSiblings.index(realNode) + 1;
                if (index > 0) {
                    nthChild = ":nth-child(" + index + ")";
                }
            }
            var idClass = "";
            ignoreClass = false;
            if (name != "body" && name != "html") {
                if (jQueryBuddha(realNode).prop("id").length > 0) {
                    idClass = "#" + realNode.id;
                } else if (jQueryBuddha(realNode).prop("class").length > 0 && !firstNode && !ignoreClass) { /* idClass = "."+realNode.className.trim().replace(/ /g, ".").replace(".is-light", "").replace(".is-dark", "").replace(".is-complete", "").replace(".is-processing", "").replace("..",".").replace("..",".").replace("..",".").replace("..",".").replace("..","."); idClass = idClass.replace(".DomOutlineBox", "").replace(".vertical-mega-menu", "").replace(".horizontal-mega-menu", ""); */
                    if (jQueryBuddha(realNode).attr("class") != undefined && jQueryBuddha(realNode).attr("class").trim() != "") {
                        idClass = "." + jQueryBuddha(realNode).attr("class").trim().split(" ")[0];
                    }
                }
            }
            if (jQueryBuddha.inArray(name, ["li", "ul", "header"]) !== -1) {
                name += nthChild;
            }
            /* name += nthChild; */
            firstNode = false;
            path = name + idClass + (path ? ">" + path : "");
            node = parent;
        }
        return path;
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}
if (typeof mmBeforeLoaded == "undefined") {
    var buddhaMegaMenuShop = "cop-room.myshopify.com";
    var mmBeforeLoaded = true;
    if (typeof InstantClick !== "undefined") {
        InstantClick.on("change", function (isInitialLoad) {
            if (!isInitialLoad) {
                ulPaths = [];
                storeUlCount = 0;
                storeNavCount = 0;
                if (typeof loadBuddhaMegaMenu !== "undefined") {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function () {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        });
    }
    var hideOriginalMenuInterval;

    function hideOriginalMenu() {
        hideOriginalMenuInterval = setInterval(function () {
            menu = "main-menu";
            var links = [];
            jQueryBuddha.each(linkLists, function (key, item) {
                if (menu == key) {
                    links = item.items;
                    return false;
                }
            });
            if (menu != "none" && links.length > 0) {
                jQueryBuddha("ul,nav").each(function () {
                    var elementFits = 0;
                    jQueryBuddha(this).find(">li").each(function () {
                        var href = jQueryBuddha(this).find("a").first().attr("href");
                        /*if (typeof href !== "undefined") { href = href.replace("http://"+buddhaMegaMenuShop,"").replace("https://"+buddhaMegaMenuShop,""); }*/
                        if (links[elementFits] != undefined && href == links[elementFits]) {
                            elementFits++;
                        } else if (elementFits > 0 && elementFits != links.length) {
                            elementFits = 0;
                            if (href == links[0]) {
                                elementFits = 1;
                            }
                        }
                    });
                    if (elementFits > 0 && elementFits == links.length) {
                        jQueryBuddha(this).addClass("buddha-disabled-menu");
                    }
                    jQueryBuddha("#SiteNav").addClass("buddha-disabled-menu");
                });
            }
        }, 1);
    }

    setTimeout(function () {
        jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
        clearInterval(hideOriginalMenuInterval);
    }, 3000);

    function loadJqueryBuddha() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var data = xhr.responseText;
                jQueryBuddha = data.replace(/jQuery/g, 'jQueryBuddha');
                eval(jQueryBuddha);
                if (typeof jQuery !== 'undefined') {
                    $ = jQuery.noConflict();
                }
                if (typeof hideOriginalMenu != 'undefined') {
                    hideOriginalMenu();
                }
                if (typeof loadBuddhaMegaMenu !== 'undefined') {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function () {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        };
        xhr.open('GET', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', true);
        xhr.send(null);
    }

    if (typeof jQuery == 'undefined') {
        loadJqueryBuddha();
    } else {
        var vernums = jQuery.fn.jquery.split('.');
        if ((parseInt(vernums[0]) == 1 && parseInt(vernums[1]) >= 7) || parseInt(vernums[0]) > 1) {
            var jQueryBuddha = jQuery;
            if (typeof hideOriginalMenu != 'undefined') {
                hideOriginalMenu();
            }
            if (typeof loadBuddhaMegaMenu !== 'undefined') {
                loadBuddhaMegaMenu();
            } else {
                setTimeout(function () {
                    loadBuddhaMegaMenu();
                }, 1000);
            }
        } else {
            loadJqueryBuddha();
        }
    }
}
;
var subTog = false;
link_list = document.getElementsByClassName("buddha-menu-item drawer__nav-item")
for (i = 0; i < link_list.length; i++) {
    console.log(link_list[i]);
    link_list[i].setAttribute("onClick", "developMenu(event)");

    console.log(link_list[i]);
}
link_list2 = document.getElementsByClassName("drawer__nav-link")
for (i = 0; i < link_list[2].length; i++) {
    console.log(link_list2[i]);
    link_list2[i].removeAttribute("href");
    link_list2[i].removeAttribute("data-href");
    console.log(link_list2[i]);
}

function developMenu(event) {
    console.log(event.target)
    console.log(event.target.getElementsByTagName('ul')[0])
    elt = event.target.getElementsByTagName('ul')[0]
    console.log('ok')
    if (elt.getAttribute("style") == "display:none!important") {
        elt.setAttribute("style", "display:block!important");
    }
    else {
        elt.setAttribute("style", "display:none!important");
    }
}